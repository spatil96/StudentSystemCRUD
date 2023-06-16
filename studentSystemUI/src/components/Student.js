import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import { Container } from '@mui/material';

export default function BasicTextFields() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [students, setStudents] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    const student = { name, address }
    console.log(student)
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)

    }).then(() => {
      console.log("New Student added")
    })
  }

  useEffect(() => {
    fetch("http://localhost:8080/student/getAllStudents")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      }
      )
  }, [])
  return (

    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
      <form>
          <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>

      </Paper>
      <h1>Students</h1>

      <Paper elevation={3} style={paperStyle}>

        {students.map(student => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
            Id:{student.id}<br />
            Name:{student.name}<br />
            Address:{student.address}

          </Paper>
        ))
        }
      </Paper>
    </Container>
  );
}