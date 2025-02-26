import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import Upload from '../images/upload.png';

import { Addresponsecontext } from '../pages/contexts/ContextApi';
import SERVER_URL from '../../services/server_url';
import { UpdateProjectAPI } from '../../services/allAPI';

function Edit({ project }) {
  const { setAddresponse } = useContext(Addresponsecontext); // Context to trigger re-render

  // State for project details
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    lng: '',
    git: '',
    web: '',
    overview: '',
    projectimg: ''
  });

  // Image preview state
  const [preview, setPreview] = useState(Upload);
  const [imageFileStatus, setImageFileStatus] = useState(false);

  // Modal state
  const [show, setShow] = useState(false);

  // Open modal and set project details
  const handleShow = () => {
    setProjectDetails({
      title: project.title,
      lng: project.lng,
      git: project.git,
      web: project.web,
      overview: project.overview,
      projectimg: project.projectimg
    });
  
    if (project.projectimg) {
      setPreview(`${SERVER_URL}/uploads/${project.projectimg}`);
    } else {
      setPreview(Upload); // Fallback image
    }
  
    setShow(true);
  };
  

  // Close modal
  const handleClose = () => setShow(false);

  // Handle form input changes
  const handleChange = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      setProjectDetails({ ...projectDetails, projectimg: file });
      setPreview(URL.createObjectURL(file));
      setImageFileStatus(true);
    } else {
      setImageFileStatus(false);
      setPreview(Upload);
    }
  };

  // Handle update request
  const handleUpdate = async () => {
    const { title, lng, git, web, overview, projectimg } = projectDetails;

    if (title && lng && git && web && overview) {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("lng", lng);
      reqBody.append("git", git);
      reqBody.append("web", web);
      reqBody.append("overview", overview);

      if (typeof projectimg !== "string") {
        reqBody.append("projectimg", projectimg);
      }

      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader = {
          "content-type": imageFileStatus ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        };

        try {
          const result = await UpdateProjectAPI(project._id, reqBody, reqHeader);

          if (result.status === 200) {
            toast.success("Project updated successfully");

            // Trigger re-fetch of projects
            setAddresponse(prev => !prev);

            handleClose();
          } else {
            toast.error("Failed to update project");
          }
        } catch (err) {
          console.error("Error updating project:", err);
        }
      }
    } else {
      toast.error("Please fill all fields.");
    }
  };
  useEffect(() => {
    if (project.projectimg) {
      setPreview(`${SERVER_URL}/uploads/${project.projectimg}`);
    }
  }, [project]);

  return (
    <>
      <button className="btn text-success" onClick={handleShow}>
        <i className="fa-solid fa-pen-to-square fa-xl"></i>
      </button>

      <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning fw-bolder">Update Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4 text-center">
              <label>
                <img src={preview} alt="" style={{ width: "150px", objectFit: "cover", border: "2px solid #ddd", borderRadius: "8px" }} />
                <input style={{ display: 'none' }} type="file" onChange={handleFileChange} />
              </label>
              {!imageFileStatus && projectDetails.projectimg && (
                <div className="text-warning mt-2">Only input file types: (jpeg, jpg, png)</div>
              )}
            </div>

            <div className="col-lg-8">
              <input type="text" name="title" value={projectDetails.title} onChange={handleChange} className="mb-3 form-control" placeholder="Project Title" />
              <input type="text" name="lng" value={projectDetails.lng} onChange={handleChange} className="mb-3 form-control" placeholder="Languages Used" />
              <input type="text" name="git" value={projectDetails.git} onChange={handleChange} className="mb-3 form-control" placeholder="Github Link" />
              <input type="text" name="web" value={projectDetails.web} onChange={handleChange} className="mb-3 form-control" placeholder="Website Link" />
              <input type="text" name="overview" value={projectDetails.overview} onChange={handleChange} className="mb-3 form-control" placeholder="Overview" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
