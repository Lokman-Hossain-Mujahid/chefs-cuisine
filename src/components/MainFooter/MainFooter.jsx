import { Footer } from 'flowbite-react';
import React from 'react';

const MainFooter = () => {
    return (
        <div>
            <Footer >
                <div className="w-full bg-red-500 mt-8">
                    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 ">
                        <div className=''>
                            <Footer.Title className='text-white' title="Company" />
                            <Footer.LinkGroup className='text-white' col={true}>
                                <Footer.Link  href="#">
                                    About
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Careers
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Brand Center
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-white' title="help center" />
                            <Footer.LinkGroup className='text-white' col={true}>
                                <Footer.Link href="#">
                                    Discord Server
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Twitter
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Facebook
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Contact Us
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-white' title="legal" />
                            <Footer.LinkGroup className='text-white' col={true}>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Licensing
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-white' title="download" />
                            <Footer.LinkGroup className='text-white' col={true}>
                                <Footer.Link href="#">
                                    iOS
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Android
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Windows
                                </Footer.Link>
                                <Footer.Link href="#">
                                    MacOS
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div className="w-full bg-red-200 py-6 px-4 sm:flex sm:items-center sm:justify-between lg:justify-center">
                        <Footer.Copyright
                            href="#"
                            by="ItalianCuisine™"
                            year={2023}
                        />
                        
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default MainFooter;