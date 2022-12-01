import axios from "axios";

const token = localStorage.getItem("token");
const URL = process.env.REACT_APP_BACKEND_URL;

export const ListRecipe = (handleSuccess) => {
  // console.log(token);
  return {
    type: "GET_LIST_RECIPE",
    payload: new Promise((resolve, reject) => {
      axios({
        url: `${URL}/recipes/list`,
        method: "GET",
      })
        .then((res) => {
          handleSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const ListRecipeUser = (id, handleSuccess) => {
  // console.log(token);
  return {
    type: "GET_LIST_RECIPE_BY_USERID",
    payload: new Promise((resolve, reject) => {
      axios({
        url: `${URL}/recipes/user/${id}`,
        method: "GET",
      })
        .then((res) => {
          handleSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const getRecipeByIdRecipes = (id, handleSuccess) => {
  return {
    type: "GET_RECIPE_BYID_RECIPES",
    payload: new Promise((resolve, reject) => {
      axios({
        url: `${URL}/recipes/${id}`,
        method: "GET",
      })
        .then((res) => {
          handleSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const searchByTitle = (title, sortBy, handleSuccess) => {
  return {
    type: "SEARCH_RECIPE_BY_TITLE",
    payload: new Promise((resolve, reject) => {
      axios({
        url: `${URL}/search/recipes/${title}/${sortBy}`,
        method: "GET",
      })
        .then((res) => {
          handleSuccess(res);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }),
  };
};

export const addRecipe = (form, token) => {
  // const [token, setToken] = useState();

  return new Promise((resolve, reject) => {
    axios
      .post(`${URL}/addRecipe`, form, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteRecipe = (id, token) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${URL}/recipes/delete/${id}`, {
        headers: {
          token: token,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateRecipe = (id, form, handleSuccess) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${URL}/recipes/update/${id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        handleSuccess(response);
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
