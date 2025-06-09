
export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string,
): boolean => {
  let nameList = [];
 
  for(let i =0; i < root.children.length; i++ ){
    if(root.children[i]){
      nameList.push(root.children[i].name);
      console.log(nameList);
      depthFirstSearch(root.children[i],target);
    }
  }
  console.log(nameList);
};
