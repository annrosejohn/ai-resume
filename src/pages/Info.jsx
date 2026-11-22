import { Box, Stack } from '@mui/material'
import React, { useState } from 'react'
import ResumeInput from '../components/ResumeInput'
import Preview from '../components/Preview'





export default function Info() {
  const [resumeDetails,setresumeDetails]=useState({
      name:"",
      location:"",
      jobTitle:"",
      email:"",
      contactNumber:"",
      linkdedIn:"",
      gitHub:"",
      degree:"",
      college:"",
      year:"",
      skill:[],
      summary:""
    })
  console.log(resumeDetails);

  return (
    <div>
      <Stack sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:"row",flexWrap:"wrap"}}>
        <Box sx={{width:"50%"}}><ResumeInput resumeDetails={resumeDetails} setresumeDetails={setresumeDetails}/></Box>
        <Box sx={{width:"50%"}}><Preview resumeDetails={resumeDetails}/></Box>
      </Stack>
    </div>
  )
}
