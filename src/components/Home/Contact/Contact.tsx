
import Image from 'next/image';
import contactImage from '../../../../public/images/contact/contact1.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const contactsIcons = [
        {
            'name': 'Phone',
            'icon': <FaPhoneAlt />,
            'text': '+8801521506542',
            'color': '#61DAFB'
        },
        {
            'name': 'Email',
            'icon': <FaEnvelope />,
            'text': 'arburhanar@gmail.com',
            'color': '#FF5733'
        },
        {
            'name': 'GitHub',
            'icon': <FaGithub />,
            'text': 'arburhan',
            'color': '#339933'
        },
        {
            'name': 'LinkedIn',
            'icon': <FaLinkedin />,
            'text': 'arburhan',
            'color': '#0077B5'
        },
        {
            'name': 'Location',
            'icon': <FaMapMarkerAlt />,
            'text': 'Rajshahi, Bangladesh',
            'color': '#880000'
        }
    ];
    return (
        <section>
            <h2 className='text-2xl font-bold text-center my-10'>Contact Us</h2>
            <div className='flex flex-col  md:flex-row gap-3 items-center justify-center' >
                <div>
                    <Image src={contactImage} alt='Contact' height={500} width={600} loading='lazy' className='rounded-2xl' />
                </div>
                <div>
                    <h3 className='text-xl  text-center py-3'>Contact Information</h3>
                    <div className='px-8'>
                        {
                            contactsIcons.map((contact, index) =>
                                <div key={index} className='flex items-center gap-4 my-2 cursor-pointer transition-transform transform hover:scale-105'>
                                    <span className='text-xl bg-[#d1fae5] p-4 rounded-full transition-transform transform hover:scale-125' style={{ color: contact.color }}>{contact.icon}</span>
                                    <span className='text-lg'>{contact.text}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
