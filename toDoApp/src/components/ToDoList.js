import Button from '@mui/material/Button';


import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
function ToDoList(props) {
  return (
   <div>
      <ul>
        {props.toDos.map((dats) => (
        <div key={dats.id}  style={{display:'flex', justifyContent:'space-between',alignItems: 'center'}}>
         <div>
          {
            props.toEdit===dats.id ?
              (<input type="text" onChange={(e)=>props.textEdit(e.target.value)} defaultValue={dats.content}/>) : 
              (<val style={{alignItems: "center",marginRight: '90px'}} >{dats.content}</val>)
          } 
         </div>
         <div>
        <IconButton onClick={()=>{props.setter(props.toDos.filter(a=> a.id!==dats.id))}}  >
          <DeleteIcon  />
        </IconButton>
        
        {
          props.toEdit===dats.id ?
            ( <><Button onClick={()=>props.editTo(dats.id)}>Submit</Button> <Button onClick={props.cancel}>Cancel</Button></>):
            (<IconButton onClick={()=>props.edit(dats.id)}><EditIcon /></IconButton>)
        }
        </div>
        </div>
         ))}
        
      </ul>
      
   </div>
  );
}
export default ToDoList;