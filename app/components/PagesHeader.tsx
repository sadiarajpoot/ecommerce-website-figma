"use client"
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { TbUserExclamation } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const PagesHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <>
           
<div className="absolute w-full h-[100px] left-0 top-0 shadow-[0_4px_6px_rgba(0,0,0,0.2)] p-4 bg-white z-50">
        {/* Icons Container */}
        <div className="absolute flex sm:justify-start  sm:space-x-6 sm:left-4 sm:top-[36px] md:space-x-8 space-x-4 md:left-[1093px] md:top-[36px]">
        <div className=" cursor-pointer w-[28px] h-[28px]">
            <BsCart3 size={30} />
          </div>
          <div className=" cursor-pointer  w-7 h-7">
            <GoHeart size={30} />
          </div>
          <div className=" cursor-pointer  w-7 h-7">
            <IoSearchOutline size={30} />
          </div>
          <div className=" cursor-pointer  w-7 h-7">
          <TbUserExclamation size={30} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:w-[430px] md:h-[24px] md:left-[505px] md:top-[38px] absolute">
          <ul className="flex flex-row justify-between space-x-9  w-full Poppins font-medium">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="/shop">
              <li className="cursor-pointer">Shop</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer">About</li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer">Contact</li>
            </Link>
            
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <div className="text-xl font-bold"></div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <AiOutlineClose size={27}/> : <AiOutlineMenu size={27}/>}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[100px] left-0 w-full bg-white shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-4 Poppins font-medium">
              <Link href="/">
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link href="/shop">
                <li className="cursor-pointer">Shop</li>
              </Link>
              <Link href="/about">
                <li className="cursor-pointer">About</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      </>
  )
}
export default PagesHeader;