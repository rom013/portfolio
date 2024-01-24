import { useRef, useState } from "react"

const CardWork = ({ urlVideo, name, urlImage, techs, time }) => {

    const [showVideo, setShowVideo] = useState(false)
    const video = useRef()

    const playVideo = () => {
        video.current.play()
    }
    const pauseVideo = () => {
        video.current.pause()
        video.current.currentTime = 0
    }

    return (
        <div
            className="flex flex-col"
        >
            <div
                className="w-full flex justify-center items-center bg-zinc-200 dark:bg-zinc-700 py-12 px-5 h-[20rem] max-w-[30rem] flex-1 mb-10"
                onMouseOver={() => {
                    setShowVideo(true)
                    playVideo()
                }}
                onMouseLeave={() => {
                    setShowVideo(false)
                    pauseVideo()
                }}
            >
                {
                    showVideo
                        ? <video
                            ref={video}
                            src={urlVideo}
                            control={false}
                            className="aspect-video object-contain transition-all duration-1000 animate-[opacity-in_linear_.4s]"
                            type="video/mp4"
                            loop
                        />
                        : <img
                            src={urlImage}
                            alt=""
                            className="aspect-video object-contain transition-all duration-1000 animate-[opacity-in_linear_.4s]"
                        />

                }
            </div>

            <strong
                className="text-4xl font-Lato font-normal pb-6"
            >
                {name}
            </strong>

            <div
                className="flex justify-between gap-5 pt-8 border-t-2"
            >
                <div
                    className="flex gap-1"
                >
                    {
                        techs.map(tech => {
                            return <i className="text-xs text-zinc-600" >{tech}</i>
                        })
                    }
                </div>
                <time>{time}</time>
            </div>

        </div>
    )
}

export default CardWork