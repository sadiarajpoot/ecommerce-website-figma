
import React from 'react'
import Image from 'next/image'
import shopLogo from "../../public/Images/shop logo.png"
import arrow from "../../public/Images/dashicons_arrow-down-alt2.png"
import Group57 from "../../public/Images/Group 57.png"
import Round from "../../public/Images/ci_grid-big-round.png"
import List from "../../public/Images/bi_view-list.png"
import Item1 from "../../public/Images/item1.png"
import Item2 from "../../public/Images/item 2.png"
import Item3 from "../../public/Images/item 3.png"
import Item4 from "../../public/Images/item 4.png"
import Item5 from "../../public/Images/item 5.png"
import Item6 from "../../public/Images/item 6.png"
import Item7 from "../../public/Images/item 7.png"
import Item8 from "../../public/Images/item 8.png"
import Item9 from "../../public/Images/item 9.png"
import Item10 from "../../public/Images/item 10.png"
import Item11 from "../../public/Images/item11.png"
import Item12 from "../../public/Images/item 12.png"
import Item13 from "../../public/Images/item 13.png"
import Item14 from "../../public/Images/item14.png"
import Item15 from "../../public/Images/item 15.png"
import Item16 from "../../public/Images/item16.png"
import Link from 'next/link'
import Footer from '../components/Footer'
import PagesHeader from "../components/PagesHeader";
const Shop = () => {
  
  return (
    <>
      <PagesHeader />
      <div className="absolute w-full h-[316px] left-0 top-[100px] bg-cover bg-no-repeat filter blur-[3px]" style={{ backgroundImage: 'url(/Images/shop.png)' }}>
      </div>
      <Image src={shopLogo} alt="shopLogo" className="absolute w-[124px] h-[132px] left-[658px] top-[161px]"></Image>
      <div className="absolute w-[121px] h-[24px] left-[660px] top-[295px]">
        <h3 className="absolute text-black Poppins font-medium text-[16px] leading-[24px]">
          Home
        </h3>
        <Image src={arrow} alt="arrow" className='absolute left-[55px]' />
        <h3 className="absolute left-[80px] text-black font-poppins font-light text-[16px] leading-[24px]">
          Shop
        </h3>
      </div>
      <div className="absolute w-full bg-[#FAF4F4] h-[100px] left-0 top-[463px]">
        <div className=" absolute w-[85px] h-[30px] left-[98px] mt-9">
          {/* 57 */}
          <Image src={Group57} alt="Group57" />
        </div>
        <div className="  absolute w-[28px] h-[28px] left-[206px] mt-9">
          {/* round */}
          <Image src={Round} alt="Round" />
        </div>
        <div className="absolute w-[24px] h-[24px] left-[258px] mt-10">
          {/* list */}
          <Image src={List} alt="List" />
        </div>
        <div className="absolute w-[237px] h-[37px] left-[380px] mt-9">
          {/* 62 */}
          <hr className="absolute w-[37px] h-0  left-[-70px] mt-4 border-2 border-[#9F9F9F] transform rotate-90" />
          <h3 className="absolute w-[203px] h-[24px]  text-black Poppins font-normal text-[14px] p-2">Showing 1–16 of 32 results</h3>
        </div>
        <div className="absolute w-[126px] h-[55px] left-[897px] mt-9">
          {/* 60 */}
          <h3 className="absolute w-[54px] h-[30px]  text-black Poppins font-normal text-[20px] leading-[30px] p-3">Show</h3>
          <div className="absolute w-[55px] h-[55px] left-[90px] bg-white">
            <h3 className="absolute w-[20px] h-[30px]  text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px] p-3">16</h3>
          </div>
        </div>
        <div className="absolute w-[288px] h-[55px] left-[1052px] mt-9">
          {/* 61 */}
          <h3 className=" text-black Poppins font-normal text-[16px] p-4">Short by Default</h3>
          <h3 className="bg-white absolute w-[140px] h-[50px] left-[150px] top-[2px] text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px] p-3">Default</h3>
        </div>
      </div>
      {/* group 79 */}
      <div className="absolute w-full h-[1808px] left-0 top-[563px] ">
        {/* group 64 */}
        <div className=" absolute w-[1240px] h-[397px] ml-[55px]">
        <Link href={`/shop/ProductsDetails${1}`}> <div className="absolute w-[287px] h-[372px]">
            <Image src={Item1} alt='Item1'></Image>
            <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
              Trenton modular sofa_3
            </h3>
            <h3 className="absolute w-[158px] text-[24px] Poppins font-medium leading-[36px] text-black">
              Rs. 25,000.00
            </h3>
          </div>
          </Link>
        </div>
        <Link href={`/shop/ProductsDetails${2}`}> <div className="absolute w-[287px] h-[397px] left-[380px] ">
          <Image src={Item2} alt='Item2'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Granite dining table with dining chair
          </h3>
          <h3 className="absolute w-[158px] top-[340px] text-[24px] Poppins font-medium leading-[36px] text-black">
            Rs. 25,000.00
          </h3>
        </div>
        </Link>
        <Link href={`/shop/ProductsDetails${3}`}><div className="absolute w-[287px] h-[397px] left-[705px] ">
          <Image src={Item3} alt='Item3'></Image>
          <h3 className="av w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Outdoor bar table and stool
          </h3>
          <h3 className="absolute w-[158px] top-[340px] text-[24px] Poppins font-medium leading-[36px] text-black">
            Rs. 25,000.00
          </h3>
        </div>
        </Link>
        <Link href={`/shop/ProductsDetails${4}`}><div className=" absolute w-[287px] h-[397px] left-[1030px]  ">
          <Image src={Item4} alt='Item4'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Plain console with teak mirror
          </h3>
          <h3 className="absolute w-[158px] top-[340px] text-[24px] Poppins font-medium leading-[36px] text-black">
            Rs. 25,000.00
          </h3>
        </div>
        </Link>
      </div>
      {/* GROUP 80 */}
      <div className="absolute w-[1240px] h-[399px] left-[100px] top-[992px] ml-[-43px]">
      <Link href={`/shop/ProductsDetails${5}`}><div className="absolute w-[287px] h-[372px]">
          <Image src={Item5} alt='Item5'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Grain coffee table
          </h3>
          <h3 className="absolute w-[158px] text-[24px] Poppins font-medium leading-[36px] text-black">
            Rs. 15,000.00
          </h3>
        </div>
        </Link>
      </div>
     <Link href={`/shop/ProductsDetails${6}`}><div className="absolute w-[287px] h-[397px] left-[380px] top-[992px]">
        <Image src={Item6} alt='Item6'></Image>
        <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
          Kent coffee table
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[22px] Poppins font-medium leading-[36px] text-black">
          Rs. 225,000.00
        </h3>
      </div>
      </Link>  
      
      <Link href={`/shop/ProductsDetails${7}`}><div className="absolute w-[287px] h-[397px] left-[700px] top-[992px]">
        <Image src={Item7} alt='Item7'></Image>
        <h3 className=" w-[194px] h-[24px]  text-[15px] Poppins font-normal leading-[24px] text-black">
          Round coffee table_color 2
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[22px] Poppins font-medium leading-[36px] text-black">
          Rs. 251,000.00
        </h3>
      </div>
      </Link>  
      <Link href={`/shop/ProductsDetails${8}`}><div className=" absolute w-[287px] h-[397px] left-[1015px] top-[992px]">
        <Image src={Item8} alt='Item8'></Image>
        <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
          Reclaimed teak coffee table
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[22px] Poppins font-medium leading-[36px] text-black">
          Rs. 25,200.00
        </h3>
      </div>
      </Link>  
      {/* group */}
      <div className="absolute w-[1240px] h-[399px] left-[0px] top-[1405px] ml-[55px]">
      <Link href={`/shop/ProductsDetails${9}`}><div className="x absolute w-[287px] h-[372px]">
          <Image src={Item9} alt='Item9'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Plain console_
          </h3>
          <h3 className="absolute w-[158px]  text-[22px] Poppins font-medium leading-[36px] text-black">
            Rs. 258,200.00
          </h3>
        </div>
        </Link>  
        <Link href={`/shop/ProductsDetails${10}`}><div className=" absolute w-[287px] left-[315px] h-[372px]">
          <Image src={Item10} alt='Item10'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Reclaimed teak Sideboard
          </h3>
          <h3 className="absolute w-[158px] top-[340px] text-[24px] Poppins font-medium leading-[36px] text-black">
            Rs. 20,000.00
          </h3>
        </div>
        </Link>  
        <Link href={`/shop/ProductsDetails${11}`}><div className=" absolute w-[287px] left-[640px] h-[372px]">
          <Image src={Item11} alt='Item11'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            SJP_0825
          </h3>
          <h3 className="absolute w-[158px]  text-[20px] Poppins font-medium leading-[36px] text-black">
            Rs. 200,000.00
          </h3>
        </div>
        </Link>  
        <Link href={`/shop/ProductsDetails${12}`}> <div className="absolute w-[287px] left-[960px] h-[372px]">
          <Image src={Item12} alt='Item12'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Bella chair and table

          </h3>
          <h3 className="absolute w-[158px] text-[20px] Poppins font-medium leading-[36px] text-black">
            Rs. 100,000.00
          </h3>
        </div>
        </Link>  
      </div>
      {/* //group 82 */}
      <div className="absolute w-[1240px] h-[399px]  left-[100px] top-[1822px] ml-[-45px]">
      <Link href={`/shop/ProductsDetails${13}`}> <div className=" absolute w-[287px] h-[372px]">
          <Image src={Item13} alt='Item13'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Granite square side table
          </h3>
          <h3 className="absolute w-[158px] top-[330px] text-[21px] Poppins font-medium leading-[36px] text-black">
            Rs. 258,800.00
          </h3>
        </div>
        </Link>  
        <Link href={`/shop/ProductsDetails${14}`}><div className=" absolute w-[287px] left-[315px] h-[372px]">
          <Image src={Item14} alt='Item14'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Asgaard sofa
          </h3>
          <h3 className="absolute w-[158px] text-[21px] Poppins font-medium leading-[36px] text-black">
            Rs. 250,000.00
          </h3>
        </div>
        </Link> 
        <Link href={`/shop/ProductsDetails${15}`}><div className=" absolute w-[287px] left-[640px] h-[372px]">
          <Image src={Item15} alt='Item15'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Maya sofa three seater
          </h3>
          <h3 className="absolute w-[158px] text-[21px] Poppins font-medium leading-[36px] text-black">
            Rs. 115,000.00
          </h3>
        </div>
        </Link> 
        <Link href={`/shop/ProductsDetails${16}`}><div className="absolute w-[287px] left-[960px] h-[372px]">
          <Image src={Item16} alt='Item16'></Image>
          <h3 className=" w-[194px] h-[24px]  text-[16px] Poppins font-normal leading-[24px] text-black">
            Outdoor sofa set
          </h3>
          <h3 className="absolute w-[158px] text-[21px] Poppins font-medium leading-[36px] text-black">
            Rs. 244,000.00
          </h3>
        </div>
        </Link> 
      </div>
      {/* Group 72 */}
      <div className="absolute w-[392px] h-[60px] left-[524px] top-[2311px]">
        <div className="absolute w-[60px] h-[60px]  bg-[#FBEBB5] rounded-[10px] flex justify-center items-center">
          <h3 className="absolute w-[7px] h-[30px]  Poppins font-normal text-[20px] leading-[30px] text-black">1</h3>
        </div>
        <div className="absolute w-[60px] h-[60px]  bg-[#FFF9E5] rounded-[10px] flex justify-center items-center Poppins font-normal text-[20px] leading-[30px] text-black left-[100px]">2</div>
        <div className=" absolute w-[60px] h-[60px]  bg-[#FFF9E5] rounded-[10px] flex justify-center items-center Poppins font-normal text-[20px] leading-[30px] text-black  left-[195px] ">3</div>
        <div className="absolute w-[98px] h-[60px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center Poppins font-normal text-[20px] leading-[30px] text-black   left-[294px]">next</div>
      </div>
      {/* group 76 */}
      <div className=" bg-[#FAF4F4] absolute w-full h-[300px] left-0 top-[2463px]">
        <div className=" absolute w-[376px] h-[108px] left-[100px] top-[95px]">
        <h3 className="absolute w-[205px] h-[48px]   Poppins font-medium text-[32px] leading-[48px] text-black">Free Delivery</h3>
          <p className="absolute w-[376px] h-[60px] top-14 Poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className="absolute w-[376px] h-[108px] left-[524px] top-[95px]">
        <h3 className="absolute w-[244px] h-[48px]  Poppins font-medium text-[32px] leading-[48px] text-black">90 Days Return</h3>
        <p className="absolute w-[376px] h-[60px] top-14 Poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className=" absolute w-[376px] h-[108px] left-[944px] top-[95px]">
        <h3 className="absolute w-[265px] h-[48px] Poppins font-medium text-[32px] leading-[48px] text-black">Secure Payment</h3>
        <p className="absolute w-[376px] h-[60px] top-14 Poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Shop
