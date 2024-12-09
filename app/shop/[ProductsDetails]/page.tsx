import Image from "next/image";
import Link from "next/link";
import ProductDetails from "../../../public/Images/productdetails.png"
import Pink from "../../../public/Images/PinkSofa2.png"
import Pink2 from "../../../public/Images/PinkSofa1.png"
import item17 from "../../../public/Images/item17.png"
import item18 from "../../../public/Images/Group 18.png"
import item19 from "../../../public/Images/item 19.png"
import item20 from "../../../public/Images/item 20.png"
import PagesHeader from "@/app/components/PagesHeader";
import Group29 from "../../../public/Images/Group 29.png";
const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-[200px]">
      <PagesHeader/>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="list-reset flex space-x-2">
          <li><Link href="/" className="hover:text-gray-800 Poppins">Home</Link></li>
          <li>/</li>
          <li><Link href="/shop" className="hover:text-gray-800 Poppins">Shop</Link></li>
          <li>/</li>
          <li className="text-gray-800 Poppins">Asgaard Sofa</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="rounded-lg overflow-hidden mb-4 mt-[40px]">
            <Image
              src={ProductDetails}
              alt="Asgaard Sofa"
              width={800}
              height={800}
              className="w-full"
            />
          </div>

        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold mb-2 Poppins mt-[40px]">Asgaard Sofa</h1>
          <p className="text-xl text-gray-700 font-medium mb-4 Poppins">Rs. 250,000.00</p>
          <div className="flex items-center mb-4">
            <div className="text-yellow-500 flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2 Poppins">5 Customer Reviews</span>
          </div>
          <p className="text-gray-600 mb-4 Poppins">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero...
          </p>

          {/* Size Options */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-700 mb-2 Poppins">Size</h3>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 px-4 py-2 rounded hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-700 mb-2 Poppins">Color</h3>
            <div className="flex space-x-2">
              {["black", "blue", "gold"].map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full bg-${color} border border-gray-300 cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-3 py-2">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-2">+</button>
            </div>
            <Link href="/cart"><button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 Poppins">
              Add To Cart
            </button></Link>
          </div>
        </div>
      </div>
      <div className="absolute w-[605px] h-0 left-[735px] top-[830px] border border-[#D9D9D9]">
        <p className=" mt-[50px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal Poppins">
          SKU <span className="absolute w-[44px] h-[24px] left-[80px]"> : <span className="absolute w-[44px] h-[24px] left-[30px]">SS001</span></span>
        </p>
        <p className=" mt-[20px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal Poppins">
          Category <span className="absolute w-[44px] h-[24px] left-[80px]"> : <span className="absolute w-[44px] h-[24px] left-[30px]">Sofas</span></span>
        </p>
        <p className=" mt-[20px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal Poppins">
          Tags <span className="absolute w-[440px] h-[24px] left-[80px]"> : <span className="absolute w-[190px] h-[24px] left-[20px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal font-poppins">Sofa, Chair, Home, Shop</span></span>
        </p>
        <p className=" mt-[20px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal Poppins">
          Share<span className="absolute w-[44px] h-[24px] left-[80px]"> :</span>
          <span className="absolute w-[44px] h-[24px] left-[120px] top-[180px] flex flex-row space-x-4">
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none">
                  <g clip-path="url(#akarIconsFacebookFill0)">
                    <path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067" clip-rule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="akarIconsFacebookFill0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
              </svg>
            </Link>
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
              </svg>
            </Link>
          </span>
        </p>
      </div>
      <div className="absolute w-full h-[0px] left-0 top-[1050px] border-t-2 border-[#D9D9D9]"></div>
      <div className=" absolute w-full h-[744px] left-0 top-[950px]">
        <div className="absolute w-[649px] h-[36px] left-[396px] top-[130px] flex justify-around Poppins  text-[24px] text-[#9F9F9F]">
          <p className="text-black">Description</p>
          <p>Additional Information</p>
          <p>Reviews [5]</p>
        </div>
        <div className="absolute w-[1026px] h-[174px] left-[207px] top-[210px]  space-y-3 Poppins font-normal text-[16px] leading-[24px] text-justify text-[#9F9F9F]">
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className="absolute w-[1239px] h-[348px] left-[100px] top-[300px] "></div>
      </div>
      <div className="absolute w-full h-[0px] left-0 top-[1800px] border-t-2 border-[#D9D9D9]">
      </div>
      <div className="absolute w-[1239px] h-[348px] left-[100px] top-[1400px] flex justify-between" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)" }}>
        <Image src={Pink} alt="PinkSofa" />
        <Image src={Pink2} alt="PinkSofa" />
      </div>
      <div className="absolute w-full h-[777px] left-0 top-[1705px] ">
        <h3 className="absolute w-[309px] h-[54px] left-[564px] top-[190px] text-black Poppins font-medium text-[36px] leading-[54px]">
          Related Products
        </h3>
        <div className="absolute w-[1240px] h-[397px] left-[55px] top-[300px] flex justify-evenly">
          <Image src={item17} alt="item17"></Image>
          <Image src={item18} alt="item18"></Image>
          <Image src={item19} alt="item19"></Image>
          <Image src={item20} alt="item20"></Image>
        </div>
       <span className="absolute w-[115px] h-[49px] Poppins font-medium text-[16px]  p-4 border-b-2 border-black left-[650px] top-[750px]">
       View More
       </span>
      </div>
      {/* footer */}
      <div className="absolute w-full h-[555px] left-0 top-[2590px]">
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
      <div className="absolute w-[1240.01px] h-[59px] left-[40px] top-[2950px]">
        <hr className="absolute w-[1220px] h-[59px] left-[10px] top-[0px]" />
        <h3 className="mt-9 Poppins font-normal text-[16px] leading-[24px] text-[#000000] sm:left-[10px] sm:top-[4800px]">
          2022 Meubel House. All rights reserved
        </h3>
      </div>
     
    </div>

  );
};

export default ProductPage;