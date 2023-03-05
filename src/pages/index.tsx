import { gsap } from 'gsap';
import { Observer } from 'gsap/dist/Observer';
import * as React from 'react';
import { useEffect } from "react";

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  useEffect(()=> {
    gsap.registerPlugin(Observer);

    const section = document.querySelectorAll("#section-1");
    const outerWrappers = gsap.utils.toArray(".section-outer");

    const innerWrappers = gsap.utils.toArray(".section-inner");
    const textContent = document.querySelectorAll(".landing-content");

    let animating = false;
    
    gsap.set(outerWrappers, { yPercent: -100 });
    gsap.set(innerWrappers, { yPercent: 100 });
    gsap.set(section, { autoAlpha: 1, zIndex: 1 });

      function landingEntrance() {
        const tl = gsap.timeline({
          defaults: { duration: .45, ease: "power1.inOut" }, 
          onComplete: () => animating = false
        }); 
  
        tl.delay(.5)
        .fromTo([outerWrappers, innerWrappers], {yPercent: 100, duration: 0.4}, { yPercent: 0 }, 0)
        .fromTo(textContent, {xPercent:-100, duration: 0.4}, { xPercent: 0 }, .45);
      }

      landingEntrance();

  });

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <Header />

        {/* section 1 */}
        <section id='section-1' className="overflow-hidden relative h-screen w-full flex flex-row items-stretch lg:min-h-[900px] lg:max-h-[1080px] xl:max-h-[1440px]">
          <div className='relative section-outer h-full w-full flex flex-row items-center justify-between'> 
              <div className="section-inner z-20 w-full relative flex items-center justify-center xl:justify-start">
                <div className="landing-content xl:pl-36 w-3/4 max-w-full xl:max-w-[900px]">
                  <span className='upperLogo text-white text-3xl sm:text-5xl font-bolder font-hero'>調和</span>
                  <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bolder font-hero uppercase mb-10"><span className="block">Collection</span>Harmony</h1>
                  <p className="mb-10 text-2xl text-white font-cta font-light">Découvrez une séléction de théières en grès brut mélées aux couleurs & blasons inspirés des grands clans du Japon féodal</p>
                </div>
              </div>
              <div className="hidden md:block md:w-[120px] lg:w-[140px] z-10 h-full bg-yellow-500 bg-[url('/svg/topography.svg')]"></div>
              <div className="bg z-0 bg-[url('/images/bg_landing_mobile.jpg')] md:bg-[url('/images/bg_landing.jpg')] absolute top-0 left-0 h-full w-full bg-cover bg-center bg-blend-darken"></div>
            </div>
        </section>

        {/* section 2 */}
        <section className='relative h-[800px] z-10 w-full bg-gray-100'></section>

        <div className="fixed top-0 right-0 -z-1 h-screen w-screen flex items-center place-content-center bg-gray-900">
          <div className="clan-icon bg-[url('/svg/clan.svg')] opacity-10 bg-contain  h-[350px] w-[350px] md:h-[650px] md:w-[650px]"></div>
        </div>

      </main>
    </Layout>
  );
}


