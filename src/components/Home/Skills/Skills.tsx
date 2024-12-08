import { SiPhp } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiMongoose } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Skills = () => {
    const myskills = [
        {
            'name': 'ReactJS',
            'icon': <FaReact />,
            'color': '#61DAFB'
        },
        {
            'name': 'NextJS',
            'icon': <SiNextdotjs />,
            'color': '#000000'
        },
        {
            'name': 'NodeJS',
            'icon': <FaNodeJs />,
            'color': '#339933'
        },
        {
            'name': 'MongoDB',
            'icon': <SiMongodb />,
            'color': '#47A248'
        },
        {
            'name': 'Mongoose',
            'icon': <SiMongoose />,
            'color': '#880000'
        },
        {
            'name': 'MySQL',
            'icon': <SiMysql />,
            'color': '#4479A1'
        },
        {
            'name': 'JavaScript',
            'icon': <SiJavascript />,
            'color': '#F7DF1E'
        },
        {
            'name': 'PHP',
            'icon': <SiPhp />,
            'color': '#777BB4'
        },
        {
            'name': 'C++',
            'icon': <SiCplusplus />,
            'color': '#00599C'
        }
    ]
    return (
        <section className='p-5 my-10'>
            <h2 className="text-2xl font-bold text-center my-10">Skills</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-y-10 md:gap-x-0 mt-4">
                {myskills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <div className="mb-2 text-4xl rounded-full bg-gradient-to-r from-[#e0e7ff] via-[#d1fae5] to-[#dbeafe] shadow-lg transform transition duration-500 hover:scale-105 p-8 md:p-10 cursor-pointer" style={{ color: skill.color }}>{skill.icon}</div>
                        <p className="font-sans">{skill.name}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Skills;