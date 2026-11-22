import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import banner from './banner.png'
import image from './image.png'


const itemData = [
  {
    img: 'https://i.pinimg.com/736x/fd/7c/c8/fd7cc87203ec45fa14ed38a65861b3a9.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://i.pinimg.com/736x/60/69/f4/6069f45885201696652542b164126cf9.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.pinimg.com/1200x/92/c4/c7/92c4c72306958227d9703b36d7b98285.jpg',
    title: 'Camera',
  },
  {
    img: 'https://i.pinimg.com/1200x/5d/af/e4/5dafe44e1fb472b8db33e6f27236a6b0.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i.pinimg.com/736x/28/be/04/28be04b72f103d377e4180196b797e10.jpg',
    title: 'Hats',
  },
  {
    img: 'https://i.pinimg.com/1200x/83/3e/02/833e02931458bc0208eeb57bc681d73f.jpg',
    title: 'Honey',
  },
 
  
  {
    img: 'https://i.pinimg.com/736x/85/e8/7b/85e87b72f7eb05fbe49ef473c3e50053.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://i.pinimg.com/736x/20/33/41/203341b46738df7caf0cfbc09fc8610b.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://i.pinimg.com/236x/f0/a6/70/f0a670bab5ae924f530bddfa1431a5d0.jpg',
    title: 'Bike',
  },
];

export default function Home() {
  return (
    <div>
      <section style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),url(${banner})`, width:"100%",height:"700px",backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover", display:"flex", justifyContent: "center",alignItems: "center"}}>

      <h1 style={{color: "white", fontSize: "50px",textAlign:"center", backgroundColor:"rgba(0,0,0,0.6)",borderRadius:"10px",padding:"50px"}}>
        Designed to get hired.<br></br>Your Skills,Your Story<br></br>Your Next job-All in one <br></br>
        
        <Link to={'/resume'}><button style={{backgroundColor: "#754c3d",color:"white",padding:"10px",border:"#795548"}}>Make your resume with AI</button></Link>
    </h1>
    
      </section>

      <section>
        <h1 style={{textAlign:"center",marginBottom:"40px"}}>Whats AI RESUME BUILDER?</h1>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"70px",margin:"20px"}}>
          <div style={{width:"65%"}}><p> Creating a professional resume is an important step towards building a successful career. 
  Our AI Resume Builder makes the process easier by helping you organize your personal 
  information, educational qualifications, technical skills, work experience and projects 
  into a well-structured resume. Whether you are a student, fresher or experienced 
  professional, you can create a resume that highlights your strengths and qualifications.</p>
          <p> With an easy-to-use interface and customizable resume templates, you can build, 
  preview and personalize your resume in just a few steps. Create a clean, professional 
  and ATS-friendly resume that presents your skills effectively and helps you make 
  a strong first impression on recruiters. Spend less time formatting and more time 
  preparing for your next career opportunity.</p><p>
  Our AI Resume Builder is designed to make this process simple and convenient.
  It helps you create a professional resume by organizing your personal details,
  educational qualifications, technical skills, projects, certifications and
  work experience into a structured format. You can enter your information
  step by step without worrying about complicated formatting.
</p>

<p>
  Choose from professionally designed templates and customize your resume
  according to your preferences. Preview your details as you build, make
  changes whenever needed and create a resume that highlights your strengths.
  Our platform focuses on clean layouts, readable content and ATS-friendly
  formatting to help your resume meet modern recruitment standards.
</p>
<p>
  Building a professional resume is one of the most important steps in starting
  or advancing your career. A resume is more than just a document; it is a
  reflection of your skills, education, experience and achievements. However,
  creating a well-organized resume that stands out to recruiters can be
  challenging, especially for students and fresh graduates.
</p></div>
          <div style={{width:"30%"}}><img style={{width:"75%",height:"500px",objectFit:"cover",borderRadius:"10px"}} src="https://i.pinimg.com/1200x/0d/fd/b2/0dfdb2da12be6d0f113caf1e130a02cc.jpg" alt="" /></div>
        </div>
      </section>

      <section>
        <img src={image} style={{width:"100%",height:"600px",overflow:"hidden", objectFit:"cover",
      display:"block"}} alt="" />
      </section>

      <section>
        <h1 style={{textAlign:"center",marginBottom:"40px"}}>Testimony</h1>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"70px",margin:"20px"}}>
          <div style={{width:"55%"}}>
            <p>
  Creating a professional resume has always been one of the most challenging parts of applying for a job, especially when trying to present all my qualifications, skills and experiences in the right way. As a fresher, I often struggled with choosing the correct format, organizing my educational details and highlighting my projects effectively. This AI Resume Builder made the entire experience much easier and more convenient. The platform provides a simple way to enter personal information, add technical skills, include academic projects and organize everything into a well-structured resume. I particularly liked the ability to preview my resume while making changes, which helped me understand how the final document would look. The templates are clean, professional and easy to customize according to different preferences. Another thing I appreciated was how the platform helped reduce the time spent on formatting and arranging information. Instead of starting from scratch and worrying about the design, I could focus more on presenting my qualifications clearly. Overall, it was a smooth and helpful experience, especially for students and fresh graduates preparing for their first job opportunities. I would definitely recommend this platform to anyone looking for a simple and effective way to create a professional resume.
</p>
<p>
  I had been searching for a simple and reliable way to create a professional resume, but most of the time I found myself spending more effort on formatting and designing than actually presenting my qualifications. As someone preparing for new career opportunities, I wanted a resume that looked clean, organized and professional while highlighting my educational background, technical skills, projects and achievements. This AI Resume Builder turned out to be a really helpful platform for that purpose. The step-by-step process made it easy to enter all my information without feeling overwhelmed, and I especially liked how everything was arranged into clearly defined sections. The ability to preview the resume while entering details was one of my favourite features because it allowed me to see how each section would appear in the final document and make corrections whenever necessary. 
</p>
          </div>
          <div style={{width:"45%"}}>
             <ImageList sx={{ width: "100%", height: 450 ,overflow:"hidden"}} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  

          </div>
        </div>
      </section>
    </div>
  )
}

