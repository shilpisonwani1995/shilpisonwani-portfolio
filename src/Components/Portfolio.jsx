import React from 'react';
import Shoper from '../assets/portfolio/Shoper.png'
import foodie from '../assets/portfolio/foodie.png'
import imageIpl from '../assets/portfolio/imageIpl.png'
import weather from '../assets/portfolio/weather.png'
import jokes from '../assets/portfolio/jokes.png'
import landingPage from '../assets/portfolio/landingPage.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            name: "SHOPER", 
            description: "i am creating a shoper app by using react js. Shoper is a user-friendly e-commerce app. users can easily browse through a variety of products and add items to their cart effortlessly.", 
            src: Shoper,
            demoLink: "https://transcendent-chebakia-c1b23f.netlify.app/",
            codeLink: "https://github.com/shilpisonwani1995/SHOPER_E-commerce",
        },
        {
            id: 2, 
            name: "IPL-WEB", 
            description: "i have creat ipl app. fetch the data from local storage of teams, players and create button to add player and add team then create one search bar where we search teams", 
            src: imageIpl,
            demoLink: "https://shilpisonwani1995.github.io/IPL-web-app/",
            codeLink: "https://github.com/shilpisonwani1995/IPL-web-app",
        },
        {
            id: 3, 
            name: "WEATHER APP", 
            description: "A weather app built using React.js allows users to easily access current weather conditions, forecasts. the app can fetch real-time data and present it in a visually appealing and user-friendly interface. ", 
            src: weather,
            demoLink: "https://transcendent-chebakia-c1b23f.netlify.app/",
            codeLink: "https://github.com/shilpisonwani1995/weatherspp",
        },
        {
            id: 4, 
            name: "RAMDOM JOKES", 
            description: "code is a simple joke generator implemented in JavaScript. It utilizes an array named myjokes, which contains various jokes. The JavaScript part of the code selects a random joke from the myjokes array when a button clicked", 
            src: jokes,
            demoLink: "https://shilpisonwani1995.github.io/Random_jokes/",
            codeLink: "https://github.com/shilpisonwani1995/Random_jokes",
        },
        {
            id: 5, 
            name: "FOODIE", 
            description: "A website Foodies includes various sections such as a header with navigation links. the document imports Bootstrap CSS and JavaScript libraries to enhance the styling and functionality of the website.", 
            src: foodie,
            demoLink: "https://shilpisonwani1995.github.io/foodie.io/",
            codeLink: "https://github.com/shilpisonwani1995/foodie.io",
        },
        {
            id: 6, 
            name: "LANDING PAGE", 
            description: "This code comprises the structure and functionality of a social media landing page. It utilizes image carousel effects, implements a menu toggle feature with JavaScript for navigation, and ensures smooth scrolling functionality.", 
            src: landingPage,
            demoLink: "https://shilpisonwani1995.github.io/SocialMedia_Landing/",
            codeLink: "https://github.com/shilpisonwani1995/SocialMedia_Landing",
        },
    ];

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    
                    {portfolios.map(({ id, src, name, description, demoLink, codeLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}

                                <a href={demoLink} target='_blank' rel='noopener noreferrer'
                                className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Demo
                                </a>
                                <a href={codeLink} target='_blank' rel='noopener noreferrer'
                                className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Code
                                </a>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{name}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
