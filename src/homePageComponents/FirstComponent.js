import React from 'react';

const FirstComponent = () => {
  const mainNews = {
    image: '../../../MainNews.png',
    title: 'Protests Breaks Out In California',
    description: 'Protests broke out in California as thousands took to the streets to oppose recent policy changes, leading to clashes with law enforcement and a state of emergency declared in several cities.',
    category: 'News',
  };
  const thumbnailArticles = [
    {
        image: '../../subnews1.jpeg',
        title: 'Protests Breaks Out In California',
    },
    {
        image: '../../subnews2.jpeg',
        title: 'Election 2024: Key Issues and Candidates to Watch',
    },
    {
        image: '../../subnews3.jpeg',
        title: 'Opinion: What This Election Means for Democracy',
    },
    {
        image: '../../subnews4.jpeg',
        title: 'New Legislation Sparks Debate Among Lawmakers',
    },
];
  return (
    <div>
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
    <div className='grid grid-cols-4 grid-row-1 gap-4 p-4 max-[850px]:grid-cols-2'>
            {thumbnailArticles.map((element,index) => (
                <div className='relative'><div className='relative z-[1]'><img src={`${thumbnailArticles[index].image}`} className='rounded-xl'/></div><label className='absolute z-[3] text-white font-semibold bottom-0 p-2 max-w-[80%]'>{thumbnailArticles[index].title}</label></div>
            ))}
        </div>
    </div>
  );
};

export default FirstComponent;
