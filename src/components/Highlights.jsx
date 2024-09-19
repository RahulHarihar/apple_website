import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { watchImg, rightImg } from "../utils";

import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {opacity : 1, y : 0})
    gsap.to('.link', {opacity : 1, y : 0, duration : 1, stagger : 0.30})
  },[])

  const imgSrc = watchImg;
  const rightSrc = rightImg;

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the Highlights.</h1>
            <div className="flex flex-wrap items-end gap-5">

            <p className="link ml-2">
            <a href="https://www.youtube.com/watch?v=xqyUdNxWazA" target="_blank" style={{ display: 'inline-flex', alignItems: 'center' }}>
                Watch the Film
                <img src={imgSrc} alt="watch" className="ml-2" style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </a>
            </p>

            <p className="link">
            <a href="https://www.apple.com/in/apple-events/" target="_blank" style={{ display: 'inline-flex', alignItems: 'center' }}>
                Watch the Event
                <img src={rightSrc} alt="right" className="ml-2" style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </a>
            </p>

            </div>
        </div>
        
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights