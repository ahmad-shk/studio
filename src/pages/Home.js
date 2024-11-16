import React from 'react';
import ShowsComopnent from '../homePageComponents/ShowsComopnent';
import EntertainmantComponent from '../homePageComponents/EntertainmantComponent';
import NewsComponent from '../homePageComponents/NewsComponent';
import ConcertsComponent from '../homePageComponents/ConcertsComponent';
import PodcastComponent from '../homePageComponents/PodcastCoponent';
import FirstComponent from '../homePageComponents/FirstComponent';



function Home() {
    return (
        <div className='bg-[#1e1e25]'>
        <div className="homepage  text-[white] max-w-[1600px] mx-auto">
            <section className='firstComponent'>
                <FirstComponent />
            </section>
             <section className='newsComponent'>
                <NewsComponent/>
            </section>
            <section>
                <ShowsComopnent/>
                </section>
                <section>
                    <EntertainmantComponent/>
                </section>
                <section>
                    <ConcertsComponent/>
                </section>
                <section>
                    <PodcastComponent/>
                </section>
        </div>
        </div>
    );
}

export default Home;
