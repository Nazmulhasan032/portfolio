import React from 'react';
import './MyProject.css';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';

const MyProjects = () => {
    return (
        <>
            <div className="text-center">
                <p className="font-general-medium text-2xl sm:text-4xl mt-12 mb-1 text-ternary-dark dark:text-ternary-light">
                    Project Portfolio
                </p>
            </div>
            {/* project component start */}

            <div className='flex flex-col sm:flex-row mt-20'>
                <div className="image-wrap w-1/2 mr-4">
                    <img src={image1} alt="image1" />
                </div>
                <div className='w-1/2 ml-8'>
                    <p className="font-general-medium text-3xl sm:text-4xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        Nazmul Music Academy
                    </p>
                    <p className="text-xl sm:text-2xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        <p className='text-xl'>
                            This is about a Music School website. <br />
                            Here student can enroll his/her class and has to pay for start classes. <br />
                            Teacher can see his classes, how much student. also he can remove his classes. <br />
                            Admin can manage all users, delete or update any user to admin or instructor. <br />
                            Admin also can added new class by his preference. <br />
                        </p>
                        <p className='text-xl mt-2'>
                            <span className='font-bold'>Technologies used:</span> React.js, Tailwind CSS, Daisy UI, <br /> Firebase Authentication, Express.js, MongoDB, JWT
                        </p>
                    </p>
                    <p className="font-general-medium sm:text-4xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://nazmulacademy-ea9ee.web.app/" target="__blank">Live site</a>
                        </button>
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://github.com/Nazmulhasan032/Music_school_client_site" target="__blank">GitHub-client</a>
                        </button>
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://github.com/Nazmulhasan032/music_school_server_site" target="__blank">GitHub-server</a>
                        </button>

                    </p>
                </div>
            </div>

            {/* project component starts */}
            <div className='flex flex-col sm:flex-row mt-20'>

                <div className='w-1/2 ml-8 mr-4'>
                    <p className="font-general-medium text-3xl sm:text-4xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        Toy car store website
                    </p>
                    <p className="text-xl sm:text-2xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        <p className='text-xl'>
                            This is about a Toy car store website. <br />
                            In this website Firebase Authenticated. So need to signup first. <br />
                            Seller can post his product in store <br />
                            User Can be filter by price and also can search by name.
                        </p>
                        <p className='text-xl mt-2'>
                            <span className='font-bold'>Technologies used:</span>  React.js, Tailwind CSS, Daisy UI. Firebase Authentication, Express.js, MongoDB 
                        </p>

                    </p>
                    <p className="font-general-medium sm:text-4xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://nazmul-toy-store.web.app/" target="__blank">Live site</a>
                        </button>
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://github.com/Nazmulhasan032/toy_store_client-site" target="__blank">GitHub-client</a>
                        </button>
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://github.com/Nazmulhasan032/toy-store_server-site" target="__blank">GitHub-server</a>
                        </button>

                    </p>
                </div>
                <div className="image-wrap w-1/2">
                    <img src={image2} alt="image2" />
                </div>
            </div>
            {/* project component ends */}

            <div className='flex flex-col sm:flex-row mt-20'>
                <div className="image-wrap w-1/2 mr-4">
                    <img src={image3} alt="image3" />
                </div>
                <div className='w-1/2 ml-8'>
                    <p className="font-general-medium text-3xl sm:text-4xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        Chief Blog website
                    </p>
                    <p className="text-xl sm:text-2xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        <p className='text-xl'>
                            This is about a Chief Blog website. <br />
                            In this website Firebase Authenticated. So need to signup first. <br />
                            User can see every chief details by clicking details button. <br />
                            User can also add chief favorite
                        </p>
                        <p className='text-xl mt-2'>
                            <span className='font-bold'>Technologies used:</span> React.js, Tailwind CSS, Daisy UI. Firebase Authentication, Express.js, MongoDB
                        </p>

                    </p>
                    <p className="font-general-medium sm:text-4xl mt-4 mb-1 text-ternary-dark dark:text-ternary-light">
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://nazmul-kitchen.web.app/" target="__blank">Live site</a>
                        </button>
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://github.com/Nazmulhasan032/nazmul_kitchen_client-site" target="__blank">GitHub-client</a>
                        </button>
                        <button className='custom-button mr-4'>
                            <a className="text-xl font-bold" href="https://github.com/Nazmulhasan032/nazmul_kitchen_server-site" target="__blank">GitHub-server</a>
                        </button>

                    </p>
                </div>
            </div>
            {/* project component ends */}

            



        </>
    );
};

export default MyProjects;