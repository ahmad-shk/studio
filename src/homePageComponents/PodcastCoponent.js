import React from 'react';

const PodcastComponent = () => { 
  const podcasts = [
    {img:'../../podcast2.png',label:'PUBLIC TALK'},
    {img:'../../podcast3.png',label:'Q&amp;A WITH SHAQ'},
    {img:'../../podcast4.png',label:'POLITICS . BUSINESS'}
]
return (
    <div className='p-4 pt-8'>
        <h3 className='text-[34px] font-bold'>Podcast</h3>
    
    <div className='py-2 flex gap-3 max-[800px]:flex-col'>
        <div className='min-[800px]:w-[75%] relative w-[100%]'>
            <div>
                <img src='../../podcast1.png' className='min-w-full h-[564px]' alt=''/>
            </div>
            <div className='absolute bottom-[1%] z-[3] p-10 flex flex-col '>
                <label className='text-[13px] pb-4'>25 . FEB . 2024</label>
                <label className='text-[20px] max-w-[500px]'> GLIMPSE INTO INNOVATION: MARK ZUCKERBERG SHARES INSIGHTS ON THE FUTURE OF TECH.</label>
            </div>
        </div>

        <div className='flex flex-col gap-2 items-center w-[25%] max-[800px]:w-[100%] max-[800px]:flex-row max-[660px]:flex-col'>
            {
                podcasts.map((element,index)=>(
                    <div className='flex flex-col items-center '>
                        <div><img src={`${element.img}`}/></div>
                        <label className='text-[20px]'>{element.label}</label>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
)
}

export default PodcastComponent;
