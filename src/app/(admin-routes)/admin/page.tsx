import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { signOut } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/navigation'
import ButtonLogout from '@/app/components/ButtonLogout'

async function Admin() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <h1 className='text-2xl mb-8'>Olá {session?.user.name}</h1>
      <ButtonLogout/>
    </div>
  )
}

export default Admin