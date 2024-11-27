import React from 'react';
import ShowsComopnent from '../homePageComponents/ShowsComopnent';
import EntertainmantComponent from '../homePageComponents/EntertainmantComponent';
import NewsComponent from '../homePageComponents/NewsComponent';
import ConcertsComponent from '../homePageComponents/ConcertsComponent';
import PodcastComponent from '../homePageComponents/PodcastCoponent';
import FirstComponent from '../homePageComponents/FirstComponent';
import ContactForm from '../homePageComponents/ContactForm';



function Home() {
    return (
        <div className='bg-[#1e1e25] bg-opacity-40'>
            <div className="homepage  text-[white] max-w-[1600px] mx-auto ">
                <section className='firstComponent'>
                    <FirstComponent />
                </section>
               
                <section className='flex items-center justify-center mt-8'>
                    <ContactForm />
                </section>
            </div>
        </div>
    );
}

export default Home;
