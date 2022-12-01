import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authStyle from '../../assets/css/auth.module.css';
import gStyle from '../../assets/css/general.module.css';
import { Navbar, Footer, SpaceEmpty } from '../../components/main/Main';
import BannerAuth from '../../components/BannerAuth';
import { useSelector ,useDispatch } from 'react-redux';
import { UserLogin } from '../../redux/action/user';
// import action


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const stateUser = useSelector((state) => {
        // user is the name of reducer you can check this one in index.js on reducer folder
        return state.user
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(form.password)
        
        const handleSuccess = (data) => {
            // console.log(data)
            if (data.code === 500) {
                alert("user not found, don't have account ? click on sign-up")
                console.log(stateUser)
            } else {
                localStorage.setItem("token", data.data.token);
                localStorage.setItem("data", JSON.stringify(data.data.data));
                localStorage.setItem("username", JSON.stringify(data.data.data.name));
                alert('login success');
                console.log(stateUser)
                return navigate('/landing');
            }
        }
            
        
            const body = {
                email: form.email,
                password: form.password,
            };

            dispatch(UserLogin(body, handleSuccess));
                // .then((response) => {

                //     console.log(response)
                //     if (response.data.code === 500) {
                //         alert("user not found, don't have account ? click on sign-up")
                //     } else {
                //         localStorage.setItem("token", response.data.data.token);
                //         localStorage.setItem("data", JSON.stringify(response.data.data.data));
                //         localStorage.setItem("username", JSON.stringify(response.data.data.data.name));
                //         alert('login success');
                //         return navigate('/landing');
                //     }


                // })
                // .catch((error) => {
                //     console.log(error);
                // });

        
    }
    return (
        <Fragment>
            <div className={`${authStyle['container-auth']}`}>
                <div className={`h-100 row justify-content-center g-2`}>

                    {/* banner */}
                    <BannerAuth />
                    {/* banner */}


                    <div className={`col-6 ${authStyle['col-xs-12']} col-sm-12 col-md-6 col-xl-6 col-xxl-6 `}>
                        <div className='h-100 w-100 r d-flex align-items-center justify-content-center'>
                            <div className={`${authStyle['wrapper']} gap-3 d-flex flex-column align-items-center justify-content-center `}>
                                <div className={`${authStyle['wrapper-ch']} text-center`}>
                                    <p className={`h3 ${gStyle['airbnb-bd']} ${gStyle['txt-color-yellow']}`}>Welcome</p>
                                </div>
                                <div className={`${authStyle['wrapper-ch']} text-center`}>
                                    <p className={`${gStyle['airbnb-lt']} text-muted`}>Log in into your existing account</p>
                                </div>
                                <div className={`${authStyle['wrapper-ch']} `}>
                                    <hr />
                                </div>
                                <form className='w-100' onSubmit={(e) => onSubmitHandler(e)}>
                                    <div className={`${authStyle['wrapper-ch']} `}>

                                        <div className="d-flex flex-column gap-2 mb-3">
                                            <div>
                                                <label htmlFor="email" className={`${gStyle['airbnb-lt']} fs-6 form-label`}>E-mail</label>
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    className={`${gStyle['input-control']} form-control`} id="email"
                                                    placeholder="name@example.com"
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
                                                <label htmlFor="password" className={`${gStyle['airbnb-lt']} form-label`}>Password</label>
                                            </div>
                                            <div>
                                                <input
                                                    type="password"
                                                    className={`${gStyle['input-control']} form-control`} id="password"
                                                    placeholder="input your password"
                                                    onChange={handleChange}
                                                    name="password"
                                                    required
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div className={`${authStyle['wrapper-ch']} `}>
                                        <div className="row d-flex form-check">
                                            <div className='col-1'>
                                                <input className={` ${gStyle['checked-control']} form-check-input`} type="checkbox" value="" id="flexCheckDefault" defaultChecked="true" />
                                            </div>
                                            <div className='col-11'>
                                                <label className={`${gStyle['airbnb-lt']} form-check-label`} htmlFor="flexCheckDefault">
                                                    I agree to terms & conditions
                                                </label>
                                            </div>


                                        </div>
                                    </div>
                                    <div className={`${authStyle['wrapper-ch']} `}>
                                        <button type='submit' className={`${gStyle['bg-color-yellow']} text-white w-100 ${gStyle['noBorder']}`}>{stateUser.isLoading ? "Loading.." : "Login"}</button>
                                    </div>
                                </form>
                                <div className={`${authStyle['wrapper-ch']} text-end`}>
                                    <p><Link to='/auth/forgot_pw' className={`text-decoration-none ${gStyle['airbnb-lt']} text-dark `}>Forgot Password</Link></p>
                                </div>
                                <div className={`${authStyle['wrapper-ch']} `}>
                                    <hr />
                                </div>
                                <div className={`${authStyle['wrapper-ch']} gap-1 d-flex justify-content-center align-items-center`}>
                                    <p className={`${gStyle['airbnb-lt']}`}>Don't have an account ?</p>
                                    <p><Link className={`text-decoration-none ${gStyle['txt-color-yellow']}`} to='/register'>Sign-up</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;
