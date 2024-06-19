"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setAudioInfo } from "@/redux/slices/admin/uploadAudio.slice"
import { CldUploadWidget } from "next-cloudinary"
import React from "react"
import { MdCloudUpload } from "react-icons/md"

type Props = {
  onChange: (info: any) => void
}

const AudioUploadComponent = ({ onChange }: Props) => {
  const { podcast_uri } = useAppSelector((state) => state.uploadAudioSlice)
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
              dispatch(setAudioInfo(_url))
              let _thumbnail = result.info.thumbnail_url
              onChange(result.info)
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
                  Click to Choose <span className="text-blue-400">audio </span>
                  file to upload
                </div>

                {podcast_uri && (
                  <div className="w-full h-[80px] my-4">
                    <audio controls>
                      <source
                        src={podcast_uri}
                        type="audio/mpeg" //TODO: configure to accept variable formats
                      />
                      Your browser does not support the audio tag.
                    </audio>
                  </div>
                )}
              </div>
            )
          }}
        </CldUploadWidget>
      </div>

      {/* preview section */}
      <div></div>
    </div>
  )
}

export default AudioUploadComponent
