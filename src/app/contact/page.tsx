'use client'
import React, { FormEvent, useState } from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {

  

  return (
    <div className="min-h-screen relative w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center mt-36">
      <h2 className="text-6xl font-bold text-white text-center">Contact Us</h2>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We are here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
      <form  className="flex flex-col  gap-6 mt-8">
        <input className="rounded-xl border w-[400px] px-4 py-2" 
        type="email" 
        placeholder="Enter your Email"
       
        required
         />

        <textarea className="rounded-xl border w-[400px] px-4 py-2" 
        rows={6} 
        placeholder="Write your message"
        
        required
        />

        <button type="submit" className="text-black bg-white rounded-xl px-6 py-2">Submit</button>
      </form>
      </div>
      <Meteors number={20} />
    </div>
  )
}


export default page