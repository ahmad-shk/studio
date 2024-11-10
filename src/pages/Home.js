import React from 'react';
import './Home.css';
import ShowsComopnent from '../homePageComponents/showsComopnent/ShowsComopnent';
import EntertainmantComponent from '../homePageComponents/entertainmantComponent/EntertainmantComponent';
import NewsComponent from '../homePageComponents/newsComponent/NewsComponent';
import ConcertsinUSAComponent from '../homePageComponents/concertsinUSAComponent/ConcertsinUSAComponent';


function Home() {
    return (
        <div className="homepage">
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
        </div>
    );
}

export default Home;
