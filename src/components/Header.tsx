import { ArrowLeft, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-16 flex items-center justify-between p-3 py-8 '>
            <ArrowLeft size={24} className='text-gray-600' />
            <Search size={20} className='text-gray-600' />
        </div>
    )
}

export default Header