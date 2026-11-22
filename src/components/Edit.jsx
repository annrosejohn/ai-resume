import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Paper, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxHeight: '85vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};


export default function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
     <Box sx={{textAlign: 'center'}}>
      <Button onClick={handleOpen}  sx={{color:'#795548'}}><EditIcon/>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb:"40px",bgcolor:"#795548",color:'white',p:2}}>
            Edit resume details
          </Typography>
          
          <Box id="modal-modal-description"  elevation={4} sx={{width:"100%",padding:2,borderRadius:3,alignItems:'center'}}>
        <Typography variant='h5'>Personal Details</Typography>
        <TextField sx={{width:"100%"}} id="standard-basic" label="Full Name" variant="standard" /><br/>
        <TextField sx={{width:"100%"}} id="standard-basic" label="Location" variant="standard" /><br/>
        <TextField sx={{width:"100%"}} id="standard-basic" label="Choose Job Title" variant="standard" />
         <Typography variant='h5' sx={{mt:'20px'}}>Contact details</Typography>
         <TextField sx={{width:"100%"}} id="standard-basic" label="Email" variant="standard" /><br/>
                 <TextField sx={{width:"100%"}} id="standard-basic" label="Contact Number" variant="standard" /><br/>
                 <TextField sx={{width:"100%"}} id="standard-basic" label="Linkedin Link" variant="standard" /><br/>
                 <TextField sx={{width:"100%"}} id="standard-basic" label="Github Link" variant="standard" />
                 <Typography variant='h5' sx={{mt:'20px'}}>Education Details</Typography>
                 <TextField sx={{width:"100%"}} id="standard-basic" label="Bachelor's Degree" variant="standard" /><br/>
                         <TextField sx={{width:"100%"}} id="standard-basic" label="College/University Name" variant="standard" /><br/>
                         <TextField sx={{width:"100%"}} id="standard-basic" label="Year of Graduation" variant="standard" />
                         <Typography variant='h5' sx={{mt:'20px'}}>Skills</Typography>
                         <Stack direction={"row"}>
                          <TextField sx={{width:"100%"}} id="standard-basic" label="Add new Skill" variant="standard" /><Button>ADD</Button>
                         </Stack>
                         <Typography variant='h6' sx={{mt:'20px'}}>Added Skills:</Typography>
                         <Box sx={{display:"flex",gap:3,padding:1}}>
        <h4>HTML</h4>
        <h4>CSS</h4>
        
      </Box>
      <Box>
        <h2>Technical Skills</h2>
          <Stack direction="row" spacing={2}>
            <Button sx={{color:'black'}}>Adobe Photoshop</Button>
            <Button sx={{color:'black'}}>Adobe Illustrator</Button>
            <Button sx={{color:'black'}}>Typography</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button sx={{color:'black'}}>Logo Design</Button>
            <Button sx={{color:'black'}}>Layout Design</Button>
            <Button sx={{color:'black'}}>Color Theory</Button>
            <Button sx={{color:'black'}}>Image Editing</Button>
          </Stack>
      </Box>
      <Typography variant='h5' sx={{mt:'20px'}}>Summary</Typography>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem voluptates animi excepturi rem alias officiis reprehenderit soluta voluptas aspernatur, harum nisi pariatur dolorum fugiat reiciendis ad eum, error sit doloremque!</p>
      
     <Button variant="contained" sx={{bgcolor:'#795548'}}>Update CV</Button>
                         
      </Box>
        </Box>
      </Modal>
    </Box>
  )
}
