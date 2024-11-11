import React from 'react'

export default function Shows() {
    const showThumbnails = [
        { image: '../../show1.png' },
        { image: '../../show2.png' },
        { image: '../../show3.png' },
        { image: '../../show4.png' },
        { image: '../../show5.png' },
        { image: '../../show1.png' },
        { image: '../../show2.png' },
        { image: '../../show3.png' },
        { image: '../../show4.png' }
    ]
    return (
        <div className='p-4'>
            <h3 className='text-[34px] font-bold'>Shows</h3>
            <div className='flex overflow-x-scroll relative gap-2'>
                {
                    showThumbnails.map((element, index) => (
                        <div><img src={`${showThumbnails[index].image}`} className='h-[190px] min-w-[245px]'/></div>
                    ))
                }
                <button className='absolute right-[40px] top-[40%]'>next</button>
            </div>
        </div>
    )
}
