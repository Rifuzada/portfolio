import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="grid grid-cols-4 grid-rows-3 gap-2">
        <div id="title" className="relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group">
          {/* Efeito de reflexo */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <img className="max-w-full h-auto" src="https://i.pinimg.com/736x/e9/c8/3c/e9c83cafc9621af76876a95a21c78dc6.jpg" alt="image description" />
          <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
            Play Skyrim
          </p>
        </div>
        
        {/* Bloco grande (LoLData) com efeito de reflexo */}
        <div id="title" className="relative bg-[#088c04] hover:scale-110 hover:z-10 z-0 ease-in duration-200 cursor-pointer col-span-2 row-span-2 flex flex-col justify-center text-center p-4 overflow-hidden group">
          {/* Efeito de reflexo */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <div className="flex justify-center items-center mt-5"> {/* Adicionando margem superior para centralizar melhor */}
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=FFFFFF" alt="image description" />
            </div>
          <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
            X
          </p>
        </div>
        
          <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group">
            {/* Efeito de reflexo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="flex justify-center items-center mt-5"> {/* Adicionando margem superior para centralizar melhor */}
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=12464&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              SoundCloud
            </p>
          </div>
          <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group">
            {/* Efeito de reflexo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="flex justify-center items-center mt-5"> {/* Adicionando margem superior para centralizar melhor */}
              <img className="max-w-30 h-auto" src="/letterboxd.png" alt="imagem de descrição" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Letterboxd
            </p>
          </div>
          <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group">
            {/* Efeito de reflexo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="flex justify-center items-center mt-5"> {/* Adicionando margem superior para centralizar melhor */}
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=118638&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Tiktok
            </p>
          </div>
          <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group">
            {/* Efeito de reflexo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="flex justify-center items-center mt-5"> {/* Adicionando margem superior para centralizar melhor */}
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=12598&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Github
            </p>
          </div>
          <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group">
            {/* Efeito de reflexo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="flex justify-center items-center mt-5"> {/* Adicionando margem superior para centralizar melhor */}
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=99999&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Steam
            </p>
          </div>
          <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group">
            {/* Efeito de reflexo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="flex justify-center items-center mt-6"> {/* Adicionando margem superior para centralizar melhor */}
              <img className="max-w-30 h-auto" src="https://img.icons8.com/?size=100&id=30888&format=png&color=FFFFFF" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Discord
            </p>
          </div>
          <div id="title" className=" bg-[#088c04] relative cursor-pointer w-60 hover:scale-110 hover:z-10 z-0 ease-in duration-200 row-span-1 col-span-1 overflow-hidden group">
            {/* Efeito de reflexo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="flex justify-center items-center mt-5"> {/* Adicionando margem superior para centralizar melhor */}
              <img className="max-w-30 h-auto" src="https://img.icons8.com/win10/512/FFFFFF/instagram-new.png" alt="image description" />
            </div>
            <p className="absolute inset-0 flex items-end justify-normal text-lg text-white ml-3">
              Instagram
            </p>
          </div>
          
      </div>
    </main>
  );
};