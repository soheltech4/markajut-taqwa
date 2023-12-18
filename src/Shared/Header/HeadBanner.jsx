import React from 'react';
import "arabic-fonts/src/css/arabic-fonts.css";

const HeadBanner = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <p>FB</p>
                    <p>FB</p>
                    <p>FB</p>
                </div>
                <div className='flex gap-2'>
                    <p>+8801776462919</p>
                    <p>markajuttaq@gmail.com</p>
                </div>
            </div>
            <div className='mx-auto gap-10'>
                <div>
                    <img src="/public/logo.png" alt="" />
                </div>
                <div>
                    <img src="/public/arabic.png" alt="" />
                    <h1>Markajut Taqwa Madrasah</h1>
                    <h1 className='font-family: AponaLohit'>মারকাযুত তাকওয়া মাদ্রাসা</h1>
                </div>
            </div>
        </div>
    );
};

export default HeadBanner;