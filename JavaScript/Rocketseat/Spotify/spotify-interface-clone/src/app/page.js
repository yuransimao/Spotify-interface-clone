import {Home as Homeicon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, Repeat,SkipForward, Mic2, LayoutList, Laptop2, Volume, Maximize2} from "lucide-react"

import Image from "next/image"
export default function Home() {
  return (
    <div className={`h-screen flex flex-col`}>
      <div className={`flex flex-1`}>

        <aside className={`w-72 bg-zinc-950 p-6`}>

          <div className={`flex items-center gap-2`}>
            <div className={`w-3 h-3 bg-red-500 rounded-full`}/>
            <div className={`w-3 h-3 bg-yellow-500 rounded-full`}/>
            <div className={`w-3 h-3 bg-green-500 rounded-full`}/>
          </div>

          <nav className={`space-y-5 mt-10`}>
            <a href='#' className={`flex items-center gap-3 text-sm font-semibold text-zinc-200`}>
              <Homeicon/>
              Home
              </a>

            <a href='#' className={`flex items-center gap-3 text-sm font-semibold text-zinc-200`}>
              <Search/>
              Search
            </a>
            <a href='#' className={`flex items-center gap-3 text-sm font-semibold text-zinc-200`}>
              <Library/>
              Your library
              </a>
          </nav>
          <nav className={`mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3`}>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>NGA </a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>SKETXE</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>PLUTONIO</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>EXTEMO SIGNO</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>MC CABINDA</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>ROD WAVE</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>POP SMOKE</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>LIL TJAY</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>OROCHI </a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>T-REX</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>THE WEEND</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>POST MALONE</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>ORUAM</a>
            <a href='#' className={`text-sm text-zinc-400 hover:text-zinc-100`}>BORGE</a>

      
          </nav>

          
          </aside>

        <main className={`flex-1 p-6`}>
          <div className={`flex items-center gap-3`}>
            <button className={`p-1 rounded-full bg-black/40`}><ChevronLeft/></button>
            <button className={`p-1 rounded-full bg-black/40`}><ChevronRight/></button>
          </div>

          <h1 className={`font-semibold text-3xl mt-10`}>Good Afternoon</h1>

          <div className={`grid grid-cols-3 gap-4 mt-4`}>
            <a src='#' className={` group bg-white/5 rounded overflow-hidden flex items-center gap-4 transitions-colors hover:bg-white//10 `}>
              <Image src='/nga_capa_King.jpg' width={'104'} height={'104'} alt='nga_capa_King'/>
              <strong>King</strong>
              <button className={`w-12 h-12 flex items-center justify-center pl-1 text-black ml-auto mr-8 bg-green-400 rounded-full invisible group-hover:visible`}>
                <Play />
              </button>
            </a>
            <a src='#' className={`group bg-white/5 rounded overflow-hidden flex items-center gap-4 transitions-colors hover:bg-white/10`}>
              <Image src='/nga_capa_King.jpg' width={'104'} height={'104'} alt='nga_capa_King'/>
              <strong>King</strong>
               <button className={`w-12 h-12 flex items-center justify-center pl-1 text-black ml-auto mr-8 bg-green-400 rounded-full invisible group-hover:visible`}>
                <Play />
              </button>
            </a>
            <a src='#' className={`group bg-white/5 rounded overflow-hidden flex items-center gap-4 transitions-colors hover:bg-white/10`}>
              <Image src='/nga_capa_King.jpg' width={'104'} height={'104'} alt='nga_capa_King'/>
              <strong>King</strong>
               <button className={`w-12 h-12 flex items-center justify-center pl-1 text-black ml-auto mr-8 bg-green-400 rounded-full invisible group-hover:visible`}>
                <Play />
              </button>
            </a>
            <a src='#' className={`group bg-white/5 rounded overflow-hidden flex items-center gap-4 transitions-colors hover:bg-white/10`}>
              <Image src='/nga_capa_King.jpg' width={'104'} height={'104'} alt='nga_capa_King'/>
              <strong>King</strong>
               <button className={`w-12 h-12 flex items-center justify-center pl-1 text-black ml-auto mr-8 bg-green-400 rounded-full invisible group-hover:visible`}>
                <Play />
              </button>
            </a>
            <a src='#' className={`group bg-white/5 rounded overflow-hidden flex items-center gap-4 transitions-colors hover:bg-white/10`}>
              <Image src='/nga_capa_King.jpg' width={'104'} height={'104'} alt='nga_capa_King'/>
              <strong>King</strong>
               <button className={`w-12 h-12 flex items-center justify-center pl-1 text-black ml-auto mr-8 bg-green-400 rounded-full invisible group-hover:visible`}>
                <Play />
              </button>
            </a>
            <a src='#' className={`group bg-white/5 rounded overflow-hidden flex items-center gap-4 transitions-colors hover:bg-white/10`}>
              <Image src='/nga_capa_King.jpg' width={'104'} height={'104'} alt='nga_capa_King'/>
              <strong>King</strong>
               <button className={`w-12 h-12 flex items-center justify-center pl-1 text-black ml-auto mr-8 bg-green-400 rounded-full invisible group-hover:visible`}>
                <Play />
              </button>
            </a>
          </div>

          <h2 className={`font-semibold text-2xl mt-10`}>Made for Yuran Simao</h2>

          <div className={`grid grid-cols-5 gap-4 mt-4`}>
            <a href="#" className={`bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10`}>
            <Image src='/nga_capa_King.jpg' width={'120'} height={'120'} alt='nga_capa_King' 
            className={`w-full`}/>
            <strong className={`font-simebold`}>King</strong>
            <span className={`text-sm text-zinc-500`}>Nga rapper Angolano </span>
            </a>
            <a href="#" className={`bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10`}>
            <Image src='/nga_capa_King.jpg' width={'120'} height={'120'} alt='nga_capa_King' 
            className={`w-full`}/>
            <strong className={`font-simebold`}>King</strong>
            <span className={`text-sm text-zinc-500`}>Nga rapper Angolano </span>
            </a>
            <a href="#" className={`bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10`}>
            <Image src='/nga_capa_King.jpg' width={'120'} height={'120'} alt='nga_capa_King' 
            className={`w-full`}/>
            <strong className={`font-simebold`}>King</strong>
            <span className={`text-sm text-zinc-500`}>Nga rapper Angolano </span>
            </a>
            <a href="#" className={`bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10`}>
            <Image src='/nga_capa_King.jpg' width={'120'} height={'120'} alt='nga_capa_King' 
            className={`w-full`}/>
            <strong className={`font-simebold`}>King</strong>
            <span className={`text-sm text-zinc-500`}>Nga rapper Angolano </span>
            </a>
            <a href="#" className={`bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10`}>
            <Image src='/nga_capa_King.jpg' width={'120'} height={'120'} alt='nga_capa_King' 
            className={`w-full`}/>
            <strong className={`font-simebold`}>King</strong>
            <span className={`text-sm text-zinc-500`}>Nga rapper Angolano </span>
            </a>
          </div>        
          </main>

      </div>
      <footer className={ `bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between`}>
        
        <div className={`flex items-center gap-3`}>
        <Image src='/nga_capa_King.jpg' width={'56'} height={'56'} alt='nga_capa_King'/>
        <div className={`flex flex-col`}>
          <strong>Mo nigga</strong>
          <span className={`text-xs text-zinc-400`}>Nga</span>
        </div>            
        
        </div>

        <div className={`flex flex-col items-center gap-2`}>

          <div className={`flex  items-center gap-6`}>
            <Shuffle size={20} className={`text-zinc-200`}/>
            <SkipBack size={20} className={`text-zinc-200`}/>
          <button className={`w-10 h-10 flex items-center justify-center pl-1 text-black ml-auto  bg-white rounded-full `}>
                <Play />
              </button>
              <SkipForward size={20} className={`text-zinc-200`}/>
              <Repeat size={20} className={`text-zinc-200`}/>
          </div>

          <div className={`flex items-center gap-2`} >
            <span className={`text-xs text-zinc-400`}>0:31</span>
            <div className={`h-1 w-96 rounded-full bg-zinc-600`}>
              <div className={`h-1 w-40 rounded-full bg-white`}></div>
            </div>
            <span className={`text-xs text-zinc-400`}>2:14</span>
          </div>

        </div>

        <div className={`flex items-center gap-4`}>
        <Mic2 size={20}/> 
        <LayoutList size={20}/> 
        <Laptop2 size={20}/>
        <div className={`flex items-center gap-2`}>
          <Volume size={20}/>
          <div className={`h-1 w-24 rounded-full bg-zinc-600`}>
              <div className={`h-1 w-10 rounded-full bg-white`}></div>
            </div>
        </div>
        <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
      
)
}