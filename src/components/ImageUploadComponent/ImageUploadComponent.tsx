"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setImageInfo } from "@/redux/slices/admin/imageUpload.slice"
import { CldUploadWidget } from "next-cloudinary"
import React from "react"
import { MdCloudUpload } from "react-icons/md"
import Image from "next/image"

const ImageUploadComponent = () => {
  const { secure_url } = useAppSelector((state) => state.imageUploadSlice)
  const dispatch = useAppDispatch()

  return (
    <div className="w-full min-h-[300px] bg-white shadow-sm  flex justify-center items-center my-10">
      {/* upload section */}
      <div>
        <CldUploadWidget
          uploadPreset="pbwhmlbn"
          onUpload={(result: any, widget: any) => {
            console.log(result)
            console.log(widget, "----widget----")

            if (result.event === "success") {
              let _url = result.info.secure_url
              dispatch(setImageInfo(_url))
              let _thumbnail = result.info.thumbnail_url
            }
          }}
        >
          {({ open }) => {
            function handleOnClick(e: any) {
              e.preventDefault()
              open()
            }
            return (
              <div className="w-full flex flex-col justify-center items-center">
                <div>
                  <MdCloudUpload size={30} color="#939393" />
                </div>
                <div
                  className="w-fit text-center text-gray-500 font-bold my-4"
                  onClick={handleOnClick}
                >
                  Click to Choose <span className="text-blue-400">image </span>
                  file to upload
                </div>
                {/* preview section */}
                <div>
                  {secure_url && (
                    <Image
                      alt="preiew image"
                      src={secure_url}
                      width={300}
                      height={300}
                    />
                  )}
                </div>
              </div>
            )
          }}
        </CldUploadWidget>
      </div>
    </div>
  )
}

export default ImageUploadComponent
