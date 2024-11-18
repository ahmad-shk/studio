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
    <div className='p-4 pt-6'>
        <h3 className='text-[34px] font-bold'>Shows</h3>
        <div className='flex overflow-x-hidden gap-2 relative'>
            {
                showThumbnails.map((element) => (
                    <div className=''><img src={`${element.image}`} className='min-w-[255px] h-[220px] relative'/></div>
                ))
            }
            
        </div>
    </div>
)
}

export default ShowsComopnent;
