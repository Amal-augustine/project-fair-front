import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ecart from '../images/ecart.avif'
import Modal from 'react-bootstrap/Modal';
import SERVER_URL from '../../services/server_url';


function ProjectCard({displaydata}) {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
     

        <Card onClick={handleShow}   className="p-3 mt-5" style={{ width: '18rem' ,border:'none' }}>
          <Card.Img variant="top" src={`${SERVER_URL}/uploads/${displaydata?.projectimg}`} style={{borderRadius:'50px',height:'250px'}} />
          <Card.Body>
            <Card.Title  style={{fontSize:'30px'}} className='text-center text-warning' >{displaydata?.title}</Card.Title>


          </Card.Body>
        </Card>

      

    

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='row'>
            <div className='col-lg-6'>
              <img src={`${SERVER_URL}/uploads/${displaydata?.projectimg}`} className='w-100' alt="" />

            </div>

            <div className='col-lg-6'>
              <h3 className='text-warning fw-bold'>{displaydata?.title}</h3>
              <h4>Languages Used:<span className='text-danger'> {displaydata?.lng}</span></h4>
              <h4>Project Overview:</h4><p>{displaydata?.overview}</p>


            </div>
          </div>

          <div className='mt-3 '>
            <button className='btn btn-info w-25 '> <i className="fa-brands fa-github"></i></button>
            <button className='btn btn-info mx-5 w-25'><i className="fa-solid fa-link"></i></button>
          </div>
        </Modal.Body>
 
      </Modal>


    </>
  )
}

export default ProjectCard