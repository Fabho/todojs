import ToDoList from "./components/ToDoList";
import TexFieldToDo from "./components/TexFieldToDo";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
function App(){
    let data=[
        {
            id:1,
            content:"lavar gato"},
        {
            id:2,
            content:"pasear perro"
        },
        {
            id:3,
            content:"dormir"
        },
        {
            id:4,
            content:"comer"
        }
    ];

    return( 
        <div>
            <Box  justifyContent="center" alignItems="center" minHeight="100vh">
                <Card  justify content="center" sx={{ maxWidth: 345 }}>
                    <CardActions>
                        <Grid container justifyContent="center">
                            <TexFieldToDo/>
                        </Grid>
                    </CardActions>
                    <CardActions>
                        <Grid container justifyContent="right">
                            <ToDoList todos={data}/>
                        </Grid>
                     </CardActions>
                </Card>
            </Box>
            
               
            
        </div>
    );
   
}   
export default App;