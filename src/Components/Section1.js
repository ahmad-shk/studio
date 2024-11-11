import React from 'react'

export default function Section1() {
    const mainNews = {
        image: '../../../MainNews.png',
        title: 'Protests Breaks Out In California',
        description: 'Protests broke out in California as thousands took to the streets to oppose recent policy changes, leading to clashes with law enforcement and a state of emergency declared in several cities.',
        category: 'News',
      };
  return (
    <div>
      <div  className='h-[100vh] flex items-end justify-start relative text-[white]'>
        <div className='absolute top-0 w-full h-full'>
            <img src='../../MainNews.png' className='max-h-full min-h-full w-full'/>
        </div>
        <div className='relative z-[4] p-12'>
          <label className='px-8 py-1 bg-[#FF6A0D] rounded-full'>NEWS</label>
          <h2 className='text-[48px] font-bold'>{mainNews.title}</h2>
          <p className='text-[24px] max-w-[800px]'>{mainNews.description}</p>
        </div>
      </div>
    </div>
  )
}
