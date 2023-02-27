import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
function ToDoList(props) {
  return (
   <div>
      <ul>
        {props.toDos.map((dats) => (
        <li key={dats.id}>{dats.content}<Button ><Icon spacing={7}>delete</Icon></Button></li>
         ))}
      </ul>
   </div>
  );
}
export default ToDoList;