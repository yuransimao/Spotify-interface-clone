import {Home as Homeicon, Search, Library, ChevronLeft, ChevronRight} from "lucide-react"
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

          <div className={`grid grid-cols-3 gap-4`}>
            <div className={` bg-white/10 rounded`}>Playlist</div>
            <div className={` bg-white/10 rounded`}>Playlist</div>
            <div className={` bg-white/10 rounded`}>Playlist</div>
            <div className={` bg-white/10 rounded`}>Playlist</div>
            <div className={` bg-white/10 rounded`}>Playlist</div>
            <div className={` bg-white/10 rounded`}>Playlist</div>
          </div>
        </main>

      </div>
      <footer className={'bg-zinc-800 border-t border-zinc-700 p-6'}>footer</footer>
    </div>
      
)
}