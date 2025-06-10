
// export interface FileSystemNode {
//   name: string;
//   isDirectory: boolean;
//   children: FileSystemNode[];
// }

// export const depthFirstSearch = (
//   root: FileSystemNode,
//   target: string,
// ): boolean => {
//   let nameList = [];
 
//   for(let i =0; i < root.children.length; i++ ){
//     if(root.children[i]){
//       nameList.push(root.children[i].name);
//       console.log(nameList);
//       depthFirstSearch(root.children[i],target);
//     }
//   }
//   console.log(nameList);
// };

export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string,
): boolean => {

  const nameList = [];
  const dirList = [root];

  while (dirList.length > 0) {
    const _dir = dirList.pop();
    if (_dir === undefined) {
      break;
    }

    if (_dir.isDirectory) {
      // サブディレクトリがファイルなら名前をプッシュ
      // ディレクトリならそのものをプッシュ
      for (let i = 0; i < _dir.children.length; i++) {
        if (_dir.children[i].isDirectory) {
          dirList.push(_dir.children[i]);
        } else {
          nameList.push(_dir.children[i].name);
          // ファイル名がターゲットに一致するかどうか
          if (_dir.children[i].name === target) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
