'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import {useRouter} from 'next/navigation'

function ButtonLogout() {
    const router = useRouter()
  
    async function logout(){
        await signOut({
          redirect: false
        })
        router.replace('/')
    }

    return  <button onClick={logout} className='hover:text-black hover:border-red-300 hover:bg-white p-2 w-40 border border-gray-300 rounded-md'>Sair</button>
}

export default ButtonLogout