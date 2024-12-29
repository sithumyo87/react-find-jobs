import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const PageNotFound = () => {
  return (
    <>
     <section class="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className='text-yellow-400 text-4xl mb-4' />
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <a
        href="/"
        class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go Back</a
      >
    </section>
    </>
  )
}

export default PageNotFound