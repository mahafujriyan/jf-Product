import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link to='/'>
            <img className='h-[75px] w-[100px]'
             src="/assets/Group 395.png" alt="" />
            </Link>
        </div>
    );
};

export default Logo;