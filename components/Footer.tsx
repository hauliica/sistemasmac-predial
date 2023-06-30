import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-orange-600 text-white py-10 px-8">
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <h2 className="text-lg font-semibold mb-3">Your Company Name</h2>
                    <p>
                        Delivering tax solutions online with a secure and enjoyable platform.
                    </p>
                    {/* Add social media links here */}
                    <div className="flex mt-4 space-x-3">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Service 1</a></li>
                        <li><a href="#" className="hover:underline">Service 2</a></li>
                        <li><a href="#" className="hover:underline">Service 3</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Help</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 text-center text-sm border-t border-orange-800 pt-4">
                &copy; {currentYear} Your Company Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;