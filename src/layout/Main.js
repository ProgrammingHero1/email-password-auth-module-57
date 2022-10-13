import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h5 className='text-center m-4'>My Email password Authentication</h5>

            <Outlet></Outlet>

        </div>
    );
};

export default Main;