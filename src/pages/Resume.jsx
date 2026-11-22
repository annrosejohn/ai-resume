import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));


export default function Resume() {
  return (
    <div>
     <h1 style={{textAlign:"center",marginBottom:"40px"}}>Create an ATS friendly resume in minutes with AI</h1>
     <Stack direction="row" spacing={30} sx={{justifyContent:"center",alignItems:"center",marginBottom:"60px"}}>
      <DemoPaper square={false} sx={{width:300,height:250}}><FileCopyIcon sx={{fontSize:60,color:"blue"}} ></FileCopyIcon><h3>Add your details</h3><p>Our AI will generate skills and summary</p><h3>Step 1</h3></DemoPaper>
      <DemoPaper square={false} sx={{width:300,height:250}}><FileDownloadIcon sx={{fontSize:60,color:"red"}} ></FileDownloadIcon><h3>Download your resume</h3><p>Download CV as pdf and start applying</p><h3>Step 2</h3></DemoPaper>
    </Stack>
    <Stack direction="row"  sx={{mb:5,justifyContent:"center",alignItems:"center"}}>
      <Link to={'/resume-details'}><Button variant="contained" sx={{backgroundColor: '#6a4c3e' }}>LET'S START</Button></Link>
  
</Stack>
    </div>
  )
}
