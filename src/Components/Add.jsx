import React, { createContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import upload from '../images/upload.png';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
import { Addresponsecontext } from '../pages/contexts/ContextApi';
import { useContext } from 'react';
import { AddProjectAPI } from '../../services/allAPI';

function Add() {
  const [projectDetails, setProjectDetails] = useState({
    title: '',   lng: '',
    git: '',
    web: '',
    overview: '',
    projectimg: ''
    
  });
  console.log(projectDetails);

  const { setAddresponse } = useContext(Addresponsecontext); // Get the setter function

  
  const [imagefilestatus, setImgFileStatus] = useState(false);
  const [preview, setPreview] = useState(upload)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddProject = async () => {
    const { title, lng, git, web, overview, projectimg } = projectDetails; 
    
    if (title && lng && git && web && overview && projectimg) {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("lng", lng);
      reqBody.append("git", git);
      reqBody.append("web", web);
      reqBody.append("overview", overview);
      reqBody.append("projectimg", projectimg);
  
      const token = sessionStorage.getItem("token");
      console.log("Token being sent:", token);
      
      if (token) {
          const reqHeader = {
              "content-type": preview ? "multipart/form-data" : "application/json",
              "authorization": `Bearer ${token}`
          };
      
          try {
            const result = await AddProjectAPI(reqBody, reqHeader);
            
            if (result.status === 200) {
              toast.success("Project added successfully!");
              handleClose();
              setAddresponse(prev => !prev); // ✅ Trigger state update to reflect changes instantly
            } else {
              console.error("API Error:", result.data);
              toast.error(result.data.message || "Error adding project.");
            }
          } catch (err) {
            console.error("API Call Failed:", err.response?.data || err.message);
            toast.error(err.response?.data?.message || "Server error occurred.");
          }
      } 
    } else {
      console.log("Error: Please fill all fields.");
    }
};

  
  useEffect(() => {
    if (projectDetails.projectimg && (projectDetails.projectimg.type === 'image/png' || projectDetails.projectimg.type === 'image/jpeg' || projectDetails.projectimg.type === 'image/jpg')) {
      setImgFileStatus(true);
      setPreview(URL.createObjectURL(projectDetails.projectimg));
    } else if (projectDetails.projectimg) {
      setImgFileStatus(false);
setPreview(upload)
}
  }, [projectDetails.projectimg]);

  return (
    <>
      <button className="btn btn-warning fw-bolder px-4 py-2" style={{ borderRadius: '5px' }} onClick={handleShow}>
        + New Project
      </button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-warning fw-bolder">New Project !!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4 text-center">
              <label>
                <img
                  src={preview}
                  className='mb-3'
                  alt=""
                  style={{ width: '150px', objectFit: 'cover', border: '2px solid #ddd', borderRadius: '8px' }}
                />
                <input
                  style={{ display: 'none' }}
                  onChange={(e) => setProjectDetails({ ...projectDetails, projectimg: e.target.files[0] })}
                  type="file"
                />
              </label>
              {!imagefilestatus && projectDetails.projectimg && (
                <div className="text-warning mt-2">
                  Only input the following file types: (jpeg, jpg, png)
                </div>
              )}
            </div>

            <div className="col-lg-8">
              <div>
                <input
                  type="text"
                  onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })}
                  className="mb-3 form-control"
                  placeholder="Project Title"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setProjectDetails({ ...projectDetails, lng: e.target.value })}
                  className="mb-3 form-control"
                  placeholder="Languages Used"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setProjectDetails({ ...projectDetails, git: e.target.value })}
                  className="mb-3 form-control"
                  placeholder="Github Link"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setProjectDetails({ ...projectDetails, web: e.target.value })}
                  className="mb-3 form-control"
                  placeholder="Website Link"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}
                className="mb-3 form-control"
                placeholder="Overview"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    <ToastContainer/>
    </>
  );
}

export default Add;
