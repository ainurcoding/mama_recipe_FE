import React, {Fragment} from 'react';
import logo from '../assets/img/logo food recipe.png';
import authStyle from '../assets/css/auth.module.css';

const BannerAuth = () => {
    return (
        <Fragment>
            <div className={`col-6 ${authStyle['col-xs-12']} col-sm-12 col-md-6 col-xl-6 col-xxl-6`}>
                        <div className={`${authStyle['banner']} d-flex justify-content-center align-items-center`}>
                            <img src={logo} alt="logo" />
                        </div>
            </div>
        </Fragment>
    )
}

export default BannerAuth;