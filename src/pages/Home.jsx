import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import pics from '../images/pics.avif'
import ProjectCard from '../Components/ProjectCard'
import logo from '../images/logo.png'
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer'
import { homeProjectAPI } from '../../services/allAPI'


function Home() {
  const [homeprojects,sethomeprojects]=useState([])
useEffect(() => {
  getHomeprojects()
}, [])
const navigate=useNavigate()

const getHomeprojects=async()=>{
  try{
    const result = await homeProjectAPI()
    console.log(result);
    if(result.status==200){
      sethomeprojects(result.data)
    }
    
  }
  catch(err){
    console.log(err);
    
  }
}
const handleprojects = () => {
  if (sessionStorage.getItem('token')) {
    navigate('/project'); // ✅ If logged in, go to project page
  } else {
    alert("Please login");
    setTimeout(() => {
      navigate('/login'); // ✅ Redirect to login only after alert is dismissed
    },100); // Adding a small delay for smooth transition
  }
};


  return (
    <>


      <div style={{ marginTop: '100px' }} className='container mb-5'>
{/*first section  */}
        <Row>
          <Col lg={6} md={6} sm={12} >

            <h1 className='fw-bold' style={{ fontSize: '50px' }}><img src={logo} width={'50px'}/>  Project Fair</h1>

            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores explicabo enim sint impedit fugiat amet beatae consequuntur accusantium, adipisci eligendi perspiciatis nemo? Alias quasi dolorum, culpa a aliquam dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusamus reprehenderit? Magni, ratione nam? Sit, totam consectetur. Saepe nam, culpa mollitia voluptatum doloribus deleniti itaque, sint omnis quasi fuga id.!!!</p>

            {
            sessionStorage.getItem("token")?
            <Link to={'/dashboard'} className='btn btn-secondary mt-3 p-3' style={{ borderRadius: '10px' }}>MANAGE YOUR PROJECT</Link>:
            <Link to={'/login'} className='btn btn-danger mt-3 p-3' style={{ borderRadius: '10px' }}>START TO EXPLORE</Link>
           }          </Col>

          <Col lg={6} md={6} sm={12} >
            <img src={pics} alt="" style={{borderRadius:'80px'}}  className=' mt-4 ms-5 image-fluid w-75' />
          </Col>
        </Row>


        <div className='mt-5 text-center'>
          <h1 className='my-5  ' style={{color:'lightskyblue'}}>Explore Our Projects</h1>
          <marquee >
            <div className='d-flex'>
            {homeprojects?.length > 0 ? (
  homeprojects.map((project) => (
    <div className="me-5">
      <ProjectCard 
        displaydata={project} 
      />
    </div>
  ))
) : (
  <div>Project not found</div>
)}


            </div>
          </marquee>

          <Link to={'/project'}  onClick={handleprojects}> <h5 className='mt-5'> Click here to view more projects</h5></Link>
        </div>

{/* testimonial section */}

        <div className='mt-5'>
          <h1 className='text-center'>Our Testimonials</h1>

          <div className='container mt-5'>
            <div className="row justify-content-center">


              <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4'>
                <Card style={{ width: '18rem' }} className='p-3 me-5'>


                  <Card.Body>
                    <Card.Title>
                      <div className='text-center'>
                        <img className='text-center rounded-circle ' style={{width:'100px',height:'120px'}} src="src/images/images (1).jpg" alt="" />
                      </div>

                    </Card.Title>
                    <Card.Text className=''>
                      <h5 className='text-center mt-3'>Max Wilson</h5>

                      <div className='text-center mt-2'>

                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>

                      </div>

                      <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos obcaecati, magni quo tenetur nostrum atque corrupti beatae provident. Quos molestias quo debitis expedita dolorem atque assumenda quidem laudantium ratione officia.</p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>





              <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4'>
                <Card style={{ width: '18rem' }} className='p-3 me-5'>


                  <Card.Body>
                    <Card.Title>
                      <div className='text-center'>
                        <img className='text-center rounded-circle w-50' src="src/images/images.png" alt="" />
                      </div>

                    </Card.Title>
                    <Card.Text className=''>
                      <h5 className='text-center mt-3'>Ria Johnson</h5>

                      <div className='text-center mt-2'>

                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>

                      </div>

                      <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos obcaecati, magni quo tenetur nostrum atque corrupti beatae provident. Quos molestias quo debitis expedita dolorem atque assumenda quidem laudantium ratione officia.</p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>




              <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4'>

                <Card style={{ width: '18rem' }} className='p-3 me-5'>


                  <Card.Body>
                    <Card.Title>
                      <div className='text-center'>
                        <img className='text-center rounded-circle w-50' style={{height:'110px'}} src="src/images/images.jpg" alt="" />
                      </div>

                    </Card.Title>
                    <Card.Text className=''>
                      <h5 className='text-center mt-3'>Darwin Joshy</h5>

                      <div className='text-center mt-2'>

                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>
                        <i className="fa-solid fa-star text-warning"></i>

                      </div>

                      <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos obcaecati, magni quo tenetur nostrum atque corrupti beatae provident. Quos molestias quo debitis expedita dolorem atque assumenda quidem laudantium ratione officia.</p>
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>


            </div>
          </div>

        </div>

      </div>
<Footer/>
    </>
  )
}

export default Home