import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
         <div className="p-5 mt-5 w-100  " style={{height:'400px', marginTop:"150px",backgroundColor:'rebeccapurple'}}>
        <div className="row">
            
            <div className="col-lg-4 ">

                <h4>
                <i className="fa-brands fa-docker text-warning"></i> &nbsp;
                    Project Fair</h4>
                <p className="mt-4 text-justify w-75">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Autem sequi porro adipisci maiores. Quis fuga repudiandae quisquam id veritatis vel enim totam! Itaque maiores adipisci animi placeat totam reiciendis id! </p>
                <p>this code is liscensed by amal</p>
                <p>currently v4.56.0</p>
            </div>
            <div className="col-lg-2">
            <h5>Links</h5>

                <div className="mt-4">
                    <Link to={'/'} className='text-white  text-decoration-none'>Home</Link> <br/>
                    <Link to={'/login'} className='text-white  text-decoration-none'>Login</Link> <br/>
                    <Link to={'/register'} className='text-white  text-decoration-none'>Register</Link> <br/>
                </div>
               
            </div>
            <div className="col-lg-2">
            <h5>Gudies</h5>
                <div className="mt-4">
                    <a href="" className="text-decoration-none text-white">React</a> <br/>
                    <a href="" className="text-decoration-none text-white">React Bootstrap</a> <br/>
                    <a href="" className="text-decoration-none text-white">React Router</a> <br/>
                </div>
                

            </div>
            <div className="col-lg-4">
                <h5>Contact Us</h5>
                
                <div className="d-flex gap-3 mt-4 ">
                    <input type="text" className="form-control " placeholder="enter email" />
                      <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
                </div>
                

                <div className="d-flex gap-3 align-items-center justify-content-around mt-4 fs-5">
                    <a href="" className="text-white"><i className="fa-brands fa-facebook"></i></a>
                    <a href="" className="text-white"><i className="fa-brands fa-twitter"></i></a>
                    <a href="" className="text-white"><i className="fa-brands fa-github"></i></a>
                    <a href="" className="text-white"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="" className="text-white"><i className="fa-brands fa-instagram"></i></a>
                    <a href="" className="text-white"><i className="fa-solid fa-phone"></i></a>
                </div>

            </div>
        </div>
        <p className="text-center mt-4">Copyright © september 2024 Batch, Project Fair , Built with react</p>
     </div>
    </>
  )
}

export default Footer