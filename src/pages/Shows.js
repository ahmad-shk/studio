import React from 'react'

function  Shows() {
  const shows = [
    {
      title: "Jimmy Kimmel Live!",
      time: "Weekdays | 11:35 PM ET",
      image: "../../../ShowPage1.png",
    },
    {
      title: "The Tonight Show Starring Jimmy Fallon",
      time: "Weekdays | 11:35 PM ET",
      image: "../../../ShowPage2.png",
    },
    {
      title: "The Late Show",
      time: "Weekdays | 11:35 PM ET",
      image: "../../../ShowPage3.png",
    },
    {
      title: "Saturday Night Live",
      time: "Saturdays | 11:30 PM ET",
      image: "../../../ShowPage4.png",
    },
    {
      title: "Good Morning America",
      time: "Weekdays | 7:00 AM ET",
      image: "../../../ShowPage5.png",
    },
    {
      title: "ABC World News",
      time: "Weekdays | 6:30 PM ET",
      image: "../../../ShowPage6.png",
    },
    {
      title: "PBS NewsHour",
      time: "Weekdays | 7:00 PM ET",
      image: "../../../ShowPage7.png",
    },
    {
      title: "The Daily Show",
      time: "Weekdays | 11:00 PM ET",
      image: "../../../ShowPage8.png",
    },
  ];

  return (
    <div className='bg-[#11161F] pt-32 pb-4'>
    <div className="bg-[#11161F] text-white px-8 max-w-[1600px] mx-auto">
    <h1 className="text-[36px] font-bold border-b mb-6 pb-4">
      TV SHOWS
    </h1>
    <div className="grid min-[800px]:grid-cols-2 pt-12 gap-10">
      {shows.map((show, index) => (
        <div
          key={index}
          className="relative h-[420px]"
        >
          <img
            src={show.image}
            alt={show.title}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-[22px]] font-bold">{show.title}</h2>
            <p className="text-[12px]">{show.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
};

export default  Shows
