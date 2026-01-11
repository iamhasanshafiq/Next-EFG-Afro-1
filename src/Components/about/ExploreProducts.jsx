"use client";

import { Eye } from "lucide-react"

function ExploreProducts() {
  return (
    <div className="flex justify-center">
      <div className="max-w-300 w-full my-10 h-auto">
        <div
          className=" relative w-[90%] md:w-[100%] h-auto p-6  bg-green-900  md:bg-[url('/images/photo-1614531341773-3bff8b7cb3fc.jfif')]  bg-cover bg-center  rounded-3xl  overflow-hidden">
          <div className="absolute inset-0 bg-green-900/70 rounded-3xl flex items-center justify-center"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between m-auto h-60 md:h-50 gap-4 md:gap-0 px-10">
            <div className="w-full h-full md:w-2/3 text-start md:text-left flex flex-col items-start justify-center">
              <h1 className="text-white text-2xl md:text-3xl font-bold">
                Ready to Join Our Mission?
              </h1>
              <p className="text-white text-base md:text-lg font-medium mt-2">
                Whether you're an African producer looking to reach global markets or an international buyer seeking authentic African products, we're here to help.
              </p>
            </div>
            <div className="w-full  md:w-1/3 flex justify-center items-center r md:justify-end  my-auto">
              <button className="flex items-center justify-center text-lg gap-2 
                   bg-white/10 backdrop-blur-sm border-2 border-gray-300 
                   rounded-3xl text-white font-medium py-4 px-5 
                   transform transition-all duration-500 
                   hover:-translate-y-1 hover:bg-white hover:text-green-900 
                   focus:-translate-y-1 focus:bg-white focus:text-green-900">
                <Eye className="text-lg" />
                Explore Products
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreProducts