import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#1e1e25] text-white pt-12 border-t">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col  md:flex-row gap-8 justify-between min-[1400px]:mr-32 pb-8 space-y-12 md:space-x-12 mx-auto px-6 md:px-12">

          {/* Description Section */}
          <div className="w-[300px]">
            <img src="../../../logo.png" alt="7 Studio Logo" className="w-50 h-auto" />
            <p className="mt-4 text-gray-300">
              7 Studio brings you 24/7 live streaming, headlines, bulletins, talk shows, infotainment, and much more. Watch minute-by-minute updates of current affairs and happenings from Pakistan and all around the world!
            </p>
          </div>

          {/* Features Section */}
          <div className=" ">
            <h3 className="text-lg font-semibold ">Features</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>As Equals</li>
              <li>Call to Earth</li>
              <li>Freedom Project</li>
              <li>Impact Your World</li>
              <li>Inside Africa</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-4 text-gray-300">
              <strong>Main Office:</strong><br />
              350 5th Avenue New York, NY 10118
            </p>
            <p className="mt-4 text-gray-300">
              <strong>Second Office:</strong><br />
              7380 W. Sand Lake Rd. Suite #512 Orlando, FL, 32819
            </p>
            <p className="mt-4 text-gray-300">
              <strong>Phone:</strong> 212-500-1228 | +1 800-380-1979
            </p>
            <p className="mt-4 text-gray-300">
              <strong>Email:</strong> 7studioinc@gmail.com
            </p>
          </div>

          {/* More Section */}
          <div className="">
            <h3 className="text-lg font-semibold">More</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Script Looking</li>
              <li>Musician Looking</li>
              <li>Talent Looking</li>
              <li>Production House</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-8 relative">
         <div className='px-6 md:px-12'>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

            <div className="flex flex-col -items-center space-y-4 mt-8  ">
              <div className="flex flex-wrap gap-4 text-sm -text-gray-600">
                <a href="#" className="hover:text-gray-900">Terms of Use</a>
                <a href="#" className="hover:text-gray-900">About the 7 Studio</a>
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900">Cookies</a>
                <a href="#" className="hover:text-gray-900">Accessibility Help</a>
                <a href="#" className="hover:text-gray-900">Contact the 7 Studio</a>
                <a href="#" className="hover:text-gray-900">Advertise with us</a>
                <a href="#" className="hover:text-gray-900">Do not share or sell my info</a>
                <a href="#" className="hover:text-gray-900">Contact Technical Support</a>
              </div>

              <p className="text-sm text-gray-500 mt-4 md:mt-0">
                © 2024 7 Studio. All rights reserved. The 7 Studio is not responsible for the content of external sites.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-end mt-4 md:mt-0 space-x-4">
            <div className="justify-end">
              <h1 className="font-extrabold">Follow 7 Studio on:</h1>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-white">
                <img src="../.../../fb-icon.png" alt="Facebook" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <img src="../.../../insta-icon.png" alt="Instagram" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <img src="../.../../youtube-icon.png" alt="YouTube" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <img src="../.../../twiter-icon.png" alt="Twitter" />
              </a>
            </div>
          </div>
          </div>
          <img src='../../footerImg.png' className='relative bottom-0 w-full mt-[-20%]'/>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
