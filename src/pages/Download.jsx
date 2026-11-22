import { Button, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React from 'react'

export default function Download() {
  return (
    <div>
      <Stack>
     <Typography variant='h5'
      sx={{display: "flex",
    justifyItems: "center",
    alignItems: "center", margin:"20px"}}>
      All Downloaded Resume Details
        <Button variant='contained'
     sx={{backgroundColor: "#85604E",
                textTransform: "none",width:'10%',ml:"10px"}}>
                  View in Chart</Button>
                   </Typography>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          p:5,
          width: 328,
          height: 528,
        },
      }}
    >
     <Paper>   <Typography fontWeight="bold" fontSize="13px">
      Aarav Sharma
    </Typography>

    <Typography fontSize="8px">
      Phone: 8976543210
    </Typography>

    <Typography fontSize="8px">
      Email: arav@gmail.com
    </Typography>

    <Typography fontSize="8px">
      LinkedIn: linkedin.com/in/aaravsharma
    </Typography>

    <Typography fontSize="8px">
      Github: github.com/aaravsharma
    </Typography>

    <Typography fontSize="8px">
      Location: Pune, India
    </Typography>
        <hr />
          <Typography fontWeight="bold" fontSize="11px">
      Professional Summary
    </Typography>

    <Typography fontSize="8px">
      Node.js developer experienced in building scalable backend
      services and REST APIs. Skilled in server-side development
    
    </Typography>

    <hr />
        <Typography fontWeight="bold" fontSize="11px">
      Technical Skills
    </Typography>

    <Typography fontSize="8px">
      NODE.JS &nbsp; EXPRESS.JS &nbsp; REST API &nbsp; MONGODB
      &nbsp; AUTHENTICATION &nbsp; GIT
    </Typography>

    <hr />

    <Typography fontWeight="bold" fontSize="11px">
      Education
    </Typography>

    <Typography fontSize="8px">
      Bachelor's Degree in B Tech in Computer Science
    </Typography>

    <Typography fontSize="8px">
      University: SRM Institute of Science and Technology
    </Typography>

    <Typography fontSize="8px">
      Year of Graduation: 2021
    </Typography>


     </Paper>
<Paper>   <Typography fontWeight="bold" fontSize="13px">
      Alexia Monte
    </Typography>

    <Typography fontSize="8px">
      Phone: 8976543210
    </Typography>

    <Typography fontSize="8px">
      Email: alexia@gmail.com
    </Typography>

    <Typography fontSize="8px">
      LinkedIn: linkedin.com/in/alexia-monte
    </Typography>

    <Typography fontSize="8px">
      Github:  github.com/alexiamonte
    </Typography>

    <Typography fontSize="8px">
      Location:  Canary Islands, Italy
    </Typography>
        <hr />
          <Typography fontWeight="bold" fontSize="11px">
      Professional Summary
    </Typography>

    <Typography fontSize="8px">
      Data scientist with expertise in machine learning, statistical analysis, and predictive modeling. Skilled in transforming large datasets into actionable insights.
    
    </Typography>

    <hr />
        <Typography fontWeight="bold" fontSize="11px">
      Technical Skills
    </Typography>

    <Typography fontSize="8px">
      Python &nbsp; Machine Learning &nbsp; Statistics &nbsp; Data Visualization &nbsp; Pandas &nbsp; NumPy &nbsp; Deep Learning &nbsp; Model Evaluation &nbsp; Data Warehousing &nbsp; SQL &nbsp; GIT
    </Typography>

    <hr />

    <Typography fontWeight="bold" fontSize="11px">
      Education
    </Typography>

    <Typography fontSize="8px">
      Master of Buisiness Administration
    </Typography>

    <Typography fontSize="8px">
      University: Boston University
    </Typography>

    <Typography fontSize="8px">
      Year of Graduation: 2025
    </Typography>


     </Paper>

      <Paper>   <Typography fontWeight="bold" fontSize="13px">
      Karthik Rajan
    </Typography>

    <Typography fontSize="8px">
      Phone: 9996543210
    </Typography>

    <Typography fontSize="8px">
      Email: karthik@gmail.com
    </Typography>

    <Typography fontSize="8px">
      LinkedIn:  linkedin.com/in/karthikrajan
    </Typography>

    <Typography fontSize="8px">
      Github:  github.com/karthikraj
    </Typography>

    <Typography fontSize="8px">
      Location: Kerala, India
    </Typography>
        <hr />
          <Typography fontWeight="bold" fontSize="11px">
      Professional Summary
    </Typography>

    <Typography fontSize="8px">
   Data scientist with expertise in machine learning, statistical analysis, and predictive modeling. Skilled in transforming large datasets into actionable insights.
    
    </Typography>

    <hr />
        <Typography fontWeight="bold" fontSize="11px">
      Technical Skills
    </Typography>

    <Typography fontSize="8px">
      Python &nbsp; Machine Learning &nbsp; Statistics &nbsp; Data Visualization &nbsp; Panda &nbsp; NumPy &nbsp; Deep Learning &nbsp; Model Evaluation &nbsp; Data Warehousing &nbsp; SQL &nbsp; GIT
    </Typography>

    <hr />

    <Typography fontWeight="bold" fontSize="11px">
      Education
    </Typography>

    <Typography fontSize="8px">
      Masters in Computer Application
    </Typography>

    <Typography fontSize="8px">
      Boston University
    </Typography>

    <Typography fontSize="8px">
      Year of Graduation: 2024
    </Typography>


     </Paper>
    </Box>
    
   
                  
     </Stack>
     
    </div>
  )
}