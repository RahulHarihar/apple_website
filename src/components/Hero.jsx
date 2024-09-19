import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 750 ? smallHeroVideo : heroVideo);

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth < 750 ? smallHeroVideo : heroVideo);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.to('#hero', { opacity: 1, delay: 3 });
    gsap.to('#cta', { opacity: 1, y:-50, delay:3});
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none"
            src={videoSrc}
            autoPlay
            muted
            playsInline={true}
            disablePictureInPicture
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={smallHeroVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="https://www.apple.com/in" className="btn" target="_blank">Buy Now</a>
        <p className="font-normal text-xl">From ₹79900.00*</p>
      </div>
    </section>
  );
};

export default Hero;
