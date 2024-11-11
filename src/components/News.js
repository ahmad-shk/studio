import React from 'react';
import '../App.css'
export default function News() {

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
        <div className='p-4 flex justify-between gap-6 pt-12'>
            <div className='min-h-full flex flex-col items-start'>
                <h3 className='text-[34px] font-bold'>NEWS</h3>
                <div className='flex flex-col justify-between h-full'>
                    {sideArticles.map((article, index) => (
                        <div className='flex gap-2'>
                            <div className='min-h-full'><img src={sideArticles[index].image} alt={sideArticles[index].title} className='min-h-full ' /></div>
                            <div className='flex flex-col justify-between max-w-[200px] min-w-[100px] pb-1'>
                                <h4 className=' font-bold leading-[1.3rem]'>{sideArticles[index].title}</h4>
                                <p className='text-[10px]'>{sideArticles[index].author} - {sideArticles[index].date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='font-bold text-[18px]'>see more</button>
            </div>

            <div className="relative w-[75%]" >
                <img src={featuredArticle.image} alt={featuredArticle.title} className='relative z-[1] min-w-full h-full max-h-[500px]'/>
                <div className="absolute z-[3] bottom-0 left-0 p-6 [&>*]:py-1">
                <label className='px-6 py-1 bg-[#FF6A0D] rounded-full'>{featuredArticle.label}</label>
                    <h3 className='text-[32px] font-bold max-w-[70%]'>{featuredArticle.title}</h3>
                    <p className='max-w-[800px]'>{featuredArticle.description}</p>
                </div>
            </div>
        </div>
    )
}
