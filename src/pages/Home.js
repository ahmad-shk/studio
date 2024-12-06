import React from 'react';
import ShowsComopnent from '../homePageComponents/ShowsComopnent';
import EntertainmantComponent from '../homePageComponents/EntertainmantComponent';
import NewsComponent from '../homePageComponents/NewsComponent';
import ConcertsComponent from '../homePageComponents/ConcertsComponent';
import PodcastComponent from '../homePageComponents/PodcastCoponent';
import FirstComponent from '../homePageComponents/FirstComponent';



function Home() {
    return (
        <div className='bg-[#11161F] '>
            <div className="homepage  text-[white] max-w-[1600px] mx-auto ">
            <section className='firstComponent'>
                    <FirstComponent />
                </section>
                <section className='firstComponent'>
                    <NewsComponent />
                </section>
               
                <section className='firstComponent'>
                    <ShowsComopnent />
                </section>
                <section className='firstComponent'>
                    <EntertainmantComponent />
                </section>
                <section className='firstComponent'>
                    <ConcertsComponent />
                </section>
                <section className='firstComponent'>
                    <PodcastComponent />
                </section>
            </div>
        </div>
    );
}

export default Home;
