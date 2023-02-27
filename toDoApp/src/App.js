import {useState} from 'react';
import TextFieldToDo from './components/TexFieldToDo';
import ToDoList from './components/ToDoList';
import Stack from '@mui/material/Stack';
let nextId = 1;
function App(){
    const [toDo, setToDo] = useState([]);
    const [work, setWork] = useState("");
    function handleClick() {
        const obj = { id: nextId++, content: work };
        const newAct = [...toDo, obj];
        setToDo(newAct);
        setWork("");
    }
    const handleForm = (act) => {
        setWork(act);
    };
    return( 
        <div>
            <Stack alignItems="center">
                <TextFieldToDo form={handleForm} click={handleClick}/>
                <ToDoList toDos={toDo}/>
             </Stack>
        </div>
    );
   
}   
export default App;