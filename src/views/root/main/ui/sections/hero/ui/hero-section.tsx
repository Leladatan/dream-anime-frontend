"use client";

import {useRef, useState} from "react";

const HeroSection = () => {
  const [current, setCurrent] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);

  const nextVideoRef = useRef(null);

  const totalVideos = 4;

  const getVideoSrc = (index: number): string => {
    return `videos/hero-${index}.mp4`;
  };

  const upcomingVideoIndex: number = (current % totalVideos) + 1;

  const handleMiniVdClick = (): void => {
    setHasClicked(true);
    setCurrent((prev) => prev + 1);
  };

  const handleVideoLoad = (): void => {
    setLoadedVideos((prev) => prev + 1);
  };

  return (
    <section className={"relative h-dvh w-screen overflow-x-hidden"}>
      <div id={"video-frame"} className={"relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"}>
        <div>
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
            src={getVideoSrc(current)}
            loop={true}
            muted={true}
            id={"next-video"}
            className={"absolute-center invisible absolute z-20 size-64 object-cover object-center"}
            onLoadedData={handleVideoLoad}
          />

          {/* TODO: исправить выражение `current === totalVideos - 1 ? 1 : current` */}

          <video
            src={getVideoSrc(current === totalVideos - 1 ? 1 : current)}
            autoPlay={true}
            loop={true}
            muted={true}
            className={"absolute left-0 top-0 size-full object-cover object-center"}
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className={"special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75"}>
          G<b>a</b>ming
        </h1>

        <div className={"absolute left-0 top-0 z-40 size-full"}>
          <div className={"mt-24 px-5 sm:px-10"}>
              <h2 className={"special-font hero-heading text-blue-100"}>
                redefi<b>n</b><b>e</b>
              </h2>
              <p className={"mb-5 max-w-64 font-robert-regular text-blue-100"}>
                Enter the Metagame Layer <br/> Unleash the Play Economy
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;