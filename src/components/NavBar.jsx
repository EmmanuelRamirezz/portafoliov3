import { Link } from 'react-scroll';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useContext } from 'react';
import { UserContext } from "../context/UserProvider";
const htmlID = document.getElementById('htmlID');

const navigationES = [
  { name: 'Sobre mi', href: '#about', current: false, id: "about" },
  { name: 'Educación', href: '#education', current: false, id: "education" },
  { name: 'Técnologías', href: '#tecs', current: false, id: "techs" },
  { name: 'Proyectos', href: '#projects', current: false, id: "projects" },
  { name: 'Contacto', href: '#contact', current: false, id: "contact" },
]
const navigationEN = [
  { name: 'About', href: '#about', current: false, id: "about" },
  { name: 'Education', href: '#education', current: false, id: "education" },
  { name: 'Technologies', href: '#tecs', current: false, id: "techs" },
  { name: 'Projects', href: '#projects', current: false, id: "projects" },
  { name: 'Contact', href: '#contact', current: false, id: "contact" },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [lan, setLan] = useContext(UserContext);

  //boton toggle para lightmode
  const [lightMode, setLightMode] = useState(false);
  function clickHandler() {
    setLightMode(!lightMode)
  }
  //boton toggle para idioma
  function clickHandler2() {
    setLan(!lan)
  }
  return (
    <Disclosure as="nav" className="sticky top-0 z-20 bg-navL dark:bg-navD">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-evenly sm:items-stretch sm:justify-start">
                <Link className="flex flex-shrink-0 items-center  hover:cursor-pointer" to="about" spy={true} smooth={true} offset={-50} duration={500}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-black dark:text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className = "flex space-x-4 max-md:space-x-1">
                    {/* Toggle idioma navbar */}
                    {
                      lan ?
                        navigationEN.map((item) => (
                          <Link
                            to={item.id}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current ? 'underline underline-offset-8 decoration-buttons decoration-2 text-black dark:text-white' : 'dark:text-gray-300 hover:bg-gray-400 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'true' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))
                        :
                        navigationES.map((item) => (
                          <Link
                            to={item.id}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}

                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'underline underline-offset-8 decoration-buttons decoration-2 text-black dark:text-white' : 'dark:text-gray-300 hover:bg-gray-400 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))

                    }
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div onClick={clickHandler2} className='rounded-3xl hover:bg-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white    text-black'>
                  <button
                    type="button"
                    className="rounded-full p-1"
                  >
                    <span className="sr-only">Change language</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                  </button>
                </div>
                {/* Light and dark mode button */}
                <div onClick={clickHandler} className='rounded-3xl hover:bg-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white text-black max-sm:ml-4'
                >
                  {lightMode ? htmlID.classList.remove('dark') : htmlID.classList.add('dark')}
                  {/* Light Mode */}
                  <button
                    type="button"
                    className="rounded-full p-1     "
                  >
                    <span className="sr-only">Change language</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>

                  </button>
                  {/* Dark Mode */}
                  <button
                    type="button"
                    className="rounded-full p-1"
                  >
                    <span className="sr-only">Change language</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-0 pb-3 pt-2">
              {lan ?
                navigationEN.map((item) => (

                  <Disclosure.Button
                    key={item.name}
                    className={classNames(
                      item.current ? 'dark:bg-gray-700 dark:text-white text-black bg-mainL' : 'text-black dark:text-white hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))
                :
                navigationES.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className={classNames(
                      item.current ? 'dark:bg-gray-700 dark:text-white text-black bg-mainL' : 'text-black dark:text-white hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))
              }
              { }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
