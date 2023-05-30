import { useState, createContext, useContext, Fragment } from 'react'
import { Link } from "@inertiajs/inertia-react";
import { Transition } from '@headlessui/react'

const DropDownContext = createContext()

const Dropdown = ({ active, children }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((previousState) => !previousState)
  }

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className={
                active
                  ? 'relative inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                  : 'relative inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
            }
      >{children}
      </div>
    </DropDownContext.Provider>
  )
}

const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext)
  return (
    <>
      <div onClick={toggleOpen}>{children}</div>
      {open && <div className='fixed inset-0 z-40' onClick={() => setOpen(false)} />}
    </>
  )
}

const Content = ({ align = 'right', width = '48', contentClasses = 'py-1 bg-white', children }) => {
  const { open, setOpen } = useContext(DropDownContext)

  let alignmentClasses = 'origin-top'

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0'
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0'
  }

  let widthClasses = ''

  if (width === '48') {
    widthClasses = 'w-48'
  }

  return (
    <>
      <Transition
        as={Fragment}
        show={open}
        enter='transition ease-out duration-200'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div
          className={`absolute z-50 mt-2 top-14 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
          onClick={() => setOpen(false)}
        >
          <div className={'rounded-md ring-1 ring-black ring-opacity-5 ' + contentClasses}>{children}</div>
        </div>
      </Transition>
    </>
  )
}

const DropdownLink = ({ active, href, method, as, children }) => {
  return (
    <Link
      href={href}
      method={method}
      as={as}
      className={`block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${active && 'border-l-2 border-indigo-700'}`}
    >
      {children}
    </Link>
  )
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink

export default Dropdown
