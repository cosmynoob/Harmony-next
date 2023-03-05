/* icon */
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { gsap } from 'gsap';
import { Observer } from 'gsap/dist/Observer';
import * as React from 'react';
import { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  
  const [navClass, setnavClass] = useState("h-20 xl:h-32");
  const listenScrollEvent = () => {
    window.scrollY > 150 ? setnavClass("bg-gray-800 h-20 scrolled") : setnavClass("h-20 xl:h-32");
  };

  useEffect(() => {

    gsap.registerPlugin(Observer);
    const headerObj = document.querySelectorAll("header");
    const animating = false;
    
    headerEntrance(headerObj, animating);

    /* Ajoute la classe scroll quand le scroll de la page dépasse 1080px */
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };


  }, []);

  return (
    <header className='fixed w-full top-0 z-50 border-b border-white border-opacity-10'>
      <div className={clsxm('flex items-center justify-between transition duration-200 ease-in', navClass)}> 
        <div className='flex items-center justify-between pl-4 md:pl-10'>
          <div className='brand_name'>
            <UnstyledLink href='/' className="text-white font-bold uppercase text-lg flex items-center">
              <div className="mr-3 clan-icon bg-[url('/svg/clan.svg')] bg-contain text-white h-[3rem] w-[3rem]"></div>
              <span className='text-2xl'>調和</span>
            </UnstyledLink>
          </div>
        </div>
        <div className="menu-openner relative w-20 md:w-[104px] lg:w-[131px] h-full flex items-center justify-center">
          <button className='menu-openner--button'><Bars3BottomRightIcon className="h-12 w-12 text-white" /></button>
          <div className="menu-openner--bg top-0 left-0 md:hidden h-full w-full absolute bg-[url('/svg/topography.svg')]"></div>
        </div>
      </div>
    </header>
  );
}

function headerEntrance(header, animating) {
  const ha = gsap.timeline({
    defaults: { duration: .45, ease: "power1.inOut" }, 
    onComplete: () => animating = false
  }); 

  ha.delay(.5).fromTo(header, {yPercent:-100, duration: 0.4}, { yPercent: 0 }, 0)
}
