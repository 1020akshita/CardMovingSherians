import React from 'react'

const Background = () => {
    return (
        <>
            <div className='fixed z-[0] w-full h-screen'>
                <div className='absolute left-1/2 top-[5%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center text-zinc-500'>Document</div>
                <h1 className=' text-zinc-900 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw]'>Docs.</h1>
            </div>
        </>
    )
}

export default Background
