import React, { Fragment, useEffect, useState } from "react";
import { Navbar, SpaceEmpty, Footer } from "../../components/main/Main";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { deleteRecipe, searchByTitle } from "../../redux/action/recipe";
import gStyle from "../../assets/css/general.module.css";

const SearchRecipe = () => {
  // set state
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const card = {
    width: "394px",
    height: "300px",
  };

  const wrapCard = {
    height: "700px",
  };

  const URL = process.env.REACT_APP_BACKEND_URL;
  const [queryParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const titleSearch = queryParams.get("title");
    const sortBy = queryParams.get("sortBy");
    // console.log(titleSearch);
    // console.log(sortBy);
    if (titleSearch) {
      const handleSuccess = async (data) => {
        // console.log(data.data.data.rows);
        await setRecipes(data.data.data.rows);
        setLoading(false);
      };
      searchByTitle(titleSearch, sortBy, handleSuccess);
    }
  }, []);

  return (
    <Fragment>
      <Navbar />
      <SpaceEmpty />
      <div className={`d-flex flex-row gap-3 mb-3`}>
        <div className={`row overflow-auto`} style={wrapCard}>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            recipes.map((item, index) => (
              <div
                key={index}
                className="col-4 ms-4 position-relative cardSize"
                style={card}
              >
                <img
                  src={item.photo_url}
                  alt={item.title}
                  className="imgSize mb-3"
                />
                <p
                  className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
                >
                  {item.title}
                </p>
                <Link to={`/detail_recipe/${item.id_recipes}`}>
                  <button className={`${gStyle["bg-color-greenlt"]}`}>
                    detail
                  </button>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SearchRecipe;
