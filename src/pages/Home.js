import React from 'react';
// import './Home.css';
// import ShowsComopnent from '../homePageComponents/showsComopnent/ShowsComopnent';
// import EntertainmantComponent from '../homePageComponents/entertainmantComponent/EntertainmantComponent';
// import NewsComponent from '../homePageComponents/newsComponent/NewsComponent';
// import ConcertsinUSAComponent from '../homePageComponents/concertsinUSAComponent/ConcertsinUSAComponent';
// import PodcastComponent from '../homePageComponents/podcastCoponent/PodcastCoponent';
// import FirstComponent from '../homePageComponents/firstComponent/FirstComponent';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';


function Home() {
    return (
        <div className="homepage bg-[#1e1e25]">
            {/* <section className='firstComponent'>
                <FirstComponent />
            </section>
            <section className='newsComponent'>
                <NewsComponent />
            </section>
            <section className='showSection'>
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
            </section> */}



            <section className='podcastComponent'>
                <Section1 />
            </section>
            <section>
                <Section2 />
            </section>
        </div>
    );
}

export default Home;
