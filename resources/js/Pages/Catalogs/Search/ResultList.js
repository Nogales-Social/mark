import Pagination from '@/Components/Pagination'
import { Transition } from '@headlessui/react'
import { ArrowsRightLeftIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import React, { Fragment } from 'react'
import DisplayExchanges from './DisplayExchanges'

const noResults = () => (
  <div className='flex items-center justify-center'>
    <div className='inline-flex items-center'>
      <ExclamationTriangleIcon className='w-5 h-5 mr-2 text-red-500' /> Lo
      sentimos no hemos podido encontrar resultados
    </div>
  </div>
)

const displayItems = ({ sku, description, brand, exchanges, price }, index) => (
  <div
    className={`flex items-center justify-between ${index > 0 && 'pt-4'}`}
    key={index}
  >
    <div>
      <h3>{sku}</h3>
      <div className='flex divide-x-2 space-x-2 text-sm'>
        <div>{brand}</div>
        <div className='pl-2'>{description}</div>
      </div>
    </div>
    <div className='inline-flex space-x-2 divide-x divide-gray-200 items-center'>
      <div>
        <h3>{new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(price)}</h3>
      </div>
      <div className='pl-4'>
        <DisplayExchanges items={exchanges} />
      </div>
    </div>
  </div>
)

export default function ResultList ({ items, show = true }) {
  return (
    <Transition show={show} as={Fragment} leave='duration-200'>
      <section>
        <div className='max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow dark:divide-gray-700 md:p-6 dark:border-gray-700 relative overflow-x-auto sm:rounded-lg bg-gray-50'>
          {items.data.length > 0
            ? items.data.map((item, index) => displayItems(item, index))
            : noResults()}
        </div>
        {items.data.length > 0
          ? (
            <div className='mt-4 flex justify-end items-center'>
              <Pagination links={items.meta.links} />
            </div>
            )
          : <div />}
      </section>
    </Transition>
  )
}
