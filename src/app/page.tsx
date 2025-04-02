'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [audioError, setAudioError] = useState<Error>();
  const [copied, setCopied] = useState(false);

  const hover = () => {
    setAudioError(undefined);
    const audio = new Audio(
      'https://raw.githubusercontent.com/Rifuzada/socials/refs/heads/main/src/app/assets/hoversound.mp3'
    );
    audio.currentTime = 4.7;
    audio.volume = 0.2;
    audio.play().catch((error) => setAudioError(error));
  };

  const play = () => {
    const audio = new Audio(
      'https://raw.githubusercontent.com/Rifuzada/socials/refs/heads/main/src/app/assets/startup.mp4'
    );
    audio.play().catch((error) => setAudioError(error));
  };

  const videoend = () => {
    setAudioError(undefined);
    const audio = new Audio(
      'https://raw.githubusercontent.com/Rifuzada/socials/refs/heads/main/src/app/assets/hoversound.mp3'
    );
    audio.currentTime = 0;
    audio.addEventListener('timeupdate', function(){
      if(this.currentTime >= 4.7){
        this.pause();
        this.currentTime = 0;
      }
    });
    audio.volume = 0.2;
    audio.play().catch((error) => setAudioError(error));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('rifuzada');
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <video
        className="absolute w-500 h-500 z-10"
        muted
        autoPlay
        onClick={play}
        onEnded={(e) => {
          e.currentTarget.style.display = "none";
          document.body.style.overflow = "auto"; // Enable scrolling
          videoend();
        }}
      >
        <source src="https://raw.githubusercontent.com/Rifuzada/socials/refs/heads/main/src/app/assets/startup.mp4" type="video/mp4" />
      </video>
      <div className="grid grid-cols-4 grid-rows-3 gap-2">
        <div id="title" className="relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group"
                    onMouseEnter={hover}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/?l=portuguese" target="_blank">
            <img className="max-w-full h-auto" src="https://i.pinimg.com/736x/e9/c8/3c/e9c83cafc9621af76876a95a21c78dc6.jpg" alt="image description" />
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Play Skyrim
            </p>
          </a>
        </div>
        
        <div id="title" className="relative bg-[black] hover:scale-110 hover:z-10 z-0 ease-in duration-200 cursor-pointer col-span-2 row-span-2 flex flex-col justify-center text-center p-4 overflow-hidden group" onMouseEnter={hover}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://x.com/rifuzada" target="_blank">
          <div className="flex justify-center items-center mt-5">
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=FFFFFF" alt="image description" />
            </div>
          <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
            X
          </p>
          </a>
        </div>
        
        <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group" onMouseEnter={hover}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://www.youtube.com/@Rifuzada" target="_blank">
            <div className="flex justify-center items-center mt-5">
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Youtube
            </p>
          </a>
        </div>
        
        <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group" onMouseEnter={hover}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://letterboxd.com/Rifuzada/" target="_blank">
            <div className="flex justify-center items-center mt-5">
              <img className="max-w-30 h-auto" src="https://raw.githubusercontent.com/Rifuzada/portfolio/317256cf0d37ebff2ebb666f3bb8656e48d9d712/src/app/assets/letterboxd.png" alt="imagem de descrição" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Letterboxd
            </p>
          </a>
        </div>
        
        <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group" onMouseEnter={hover}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://www.tiktok.com/@rifuzada" target="_blank">
            <div className="flex justify-center items-center mt-5">
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=118638&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Tiktok
            </p>
          </a>
        </div>
        
        <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group" onMouseEnter={hover}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://github.com/Rifuzada/" target="_blank">
            <div className="flex justify-center items-center mt-5">
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=12598&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Github
            </p>
          </a>
        </div>
        
        <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group" onMouseEnter={hover}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://steamcommunity.com/id/Rifuzada/" target="_blank">
            <div className="flex justify-center items-center mt-5">
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=99999&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Steam
            </p>
          </a>
        </div>
        
        <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group" onMouseEnter={hover} onClick={handleCopy}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <div className="flex justify-center items-center mt-6">
            <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=30888&format=png&color=FFFFFF" alt="image description" />
          </div>
          <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
            Discord
          </p>
        </div>
        
        <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group" onMouseEnter={hover}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <a href="https://instagram.com/rifuzada" target="_blank">
            <div className="flex justify-center items-center mt-5">
              <img className="max-w-30 h-auto" src="https://img.icons8.com/win10/512/FFFFFF/instagram-new.png" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Instagram
            </p>
          </a>
        </div>
      </div>
      {copied && <div className="bg-[#088c04] absolute inset-0 flex items-end justify-normal text-lg text-white h-12 animate-pulse duration-2000 animate-once animate-ease-in-out">
            Discord Copiado!
          </div>}
    </main>
  );
};
