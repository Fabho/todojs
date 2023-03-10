import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
function ToDoList(props) {
  return (
   <div>
      <ul>
        {props.toDos.map((dats) => (
        <li key={dats.id}>
          {
            props.toEdit===dats.id ?
              (<input type="text" onChange={(e)=>props.textEdit(e.target.value)} value={props.setText}/>) : 
              (<>{dats.content}</>)
          } 
        <Button onClick={()=>{props.setter(props.toDos.filter(a=> a.id!==dats.id))}} >
          <Icon spacing={7}>delete</Icon>
        </Button>
        {
          props.toEdit===dats.id ?
            ( <><Button onClick={()=>props.editTo(dats.id)}>Submit</Button> <Button onClick={props.cancel}>Cancel</Button></>):
            (<Button onClick={()=>props.edit(dats.id)}><Icon>edit</Icon></Button>)
        }
        </li>
         ))}
      </ul>
   </div>
  );
}
export default ToDoList;