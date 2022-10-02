import React, { useEffect, useState,useRef  } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Loader from "../loader/Loader";

import "./Cards.css";
function Cards(props) {
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
    const storage = getStorage();
    const storageRef = ref(storage, `Card/${image.name}`);
    setloading(true);
    uploadBytes(storageRef, image).then((snapshot) => {
      setimage(snapshot);
      setloading(false);
      console.log("here is the url");
    });
  };


  const handleClick = async (e) => {
    const response = await fetch(`${host}/events/addevent`, {
      method: "POST",
    //   real
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
        description: title.description,
        name: title.name,
      }),
    });
    const json = await response.json();
    setcontent(content.concat(json));
    refClose.current.click();
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
                  name="name"
                  id="name"
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
                  title.description.length < 5 ||
                  title.name.length < 2
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-box">
        <div className="Card-frame">
          <img
            src="https://demo.htmlcodex.com/2500/home-repair-website-template/img/service-4.jpg"
            alt=""
            srcset=""
            className="image-card"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
