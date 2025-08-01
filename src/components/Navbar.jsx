import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
      <div className='mx-auto max-w-6xl p-4'>
       <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-purple-600 font-mono tracking-tight'>
          MyNote
        </h1>
        <div className='flex items-center gap-4'>
         <Link to={"/createnote"} className='btn bg-purple-600 hover:bg-purple-700'>
         <PlusIcon className='size-5 '/>
         <span>New Note</span>
          </Link>
        </div>
       </div>
      </div>
    </header>
  )
}

export default Navbar
