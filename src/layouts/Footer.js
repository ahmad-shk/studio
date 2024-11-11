import React from 'react';
// import './Footer.css';

function Footer() {
  return (
    <footer className="px-8 pt-6 text-[white] border-t border-[white] bg-[#1e1e25]">
      <div className='flex gap-12 pb-12'>
      <div className='max-w-[240px]'>
          <p>7 studio brings you 24/7 Live Streaming, Headlines, Bulletins, Talk Shows, Infotainment, and much more. Watch minute-by-minute updates of current affairs and happenings from Pakistan and all around the world!</p>
        </div>

        <div>
          <label className='font-semibold'>FEATURES</label>
          <p>AS EQUALS</p>
          <p>CALL TO EARTH</p>
          <p>FREEDOM PROJECT</p>
          <p>IMPACT YOUR WORLD</p>
          <p>INSIDE AFRICA</p>
        </div>

        <div>
         <label></label>
        </div>
      </div>

      <div className='flex text-[12px] gap-4'>
         <p>Terms of Use</p>
         <p>About the BBC</p>
         <p>Privacy Policy</p>
         <p>Cookies</p>
         <p>Accessibility Help</p>
         <p>Contact the BBC</p>
         <p>Advertise with us</p>
         <p> Do not share or sell my info</p>
         <p>Contact technical support</p>
      </div>

      <p className='text-[12px]'>Copyright 2024 BBC. All rights reserved. The BBC is not responsible for the content of external sites. Read about our approach to external linking.</p>

      <div className='w-full flex justify-end'>
        <div className=' flex flex-col gap-3'>
        <label>FOLLOW 7 STUDIO ON</label>
        <div className='flex justify-between'>
          <button><img src='../../facebook.svg'/></button>
          <button><img src='../../facebook.svg'/></button>
          <button><img src='../../facebook.svg'/></button>
          <button><img src='../../facebook.svg'/></button>
          <button><img src='../../facebook.svg'/></button>
      </div>
      </div>
      </div>

      <div>
        <img src=''/>
      </div>
    </footer>
  );
}

export default Footer;
