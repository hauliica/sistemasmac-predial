// import React from 'react';
//
// const Footer: React.FC = () => {
//     const currentYear = new Date().getFullYear();
//
//     return (
//         <footer className="bg-orange-600 text-white py-10 px-8">
//             <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//                 <div>
//                     <h2 className="text-lg font-semibold mb-3">Your Company Name</h2>
//                     <p>
//                         Delivering tax solutions online with a secure and enjoyable platform.
//                     </p>
//                     {/* Add social media links here */}
//                     <div className="flex mt-4 space-x-3">
//                         <a href="#"><i className="fab fa-facebook-f"></i></a>
//                         <a href="#"><i className="fab fa-twitter"></i></a>
//                         <a href="#"><i className="fab fa-instagram"></i></a>
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-semibold mb-3">Services</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="hover:underline">Service 1</a></li>
//                         <li><a href="#" className="hover:underline">Service 2</a></li>
//                         <li><a href="#" className="hover:underline">Service 3</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="hover:underline">About Us</a></li>
//                         <li><a href="#" className="hover:underline">Contact Us</a></li>
//                         <li><a href="#" className="hover:underline">Help</a></li>
//                         <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className="text-lg font-semibold mb-3">Legal</h3>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
//                         <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//                         <li><a href="#" className="hover:underline">Cookie Policy</a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="mt-10 text-center text-sm border-t border-orange-800 pt-4">
//                 &copy; {currentYear} Your Company Name. All rights reserved.
//             </div>
//         </footer>
//     );
// };
//
// export default Footer;

import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-orange-600 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {/* Logo and a small description */}
                <div className="space-y-2 text-center sm:text-left">
                    <svg className="h-8 w-8 mx-auto sm:mx-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <p className="font-serif text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* About and Contact links */}
                <div className="space-y-2 text-center sm:text-left">
                    <p className="font-semibold">Quick Links</p>
                    <a href="about" className="block hover:underline">About Us</a>
                    <a href="contact" className="block hover:underline">Contact Us</a>
                </div>

                {/* Social links */}
                <div className="space-y-2 text-center sm:text-left">
                    <p className="font-semibold">Follow Us</p>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block hover:underline">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block hover:underline">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block hover:underline">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;