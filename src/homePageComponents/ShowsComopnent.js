import React from 'react';

function ShowsComopnent() {
  const showThumbnails = [
    { image: '../../show1.png' },
    { image: '../../show2.png' },
    { image: '../../show3.png' },
    { image: '../../show4.png' },
    { image: '../../show1.png' },
    { image: '../../show2.png' },
    { image: '../../show3.png' }
]
return (
    <div className='p-4'>
        <h3 className='text-[34px] font-bold'>Shows</h3>
        <div className='flex overflow-hidden relative  w-full'>
            {
                showThumbnails.map((element) => (
                    <div className='w-[30%]'><img src={`${element.image}`} className='min-w-[255px] h-[220px]'/></div>
                ))
            }
            <button className='absolute right-[40px] top-[40%]'>next</button>
        </div>
    </div>
)
}

export default ShowsComopnent;
