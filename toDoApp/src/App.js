import {useState} from 'react';
import TextFieldToDo from './components/TexFieldToDo';
import ToDoList from './components/ToDoList';
import Stack from '@mui/material/Stack';
let nextId = 1;
function App(){
    const [toDo, setToDo] = useState([]);
    const [work, setWork] = useState("");
    const [toDoEditing,setToDoEditing]=useState(null);
    const [editingText,setEditingText]=useState("");
    function handleClick() {
        const obj = { id: nextId++, content: work };
        const newAct = [...toDo, obj];
        setToDo(newAct);
        setWork("");
    }
    const handleForm = (act) => {
        setWork(act);
    };
    function editToDo(a){
        const updateToDo=[...toDo].map((todo)=>{
            if(todo.id===a){
                todo.content=editingText
            }
            return todo;
        });
        setToDo(updateToDo);
        setToDoEditing(null);
        
    }
    const handleCancel=(a)=>{
        const updateToDo=[...toDo].map((todo)=>{
            if(todo.id===a){
                todo.text=editingText
            }
            return todo;
        });
        setToDo(updateToDo);
        setToDoEditing(null)
    }
    return( 
        <div>
            <Stack alignItems="center">
                <TextFieldToDo form={handleForm} click={handleClick}/>
                <ToDoList 
                toDos={toDo} 
                setter={setToDo} 
                edit={setToDoEditing} 
                toEdit={toDoEditing} 
                textEdit={setEditingText} 
                setText={editingText} 
                editTo={editToDo} 
                cancel={handleCancel}/>
             </Stack>
        </div>
    );
   
}   
export default App;