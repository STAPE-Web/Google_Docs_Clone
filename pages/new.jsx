import { ChatAltIcon, LockClosedIcon, StarIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import DropDown from '../components/DropDown'
import Editor from '../components/Editor'
import Tools from '../components/Tools'

export default function New() {
    const { data: session } = useSession()
    const [name, setName] = useState('')
    const [fontFamily, setFontFamily] = useState('Roboto')
    const [dropDown, setDropDown] = useState(false)
    const [size, setSize] = useState(11)
    const [bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)
    const [underline, setUnderline] = useState(false)
    const [position, setPosition] = useState('start')

    const controlls = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Extensions', 'Help']
    const items = ['Roboto', 'Wellfleet']

    return (
        <div className='container'>
            <Head>
                <title>{name ? name : 'Untitled document'} - Google Docs</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className='border'>
                <div className='left'>
                    <Link href='/'>
                        <div className='logo'>
                            <Image src={require('/public/Logo.png')} width={44} height={40} />
                        </div>
                    </Link>
                    <div>
                        <div className='rename'>
                            <input type="text" placeholder='Untitled document' value={name} onChange={e => setName(e.target.value)} />
                            <StarIcon className="icon" />
                        </div>
                        <div className="controlls">
                            {controlls.map((con) => (
                                <div key={con.toString()} style={{ cursor: 'pointer' }}>
                                    {con}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right new">
                    <ChatAltIcon className="icon" />
                    <button>
                        <LockClosedIcon style={{ height: 14 }} />
                        Share
                    </button>
                    {session ? <Image src={session?.user?.image} width={32} height={32} /> : null}
                </div>
            </header>

            <Tools
                fontFamily={fontFamily}
                setDropDown={setDropDown}
                dropDown={dropDown}
                setSize={setSize}
                size={size}
                setBold={setBold}
                bold={bold}
                setItalic={setItalic}
                italic={italic}
                setUnderline={setUnderline}
                underline={underline}
                setPosition={setPosition}
                position={position}
            />
            {dropDown ? <DropDown items={items} setFontFamily={setFontFamily} /> : null}
            <Editor fontFamily={fontFamily} size={size} bold={bold} italic={italic} underline={underline} position={position} />
        </div>
    )
}
