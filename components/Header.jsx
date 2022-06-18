import React from 'react'
import Image from 'next/image'
import { SearchIcon, ViewGridIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
    const { data: session } = useSession()

    return (
        <header>
            <Link href='/'>
                <div className='logo'>
                    <Image src={require('/public/Logo.png')} width={44} height={40} />
                    <h1>Docs</h1>
                </div>
            </Link>
            <form>
                <SearchIcon className='icon' />
                <input type="text" placeholder='Search' />
            </form>
            <div className='right'>
                <ViewGridIcon className='icon' />
                {session
                    ? <Image src={session?.user?.image} width={32} height={32} onClick={() => signOut()} />
                    : <Image src='https://stape-web.github.io/Img/user.png' width={32} height={32} onClick={() => signIn()} />
                }
            </div>
        </header >
    )
}

export default Header