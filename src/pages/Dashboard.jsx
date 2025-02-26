import React, { useEffect, useState } from 'react'
import Header from "../Components/Header";
import View from '../Components/View'
import Profile from '../Components/Profile'
import Footer from '../Components/Footer';

function Dashboard() {
  const[username,setUserName]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUserName(JSON.parse(sessionStorage.getItem("user")).username)
    }else{
      setUserName("")
    } 
  },[])
  return (
    <>
       <Header/>
       <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 justify-content-center mb-4'>

            <h1>Welcome <span className='text-danger'>{username}</span></h1>
            <div>
              <View/>
            </div>
          </div>
          <div className='col-lg-4 justify-content-center mb-4 '>
            <Profile/>
          </div>

        </div>

       </div>
       <Footer/>
    </>
  )
}

export default Dashboard