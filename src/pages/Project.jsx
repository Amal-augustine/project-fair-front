import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { AllProjectAPI } from "../../services/allAPI";

function Project() {
  const [allprojects, setAllProjects] = useState([]);
  const [searchproject, setsearchproject] = useState(""); // Corrected state variable

  const getallprojects = async () => {
    const token = sessionStorage.getItem("token");

    console.log("token:", token);
    if (!token) {
      console.error("No token found. User not authenticated.");
      return;
    }

    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await AllProjectAPI(searchproject, reqHeader); // Fixed usage of searchproject
      console.log("Projects Data:", result);
      setAllProjects(result.data);
    } catch (err) {
      console.error("Error fetching projects:", err.response?.data || err);
    }
  };

  useEffect(() => {
    getallprojects();
  }, [searchproject]); // Fixed dependency

  return (
    <>
      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <h2 className="text-danger">All Projects</h2>
        <input
          onChange={(e) => setsearchproject(e.target.value)} // Fixed onChange
          type="text"
          placeholder="Search project by language"
          className="form-control w-25"
        />
      </div>

      <div className="container mt-5 p-5">
        <div className="row">
          {allprojects?.length > 0 ? (
            allprojects.map((project) => (
              <div key={project._id} className="col-lg-4 col-md-6 mb-4">
                <ProjectCard displaydata={project} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <h1>No Projects Found</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Project;
