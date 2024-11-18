import React from 'react';

function NewsComponent() {
  const featuredArticle = {
    title: "Rising Stars: New Faces to Watch in Hollywood",
    description: "Rising stars in Hollywood, the new faces to watch, are generating buzz with their fresh talent and captivating performances, poised to make significant strides in shaping the future of cinema and entertainment.",
    image: "../../../news5big.png",
    label: "NEWS"
  };

  const sideArticles = [
    {
      title: "Celebrity Style: Fashion Trends from the Red Carpet",
      author: "TAYLOR BONE",
      date: "TODAY",
      image: "../../../new1.png"
    },
    {
      title: "Celebrity Style: Fashion Trends from the Red Carpet",
      author: "TAYLOR BONE",
      date: "YESTERDAY",
      image: "../../../news2.png"
    },
    {
      title: "Streaming Wars: Which Platform Has the Best Content?",
      author: "TAYLOR BONE",
      date: "YESTERDAY",
      image: "../../../news3.png"
    },
    {
      title: "Streaming Wars: Which Platform Has the Best Content?",
      author: "TAYLOR BONE",
      date: "2 DAYS AGO",
      image: "../../../news4.png"
    }
  ];
  return (
    <div className='pt-8'>
      <h2 className='text-[36px] font-bold hidden max-[1299px]:block px-4'>NEWS</h2>
    <div className='p-4 flex justify-between min-[1299px]:gap-16  max-[1299px]:flex-col-reverse pb-12'>
      
      <div className='min-h-full flex flex-col items-start w-[30%] max-[1299px]:w-[100%] max-[1299px]:flex-row max-[1299px]:justify-between'>
      <h3 className='text-[34px] font-bold max-[1299px]:hidden'>NEWS</h3> 
        
        <div className='grid justify-between h-full max-[1299px]:grid-cols-4 w-full max-[1050px]:grid-cols-3 max-[768px]:grid-cols-2 max-[530px]:grid-cols-1  max-[1299px]:gap-4'>
          {sideArticles.map((article, index) => (
            <div className='flex gap-2 max-[1299px]:flex-col max-[1050px]:my-6 max-[768px]:mx-auto max-[530px]:min-w-full'>
             <div className='min-h-full'><img src={sideArticles[index].image} alt={sideArticles[index].title} className='min-h-[125px] min-w-[200px]  max-w-[400px] max-[530px]:min-w-full' /></div>
              <div className='flex flex-col justify-center gap-2 pb-1 max-[1299px]:mt-[-50px] max-[530px]:pt-3'>
                <h4 className=' font-bold leading-[1.3rem] text-[18px] max-[1299px]:max-w-[220px] max-[530px]:min-w-full'>{sideArticles[index].title}</h4>
                <p className='text-[10px]'>{sideArticles[index].author} - {sideArticles[index].date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className='font-bold text-[18px] max-[1299px]:hidden'>see more</button>
      </div>

      <div className="relative  grow" >
        <img src={featuredArticle.image} alt={featuredArticle.title} className='relative z-[1] w-full h-full max-h-[600px]' />
        <div className="absolute z-[3] bottom-0 left-0 p-6 [&>*]:py-1">
          <label className='px-6 py-1 bg-[#FF6A0D] rounded-full'>{featuredArticle.label}</label>
          <h3 className='text-[32px] max-[550px]:text-[20px] font-bold max-w-[70%]'>{featuredArticle.title}</h3>
          <p className='max-w-[800px] max-[550px]:text-[10px]'>{featuredArticle.description}</p>
        </div>
      </div>
    </div>
    </div>
  )
}


export default NewsComponent;
