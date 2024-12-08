import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='mt-10'>
            <div className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-xl">Md Borhan Uddin Ashik ❤</h2>
                            <p className="text-balance">© 2024 All rights reserved.</p>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white">Home</Link>
                            <Link href="#" className="text-gray-400 hover:text-white">About</Link>
                            <Link href="#" className="text-gray-400 hover:text-white">Projects</Link>
                            <Link href="#" className="text-gray-400 hover:text-white">Contact</Link>
                            <Link href="#" className="text-gray-400 hover:text-white">Blog</Link>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-400">Follow me on</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <Link href="https://x.com/arBurhan0" className="text-blue-500 hover:text-white text-5xl">
                                <FaTwitter />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;