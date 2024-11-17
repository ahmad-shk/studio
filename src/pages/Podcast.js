import React from 'react'

export default function Podcast() {
    const podcast = [
        {
            poster:'../../podcastPageImg1.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        },
        {
            poster:'../../podcastPageImg2.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        },
        {
            poster:'../../podcastPageImg3.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        },
        {
            poster:'../../podcastPageImg4.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        },
        {
            poster:'../../podcastPageImg5.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        },
        {
            poster:'../../podcastPageImg6.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        },
        {
            poster:'../../podcastPageImg7.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        },
        {
            poster:'../../podcastPageImg8.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        },
        {
            poster:'../../podcastPageImg9.png',
            caption:'‘’We are not alone’’ : takeaways from a ufo hearing',
            description:'on today’s show: starts lays out what the science says about claims made by .... '
        }
    ]
  return (
    <div className='bg-[#11161F] pt-32 pb-4'>
      <div className='text-white px-8 max-w-[1600px] mx-auto'>
        <h1 className="text-[36px] font-bold border-b mb-6 pb-4">
          PODCASTS
        </h1>

        <div className='grid grid-cols-3 max-[1000px]:grid-cols-2 max-[630px]:grid-cols-1 gap-x-10 gap-y-20 -bg-[red]'>
          {
            podcast.map((element)=>(
              <div className='relative -bg-[blue]'>
                <img src={element.poster} className='min-h-full min-w-full brightness-75'/>
                <div className='absolute bottom-0 -bg-[green] pl-3 pr-6 py-4 flex flex-col gap-1'>
                    <label className='text-[20px] leading-[1.4rem] font-[400]'>{element.caption}</label>
                    <p className='text-[14px]'>{element.description}</p>
                    <span className='flex justify-center items-center gap-1 p-1 max-w-[85px] bg-[#D9D9D9] rounded-full'><img src='../../arrowVector.svg' /><label className='text-black'>12 min</label></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
