import React from 'react'

export default function Concerts() {
    const concerts = [
        { id: 1, date: 'THU · JAN 30 · 7:00 PM', artist: 'METALLICA', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt.png' },
        { id: 2, date: 'THU · JAN 30 · 7:00 PM', artist: 'DRAKE', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt1.png' },
        { id: 3, date: 'THU · JAN 30 · 7:00 PM', artist: 'METALLICA', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt2.png' },
        { id: 4, date: 'THU · JAN 30 · 7:00 PM', artist: 'METALLICA', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt3.png' }
        // { id: 5, date: 'TODAY · 7:00 PM', artist: 'PINK PERFORMS ONSTAGE TODAY', location: 'Las Vegas, NV · Harrison School for the Arts', imgUrl: '../../../cncrt4.png', large: true }
    ];
    return (
        <div className='p-4'>
            <h3 className='text-[34px] font-bold leading-[1.6rem]'>Concerts<br /><span className='text-[20px] font-normal'>in USA</span></h3>
            <div className='flex gap-2 justify-between max-[1200px]:flex-col'>
                <div className='grow grid grid-cols-2 gap-4 -min-w-full '>
                    {
                        concerts.map((element, index) => (
                            <div className='relative '>
                                <div className='min-w-[290px]'><img src={`${element.imgUrl}`} className='min-w-full max-h-[280px]' /></div>
                                <div className='absolute bottom-[40px] h-full w-full flex flex-col items-center justify-end'>
                                    <label className='text-[13px]'>{element.date}</label>
                                    <label>{element.artist}</label>
                                    <p className='text-[13px]'>{element.location}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='relative col-start-3 col-end-4 row-start-1'>
                    <div className='h-full '>
                        <img src='../../../cncrt4.png' className='min-h-[600px] min-w-full max-[1200px]:max-h-[600px]'/> 
                    </div>
                    <div className='absolute bottom-0 py-10 px-6 flex flex-col'>
                        <label className='text-[13px] pb-4'>TODAY · 7:00 PM</label>
                        <label className='text-[20px]'>PINK PERFORMS ONSTAGE TODAY</label>
                        <p className='text-[13px]'>Las Vegas, NV · Harrison School for the Arts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
