import { Fragment } from 'react'
import Link from 'next/link'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CheckIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
  } from '@heroicons/react/outline'
  import { ChevronDownIcon } from '@heroicons/react/solid'



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Header(){
 


    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                  alt=""
                />
              </a>
            </div>
 
            <Link href='/'>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </a>
              </Link>
              <Link href='/pricing'>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </a>
              </Link>
              <Link href='/about'>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
              </Link>
              <Link href='/contact'>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </a>
              </Link>

              
            <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
              {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
              <a
                href="#"
                className="whitespace-nowrap bg-blue-100 border border-transparent rounded-md py-2 px-4 inline-flex items-center justify-center text-base font-medium text-blue-700 hover:bg-blue-200"
              >
                Sign up
              </a> */}
            </div>
          </div>
        </div>
        

    )
}