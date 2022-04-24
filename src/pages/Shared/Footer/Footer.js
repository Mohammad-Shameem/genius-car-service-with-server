import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p><small>copyright  <FontAwesomeIcon icon={faCopyright} />  {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;