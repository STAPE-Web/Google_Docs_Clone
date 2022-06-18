import React from 'react'

const Editor = ({ fontFamily, size, bold, italic, underline, position }) => {
    return (
        <div className="editorContainer">
            <textarea
                className='editor'
                style={
                    {
                        fontFamily: fontFamily,
                        fontSize: size,
                        fontWeight: bold ? 'bold' : 400,
                        fontStyle: italic ? 'italic' : 'normal',
                        textDecoration: underline ? 'underline' : 'none',
                        textAlign: position
                    }
                }
                placeholder='Type @ to insert'
                wrap='false'
            ></textarea>
        </div>
    )
}

export default Editor
