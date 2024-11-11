import React from 'react';
// import '../App.css'
// import ShowsComopnent from '../homePageComponents/showsComopnent/ShowsComopnent';
// import EntertainmantComponent from '../homePageComponents/entertainmantComponent/EntertainmantComponent';
// import NewsComponent from '../homePageComponents/newsComponent/NewsComponent';
// import ConcertsinUSAComponent from '../homePageComponents/concertsinUSAComponent/ConcertsinUSAComponent';
// import PodcastComponent from '../homePageComponents/podcastCoponent/PodcastCoponent';
import FirstComponent from '../homePageComponents/firstComponent/FirstComponent';
import News from '../components/News';
import Shows from '../components/Shows';
import Entertainment from '../components/Entertainment';
import Concerts from '../components/Concerts';
import Podcasts from '../components/Podcasts';


function Home() {
    return (
        <div className="homepage bg-[#1e1e25] text-[white]">
            <section className='firstComponent'>
                <FirstComponent />
            </section>
             <section className='newsComponent'>
                <News/>
            </section>
            <section>
                <Shows/>
                </section>
                <section>
                    <Entertainment/>
                </section>
                <section>
                    <Concerts/>
                </section>
                <section>
                    <Podcasts/>
                </section>
            {/* <section className='showSection'>
                <ShowsComopnent />
            </section>
            <section className='entertainmantComponent'>
                <EntertainmantComponent />
            </section>
            <section className='concertsInUSAComponent'>
                <ConcertsinUSAComponent/>
            </section>
            <section className='podcastComponent'>
                <PodcastComponent/>
            </section>  */}
        </div>
    );
}

export default Home;
