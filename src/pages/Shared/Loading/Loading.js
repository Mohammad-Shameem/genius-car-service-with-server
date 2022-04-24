import React from 'react';
import loadingLogo from '../../../images/loading/chicken-loading.gif'
import './Loading.css'
const Loading = () => {
    return (
        <div className='loading'>

            <img src={loadingLogo} alt="" />

        </div>
    );
};

export default Loading;