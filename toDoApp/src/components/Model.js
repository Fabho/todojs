import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function MediaCard() {
  return (
    <Box  display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Card sx={{ maxWidth: 345 }}>
    <CardActions>
        <TextField id="outlined-basic"  variant="outlined" />
        <Button variant="contained">add</Button>
    </CardActions>
    <CardActions>
        <ul>
            <Grid container justifyContent="flex-end">Pasear perro<Button variant="text"><Icon>add_circle</Icon></Button><Button><Icon>remove</Icon></Button></Grid>
            <Grid container justifyContent="flex-end">Tomar medicamento<Button variant="text"><Icon>add_circle</Icon></Button><Button><Icon>remove</Icon></Button></Grid>
            <Grid container justifyContent="flex-end">Hacer ejercicio<Button variant="text"><Icon>add_circle</Icon></Button><Button><Icon>remove</Icon></Button></Grid>
        </ul>
    </CardActions>
    </Card>
    </Box>
  );
}