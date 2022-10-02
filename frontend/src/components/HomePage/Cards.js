import React, { useEffect, useState, useRef } from "react";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import Loader from "../loader/Loader";

import "./Cards.css";
import Card from "./Card";
function Cards(props) {
  const initial=[]
  const [content, setcontent] = useState(initial)
  useEffect(() => {
    GetAllData()
  
    
  }, [content])
  
  const refClose = useRef();
  const [loading, setloading] = useState(false);


  const [title, settitle] = useState({ title: "", description: "" });
  const [image, setimage] = useState("");
  const handleChange = (e) => {
    settitle({ ...title, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    if (e.target.files && e.target.files.length === 1) {
      setimage(e.target.files[0]);
    }
  };

  const CreateUpload = (e) => {
    e.preventDefault();
    try{
      const storage = getStorage();
      console.log("1")
    const storageRef = ref(storage, `Card/${image.name}`);
    console.log("2")
    setloading(true);
    
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log("3")
  
      
      getDownloadURL(storageRef).then((url) => {
        console.log("4")
        setimage(url);
      })

      setloading(false);
      console.log("here is the url");
    });


    }catch(e){
      console.log(e.message)
    }
    
  };



  const host = "http://localhost:5000";
  const handleClick = async (e) => {
    const response = await fetch(`${host}/card/addcard`, {
      method: "POST",
      //   real
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.title,
        description: title.description,
        image: image,
    
       
      }),
      
    });
    console.log(title.description )
    console.log(title.title)
    console.log(image )

    const json = await response.json();
    console.log(json)
    setcontent(content.concat(json));
    refClose.current.click();
  };



  const GetAllData = async (e) => {
    const response = await fetch(`${host}/card/getalldata`, {
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
    <div className="card-start">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Events
      </button>

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
      <div className="flex-box">
      {content.map((e)=>{
          return  <Card data={e} key={e.id}/>
        
          
        })
      }
       </div>

     
    </div>
  );
}

export default Cards;
