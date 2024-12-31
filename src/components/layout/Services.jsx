import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightDots, faMedal, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
  return (
    <div className='py-10 px-5 lg:px-10 xl:px-36'>
        <div className='flex items-center justify-center'>
            <h1 className='text-xl md:text-4xl font-semibold md:font-extrabold text-center'>What you will get those <br className='hidden md:block' /> are the need for you</h1>
        </div>
        <div className='mt-10'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
                <div className='w-full h-48 shadow-lg rounded-md p-7'>
                    <div className='flex justify-center gap-5'>
                        <div>
                        <FontAwesomeIcon icon={faClock} className='text-secondry text-3xl md:text-4xl' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold md:text-2xl md:font-bold'>Fast Growing system</h2>
                            <p className='text-gray-400 text-sm md:text-base mt-2 line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos ut tempora, non corrupti voluptas repudiandae iusto ullam delectus distinctio magnam ratione fuga animi. Iusto labore est adipisci fuga incidunt..</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-48 shadow-lg rounded-md p-7'>
                    <div className='flex justify-center gap-5'>
                        <div>
                        <FontAwesomeIcon icon={faArrowUpRightDots} className='text-secondry text-3xl md:text-4xl' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold md:text-2xl md:font-bold'>Fast Growing system</h2>
                            <p className='text-gray-400 text-sm md:text-base mt-2 line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos ut tempora, non corrupti voluptas repudiandae iusto ullam delectus distinctio magnam ratione fuga animi. Iusto labore est adipisci fuga incidunt..</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-5 lg:flex-row items-center justify-center gap-5'>
            <div className='w-full h-48 shadow-lg rounded-md p-7'>
                    <div className='flex justify-center gap-5'>
                        <div>
                        <FontAwesomeIcon icon={faRocket} className='text-secondry text-3xl md:text-4xl' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold md:text-2xl md:font-bold'>Fast Growing system</h2>
                            <p className='text-gray-400 text-sm md:text-base mt-2 line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos ut tempora, non corrupti voluptas repudiandae iusto ullam delectus distinctio magnam ratione fuga animi. Iusto labore est adipisci fuga incidunt..</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-48 shadow-lg rounded-md p-7'>
                    <div className='flex justify-center gap-5'>
                        <div>
                        <FontAwesomeIcon icon={faMedal} className='text-secondry text-3xl md:text-4xl' />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold md:text-2xl md:font-bold'>Fast Growing system</h2>
                            <p className='text-gray-400 text-sm md:text-base mt-2 line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos ut tempora, non corrupti voluptas repudiandae iusto ullam delectus distinctio magnam ratione fuga animi. Iusto labore est adipisci fuga incidunt..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services