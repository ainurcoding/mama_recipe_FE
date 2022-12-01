import React, { Fragment, useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Footer, SpaceEmpty } from "../../components/main/Main";
import gStyle from "../../assets/css/general.module.css";
import { updateRecipe, getRecipeByIdRecipes } from "../../redux/action/recipe";

import "./style.css";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

const token = localStorage.getItem("token");
const UpdateRecipe = () => {
  // inline style
  const whMaxContent = {
    width: "max-content",
    height: "max-content",
  };
  const iconSize = {
    width: "52px",
    height: "52px",
    borderRadius: "10px",
  };

  const banner1wh = {
    width: "1081px",
    height: "700px",
  };
  // inline style

  // logic page
  const navigate = useNavigate();
  const [form, setForm] = useState({
    tittle: null,
    ingredients: null,
    video: null,
    photo: null,
  });

  const [photo, setPhoto] = useState();

  const [recipes, setDataRecipes] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const handleSuccess = (data) => {
      setDataRecipes(data.data.data[0]);
      
    };
    getRecipeByIdRecipes(id, handleSuccess);
  }, []);

  const changeHandle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const body = {
      title: form.title,
      ingredients: form.ingredients,
      photo: photo || form.photo,
    };
    const handleSuccess = () => {
      alert(`data: ${recipes.title} update successfully`);
      navigate("/profile");
    }
    updateRecipe(recipes.id_recipes, body, handleSuccess)
  };

  if (photo) {
    var src = URL.createObjectURL(photo);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "blocl";
  }

  return (
    <Fragment>
      <Navbar />
      <SpaceEmpty />
      <div className={`w-100 d-flex justify-content-center align-items-center`}>
        <div className="container w-100 text-center d-flex justify-content-center align-items-center">
          <div className="row w-100 d-flex justify-content-center align-items-center">
            <form onSubmit={submitHandle}>
              <div className="title-text text-center">
                <p className="h1">Update data: {recipes.title}</p>
              </div>
              <div className=" col-12 mb-3">
                <div className="box-form-image d-flex flex-column justify-content-center align-items-center gap-5">
                  
                  <div className="review-photo-before">
                    {recipes.photo ? (
                      <>
                        <img
                          src={`${recipes.photo_url}`}
                          alt={`${recipes.title}`}
                          style={{width:"150px",height:"150px"}}
                        />
                      </>
                    ) : (
                      <>
                        <label
                          htmlFor="photo"
                          name="photo"
                          className="airbnb-md"
                          id="photoBtn"
                        >
                          <i className="img-icon bi bi-card-image"></i> <br />
                          Add Photo
                        </label>
                      </>
                    )}
                  </div>
                  <div className="input-image-wrapper">
                    <input
                      type="file"
                      className=""
                      id="files"
                      onChange={(e) => {
                        setPhoto(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="review-wrapper d-flex flex-column justify-content-center align-items-center text-center">
                  <p>Image Update review</p>
                  <img
                    id="file-ip-1-preview"
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
              </div>

              <div className=" col-12 mb-3">
                <input
                  type="file"
                  id="files"
                  className="hidden"
                  onChange={(e) => {
                    setPhoto(e.target.files[0]);
                  }}
                />
              </div>
              <div className=" col-12 mb-3">
                <input
                  type="text"
                  className="input-ar box-form-title airbnb-lt"
                  id="title"
                  placeholder="title"
                  name="title"
                  defaultValue={recipes.title}
                  onChange={changeHandle}
                />
              </div>
              <div className=" col-12 mb-3">
                <textarea
                  name="ingredients"
                  id=""
                  className="textarea-ar box-form-ing airbnb-lt"
                  cols="30"
                  rows="10"
                  defaultValue={recipes.ingredients}
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

export default UpdateRecipe;
