import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import {
  MicrophoneIcon, ViewGridIcon
} from '@heroicons/react/solid'
import {
  SearchIcon
} from '@heroicons/react/outline'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google_icon.png" />
      </Head>
      {/* Header */}
        <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
          <div className='flex space-x-4 items-center'>
            <p className='link'>Sobre Google</p>
            <p className='link'>Tienda</p>
          </div>
          <div className='flex space-x-4 items-center'>
            <p className='link'>Gmail</p>
            <p className='link'>Imágenes</p>
            <ViewGridIcon className='h-18 w-10 p-2 rounded-full hover:bg-gray-100
            cursor-pointer'/>
            <Avatar url="https://coaching.papareact.com/ai9"/>
          </div>
        </header>
      {/* Body */}
        <form className='flex flex-col items-center mt-44 flex-grow w-4/5'> 
          <Image
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            height={100}
            width={300}
          />
          <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg 
          max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl'>
            <SearchIcon className='h-5 mr-3 text-gray-500'/>
            <input type='text' className='focus:outline-none flex-grow'/>
            <MicrophoneIcon className='h-5 text-gray-500'/>
          </div>
          <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8
          sm:space-y-0 sm:flex-row sm:space-x-4  '>
            <button className='btn'>Buscar con Google</button>
            <button className='btn'>Voy a tener suerte</button>
          </div>
        </form>
      <Footer/>


    </div>
  )
}
