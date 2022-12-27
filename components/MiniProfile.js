import React from 'react'
import {useSession, signIn, signOut} from "next-auth/react"

function MiniProfile() {
  
  //usesession from next-auth, rename data to session
  const { data: session } = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img 
            className='rounded-full border p-1 w-16 h-16'
            src={session.user?.image} alt="" />

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session.user?.name}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>

        <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile