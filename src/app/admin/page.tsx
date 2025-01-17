import React from 'react';
import LoginAdmin from './loginAdmin';

const page = (): JSX.Element | null => {
    return (
        <section className=' h-screen'>
            <div className='text-center pt-20'>
                <h2 className=' text-2xl'>Admin Brother</h2>
            </div>
            <LoginAdmin />
        </section>
    );
};

export default page;