import {useState} from 'react';
import TextFieldToDo from './components/TexFieldToDo';
import ToDoList from './components/ToDoList';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

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
            <Box 
            margin='auto'>

                    <Stack alignItems="center">
                        <AppBar position="static">
                            
                            <Toolbar>
                                <IconButton>
                                <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 20 }}>
                                    <p align="center">To Do List js</p>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <br/>
                        <TextFieldToDo acts={work} form={handleForm} click={handleClick}/>
                        <br/>
                    
                        <ToDoList 
                         toDos={toDo} 
                         setter={setToDo} 
                         edit={setToDoEditing} 
                         toEdit={toDoEditing} 
                         textEdit={setEditingText} 
                         setText={editingText} 
                         editTo={editToDo} 
                         cancel={handleCancel}
                         dos={work}
                         />
                        
                    </Stack>
            </Box>
        </div>
    );
   
}   
export default App;