import React from 'react'
import Image from 'next/image'
import {SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, HomeIcon} from "@heroicons/react/outline"
import {useSession, signIn, signOut} from "next-auth/react"
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from "../atoms/modalAtom"

function Header() {
//usesession from next-auth, rename data to session
const { data: session } = useSession();

const router = useRouter();

//call recoil state that we created
const [open, setOpen] = useRecoilState(modalState)

  return (
    <div className='sticky top-0  z-50'>
        <div className='shadow-sm border-b bg-white'>
        <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'>

        {/* /* Left */}
        <div onClick={() => router.push('/')} className='relative w-24 hidden lg:inline-grid cursor-pointer'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" 
             fill objectFit='contain'/>
        </div>

        <div onClick={() => router.push('/')} className='relative w-10 lg:hidden cursor-pointer'>
            <Image src="https://cdn-icons-png.flaticon.com/512/87/87390.png" 
             fill objectFit='contain'/>
        </div>
    
        {/* /* Middle - Search Input Field */}
        <div className='max-w-xs'>
            <div className='relative mt-1 p-3 rounded-md'>
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                    <SearchIcon className='h-5 w-5 text-gray-400'/>
                </div>
                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black
                    focus:border-black' type="text" placeholder="Search"/>
            </div>
        </div>

        
        {/* /* Right */}
        <div className='flex items-center justify-end space-x-4'>
            <HomeIcon onClick={() => router.push('/')} className='navBtn' />
            <MenuIcon className='h-6 md:hidden cursor-pointer' />
            {session ? (
                <>
                <div className='relative navBtn'>
                    <PaperAirplaneIcon className='navBtn rotate-45' />
                    <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                </div>
                <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                <UserGroupIcon className='navBtn'/>
                <HeartIcon className='navBtn' />
                <img onClick={signOut} src={session.user.image}
                    alt="profile picture" className='h-10 w-10 rounded-full cursor-pointer' />
                </>
            ): (
                <button onClick={signIn}>Sign In</button>
            )}
        </div>
        </div>
        </div>
    </div>
  )
}

export default Header