import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'



export default function Preview({resumeDetails}) {
  return (
    <div>
      <Paper  elevation={24} sx={{width:750,mt:"40px",padding:4,borderRadius:3,boxShadow:4}}>
        <h1>{resumeDetails.name}</h1>
      <Typography variant='p'>Phone: {resumeDetails.contactNumber}</Typography><br /><br />
      <Typography variant='p'>Email: {resumeDetails.email}</Typography><br /><br />
      <Typography variant='p'>Linkedin: {resumeDetails.linkedIn}</Typography><br /><br />
      <Typography variant='p'>Github: {resumeDetails.gitHub}</Typography><br /><br />
      <Typography variant='p'>Location: {resumeDetails.location}</Typography>
      <hr/>
      <Typography variant='h5'>Professional Summary</Typography>
      <Typography >
        {
        resumeDetails.summary
      }
      </Typography>
      
      <hr/>
      <Typography variant='h5'>Technical Skills</Typography>
      {
        resumeDetails?.skill?.map(item =>(
        <Button key={item}>
          {item}
          </Button>))
      }
      <hr/>
      <Typography variant='h5'>Education</Typography>
      <Typography variant='p'> {resumeDetails.degree}</Typography><br /><br />
      <Typography variant='p'>College/University Name: {resumeDetails.college}</Typography><br /><br />
      <Typography variant='p'>Graduation Year: {resumeDetails.year}</Typography>

      </Paper>
      
    </div>
  )
}
