import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
            <div className='pb-8 pt-40'> 
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Dedicated and enthusiastic front-end developer with a passion for creating visually appealing and user-friendly web experiences. Seeking an opportunity to leverage my technical skills in HTML, CSS, JavaScript and React. Eager to learn and collaborate in a dynamic team environment while continuously expanding my knowledge of modern front- end technologies and design principles.
            </p>
            {/* <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia? Nemo et eveniet modi dignissimos laudantium dolorem animi optio, autem, rerum dolores vero. Blanditiis sunt magni atque debitis eius necessitatibus asperiores magnam nam culpa aliquid non quaerat error, libero dolorum. Similique quod repudiandae natus quas saepe labore, repellendus dolor! Cupiditate!
            </p> */}
        </div>
    </div>
  )
}

export default About
