import React from 'react';
import Link from 'next/link';

const HomeButton = () => {
    return (
        <Link href="#hero" className="fixed bottom-7 right-20">
                <img src="https://www.svgrepo.com/show/22031/home-icon-silhouette.svg" alt=""
                className='h-10 w-10 p-1 cursor-pointer bg-[#F7AB0A]/20 rounded-full hover:bg-[#F7AB0A] transition duration-300 ease-in-out'
                />
            
        </Link>
    );
};

export default HomeButton;
