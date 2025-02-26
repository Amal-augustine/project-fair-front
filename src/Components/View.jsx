import React, { useContext, useEffect, useState } from 'react';
import Add from './Add';
import Edit from './Edit';
import { Addresponsecontext } from '../pages/contexts/ContextApi';
import { deleteProjectAPI, UserProjectAPI } from '../../services/allAPI';
import { toast } from 'react-toastify';

function View() {
  const { addresponse, setAddresponse } = useContext(Addresponsecontext);
  const [userproject, setuserproject] = useState([]);

  useEffect(() => {
    getuserproject();
  }, [addresponse]); // ✅ Runs when `addresponse` changes, ensuring updates without refresh

  const getuserproject = async () => {
    const token = sessionStorage.getItem("token");
    console.log("Stored Token:", token);

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      };

      try {
        const result = await UserProjectAPI(reqHeader);
        console.log("API Response:", result);

        if (result?.data) {
          setuserproject(result.data);
        } else {
          console.error("Unexpected API Response:", result);
        }
      } catch (err) {
        console.log("Error Fetching User Projects:", err);
      }
    } else {
      console.log("No Token Found");
    }
  };

  const deleteproject = async (id) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`
      };

      try {
        const result = await deleteProjectAPI(id, reqHeader);
        if (result.status === 200) {
          toast.success("Project Deleted Successfully!");
          getuserproject();
          setAddresponse(prev => !prev); // ✅ Toggle state to trigger re-fetch
        }
      } catch (err) {
        console.error("Failed to delete project:", err);
        toast.error("Error deleting project!");
      }
    }
  };

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 className='mt-3 text-danger'>All Projects</h2>
        <Add />
      </div>
      {userproject?.length > 0 ? userproject?.map(project => (
        <div key={project._id} className='mt-4 p-4 border d-flex justify-content-between align-items-center' style={{ borderRadius: '10px' }}>
          <h5>{project.title}</h5>
          <div className='d-flex justify-content-center align-items-center'>
            <Edit project={project} />
            <a href={project.git} className='ms-2'><i className="fa-brands fa-github fa-lg text-info"></i></a>
            <button onClick={() => deleteproject(project._id)} className='btn ms-2'>
              <i className="fa-solid fa-trash fa-lg text-danger"></i>
            </button>
          </div>
        </div>
      )) : <div>No project</div>}
    </>
  );
}

export default View;
