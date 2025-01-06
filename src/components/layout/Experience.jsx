import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Experience = () => {
    return (
        <div>
            <div className='bg-[#ffffff] xl:px-32 px-4 py-10 xl:py-20'>
                <div className=" h-full gap-14 flex flex-col xl:flex-row xl:h-[600px]">
                    <div className='xl:w-1/2 h-full'>
                        <div className='mt-20'>
                            <div className='flex items-center gap-2'>
                                {/* <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#1E84B5]' /></span> */}
                                <p className='text-primary'>ABOUT US</p>
                            </div>
                            <div>
                                <h1 className='text-3xl md:text-5xl mt-3 font-bold text-black'>
                                    <span className='text-primary'>Expert Innovators</span> Delivering Exceptional Solutions
                                </h1>
                            </div>
                            <div>
                                <p className='mt-5 text-lg text-gray-500'>Bytenoon is a dynamic IT solutions company dedicated to delivering excellence across a wide range of services. Whether it’s crafting stunning websites, building powerful mobile applications, creating captivating designs, or driving impactful digital marketing campaigns, we are here to turn your ideas into reality.With a team of highly skilled professionals, we specialize in providing innovative, custom-tailored solutions designed to meet the unique needs of our clients.</p>
                                {/* <FontAwesomeIcon icon={faHeart}/> */}
                            </div>
                            <div className='flex flex-wrap items-center gap-4 justify-between mt-10'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <span><FontAwesomeIcon icon={faCircleCheck} className='text-primary text-xl' /></span>
                                        <p className='text-black text-lg font-semibold'>Diverse Expertise</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span><FontAwesomeIcon icon={faCircleCheck} className='text-primary text-xl' /></span>
                                        <p className='text-black text-lg font-semibold'>Client-Centric Approach</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <span><FontAwesomeIcon icon={faCircleCheck} className='text-primary text-xl' /></span>
                                        <p className='text-black text-lg font-semibold'>Tailored Solutions</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <span><FontAwesomeIcon icon={faCircleCheck} className='text-primary text-xl' /></span>
                                        <p className='text-black text-lg font-semibold'>Seamless Execution</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 rounded-[30px] h-[380px] md:h-[600px]'>
                    <img className='rounded-[30px] h-full w-full' src="/about.png" alt="About Us" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience