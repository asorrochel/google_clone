import { GlobeIcon } from '@heroicons/react/solid'
import React from 'react'

function Footer() {
  return (
    <footer className='grid w-full divide-y-[1px] divide-gray-300'>
        <div className='px-8 py-3'>
            <p>España</p>
        </div>
        <div>
            <div>
                <GlobeIcon className='h-5 mr-1 text-green-700'/>Emisión neutra de carbono desde el 2007</div>
            <div></div>
            <div></div>
        </div> 
    </footer>
  )
}

export default Footer