'use client'
import Image from 'next/image';
import BannerImage from '../../../../public/images/banner/imageNoBG.png';
import './Banner.css';
import { Button } from "@heroui/react";
import { IoIosCloudDownload } from "react-icons/io";




const Banner = (): JSX.Element | null => {
    return (
        <section className='flex flex-col-reverse gap-2 md:grid md:grid-flow-col md:items-center   my-20 md:p-4'>
            <div className='md:w-[75%] pt-6 text-[#a6adba]'>
                <p>Assalamualaykum, I&apos;m</p>
                <h2 className="text-2xl font-bold  pb-2 text-[#ffffffe8] BannerText">Md Borhan Uddin Ashik</h2>
                <p>
                    I am a web developer. I like to constantly get acquainted with new technologies and take on challenges, and I find joy in it. Recently, I created some full-stack websites that you can find in the projects area.
                </p>
                <div className='flex gap-5 md:gap-10 items-center my-3'>
                    <Button className='px-8 py-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white'>Download Resume <IoIosCloudDownload className='text-2xl ' /> </Button>
                    <Button className='px-8 py-6 underline bg-[#334155] text-green-500 '>Hire Me</Button>
                </div>
            </div>
            <div>
                <Image className='bg-[#2a303c17] border-2 border-opacity-75 border-[#2a303c] backdrop-blur-md rounded-lg' loading='lazy' src={BannerImage} alt="Banner" width={400} height={400} />
            </div>
        </section >
    );
};

export default Banner;