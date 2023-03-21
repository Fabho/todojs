import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
function ToDoList(props) {
  return (
   <div>
      <List>
        {props.toDos.map((dats) => (
        <ListItem key={dats.id}  style={{display:'flex', justifyContent:'flex-start'}}>
         
          {
            props.toEdit===dats.id ?
              (<input type="text" onChange={(e)=>props.textEdit(e.target.value)} defaultValue={dats.content}/>) : 
              (<val style={{marginRight: '80px'}} >{dats.content}</val>)
          } 
         
         
        <IconButton onClick={()=>{props.setter(props.toDos.filter(a=> a.id!==dats.id))}}  >
          <DeleteIcon  />
        </IconButton>
        
        {
          props.toEdit===dats.id ?
            ( <><Button onClick={()=>props.editTo(dats.id)}>Submit</Button> <Button onClick={props.cancel}>Cancel</Button></>):
            (<IconButton onClick={()=>props.edit(dats.id)}><EditIcon /></IconButton>)
        }
        </ListItem>
         ))}
        
      </List>
      
   </div>
  );
}
export default ToDoList;