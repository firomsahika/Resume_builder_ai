import React from 'react'
import Rating from '../components/Rating'

const Testimony = () => {

    const testimonials = [
        {
            name: "Jone H.",
            job: "Junior web developer",
            rate: 4,
            description: "Found this through TikTok, I'm so glad it popped up on my feed, makes the application process 10X less stressful"
        },
        {
            name: "Jone H.",
            job: "Digital Marketing Specialist",
            rate: 3.5,
            description: "Other than being a genuinely useful product, the customer support is amazing! They answer my emails oftentimes in less than an hr, and even implented features I suggested. "
        },
        {
            name: "Jone H.",
            job: "Content Writer",
            rate: 4.5,
            description: "The cover letter generator was a total lifesaver. I hate writing cover letters now it literally only takes a click, I can send out 100 applications in one sitting. "
        },
        {
            name: "Jone H.",
            job: "Data Scientist",
            rate: 5,
            description: "I used to be skeptical of AI tools, but with every one using them, there is no other way to compete. I'm also able to send out double the applications I used to. Highly recommend it for anyone tired of manual applications! "
        }
    ]


    return (
        <div className="w-full px-20 h-screen flex flex-col items-center justify-center gap-y-20">
            <div>
                <p className='text-5xl font-semibold py-5'>Loved by 100+ Job Seekers</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-x-5'>
                {
                    testimonials.map((tesimony, index) => (
                        <div key={index}
                            className='shadow-xl bg-white border flex flex-col p-6 text-md rounded-2xl gap-y-1 hover:scale-105 transition-transform '
                        >
                            <div className='py-2'>
                                <img />
                                <div>
                                    <p className='font-semibold text-xl'>{tesimony.name}</p>
                                    <p>{tesimony.job}</p>
                                </div>
                            </div>

                            <Rating value={tesimony.rate} />
                            <p className='max-w-xl py-2'>{tesimony.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimony;