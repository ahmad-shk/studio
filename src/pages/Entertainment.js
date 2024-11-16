import React from 'react'

function Entertainment() {
  const movies = [
    {
      poster:'../../Ent1.png',
      title:'Robot Future',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    },
    {
      poster:'../../Ent2.png',
      title:'Doctor Strange',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    },
    {
      poster:'../../Ent3.png',
      title:'Travel',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    },
    {
      poster:'../../Ent2.png',
      title:'Doctor Strange',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    },
    {
      poster:'../../Ent4.png',
      title:'Broken Bridge',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    },
    {
      poster:'../../Ent1.png',
      title:'Robot Future',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    },
    {
      poster:'../../Ent4.png',
      title:'Broken Bridge',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    },
    {
      poster:'../../Ent3.png',
      title:'Travel',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    },
    {
      poster:'../../Ent2.png',
      title:'Doctor Strange',
      description:'Unrelenting cop Radha, searches for missing NRI teenager Zoya, only to open a Pandoras box of the evil flesh trade.',
    }
  ]
  return (
    <div className='bg-[#11161F] py-32'>
    <div className="bg-[#11161F] text-white p-8 max-w-[1600px] mx-auto">
    <h1 className="text-[36px] font-bold mb-6 border-b  pb-4">
      ENTERTAINMENT
    </h1>
    <div className="grid min-[768px]:grid-cols-2 min-[1100px]:grid-cols-3 gap-x-6 gap-y-10 pt-12">
      {movies.map((movie, index) => (
        <div
          key={index}
          className=""
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-[600px] w-full"
          />
          <div className=" text-white max-w-[332px]">
            <h2 className="text-[22px] py-2">{movie.title}</h2>
            <p className="text-[12px]">{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}

export default Entertainment;
