import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Login from '../pages/login/login';
import  Profile from '../pages/profile/profile';
import AddRecipe from '../pages/add_recipe/addRecipe';
import UpdateRecipe from '../pages/update/update';
import Register from '../pages/register/register';
import Landing from '../pages/landing/landing';
import DetailRecipe from '../pages/detail_recipe/detailRecipe';
import NotFound from '../pages/not_found/not_found';
import SearchRecipe from '../pages/search_recipe/searchRecipe';


// privateRouteSatu in below
const PrivateRoute = ({children}) => {
    
    const token = localStorage.getItem('token');
    if(token) {
        return <Outlet/>
    } else {
        alert("you cannot access this page, please login first")
        return <Navigate to='/' />;
    }
}

const AuthRoute = ({children}) => {
    const token = localStorage.getItem('token');
    if(!token) {
        return <Outlet/>
    } else {
        alert('logout for access this page');
        return <Navigate to='/landing' />;
    }
}




// general route
const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<AuthRoute/>}>
                <Route index element={<Login/>}/>
            </Route>
            <Route path='/register' element={<AuthRoute/>}>
                <Route index element={<Register/>}/>
            </Route>
            <Route path='/landing' element={<PrivateRoute/>}>
                <Route index element={<Landing/>}/>
            </Route>
            <Route path='/profile' element={<PrivateRoute/>}>
                <Route index element={<Profile/>}/>
            </Route>
            <Route path='/add_recipe' element={<PrivateRoute/>}>
                <Route index element={<AddRecipe/>}/>
            </Route>
            <Route path='/search' element={<PrivateRoute/>}>
                <Route index element={<SearchRecipe/>}/>
            </Route>
            
            <Route path='/update/:id' element={<PrivateRoute/>}>
                <Route index element={<UpdateRecipe/>}/>
            </Route>
            <Route path='/detail_recipe/:id' element={<PrivateRoute/>}>
                <Route index element={<DetailRecipe/>}/>
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;