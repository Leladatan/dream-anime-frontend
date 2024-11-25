"use client";

import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HeroVideosSection = () => {
    const [current, setCurrent] = useState<number>(1);
    const [hasClicked, setHasClicked] = useState<boolean>(false);
    const [loadedVideos, setLoadedVideos] = useState<number>(0);

    const nextVideoRef = useRef<HTMLVideoElement | null>(null);

    const totalVideos = 4;

    const getVideoSrc = (index: number): string => {
        return `videos/hero-${index}.mp4`;
    };

    const upcomingVideoIndex: number = (current % totalVideos) + 1;
    const activeVideoIndex: number = (current - 1) % totalVideos + 1;

    const handleMiniVdClick = (): void => {
        setHasClicked(true);
        setCurrent((prev) => prev + 1);
    };

    const handleVideoLoad = (): void => {
        setLoadedVideos((prev) => prev + 1);
    };

    useGSAP(() => {
        if (hasClicked) {
            gsap.set("#next-video", {visibility: "visible"});
            gsap.to("#next-video", {
                transformOrigin: "center center",
                scale: 1,
                width: "100%",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                onStart: () => {
                    if (nextVideoRef.current) {
                        nextVideoRef.current.play();
                    }
                },
            });

            gsap.from("#current-video", {
                transformOrigin: "center center",
                scale: 0,
                duration: 1.5,
                ease: "power1.inOut",
            });
        }
    }, {dependencies: [current], revertOnUpdate: true});

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
            borderRadius: "0 0 40% 10%",
        });

        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    return (
        <>
            <div className={"mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg"}>
                <div
                    className={"origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"}
                    onClick={handleMiniVdClick}
                >
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop={true}
                        muted={true}
                        id={"current-video"}
                        className={"size-64 origin-center scale-150 object-cover object-center"}
                        onLoadedData={handleVideoLoad}
                    />
                </div>
            </div>

            <video
                ref={nextVideoRef}
                src={getVideoSrc(activeVideoIndex)}
                loop={true}
                muted={true}
                id={"next-video"}
                className={"absolute-center invisible absolute z-20 size-64 object-cover object-center"}
                onLoadedData={handleVideoLoad}
            />

            <video
                src={getVideoSrc(activeVideoIndex)}
                autoPlay={true}
                loop={true}
                muted={true}
                className={"absolute left-0 top-0 size-full object-cover object-center"}
                onLoadedData={handleVideoLoad}
            />
        </>
    );
};

export default HeroVideosSection;