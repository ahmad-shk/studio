import React from 'react'

export default function Section2() {
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
        <div className='grid grid-cols-4 grid-row-1 gap-4 p-4'>
            {thumbnailArticles.map((element,index) => (
                <div className='relative'><div className='relative z-[1]'><img src={`${thumbnailArticles[index].image}`} className='rounded-xl'/></div><label className='absolute z-[3] text-white font-semibold bottom-0 p-2 max-w-[80%]'>{thumbnailArticles[index].title}</label></div>
            ))}
        </div>
    )
}
