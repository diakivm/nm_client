import * as React from 'react';

import './index.scss'

export default function Footer() {

    return (
        <div className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__logo'>AppCo</h1>
                <h3 className='footer__info'>All rights reserved by ThemeTags</h3>
                <h3 className='footer__info'>Copyrights © 2019.</h3>
            </div>
        </div>
    );
}