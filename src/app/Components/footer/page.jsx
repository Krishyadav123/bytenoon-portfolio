"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
// import { Link } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-white sm:justify-start">
              <p className='text-3xl font-semibold'>Room-Rental</p>
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              Room-Rental is a platform that connects landlords and tenants, providing a convenient and hassle-free way to find and rent rooms.
            </p>

            <div>
              <div className='flex gap-6 mt-10'>
                <FontAwesomeIcon icon={faInstagram} className='text-white text-3xl cursor-pointer hover:scale-[1.2] duration-200' />
                <FontAwesomeIcon icon={faFacebook} className='text-white text-3xl cursor-pointer hover:scale-[1.2] duration-200' />
                <FontAwesomeIcon icon={faWhatsapp} className='text-white text-3xl cursor-pointer hover:scale-[1.2] duration-200' />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Quick Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link href="/" className="text-white transition hover:text-white/75">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/pages/search" className="text-white transition hover:text-white/75">
                    Go To Search Page
                  </Link>
                </li>
                <li>
                  <Link href="/pages/seaprate-room" className="text-white transition hover:text-white/75">
                    Go To Seaprate-room page
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-white transition hover:text-white/75">
                    Web Development
                  </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75"> Web Design </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75"> Marketing </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75"> Google Ads </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-white transition hover:text-white/75"> Whatsapp </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75"> Linkdin </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75"> Github </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  >
                    <span className="flex-1 text-white">xyz@gmail.com</span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  >

                    <span className="flex-1 text-white">+91 6261113080</span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2023 Room-Rental</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer