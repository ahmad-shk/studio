import React from 'react'

export default function ConcertsinUSA() {
  const concerts = [
    {
      poster:'../../ConcertPageImage1.png',
      date:'18 NOVEMBER 2025',
      title:'The Jazz influencers ft. marios charalampous & Loek van den berg',
      time:'6 : 00 PM on sunday'
    },
    {
      poster:'../../ConcertPageImage2.png',
      date:'18 NOVEMBER 2025',
      title:'The Jazz influencers ft. marios charalampous & Loek van den berg',
      time:'6 : 00 PM on sunday'
    },
    {
      poster:'../../ConcertPageImage3.png',
      date:'18 NOVEMBER 2025',
      title:'The Jazz influencers ft. marios charalampous & Loek van den berg',
      time:'6 : 00 PM on sunday'
    },
    {
      poster:'../../ConcertPageImage4.png',
      date:'18 NOVEMBER 2025',
      title:'The Jazz influencers ft. marios charalampous & Loek van den berg',
      time:'6 : 00 PM on sunday'
    },
    {
      poster:'../../ConcertPageImage5.png',
      date:'18 NOVEMBER 2025',
      title:'The Jazz influencers ft. marios charalampous & Loek van den berg',
      time:'6 : 00 PM on sunday'
    },
    {
      poster:'../../ConcertPageImage6.png',
      date:'18 NOVEMBER 2025',
      title:'The Jazz influencers ft. marios charalampous & Loek van den berg',
      time:'6 : 00 PM on sunday'
    }

  ]
  return (
    <div className='bg-[#11161F] pt-32 pb-4'>
      <div className='text-white px-8 max-w-[1600px] mx-auto'>
        <h1 className="text-[36px] font-bold border-b mb-6 pb-4">
          CONCERTS
        </h1>

        <div className='flex flex-col gap-10'>
          {
            concerts.map((concert)=>(
              <div className='flex bg-[#171E2A] max-[900px]:flex-col'>
                <div className='max-h-full'><img src={concert.poster} className='min-h-full min-w-[432px] max-[900px]:min-w-full'/></div>

                <div className='flex flex-col gap-4 p-6 -bg-[blue] w-full'>
                  <label>{concert.date}</label>
                  <h3 className='max-[1200px]:text-[26px] text-[36px] font-[500] w-[90%]'>{concert.title}</h3>
                  <label className='-bg-[red] w-full h-full flex justify-end items-end'>{concert.time}</label>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
