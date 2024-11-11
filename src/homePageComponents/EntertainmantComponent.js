import React from 'react';

function EntertainmantComponent() {
  const shows = [
    {
      title: "Robot Future",
      description: "Original Series",
      image: "../../Ent1.png"
    },
    {
      title: "Doctor Strange",
      description: "Original Series",
      image: "../../Ent2.png"
    },
    {
      title: "Illusion",
      description: "Original Series",
      image: "../../Ent3.png"
    },
    {
      title: "Broken Bridge",
      description: "Original Series",
      image: "../../Ent4.png"
    },
    {
      title: "DC Movie",
      description: "Original Series",
      image: "../Ent2.png"
    },
    {
      title: "Robot Future",
      description: "Original Series",
      image: "../../Ent1.png"
    },
    {
      title: "Doctor Strange",
      description: "Original Series",
      image: "../../Ent2.png"
    },
    {
      title: "Illusion",
      description: "Original Series",
      image: "../../Ent3.png"
    },
    {
      title: "Broken Bridge",
      description: "Original Series",
      image: "../../Ent4.png"
    }

  ];
  return (
    <div className='p-4'>
      <h3 className='text-[34px] font-bold'>Entertainment</h3>
      <div className='flex gap-2 justify-between overflow-hidden'>
        {
          shows.map((element, index) => (
            <div className='w-full relative'>
              <div className='w-full min-h-[452px]'><img src={`${element.image}`} className='min-w-[300px] max-w-full min-h-[full]' /></div>
              <div className='absolute bottom-0 p-4'>
                <p className='text-[10px] text-['>{element.description}</p>
                <label>{element.title}</label>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default EntertainmantComponent;
