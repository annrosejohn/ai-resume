import React from 'react'
import { Box } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <div>
     <Box sx={{ bgcolor:'#222',color:'white',p:3,marginTop:'60px',padding:'45px 70px 20px'}}  >
  <Box style={{display:"flex",justifyContent:"space-between",gap:6,flexWrap:'wrap',marginBottom:4}} >
    <div style={{width:"55%"}}><h3>AI Resume Builder</h3>
      <p>Build a professional resume that makes you stand out.
  Our AI-powered resume builder helps you create ATS-friendly
  resumes with ease, giving you the confidence to take the
  next step in your career. With an easy-to-use interface and AI-powered features, users can
  create well-structured and ATS-friendly resumes that highlight
  their skills, qualifications and experience.

  Whether you are a student, fresher or experienced professional,
  our goal is to help you present your strengths effectively and
  take the next step towards your dream career.</p>
      
     </div>
     <div style={{width:"30%"}}>
      <h2>Contact Us</h2>
      <h5 style={{display:"flex",alignItems:"center",gap:"10px"}}><EmailIcon/>resumebuilder@gamil.com</h5>
      <h5 style={{display:"flex",alignItems:"center",gap:"10px"}}><PhoneIcon/>9511129170</h5>
     </div>
  </Box>
</Box>
    </div>
  )
}
