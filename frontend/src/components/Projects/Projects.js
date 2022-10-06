import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import './Project.css'
import Project from "./Project";
const Projects = (props) => {
  const initial=[{
    "title":"villa"
  }]
  const [content, setcontent] = useState(initial)
  useEffect(() => {
  
    GetAllData()
  
  
    
  }, [content])
 
  const host = "http://localhost:5000";

 
  const GetAllData = async (e) => {
    const response = await fetch(`${host}/projects/getalldata`, {
      method: "GET",
      //   real
      headers: {
        "Content-Type": "application/json",
      },
     
    });

    const json = await response.json();
    setcontent(json)
    props.setloader(false)
  
  };
  return (
    <div className="card-start">
    {
      localStorage.getItem('token')?
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
              <label htmlFor="post">Event description</label>
              <textarea
                name="description"
                className="form-control"
                id="description"
                onChange={handleChange}
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
                <Loader isloading={loading} />
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
                loading === true ||
                image.length === 0 ||
                title.description.length < 5 
                // title.name.length < 2
              }
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="Our-services">
      <div className="Our-services-orange"></div>
      <div className="Our-services-text">
      <span className="about-span">ABOUT US</span>
        <p>Constructions and <br/>Renovation Solutions </p>
      </div>
    </div>
    <div className="flex-box">
    {content.map((e)=>{
        return  <Project data={e} key={e.id}  deletecard={HandleDelete}/>
      
        
      })
    }
     </div>

   
  </div>
   
    
  )
}

export default Projects;
