// import React from 'react'
import { useEffect, useState , useCallback} from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player

export const Room = () => {
    const [stream, setStream] =useState('')

    const getUserStream = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({audio:true, video:true})
        setStream(stream)
        const tracks=stream.getTracks()
        for (let track of tracks){
            console.log({track})
        }
    },[])

    useEffect(()=>{
        getUserStream()
    },[getUserStream])
    return (
        <div className="full-container">
            {console.log({stream})}
            <ReactPlayer url={stream} playing controls/>
        </div>
    )
}