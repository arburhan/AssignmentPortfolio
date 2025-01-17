'use client'
import Image from 'next/image';
import React from 'react';
import projectImage from '../../../../public/images/projects/project1.jpg';
import { Button, Card, CardFooter } from '@nextui-org/react';
import { FaLocationArrow } from "react-icons/fa";


const Projects = (): JSX.Element | null => {
    const myProejcts = [
        {
            'name': 'Project 1',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis quis mi tincidunt aliquet. Nullam nec semper nisl. Ut nec justo ac nunc ultricies ultricies.',
            'technology': 'ReactJS, NodeJS, MongoDB',
            'category': 'E-commerce',
            'link': 'https://github.com',
            'image': 'https://via.placeholder.com/150',
            'date': '2021-05-01',
            'status': 'Completed'
        },
        {
            'name': 'Project 2',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis quis mi tincidunt aliquet. Nullam nec semper nisl. Ut nec justo ac nunc ultricies ultricies.',
            'technology': 'ReactJS, NodeJS, MongoDB',
            'category': 'E-commerce',
            'link': 'https://github.com',
            'image': 'https://via.placeholder.com/150',
            'date': '2021-05-01',
            'status': 'Completed'
        },
        {
            'name': 'Project 3',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in turpis quis mi tincidunt aliquet. Nullam nec semper nisl. Ut nec justo ac nunc ultricies ultricies.',
            'technology': 'ReactJS, NodeJS, MongoDB',
            'category': 'E-commerce',
            'link': 'https://github.com',
            'image': 'https://via.placeholder.com/150',
            'date': '2021-05-01',
            'status': 'Completed'
        }
    ]
    return (
        <section className='my-10'>
            <h2 className='text-2xl font-bold text-center my-10'>Projects</h2>
            <div className="max-w-[1500px]  grid grid-cols-1 gap-8 md:grid-cols-3 px-8">
                {
                    myProejcts.map((project, index) =>
                        <Card key={index} isFooterBlurred className="w-full h-[400px] col-span-1 shadow-2xl">
                            <Image
                                alt={project.name}
                                className="z-0 w-full object-cover"
                                src={projectImage}
                                width={500}
                                height={350}
                                loading='lazy'
                            />
                            <CardFooter className="absolute bg-gradient-to-r from-gray-900 via-blue-800 to-teal-800 bottom-0 z-10 border-t border-gray-700 text-white font-sans flex flex-col p-4 shadow-md rounded-b-lg ">
                                <h4 className="text-xl font-semibold py-1">{project.name}</h4>
                                <p className="text-sm font-light">
                                    {project.description.length > 100
                                        ? `${project.description.substring(0, 100)}...`
                                        : project.description}
                                </p>
                                <p className="text-sm font-light py-1"> <span className=' text-green-500'>Category:</span> {project.category}</p>
                                <Button
                                    href={project.link}
                                    className="mt-2 bg-gradient-to-r from-blue-700 to-teal-400 hover:from-teal-400 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all transform hover:scale-105"
                                >
                                    View Project
                                    <FaLocationArrow className="ml-2" />
                                </Button>
                            </CardFooter>


                        </Card>
                    )}
            </div>

        </section>
    );
};

export default Projects;