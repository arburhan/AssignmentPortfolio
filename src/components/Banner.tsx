'use client'
import Image from 'next/image';
import BannerImage from '../../public/images/banner/imageNoBG.png';
import './Banner.css';
import { Button } from '@nextui-org/react';


const Banner = (): JSX.Element | null => {
    return (
        <section className='flex flex-col-reverse gap-2 md:grid md:grid-flow-col md:items-center   my-20 md:p-4'>
            <div className='md:w-[75%] pt-6 text-[#a6adba]'>
                <p>Assalamualaykum, I&apos;m</p>
                <h2 className="text-2xl font-bold py-2 text-[#ffffffe8] BannerText">Md Borhan Uddin Ashik</h2>
                <p>
                    I am a web developer. I like to constantly get acquainted with new technologies and take on challenges, and I find joy in it. Recently, I created some full-stack websites that you can find in the projects area.
                </p>
                <div>
                    <Button color="primary">Button</Button>
                </div>
            </div>
            <div className='' style={{ transform: 'scale(1.1)' }}>
                <Image className='bg-[#2a303c3f] border-2 border-opacity-75 border-[#2a303c] backdrop-blur-md rounded-lg' loading='lazy' src={BannerImage} alt="Banner" width={400} height={400} />
            </div>
        </section >
    );
};

export default Banner;