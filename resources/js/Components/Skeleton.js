import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

const printItems = (items) => {
  const rows = []
  for (let index = 0; index < items; index++) {
    rows.push(
      <div className={`flex items-center justify-between ${index > 0 && 'pt-4'}`} key={index}>
        <div>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5' />
          <div className='w-64 h-2 bg-gray-200 rounded-full dark:bg-gray-700' />
        </div>
        <div className='inline-flex space-x-2 divide-x divide-gray-200'>
          <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-16' />
          <div className='pl-4'>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-8' />
          </div>
        </div>
      </div>
    )
  }

  return rows
}

export default function Skeleton ({ items = 0, show = false }) {
  return (
    <Transition as={Fragment} leave='duration-200' show={show}>
      <div
        role='status'
        className='max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700'
      >
        {printItems(items)}
      </div>
    </Transition>
  )
}
