import React from 'react'

const DropDown = ({ items, setFontFamily }) => {
    return (
        <div className='dropDown'>
            {items.map((item) => (
                <div style={{ fontFamily: item, padding: '15px', }} className='dropDownItems' key={item.toString()} onClick={() => setFontFamily(item)}>
                    {item}
                </div>
            ))}
        </div >
    )
}

export default DropDown