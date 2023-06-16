import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';

export default function BasicTextFields() {
  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ><Container>
    <Paper elevation={3} style={paperStyle}>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" />
      </Paper></Container>
    </Box>
    
  );
}
