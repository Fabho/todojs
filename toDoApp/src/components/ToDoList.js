import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
function ToDoList(props) {
  return (
   <div>
      <ul>
        {props.toDos.map((dats) => (
        <li key={dats.id}>
          {
            props.cuatro===dats.id ?
              (<input type="text" onChange={(e)=>props.cinco(e.target.value)} value={props.seis}/>) : 
              (<>{dats.content}</>)
          } 
        <Button onClick={()=>{props.setter(props.toDos.filter(a=> a.id!==dats.id))}} >
          <Icon spacing={7}>delete</Icon>
        </Button>
        {
          props.cuatro===dats.id ?
            ( <><Button onClick={()=>props.siete(dats.id)}>Submit</Button> <Button onClick={props.ocho}>Cancel</Button></>):
            (<Button onClick={()=>props.tres(dats.id)}><Icon>edit</Icon></Button>)
        }
        </li>
         ))}
      </ul>
   </div>
  );
}
export default ToDoList;