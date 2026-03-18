"use client"

import { cartItems } from "@/app/(pages)/cart/page"
import { Trash2 } from "lucide-react"

import Image from "next/image"
export default function ShoppingForm() {
  return (
    <div>
      {
           cartItems.map((item)=> (
              //single cart tiem
              <div className="flex items-center justify-between" key={item.id}>
                {/* //image   */}
                <div className="flex gap-8">
                  <div className="relative w-30 h-30 bg-gray-100 rounded-lg overflow-hidden">
                    <Image src={item.images[item.selectedColor]} alt={item.name} fill className="object-contain" />
                  </div>
                  {/* //detials  */}
                  <div className="flex flex-col">
                    <div className="flex flex-col ">
                      <p className="text-sm font-medium"> {""}{item.name}</p>
                      <p className="text-xs text-gray-500">Quantity:{" "}{item.quantity}</p>
                    <p className="text-xs text-gray-500">Size:{" "}{item.selectedSize}</p>
                    <p className="text-xs text-gray-500">Color:{" "}{item.selectedColor}</p>
                    </div>
                    <p className="font-medium mt-2" >${item.price.toFixed(2)}</p>
                  </div>


                </div>
                {/* //delt button  */}
                <button className="w-6 h-6 rounded-full hover:bg-red-300 transition-all duration-300  bg-red-200 flex items-center justify-center cursor-pointer">
                  <Trash2  className="w-3 h-3"/>
                </button>

              </div>
            ))
      }
    </div>
  )
}
