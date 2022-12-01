import React, { Fragment, useState, useEffect } from "react";
// images
import bannerLanding1 from "../../assets/img/banner-landing-1.png";
import bannerLanding2 from "../../assets/img/banner-landing-2.png";
import { Link, useNavigate } from "react-router-dom";
import iconActive from "../../assets/img/user icon activ.png";
import { Navbar, Footer, SpaceEmpty } from "../../components/main/Main";
import gStyle from "../../assets/css/general.module.css";
import lpStyle from "../../assets/css/lp.module.css";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import banner4 from "../../assets/img/banner4.png";
import chickenKare from "../../assets/img/card1.png";

// style
import "./style.css";
import { useSelector } from "react-redux";
import { ListRecipe } from "../../redux/action/recipe";

const Landing = () => {
  // inline style
  const styles = {
    height: "1210px",
  };

  const titleStyle = {
    width: "600px",
  };

  const iconInput = {
    backgroundColor: "#EFEFEF",
    border: "none ",
    borderRadius: "2.5px 0 0 2.5px ",
    height: "30px",
  };

  const formInput = {
    backgroundColor: "#EFEFEF",
    border: "none ",
    borderRadius: "0 2.5px 2.5px 0",
    height: "30px",
  };

  const sect2 = {
    height: "150px",
  };
  // inline style

  // logic page

  const [AllRecipes, setAllRecipes] = useState([]);

  // pagination
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    setLoading(true);
    const handleSuccess = async (data) => {
      // console.log(data.data.data);
      await setAllRecipes(data.data.data);
      setLoading(false);
    };
    ListRecipe(handleSuccess);
  }, []);
  const URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  // search
  const [form, setForm] = useState({
    title: "",
    sortBy: "asc",
  });

  const changeHandle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSearchHandler = (e) => {
    e.preventDefault();
    // console.log(form);
    const title = form.title;
    const sortBy = form.sortBy
    navigate(`/search?title=${title}&sortBy=${sortBy}`)
  };

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = AllRecipes.slice(indexOfFirstPost, indexOfLastPost);

  // pagination navigate
  const totalPost = AllRecipes.length;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // change page
  const paginate = (PageNumber) => setCurrentPage(PageNumber);
  return (
    <Fragment>
      <Navbar />
      <div className="position-relative d-flex gap-5 w-100" style={styles}>
        <div className={`h-100 col-9  d-flex align-items-center`}>
          <div
            className={` gap-3 wrap d-flex flex-column ms-5`}
            style={titleStyle}
          >
            <p
              className={`${gStyle["airbnb-bd"]} ${gStyle["txt-color-blue"]} display-4`}
            >
              Discover Recipe <br /> & Delicious Food
            </p>
            <div className={`d-flex flex-row`}>
              <div className={``} style={iconInput}>
                <i className={`h-100 bi bi-search p-1`}></i>
              </div>
              <form className="w-100" onSubmit={(e) => onSearchHandler(e)}>
                <div className="w-100 row">
                  <div className="input col-6">
                    <input
                      type="text"
                      name="title"
                      placeholder="search Food, Restaurant"
                      className={`w-100 ${lpStyle["form-input-custom"]}`}
                      style={formInput}
                      onChange={changeHandle}
                    />
                  </div>
                  <div className="select col-4">
                    <select
                      className="form-select"
                      style={{ backgroundColor: "#EFEFEF" }}
                      aria-label="Default select example"
                      name="sortBy"
                      onChange={changeHandle}
                    >
                      <option>sort by</option>
                      <option value="asc">ASC</option>
                      <option value="desc">DESC</option>
                    </select>
                  </div>
                  <div className="button col-2">
                    <button className="btn" type="submit" style={{ backgroundColor: "#efc81a" }}>
                      search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={`h-100 col-3 ${gStyle["bg-color-yellow-nh"]}`}></div>

        <div
          className={`${lpStyle["img1-responsif"]} position-absolute ${gStyle["start-60"]} ${gStyle["top-30"]}`}
        >
          <img
            src={banner2}
            alt="Salad with Egg leaf Green"
            className={`mw-100 mh-100`}
          />
        </div>
      </div>

      <div className={`w-100 d-flex gap-3`} style={sect2}>
        <div
          className={`${lpStyle["yellow-stick"]} ${gStyle["bg-color-yellow-nh"]} ms-5`}
        ></div>
        <div className={`d-flex align-items-center`}>
          <p className={`${gStyle["airbnb-md"]} h2`}>Popular For You!</p>
        </div>
      </div>

      <div className="banner-sect3 w-100 mx-5 mt-5 mb-5">
        <div className="content wrapper row">
          <div className="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <img
              src={bannerLanding1}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center align-items-center">
            <div className="content-wrapper mx-5 p-5 d-flex flex-column gap-2">
              <div className="title">
                <p className="h1">Healty Bone Broth Ramen (Quick & Easy)</p>
              </div>
              <div
                className="hr"
                style={{ width: "40%", border: "2px solid #828282" }}
              ></div>
              <div className="description">
                <p>
                  Quick + Easy Chicken Bone Broth Ramen Healthy chicken ramen in
                  hurry? That's right!
                </p>
              </div>
              <div className="button-wrapper">
                <button
                  className="button"
                  style={{
                    height: "50px",
                    width: "200px",
                    background: "#efc81a",
                    border: "none",
                    borderRadius: "15px",
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-100 d-flex gap-3 mt-5`} style={sect2}>
        <div
          className={`${lpStyle["yellow-stick"]} ${gStyle["bg-color-yellow-nh"]} ms-5`}
        ></div>
        <div className={`d-flex align-items-center`}>
          <p className={`${gStyle["airbnb-md"]} h2`}>New Recipe</p>
        </div>
      </div>

      <div className="banner-sect3 w-100  mt-5 mb-5">
        <div className="content wrapper row">
          <div className="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <img
              src={bannerLanding2}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center align-items-center">
            <div className="content-wrapper mx-5 p-5 d-flex flex-column gap-2">
              <div className="title">
                <p className="h1">Healty Bone Broth Ramen (Quick & Easy)</p>
              </div>
              <div
                className="hr"
                style={{ width: "40%", border: "2px solid #828282" }}
              ></div>
              <div className="description">
                <p>
                  Quick + Easy Chicken Bone Broth Ramen Healthy chicken ramen in
                  hurry? That's right!
                </p>
              </div>
              <div className="button-wrapper">
                <button
                  className="button"
                  style={{
                    height: "50px",
                    width: "200px",
                    background: "#efc81a",
                    border: "none",
                    borderRadius: "15px",
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-empty" style={{ height: "100px" }}></div>

      <div className={`w-100 d-flex gap-3 mb-5`} style={sect2}>
        <div
          className={`${lpStyle["yellow-stick"]} ${gStyle["bg-color-yellow-nh"]} ms-5`}
        ></div>
        <div className={`d-flex align-items-center`}>
          <p className={`${gStyle["airbnb-md"]} h2`}>Popular Recipe</p>
        </div>
      </div>

      <div className="card-recipes-wrapper w-100 mb-5">
        <div className="content-wrapper mx-5 p-5 row gap-5">
          {/* data card */}
          {loading ? (
            <>
              <div>loading...</div>
            </>
          ) : (
            <>
              {currentPost.map((item, index) => (
                <div key={index} className="thumbnail-recipes text-cemter col-3 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                  <Link to={`/detail_recipe/${item.id_recipes}`}>
                    <img
                      src={item.photo_url}
                      alt="Chicken Kare"
                      className={`mw-100 mh-100 img-responsive overlay-card-recipes`}
                      style={{ width: "300px", height: "300px" }}
                    />
                    <span
                      className="title-thumb fw-bold h1 ms-3 overflow-hidden text-white"
                      style={{ width: "80%", height: "100px" }}
                    >
                      {item.title}
                    </span>
                  </Link>
                </div>
              ))}
            </>
          )}
          {/* end of card */}
          {/* pagination navigate */}
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button
                  href="!#"
                  className="btn page-link"
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
          {/* end of pagination navigate */}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Landing;
