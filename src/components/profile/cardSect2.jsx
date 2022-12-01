import gStyle from "../../assets/css/general.module.css";
import banner1 from "../../assets/img/banner1.jpg";
import bombChicken from "../../assets/img/bomb-chicken.png";
import bananasPancake from "../../assets/img/bananas-pancake.png";
import "./style.css";

import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ListRecipeUser, deleteRecipe } from "../../redux/action/recipe";

const MyRecipe = () => {
  const card = {
    width: "394px",
    height: "300px",
  };

  const wrapCard = {
    height: "700px",
  };

  // const [results, setResults] = useState()

  const navigate = useNavigate();

  // for get action

  // set state for data
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataLogin = JSON.parse(localStorage.getItem("data"));
    // console.log(dataLogin)
    setLoading(true);
    const handleSuccess = async (data) => {
      // console.log(data.data.data.rows);
      await setRecipes(data.data.data.rows);
    };
    ListRecipeUser(dataLogin.id_user, handleSuccess);
    setLoading(false);
  }, []);

  // useSelector for get reducer

  const onDelete = (id) => {
    deleteRecipe(id)
      .then((res) => {
        // console.log(res);
        alert("data has been deleted");
        return navigate("/landing");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
                <button
                  className="bg-red"
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "are u sure to delete this data ?"
                    );

                    if (confirmBox === true) {
                      onDelete(item.id_recipes);
                    }
                  }}
                >
                  delete
                </button>
                ||
                <Link to={`/update/${item.id_recipes}`}>
                  <button className={`${gStyle["bg-color-yellow"]}`}>
                    update
                  </button>
                </Link>
                ||
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
    </>
  );
};

const LikedRecipe = () => {
  const card = {
    width: "max-content",
    height: "300px",
  };

  const wrapCard = {
    height: "700px",
  };
  return (
    <Fragment>
      <div className={`d-flex flex-row gap-3 mb-3`}>
        <div className={`row overflow-auto`} style={wrapCard}>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img src={bombChicken} alt="bomb-chicken" className="imgSize" />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bomb Chicken
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img
              src={bananasPancake}
              alt="bananas-pancake"
              className="imgSize"
            />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bananas Pancake
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img src={banner1} alt="bananas-pancake" className="imgSize" />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bananas Pancake
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img src={banner1} alt="bananas-pancake" className="imgSize" />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bananas Pancake
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img src={bombChicken} alt="bomb-chicken" className="imgSize" />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bomb Chicken
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img
              src={bananasPancake}
              alt="bananas-pancake"
              className="imgSize"
            />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bananas Pancake
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const SavedRecipe = () => {
  const card = {
    width: "max-content",
    height: "300px",
  };

  const wrapCard = {
    height: "700px",
  };
  return (
    <Fragment>
      <div className={`d-flex flex-row gap-3 mb-3`}>
        <div className={`row overflow-auto`} style={wrapCard}>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img src={bombChicken} alt="bomb-chicken" className="imgSize" />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bomb Chicken
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img
              src={bananasPancake}
              alt="bananas-pancake"
              className="imgSize"
            />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bananas Pancake
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img src={banner1} alt="bananas-pancake" className="imgSize" />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bananas Pancake
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img src={banner1} alt="bananas-pancake" className="imgSize" />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bananas Pancake
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img src={bombChicken} alt="bomb-chicken" className="imgSize" />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bomb Chicken
            </p>
          </div>
          <div className="col-4 ms-4 position-relative cardSize" style={card}>
            <img
              src={bananasPancake}
              alt="bananas-pancake"
              className="imgSize"
            />
            <p
              className={`position-absolute text-white ${gStyle["airbnb-md"]} ${gStyle["top-60"]} h2 ms-2`}
            >
              Bananas Pancake
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { MyRecipe, LikedRecipe, SavedRecipe };
