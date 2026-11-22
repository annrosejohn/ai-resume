import { Button, Container, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteResumeAPI, displayResumeAPI } from '../services/apiServices';


 

export default function Saved() {
  const [allResume, setAllResume ]=useState([])
  const getAllResume=async()=>{
try{
const response=await displayResumeAPI()
console.log(response);
setAllResume(response.data)
}
catch(err){
console.log(err);
}
}

useEffect(()=>{
getAllResume()
},[])


const deleteResume=async(id)=>{
try{
const response =await deleteResumeAPI(id)
console.log(response)
if(response.status==200){
  alert("delete successful")
  getAllResume()
}


}catch(err){
console.log(err);

}

}
  return (
    <div>
      <Container>
      <Typography variant='h3'
      sx={{textAlign:'center',mt:'40px',mb:"10px"}}>
         All Saved Resumes
      </Typography>
      <Typography variant='p'
      sx={{textAlign:"center"}}>
         Easily access and manage all your created resumes in one place.
  View your saved resumes anytime, make necessary updates and keep
  your professional documents organized for future opportunities.
      </Typography>
      <br />
      <TextField placeholder='Enter Job Title' sx={{width:'100%',my:'10px',position:"relative",mt:'50px'}} size='small'/>
      <SearchIcon sx={{position:"absolute",right:"300px",top:"275px"}}/>
      <Typography variant='h5' sx={{textAlign:"center",mt:'50px'}}>Resume Details</Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,mt:'50px'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Resume</TableCell>
            <TableCell align="right">Job Role</TableCell>
            <TableCell align="right">.....</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
           {
        allResume.length>0?
        allResume.map(item =>(
           

            

<TableRow key={item.id} sx={{'&:last-child td, &:last-child th': { border: 0 } }}>

             <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right"><Link to={`/resume/${item.id}`}>{item.name}</Link></TableCell>
            <TableCell align="right">{item.jobTitle}</TableCell>
            <TableCell align="right"><Button onClick={() => deleteResume(item.id)} sx={{color:'white', backgroundColor:'red'}}>Delete</Button></TableCell>
</TableRow>

        )).reverse()
        :<TableRow>
    <TableCell colSpan={4} align="center">
      No Data
    </TableCell>
  </TableRow>
      }
        </TableBody>
      </Table>
    </TableContainer>
</Container>
    </div>
  )
}