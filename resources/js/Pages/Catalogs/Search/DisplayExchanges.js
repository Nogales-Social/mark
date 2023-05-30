import Modal from '@/Components/Modal'
import React, { useState } from 'react'
import { ArrowsRightLeftIcon } from '@heroicons/react/20/solid'

export default function DisplayExchanges ({ items }) {
  const [displayExchanges, setDisplayExchanges] = useState(false)
  const closeModal = () => setDisplayExchanges(false)
  const showDisplayExchanges = () => setDisplayExchanges(true)

  console.log(items)

  return (
    <section>
      <button
        type='button'
        className='text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
        onClick={showDisplayExchanges}
      >
        <ArrowsRightLeftIcon className='w-3 h-3' />
        <span className='sr-only'>Exchanges</span>
      </button>

      <Modal show={displayExchanges} onclose={closeModal}>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-300'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                SKU
              </th>
              <th scope='col' className='px-6 py-3'>
                Descripción
              </th>
              <th scope='col' className='px-6 py-3'>
                Marca
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ sku, description, brand }, index) => {
              return (
                <tr
                  className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'
                  key={index}
                >
                  <td className='px-6 py-4'>{sku}</td>
                  <td className='px-6 py-4'>{description}</td>
                  <td className='px-6 py-4'>{brand.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='flex align-middle justify-center py-2'>
          <button
            onClick={closeModal}
            data-modal-hide='popup-modal'
            type='button'
            className='text-white bg-indigo-600 hover:bg-indigo-100 focus:ring-0 focus:outline-none focus:ring-indigo-700 rounded-lg border border-indigo-200 text-sm font-medium px-5 py-2.5 hover:text-indigo-700 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </section>
  )
}
