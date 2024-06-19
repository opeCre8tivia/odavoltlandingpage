"use client"

import { PodcastType } from "@/types/global.types"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa"
type Props = {
  podcast: PodcastType
}

const PodcastCard = ({ podcast }: Props) => {
  const audioPlayer = useRef()
  const progressBar = useRef()

  const [player, setPlayer] = useState<HTMLAudioElement>()
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)

  //set player to state
  useEffect(() => {
    if (audioPlayer.current) {
      setPlayer(audioPlayer.current)
    }
  }, [audioPlayer?.current])

  useEffect(() => {
    if (audioPlayer.current) {
      let _player: HTMLAudioElement = audioPlayer.current
      const _duration = _player.duration
      _duration && setDuration(_duration)

      //set progress bar max value
      if (progressBar.current) {
        //@ts-ignore
        progressBar.current.max = _duration
      }
    }
  }, [audioPlayer?.current])

  //setting current play time
  useEffect(() => {
    if (player) {
      player.currentTime && setCurrentTime(player.currentTime)
    }
  }, [player?.currentTime])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)

    if (!isPlaying && audioPlayer.current) {
      let _player: HTMLAudioElement = audioPlayer.current
      _player.play()
    } else if (isPlaying && audioPlayer.current) {
      let _player: HTMLAudioElement = audioPlayer.current
      _player.pause()
    }
  }

  const formatTime = (seconds: number): string => {
    const toMinutes = seconds / 60
    const _minutes = Math.floor(toMinutes)

    const _remainingSeconds = Math.floor(seconds % 60)
    return `${_minutes}:${_remainingSeconds}`
  }

  return (
    <div className="w-full md:w-[30%] h-fit bg-white flex flex-col justify-start items-start rounded">
      <div className="w-full bg-gray-100 flex justify-center items-center">
        <Image
          alt="podcast thumbnail"
          src={podcast.thumbnail_uri}
          width={100}
          height={100}
          className="p-2"
        />
      </div>

      <div className="w-full px-2 flex flex-col">
        {/* shadow audio element */}
        {/* @ts-ignore */}
        <audio ref={audioPlayer} src={podcast.podcast_uri} />

        {/* title */}
        <div className="mt-4 w-full text-[16px] font-bold text-gray-600">
          {podcast.title}
        </div>
        <div className="w-full text-[12px]  font-normal text-gray-600">
          {podcast.description}
        </div>

        {/* audio player */}

        <div className="w-full h-[40px] flex items-center">
          {/* prev */}
          <button className="mr-5">
            <FaBackward />
          </button>
          {/* play pause */}
          <button onClick={() => togglePlay()}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          {/* next */}
          <button className="mx-5">
            <FaForward />
          </button>

          {/* current  time*/}
          <div className="mx-2 text-gray-800 text-[12px]">
            {formatTime(currentTime)}
          </div>

          {/* progress */}
          {/* @ts-ignore */}
          <input type="range" defaultValue={0} ref={progressBar} />

          {/* duration */}
          <div className="mx-2 text-gray-800 text-[12px] ">
            {formatTime(duration)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PodcastCard
