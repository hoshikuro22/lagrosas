import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-f h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className="mt-20 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora obcaecati recusandae eum deleniti ea dolor placeat repudiandae minima! Quaerat eos voluptatem non cumque rem soluta cum id, veritatis quia? Ducimus.
            </p> 
            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore incidunt quia porro obcaecati soluta veritatis eaque totam adipisci quam vitae accusantium modi, mollitia ducimus sunt asperiores. Odit neque iure deleniti illum incidunt doloribus officia facilis laudantium aspernatur earum voluptas ducimus laborum natus quos cupiditate, placeat, iusto tempora omnis veniam.
            </p> 
        </div>
    </div>
  )
}

export default About