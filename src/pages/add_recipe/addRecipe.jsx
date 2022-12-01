import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer, SpaceEmpty } from "../../components/main/Main";
import { addRecipe } from "../../redux/action/recipe";

import "./style.css";
const token = localStorage.getItem("token");
const AddRecipe = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    video: "",
    user_id: "",
  });
  const [dataUserLogin, setDataUserLogin] = useState([]);
  const [photo, setPhoto] = useState();

  useEffect(() => {
    setDataUserLogin(JSON.parse(localStorage.getItem("data")));
  }, []);
  const changeHandle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  if (photo) {
    var src = URL.createObjectURL(photo);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
  const onSubmit = (e) => {
    e.preventDefault();
    let body = new FormData();
    body.append("title", form.title);
    body.append("ingredients", form.ingredients);
    body.append("user_id", dataUserLogin.id_user);
    body.append("photo", photo);

    addRecipe(body, token)
      .then((res) => {
        console.log(res);
        alert("success post data recipes");
        return navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Navbar />
      <SpaceEmpty />
      <div className={`w-100 d-flex justify-content-center align-items-center`}>
        <div className="container w-100 text-center d-flex justify-content-center align-items-center">
          <div className="row w-100 d-flex justify-content-center align-items-center">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className=" col-12 mb-3">
                <div className="box-form-image d-flex flex-column">
                  <div className="preview">
                    <img id="file-ip-1-preview" alt="preview changed" style={{width:"150px",height:"150px"}}/>
                  </div>
                  <input
                    type="file"
                    id="files"
                    className="hidden"
                    onChange={(e) => {
                      setPhoto(e.target.files[0]);
                    }}
                  />
                  <label htmlFor="files" className="airbnb-md">
                    <i className="img-icon bi bi-card-image"></i> <br />
                    Add Photo
                  </label>
                </div>
              </div>
              <div className=" col-12 mb-3">
                <input
                  type="text"
                  className="input-ar box-form-title airbnb-lt"
                  id="title"
                  placeholder="title"
                  name="title"
                  onChange={changeHandle}
                />
              </div>
              <div className=" col-12 mb-3">
                <textarea
                  id=""
                  className="textarea-ar box-form-ing airbnb-lt"
                  cols="30"
                  rows="10"
                  placeholder="ingredients, ex: item 1, item2, item3, item n"
                  name="ingredients"
                  onChange={changeHandle}
                ></textarea>
              </div>
              <button
                className="post-add mb-5"
                style={{ width: "80%", height: "100px", borderRadius: "10px" }}
                type="submit"
              >
                POST
              </button>
            </form>
            <div className="space-empty mb-3"></div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default AddRecipe;
