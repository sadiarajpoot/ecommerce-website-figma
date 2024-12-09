import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import AccountLogo from "../../public/Images/accountLogo.png"
import arrow from "../../public/Images/dashicons_arrow-down-alt2.png"
import Group29 from "../../public/Images/Group 29.png";
import PagesHeader from '../components/PagesHeader';

const Checkout = () => {
    return (
        <>
        <PagesHeader/>
      <div className="absolute w-full h-[316px] left-0 top-[100px] bg-cover bg-no-repeat filter blur-[3px]" style={{ backgroundImage: 'url(/Images/shop.png)' }}>
      </div>
      <Image src={AccountLogo} alt="shopLogo" className="absolute w-[160px] h-[140px] left-[658px] top-[161px]"></Image>
      <div className="absolute w-[121px] h-[24px] left-[680px] top-[300px]">
        <h3 className="absolute text-black Poppins font-medium text-[16px] leading-[24px]">
          Home
        </h3>
        <Image src={arrow} alt="arrow" className='absolute left-[55px]' />
        <h3 className="absolute left-[80px] text-black Poppins font-light text-[16px] leading-[24px]">
          CheckOut
        </h3>
      </div>

      <div className="w-full px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 absolute top-[500px] left-[90px]">
        {/* Billing Details Section */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-xl  Poppins  font-semibold mb-4">Billing details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm text-gray-600 mb-1  Poppins ">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your first name"
              />
            </div>
            <div> 
              <label htmlFor="last-name" className="block text-sm text-gray-600 mb-1  Poppins ">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your last name"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="company-name" className="block text-sm text-gray-600 mb-1  Poppins ">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your company name"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="country" className="block text-sm  Poppins  text-gray-600 mb-1">
                Country / Region
              </label>
              <select
                id="country"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Pakistan</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="street-address" className="  Poppins block text-sm text-gray-600 mb-1">
                Street address
              </label>
              <input
                type="text"
                id="street-address"
                className="w-full px-4 py-2 border  Poppins  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your street address"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm  Poppins  text-gray-600 mb-1">
                Town / City
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-2 border  Poppins  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label htmlFor="province" className="block text-sm  Poppins  text-gray-600 mb-1">
                Province
              </label>
              <select
                id="province"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Eastern Province</option>
                {/* Add more options here */}
              </select>
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm text-gray-600   Poppins  mb-1">
                ZIP code
              </label>
              <input
                type="text"
                id="zip"
                className="w-full px-4  Poppins  py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your ZIP code"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm  Poppins  text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 border  Poppins  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm  Poppins  text-gray-600 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300  Poppins  rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your email address"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="additional-info" className="block text-sm  Poppins  text-gray-600 mb-1">
                Additional information
              </label>
              <textarea
                id="additional-info"
                className="w-full px-4 py-2 border  Poppins  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter any additional information"
              ></textarea>
            </div>
          </form>
        </div>
  
        {/* Order Summary Section */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <h2 className="text-xl font-semibold  Poppins  mb-4">Product</h2>
          <div className="mb-4">
            <div className="flex   Poppins  justify-between mb-2">
              <span>Asgard sofa x 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex  Poppins justify-between">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between  Poppins font-semibold text-lg">
              <span>Total</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
          </div>
  
          <div className="mb-4">
            <h3 className="text-lg  Poppins font-medium mb-2">Payment Method</h3>
            <div>
              <label className="flex  Poppins  items-center mb-2">
                <input type="radio" name="payment-method" className="mr-2" />
                Direct Bank Transfer
              </label>
              <p className="text-sm Poppins  text-gray-500 mb-2">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
              <label className="flex  Poppins items-center mb-2">
                <input type="radio" name="payment-method" className="mr-2" />
                Cash on Delivery
              </label>
            </div>
          </div>
  
          <button className="h-[64px]  Poppins  w-[205px] border hover:text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
   >
            Place order
          </button>
        </div>
      </div>
      <div className=" bg-[#FAF4F4] absolute w-full h-[300px] left-0 p-9 top-[1410px]">
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
    );
  };
  
  export default Checkout;