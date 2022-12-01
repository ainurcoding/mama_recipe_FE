import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authStyle from '../../assets/css/auth.module.css';
import gStyle from '../../assets/css/general.module.css';
import { Navbar, Footer, SpaceEmpty } from '../../components/main/Main';
import BannerAuth from '../../components/BannerAuth';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/action/user';

const  token = localStorage.getItem('token');
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password2: '',

    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        const handleSuccess = (data) => {
            console.log(data);
            alert('Register Success');
            return navigate('/')
        }
        if(form.password !== form.password2) {
            alert("password not match");
        } else {
            const body = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                password: form.password,
            }
            dispatch(userRegister(body, handleSuccess))
           // userRegister(form)
            // .then((res) => {
            //     console.log(res.data);
            //     alert('Register Success');
            //     return navigate('/')
            // })
            // .catch((err) => {
            //     console.log(err);
            // })
        }
    }
    return (
        <Fragment>
            <div className={`${authStyle['container-auth']}`}>
                <div className={`h-100 row justify-content-center g-2`}>

                    {/* banner */}
                    <BannerAuth/>
                    {/* banner */}


                    <div className={`col-6 ${authStyle['col-xs-12']} col-sm-12 col-md-6 col-xl-6 col-xxl-6 `}>
                        <div className='h-100 w-100 r d-flex align-items-center justify-content-center'>
                            <div className={`${authStyle['wrapper']} gap-3 d-flex flex-column align-items-center justify-content-center `}> 
                                 <div className={`${authStyle['wrapper-ch']} text-center`}>
                                    <p className={`h3 ${gStyle['airbnb-bd']} ${gStyle['txt-color-yellow']}`}>Let's Get Started!</p>
                                 </div>
                                 <div className={`${authStyle['wrapper-ch']} text-center`}>
                                    <p className={`${gStyle['airbnb-lt']} text-muted`}>Create new account to access all features</p>
                                 </div>
                                 <div className={`${authStyle['wrapper-ch']} `}>
                                    <hr />
                                 </div>
                                 <form className='w-100' onSubmit={(e) => onSubmitHandler(e)}>
                                 <div className={`${authStyle['wrapper-ch']} `}>
                                    
                                        <div className="d-flex flex-column gap-2 mb-3">
                                            <div>
                                            <label htmlFor="name" className={`${gStyle['airbnb-lt']} fs-6 form-label`}>Name</label>
                                            </div>
                                            <div>
                                            <input  
                                            type="text" 
                                            className={`${gStyle['input-control']} form-control`} id="name" 
                                            placeholder="Name"
                                            onChange={handleChange}
                                            name="name"
                                            required
                                            />    
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`${authStyle['wrapper-ch']} `}>
                                    
                                        <div className="d-flex flex-column gap-2 mb-3">
                                            <div>
                                            <label htmlFor="email" className={`${gStyle['airbnb-lt']} fs-6 form-label`}>Email address</label>
                                            </div>
                                            <div>
                                            <input  
                                            type="text" 
                                            className={`${gStyle['input-control']} form-control`} id="email" 
                                            placeholder="Enter email address"
                                            onChange={handleChange}
                                            name="email"
                                            required
                                            />    
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`${authStyle['wrapper-ch']} `}>
                                    
                                        <div className="d-flex flex-column gap-2 mb-3">
                                            <div>
                                            <label htmlFor="phone" className={`${gStyle['airbnb-lt']} fs-6 form-label`}>Phone Number</label>
                                            </div>
                                            <div>
                                            <input  
                                            type="text" 
                                            className={`${gStyle['input-control']} form-control`} id="phone" 
                                            placeholder="08xxxxxx"
                                            onChange={handleChange}
                                            name="phone"
                                            required
                                            />    
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`${authStyle['wrapper-ch']} `}>
                                    
                                        <div className="d-flex flex-column gap-2 mb-3">
                                            <div>
                                            <label htmlFor="password" className={`${gStyle['airbnb-lt']} fs-6 form-label`}>Create New Password</label>
                                            </div>
                                            <div>
                                            <input  
                                            type="password" 
                                            className={`${gStyle['input-control']} form-control`} id="password" 
                                            placeholder="Create New Password"
                                            onChange={handleChange}
                                            name="password"
                                            required
                                            />    
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`${authStyle['wrapper-ch']} `}>
                                    
                                        <div className="d-flex flex-column gap-2 mb-3">
                                            <div>
                                            <label htmlFor="password2" className={`${gStyle['airbnb-lt']} fs-6 form-label`}>Re New Password</label>
                                            </div>
                                            <div>
                                            <input  
                                            type="password" 
                                            className={`${gStyle['input-control']} form-control`} id="password2" 
                                            placeholder="Re New Password"
                                            onChange={handleChange}
                                            name="password2"
                                            required
                                            />    
                                            </div>
                                        </div>

                                    </div>
                                 
                                 <div className={`${authStyle['wrapper-ch']} `}>
                                    <div className="row d-flex form-check">
                                        <div className='col-1'>
                                            <input className={` ${gStyle['checked-control']} form-check-input`} type="checkbox" value="" id="flexCheckDefault" onChange={e => {}} checked={true} />
                                        </div>
                                        <div className='col-11'>
                                            <label className={`${gStyle['airbnb-lt']} form-check-label`} htmlFor="flexCheckDefault">
                                            I agree to terms & conditions
                                            </label>
                                        </div>
                                            
                                            
                                    </div>
                                 </div> 
                                 <div className={`${authStyle['wrapper-ch']} `}>
                                <button type='submit' className={`${gStyle['bg-color-yellow']} text-white w-100 ${gStyle['noBorder']}`}>Register Account</button>
                                 </div>
                                 </form>
                                 
                                 <div className={`${authStyle['wrapper-ch']} `}>
                                    <hr />
                                 </div>
                                 <div className={`${authStyle['wrapper-ch']} gap-1 d-flex justify-content-center align-items-center`}>
                                            <p className={`${gStyle['airbnb-lt']}`}>Already have account ?</p>
                                            <p><Link className={`text-decoration-none ${gStyle['txt-color-yellow']}`} to='/'>Log-in Here</Link></p>
                                 </div>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register;
