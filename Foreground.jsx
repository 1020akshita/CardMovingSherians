import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)
    return (
        <>
            <div ref={ref} className='fxed z-[3] bg-sky-900/30 top-0 left-0 w-full h-screen'>
            <Card refrence = {ref}/>
            </div>
        </>
    )
}

export default Foreground
