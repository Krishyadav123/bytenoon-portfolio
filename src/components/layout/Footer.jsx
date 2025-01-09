"use client";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
// import { Link } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-white sm:justify-start">
              <p className='text-3xl font-semibold'>Bytenoon</p>
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi aspernatur vero consequatur? Explicabo esse culpa quidem incidunt quisquam suscipit?
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
                  <Link href="/about" className="text-white transition hover:text-white/75">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white transition hover:text-white/75">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-white transition hover:text-white/75">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/internship" className="text-white transition hover:text-white/75">
                    Internship
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white transition hover:text-white/75">
                    Contact
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
                  <a className="text-white transition hover:text-white/75"> App Development </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75">Video Editing </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-white/75">Photos&Video Editing </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-white/75"> Graphics Design </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-white/75"> Ui/Ux Design </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-white/75"> Social Media Marketing </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-white transition cursor-pointer hover:text-white/75"> Whatsapp </a>
                </li>

                <li>
                  <a className="text-white transition cursor-pointer hover:text-white/75"> Linkdin </a>
                </li>

                <li>
                  <a className="text-white transition cursor-pointer hover:text-white/75"> Github </a>
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
            <p className="text-sm">
              <span className="block text-gray-300 sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-white underline"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-white underline"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">&copy; 2025 Bytenoon</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer