import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Project.css";
import Project from "./Project";
import {Helmet} from 'react-helmet-async';

const initial=[]
const host = "http://localhost:5000";
const Projects = (props) => {
  const [content, setcontent] = useState(initial)
  const [image, setimage] = useState("")
  const handleFile=(e)=>{
    if(e.target.files && e.target.files.length===1)
     {
      setimage(e.target.files[0])
     }
  }
  const CreateUpload=(e)=>{
    e.preventDefault();
    try{
      const storage = getStorage();
      
    const storageRef = ref(storage, `projects/${image.name}`);
    

    
    uploadBytes(storageRef, image).then(() => {
      
  
      
      getDownloadURL(storageRef).then((url) => {
        
        setimage(url);
        
      })

     
      
    });


    }catch(e){
      
    }
    
  }
  const refClose= useRef()
  const [arr, setarr] = useState({title:""})

  const handleChange=(e)=>{
    setarr({
      ...arr,[e.target.name]:e.target.value
    })


  }
  useEffect(() => {
  
    GetAllData()
    
  }, [content])
  const handleClick = async (e) => {
    const response = await fetch(`${host}/projects/add`, {
      method: "POST",
      //   real
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: arr.title,

        image: image,
    
       
      }),
      
    });
    
    
    

    const json = await response.json();
    
    setcontent(content.concat(json));
    refClose.current.click();
  };
 


  const HandleDelete = async (id) => {
    const response = await fetch(`${host}/projects/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    const sort = content.filter((e) => {
      return e._id !== id;
    });
    setcontent(sort);
  };
  const GetAllData = async (e) => {
    const response = await fetch(`${host}/projects/getdata`, {
      method: "GET",
      //   real
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setcontent(json)
    
    
  
  };
  return (
    <>
     <Helmet>
      <title>About Us</title>
      <meta name="description" content="Welcome to the Projects page of  Panchami Associates,We are one of the Leading Construction Company in Bangalore,here are the finished and ongoing projects of our company" />
      <link rel="canonical" href="/About" />
    </Helmet>
    <div className="card-start rando">
    
      {localStorage.getItem('token')?
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Events
    </button>:null}

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add a Card
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div className="modal-body">
              <label htmlFor="name" className="form-label">
                Card details
              </label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                name="title"
                id="title"
                minLength={3}
                required
              />
           

              <label htmlFor="post">Input file</label>
              <input
                type="file"
                onChange={handleFile}
                accept=".jpg,.png,.jpeg"
                name="photo"
                className="form-control"
                id="photo"
                minLength={1}
                required
              />
              <div>
                <button onClick={CreateUpload}>Upload</button>
                
              </div>
            </div>
          </form>
          <div className="modal-footer">
            <button
              type="button"
              ref={refClose}
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick}
              disabled={
               
                image.length === 0 ||
                arr.title.length < 5 
                // title.name.length < 2
              }
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
      </div>
      <div className="Contact-us-1 projects-con my-3"  >Ongoing/Finished Projects</div>
      <div className="projects-box">
        {content.map((e) => {
          return <Project data={e} key={e.id} deletecard={HandleDelete} />;
        })}
      </div>
    </div>
    </>
    // djwndwndwnwndnwdnwdjwjd
  );
};

export default Projects;
