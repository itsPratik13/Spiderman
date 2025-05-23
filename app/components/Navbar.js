'use client'
import React, { useEffect, useRef,useState } from 'react'
import Button from './Button'
import { useWindowScroll } from 'react-use'
import { TiLocationArrow } from 'react-icons/ti'
import gsap from 'gsap'

const navitems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact']

const Navbar = () => {
  const NavContainerRef = useRef(null)
  const {y:currentScrollY}=useWindowScroll();
  const [isNavVisible, setisNavVisible] = useState(true)
  const [lastScrollY, setlastScrollY] = useState(0)
  useEffect(()=>{
    if(currentScrollY===0){
      setisNavVisible(true)
      NavContainerRef.current.classList.remove('floating-nav')
    }
    else if(currentScrollY>lastScrollY){
      setisNavVisible(false)
      NavContainerRef.current.classList.add('floating-nav')

    }
    else if(currentScrollY<lastScrollY){
      setisNavVisible(true)
      NavContainerRef.current.classList.add('floating-nav')

    }
    setlastScrollY(currentScrollY)

  },[currentScrollY,lastScrollY])

  useEffect(()=>{
    gsap.to(NavContainerRef.current,{
      y:isNavVisible?0:-100,
      opacity:isNavVisible?1:0,
      duration:0.2
    })
  },[isNavVisible])

  return (
    <div
      ref={NavContainerRef}
      className='fixed inset-x-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'
    >
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
          <div className='flex items-center gap-7'>
            <img src='/img/spiderman.png' alt='logo' className='w-10' />
            <Button
              id='product-button'
              title='Products'
              rightIcon={<TiLocationArrow />}
              containerClass='bg-blue-50 md:flex hidden items-center justify-center gap-1'
            />
          </div>

          <div className='flex h-full items-center'>
            <div className='hidden md:flex gap-6'>
              {navitems.map((item, index) => (
                <a key={index} className=' relative ms-10 font-general text-xs uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer nav-btn-hover' href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
