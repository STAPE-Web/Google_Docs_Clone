import { ChevronDownIcon, MenuAlt2Icon, MenuAlt3Icon, MenuIcon, MinusIcon, PlusIcon } from '@heroicons/react/outline'
import { ArrowLeftIcon, ArrowRightIcon, PrinterIcon } from '@heroicons/react/solid'
import React from 'react'

const Tools = ({ fontFamily, setDropDown, dropDown, setSize, size, setBold, bold, italic, setItalic, underline, setUnderline, position, setPosition }) => {
    const tools = [
        {
            id: 1,
            jsx: <ArrowLeftIcon className='icon' />,
            onClick: () => { }
        },
        {
            id: 2,
            jsx: <ArrowRightIcon className='icon' />,
            onClick: () => { }
        },
        {
            id: 3,
            jsx: <PrinterIcon className='icon' />,
            onClick: () => {
                window.print()
            }
        },
        {
            id: 4,
            jsx: <button>
                {fontFamily}
                <ChevronDownIcon style={{ height: 10 }} />
            </button>,
            onClick: () => { setDropDown(!dropDown) }
        },
        {
            id: 5,
            jsx: <div className="font">
                <div onClick={() => setSize(size == 0 ? 0 : size - 1)}>
                    <MinusIcon style={{ height: 15 }} />
                </div>
                <div style={{ padding: 2.5 }}>
                    <input type="number" value={size} onChange={e => setSize(size < 0 ? 0 : size > 96 ? 96 : e.target.value)} />
                </div>
                <div onClick={() => setSize(size == 96 ? 96 : size + 1)}>
                    <PlusIcon style={{ height: 15 }} />
                </div>
            </div>,
        },
        {
            id: 6,
            jsx: <h1 style={{ color: '#5f6368', fontSize: 20, fontWeight: 'bold', cursor: 'pointer' }}>B</h1>,
            onClick: () => { setBold(!bold) }
        },
        {
            id: 7,
            jsx: <h1 style={{ color: '#5f6368', fontSize: 20, fontStyle: 'italic', cursor: 'pointer' }}>I</h1>,
            onClick: () => { setItalic(!italic) }
        },
        {
            id: 8,
            jsx: <h1 style={{ color: '#5f6368', fontSize: 20, textDecoration: 'underline', cursor: 'pointer' }}>U</h1>,
            onClick: () => { setUnderline(!underline) }
        },
        {
            id: 9,
            jsx: <h1 style={{ color: '#5f6368', fontSize: 20, borderBottom: '3px inset #000', cursor: 'pointer' }}>A</h1>,
            onClick: () => { }
        },
        {
            id: 10,
            jsx: <MenuAlt2Icon className='icon' />,
            onClick: () => { setPosition('start') }
        },
        {
            id: 11,
            jsx: <MenuIcon className='icon' />,
            onClick: () => { setPosition('center') }
        },
        {
            id: 12,
            jsx: <MenuAlt3Icon className='icon' />,
            onClick: () => { setPosition('end') }
        }
    ]

    return (
        <div className='tools'>
            {tools.map((tool) => (
                <div key={tool.id} onClick={tool.onClick} style={{ borderRight: '1px solid #dadce0', padding: '3px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {tool.jsx}
                </div>
            ))
            }
        </div >
    )
}

export default Tools