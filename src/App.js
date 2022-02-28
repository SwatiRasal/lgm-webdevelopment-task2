import React, { useState } from 'react';
import './App.css';

  

export default function App(){
  const [userData,setUsers]=useState([]);
  const loadUsers=async()=>{
   
    const response=await fetch('https://reqres.in/api/users?page=1');
    const jsonresponse=await response.json();
    setUsers(jsonresponse.data);

  };
  return(
    <div className='App'>
      <div id="flex-prop">
        <h1 id="head-3">web App (Fetching User Data)</h1>
        <button onClick={loadUsers}>Get Users</button>
        </div>
        <div id="flexing-cont">
          {userData.map((data)=>(
             <div id="main-container">
               <img src={data.avatar}  alt="Avatar"/>
               <h3 id="names_style">
                 {" "}
                 {data.first_name}{data.last_name}{" "}
                 </h3>
                 <p>{data.email}</p>
              </div>
            ))}
          </div>
        </div>  
      );
    }
    



