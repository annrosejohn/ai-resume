import React, { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Preview from '../components/Preview';
import { Height } from '@mui/icons-material';
import { Box, Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import HomeIcon from '@mui/icons-material/Home';
import Edit from '../components/Edit';
import { useParams } from 'react-router-dom';
import { viewResumeAPI } from '../services/apiServices';

export default function View() {
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

  const params = useParams()
  console.log(params);
  const {id}= useParams()
  console.log(id);
  
  

const getAResume=async(id)=>{
try{
const response=await viewResumeAPI(id)
console.log(response);

}
catch(err){
console.log(err);
}
}

useEffect(() => {
  getAResume(id)
},[])

  return (
    <div>
      <Stack spacing={2} direction="row" sx={{justifyContent:"center",mt:'30px'}} >
      <Button variant="text" sx={{color:'#795548'}}><DownloadIcon/>Download CV</Button>
      <Box> <Edit/> </Box>
      <Button variant="text" sx={{color:'#795548'}}><HomeIcon/>Home</Button>
    </Stack>
    <Paper elevation={0}  sx={{width:"100%",p:1.5,pb:0.5,justifyContent:'center',display:'flex'}}>
      <Preview resumeDetails={resumeDetails}/>
      {/* <Preview/> */}
    </Paper>
      
    </div>
  )
}
