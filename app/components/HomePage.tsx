
import Image from 'next/image';
import Group8 from "../../public/Images/Group 8.png"
import Group9 from "../../public/Images/Group 9.png"
import MaskGroup11 from "../../public/Images/Mask group11.png"
import MaskGroup12 from "../../public/Images/maskgroup12.png"
import MaskGroup16 from "../../public/Images/Mask group 16.png"
import MaskGroup17 from "../../public/Images/Mask group 17.png"
import Asgaard from "../../public/Images/Asgaard sofa 1.png"
import group48 from "../../public/Images/group 48.png"
import rectangle1 from "../../public/Images/Rectangle 13@2x.png"
import rectangle2 from "../../public/Images/Rectangle 14.png"
import Group36 from "../../public/Images/Group 36.png"
import Group35 from "../../public/Images/Group 35.png"
import Group43 from "../../public/Images/Group 43.png"
import Link from 'next/link'
import Group29 from "../../public/Images/Group 29.png"
import HomeHeader from './HomeHeader';
const HomePage = () => {
  
  return (
    <>
    <HomeHeader/>
      <div className="bg-[#FBEBB5] absolute w-full h-[1000px] left-0 top-0">
        <div className=" absolute w-[440px] h-[276px] left-[202px] top-[428px]">
          <h3 className="absolute w-[440px] h-[192px] left-[0px] top-[-9px] text-black Poppins font-medium text-[64px] leading-[96px] font-poppins">
            Rocket single seater
          </h3>
          <h2 className="absolute w-[121px] h-[36px] left-[0px] top-[235px] text-black Poppins font-medium text-[24px] leading-[36px] font-poppins">
            Shop Now
          </h2>
          <hr className="absolute w-[121px] h-0 left-[0px] top-[275px] border-1.5 border-black" />
        </div>
        <div
          className={`absolute w-[800px] h-[1000px] left-[548px] top-0  drop-shadow-[0px_28px_30px_rgba(0,0,0,0.1)]`}
          style={{ backgroundImage: "url('/Images/Rocket single seater 1.png')" }}
        ></div>
      </div>
      {/* group10 */}
      <div className="absolute w-full h-[672px] left-0 top-[996px] bg-[#FAF4F4]">
        <div className="absolute w-[605px] h-[562px] left-[735px] top-[30px] ">
          <Image src={Group8} alt=' Group8 '></Image>

        </div>
        <div className=" absolute w-[605px] h-[562px] left-[100px] top-[30px]">
          <Image src={Group9} alt='Group9'></Image>
        </div>
      </div>
      <div className="absolute w-full h-[777px] left-0 top-[1663px] ">
        {/* Group19 */}
        <h3 className="absolute w-[311px] h-[54px] left-[564px] top-[20px] Poppins font-medium text-[36px] leading-[54px] text-black">
          Top Picks For You
        </h3>
        <p className="absolute w-[773px] h-[24px] left-[333px] top-[77px] Poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
        <div className=" absolute w-[287px] h-[397px] left-[100px] top-[184px]">
          <div>
            <Image src={MaskGroup11} alt='MaskGroup11'></Image>
            <h3 className="absolute w-[194px] h-[71px] left-[0px] top-[370px] Poppins font-medium ">Rs. 25,000.00</h3>
            <h3 className="absolute w-[194px] h-[24px] left-[0px] top-[320px] font-poppins font-normal text-[16px] leading-[24px] text-black">
              Trenton modular sofa_3
            </h3>
          </div>
        </div>
        {/* group 15 */}
        <div className=" absolute w-[287px] h-[397px] left-[417px]  top-[184px]">
          <div>
            <Image src={MaskGroup12} alt='MaskGroup12'></Image>
            <h3 className="absolute w-[194px] h-[71px] left-[0px] top-[375px] Poppins font-medium ">Rs. 25,000.00</h3>
            <h3 className="absolute w-[194px] h-[24px] left-[0px] top-[320px] font-poppins font-normal text-[16px] leading-[24px] text-black">
              Granite dining table with dining chair
            </h3>
          </div>
        </div>
        {/* group 16 */}
        <div className="absolute w-[287px] h-[397px] left-[735px] top-[184px]">
          <div>
            <Image src={MaskGroup16} alt='MaskGroup16'></Image>
            <h3 className="absolute w-[194px] h-[71px] left-[0px] top-[375px] Poppins font-medium ">Rs. 25,000.00</h3>
            <h3 className="absolute w-[194px] h-[24px] left-[0px] top-[320px] font-poppins font-normal text-[16px] leading-[24px] text-black">
              Outdoor bar table and stool
            </h3>
          </div>
        </div>
        {/* group 17 */}
        <div className=" absolute w-[287px] h-[397px] left-[1053px] top-[184px]">
          <div>
            <Image src={MaskGroup17} alt='MaskGroup17'></Image>
            <h3 className="absolute w-[194px] h-[71px] left-[0px] top-[375px] Poppins font-medium ">Rs. 25,000.00</h3>
            <h3 className="absolute w-[194px] h-[24px] left-[0px] top-[320px] font-poppins font-normal text-[16px] leading-[24px] text-black">
              Plain console with teak mirror
            </h3>
          </div>
        </div>
      </div>
      {/* veiw */}
      <div className=" absolute w-[115px] h-[49px] left-[662px] top-[2340px]">
        <h3 className="absolute left-1 Poppins font-medium text-[20px] leading-[30px] text-black">
          View More
        </h3>
        <hr className="absolute w-[115px] h-0 left-[0px] top-[40px] border-[2px] border-black" />
      </div>
      {/* Grouup 23 scrolling*/}
      <div className="absolute w-full h-[799px]  top-[2440px] bg-[#FFF9E6]">
        <div className="absolute w-[331px] h-[205px] left-[1000px] top-[266px]">
          <div className="m-auto w-[149px] h-[36px]  text-black Poppins font-medium text-[24px] leading-[36px]">New Arrivals</div>
          <h2 className="w-[331px] h-[72px]  text-black Poppins font-semibold text-[48px] leading-[72px]">Asgaard sofa</h2>
        </div>
        <div className="absolute w-[255px] h-[64px] left-[1050px] top-[408px] border-[1px] border-[#000000]  ">
          <div className=" w-[106px] h-[30px]  text-black Poppins m-auto pt-4 font-normal text-[20px] leading-[30px]">Order Now</div>
        </div>
        <div className="absolute w-[983px] h-[799px] left-[0px]  ">
          <Image src={Asgaard} alt="Asgaard Sofa" layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* group 54 */}
      <div className="absolute w-full h-[944px] left-0 top-[3250px] bg-white">
        <div className=" m-auto w-[479px] h-[91px] ">
          <h2 className=" m-auto pt-9 w-[174px] h-[54px] text-black font-medium text-[36px] leading-[54px] font-[Poppins]">
            Our Blogs
          </h2>
          <p className="absolute w-[479px] h-[24px] m-auto top-[100px] text-[#9F9F9F] font-medium text-[16px] leading-[24px] font-[Poppins]">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className="absolute w-[1240px] h-[679px] left-[60px] top-[160px] ">

          <div className=" w-[1240px] h-[555px]">
            <div className=" absolute w-[393px] h-[553px] ">
              <Image src={group48} alt='group48'></Image>
              <div className=" absolute w-[339px] h-[129px] left-[26px] top-[410px] ">
                <h2 className="absolute w-[339px] h-[30px] Poppins text-[20px] leading-[30px] font-normal text-black">Going all-in with millennial design</h2>
                <h2 className="absolute w-[130px] h-[36px] left-[111px] top-[40px] Poppins text-[24px] leading-[36px] font-medium text-black">
                  Read More
                </h2>
                <hr className="absolute w-[115px] h-0 left-[120px] top-[80px] border-t-2 border-black" />
                <div className="absolute w-[223px] h-[24px] left-[65px] top-[100px] flex justify-between">
                  <Image src={Group36} alt='Group36'></Image>
                  <Image src={Group35} alt='Group35'></Image>
                </div>
              </div>
            </div>
            <div className=" absolute w-[393px] h-[554px] left-[425px]">
              <Image src={rectangle2} alt='rectangle2'></Image>
              <div className=" absolute w-[339px] h-[129px] left-[26px] top-[410px] ">
                <h2 className="absolute w-[339px] h-[30px] Poppins text-[20px] leading-[30px] font-normal text-black">Going all-in with millennial design</h2>
                <h2 className="absolute w-[130px] h-[36px] left-[111px] top-[40px] Poppins text-[24px] leading-[36px] font-medium text-black">
                  Read More
                </h2>
                <hr className="absolute w-[115px] h-0 left-[120px] top-[80px] border-t-2 border-black" />
                <div className="absolute w-[223px] h-[24px] left-[65px] top-[100px] flex justify-between">
                  <Image src={Group36} alt='Group36'></Image>
                  <Image src={Group35} alt='Group35'></Image>
                </div>
              </div>

            </div>
            <div className=" absolute w-[393px] h-[554px] left-[850px]">
              <Image src={rectangle1} alt='rectangle2'></Image>
              <div className=" absolute w-[339px] h-[129px] left-[26px] top-[410px] ">
                <h2 className="absolute w-[339px] h-[30px] Poppins text-[20px] leading-[30px] font-normal text-black">Going all-in with millennial design</h2>
                <h2 className="absolute w-[130px] h-[36px] left-[111px] top-[40px] Poppins text-[24px] leading-[36px] font-medium text-black">
                  Read More
                </h2>
                <hr className="absolute w-[115px] h-0 left-[120px] top-[80px] border-t-2 border-black" />
                <div className="absolute w-[223px] h-[24px] left-[65px] top-[100px] flex justify-between">
                  <Image src={Group36} alt='Group36'></Image>
                  <Image src={Group35} alt='Group35'></Image>
                </div>
              </div>
            </div>

          </div>
          <h2 className="absolute w-[126px] h-[30px] left-[587px] top-[600px] Poppins text-[20px] leading-[30px] font-medium text-black">
            View All Post
          </h2>
          <hr className="absolute w-[115px] h-0 left-[590px] top-[640px] border-t-2 border-black" />
        </div>
      </div>
      <div className="absolute w-[1440px] h-[450px] left-0 top-[4100px] md:w-full md:h-[300px]">
        <Image src={Group43} alt='Group43'></Image>
        <div className="absolute w-[454px] h-[202px] left-[493px] top-[100px] ">
          <div className=" absolute w-[454px] h-[120px] ">
            <h2 className="absolute w-[454px] h-[90px] Poppins text-[60px] leading-[90px] font-bold text-black">Our Instagram</h2>
            <h3 className="absolute w-[297px] h-[30px] left-[95px] top-[100px] md:text-[16px] md:w-full Poppins text-[20px] leading-[30px] font-normal text-black">
              Follow our store on Instagram
            </h3>
          </div>
          {/* <div className=" absolute w-[255px] h-[64px] left-[0px] top-[153px] md:w-full md:h-[50px] shadow-[0px_20px_20px_rgba(0,_0,_0,_0.1)]"> */}
            <div className="absolute w-[255px] h-[64px] left-[98px] top-[150px] bg-[#FAF4F4] rounded-[50px] box-border shadow-[0px_20px_20px_rgba(0,_0,_0,_0.1)]">
            <h2 className="absolute w-[92px] h-[30px] left-[80px] top-5 Poppins text-[20px] leading-[30px] font-normal text-black">
  Follow Us
</h2>
            </div>

          </div>
        </div>
        <div className=" absolute w-full h-[555px] left-0 top-[4600px]">
        {/* <div className="absolute w-[1131px] h-[312px] left-[102.01px] top-[100px]"> */}
          <h3 className="absolute w-full max-w-[285px] h-auto left-[102.01px] top-[100px] Poppins text-[16px] leading-[24px] font-normal text-[#9F9F9F] md:left-[50px]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </h3>
          <div className=" absolute w-[710px] h-[312px] left-[523.01px] flex justify-between">
            <div className=" absolute w-[352px] h-[312px]">
              <div className=" absolute w-[140px] h-[242px] left-[212px]">
                {/* Help */}
                <h3 className="absolute w-[37px] h-[24px]  Poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">
                  Help
                </h3>
                <div className="absolute w-[140px] h-[163px] top-[80px] ">
                  <ul className="flex gap-10 flex-col Poppins font-medium text-[16px]">
                    <li>Payment Options </li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                  </ul>
                </div>
              </div>
              <div className=" absolute w-[68px] h-[312px]">
                <h3 className="absolute w-[40px] h-[24px]  Poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">
                  Links
                </h3>
                <div className="absolute w-[66px] h-[233px] top-[80px]">
                  <ul className='flex gap-10 flex-col Poppins font-medium text-[16px]'>
                    <Link href="/"> <li>Home</li></Link>
                    <Link href="/shop"> <li>Shop</li></Link>
                    <Link href="/about"> <li>About</li></Link>
                    <Link href="/contact">  <li>Contact</li></Link>
                  </ul>

                </div>
              </div>
            </div>
            <div className="absolute w-[286px] h-[101px] left-[423px]">
              {/* 30 */}
              <h3 className="absolute w-[86px] h-[24px] Poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F]">
                Newsletter
              </h3>
              <Image src={Group29} alt="Group29" className="absolute w-[286px] h-[24px]  top-[77px]"></Image>
            </div>
          </div>
          
        </div>
        <div className="absolute  w-[1240.01px] h-[59px] left-[40px] top-[4950px]">
        <hr className="absolute  w-[1220px] h-[59px] left-[10px] top-[0px]"/>
        <h3 className=" mt-9 Poppins font-normal text-[16px] leading-[24px] text-[#000000] sm:left-[10px] sm:top-[4800px]">
  2022 Meubel House. All rights reserved
</h3>
</div>
      {/* </div> */}
      
    </>
  )
}

export default HomePage