import Link from 'next/link';
import Image from 'next/image'
import ContactLogo from "../../public/Images/contactlogo.png"
import arrow from "../../public/Images/dashicons_arrow-down-alt2.png"
import PagesHeader from '../components/PagesHeader'
import ContactDiv from "../../public/Images/contact.png"
import Group29 from "../../public/Images/Group 29.png";


const Page = () => {
  return (
    <>
      <PagesHeader />
      <div className="absolute w-full h-[316px] left-0 top-[100px] bg-cover bg-no-repeat filter blur-[3px]" style={{ backgroundImage: 'url(/Images/shop.png)' }}>
      </div>
      <Image src={ContactLogo} alt="shopLogo" className="absolute w-[124px] h-[132px] left-[658px] top-[161px]"></Image>
      <div className="absolute w-[121px] h-[24px] left-[660px] top-[295px]">
        <h3 className="absolute text-black Poppins font-medium text-[16px] leading-[24px]">
          Home
        </h3>
        <Image src={arrow} alt="arrow" className='absolute left-[55px]' />
        <h3 className="absolute left-[80px] text-black font-poppins font-light text-[16px] leading-[24px]">
          Contact
        </h3>
      </div>

      <div className="absolute w-full h-[1144px] left-0 top-[416px]">
        <h3 className="absolute w-[375px] h-[54px] left-[533px] mt-10 Poppins font-semibold text-[36px] leading-[54px] text-black">
          Get In Touch With Us
        </h3>
        <p className="absolute w-[644px] h-[48px] left-[398px] top-[100px] Poppins font-normal text-[16px] leading-[24px] text-center text-[#9F9F9F]">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="absolute w-[1058px] h-[923px] left-[151px] top-[157px]">
          <div className="absolute  w-[393px] h-[537px] top-[60px]">
            <Image src={ContactDiv} alt='ContactDiv'></Image>
          </div>
          <div className="absolute w-[635px] h-[923px] Poppins p-9 font-medium text-[16px] left-[554px] top-[60px]">
            <label htmlFor="name" id='name'>Your name</label><br />
            <input type="text" id='name' className='w-[900.75] h-[40px] border border-slate-500 rounded mt-4 p-4 mb-10 Poppins font-light' placeholder='abc' /><br />
            <label htmlFor="name" id='name'>Email address</label><br />
            <input type="text" id='name' className='w-[900.75] h-[40px] rounded border border-slate-500 mt-4 p-4 mb-10 Poppins font-light' placeholder='abc@def.com' /><br />
            <label htmlFor="name" id='name'>Subject</label><br />
            <input type="text" id='name' className='w-[900.75] h-[40px] border border-slate-500  Poppins font-light rounded mt-4 p-4 mb-10' placeholder='This is an optional' /><br />
            <label htmlFor="name" id='name'>Messages</label><br />
            <textarea id='name' className='w-[230px] h-[100px] Poppins border border-slate-500  font-light rounded mt-4 p-4 mb-10' placeholder='Hi! i’d like to ask about'></textarea><br />
          </div>
          <button
            className="absolute w-[237px] h-[48px] left-[630px] top-[630px] border border-black text-black hover:text-white font-semibold rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all duration-200"
          >
            Submit
          </button>
        </div>
      </div>
      <div className=" bg-[#FAF4F4] absolute w-full h-[300px] left-0 p-9 top-[1310px]">
        <div className=" absolute w-[376px] h-[108px] left-[80px] top-[95px]">
        <h3 className="absolute w-[205px] h-[48px]   Poppins font-medium text-[32px] leading-[48px] text-black">Free Delivery</h3>
          <p className="absolute w-[376px] h-[60px] top-14 Poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className="absolute w-[376px] h-[108px] left-[500px] top-[95px]">
        <h3 className="absolute w-[244px] h-[48px]  Poppins font-medium text-[32px] leading-[48px] text-black">90 Days Return</h3>
        <p className="absolute w-[376px] h-[60px] top-14 Poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className=" absolute w-[376px] h-[108px] left-[930px] top-[95px]">
        <h3 className="absolute w-[265px] h-[48px] Poppins font-medium text-[32px] leading-[48px] text-black">Secure Payment</h3>
        <p className="absolute w-[376px] h-[60px] top-14 Poppins font-normal text-[20px] leading-[30px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
      {/* FOOTER */}
      <div className="relative w-full h-auto"> {/* Main container for Footer */}
      <div className="absolute w-full h-[555px] left-0 top-[1800px]">
        <h3 className="absolute  w-[285px] h-auto left-[102.01px] top-[100px] Poppins text-[16px] leading-[24px] font-normal text-[#9F9F9F] md:left-[50px]">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </h3>
        <div className="absolute w-[710px] h-[312px] left-[523.01px] flex justify-between">
          <div className="absolute w-[352px] h-[312px]">
            <div className="absolute w-[140px] h-[242px] left-[212px]">
              <h3 className="absolute w-[37px] h-[24px] Poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">
                Help
              </h3>
              <div className="absolute w-[140px] h-[163px] top-[80px]">
                <ul className="flex gap-10 flex-col Poppins font-medium text-[16px]">
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>
            </div>
            <div className="absolute w-[68px] h-[312px]">
              <h3 className="absolute w-[40px] h-[24px] Poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">
                Links
              </h3>
              <div className="absolute w-[66px] h-[233px] top-[80px]">
                <ul className="flex gap-10 flex-col Poppins font-medium text-[16px]">
                  <Link href="/"><li>Home</li></Link>
                  <Link href="/shop"><li>Shop</li></Link>
                  <Link href="/about"><li>About</li></Link>
                  <Link href="/contact"><li>Contact</li></Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute w-[286px] h-[101px] left-[423px]">
            <h3 className="absolute w-[86px] h-[24px] Poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">
              Newsletter
            </h3>
            <Image src={Group29} alt="Group29" className="absolute w-[286px] h-[24px] top-[77px]" />
          </div>
        </div>
      </div>
      <div className="absolute w-[1240.01px] h-[59px] left-[40px] top-[2150px]">
        <hr className="absolute w-[1220px] h-[59px] left-[10px] top-[0px]" />
        <h3 className="mt-9 Poppins font-normal text-[16px] leading-[24px] text-[#000000] sm:left-[10px] sm:top-[4800px]">
          2022 Meubel House. All rights reserved
        </h3>
      </div>
    </div>

    </>
  )
}

export default Page