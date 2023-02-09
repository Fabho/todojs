import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
function ToDoList({todos}) {
  const work=()=>{
    let list=todos.map((item)=>{
      return<div key={item.id}>
        {item.content}
        <Button ><Icon spacing={7}>delete</Icon></Button>
        </div>;
    });
    return<div>{list}</div>;
  }
  return (
   <div>
    
     {work()}
   </div>
  );
}
export default ToDoList;