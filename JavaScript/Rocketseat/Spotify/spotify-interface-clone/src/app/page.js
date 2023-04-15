import {Home as Homeicon, Search, Library} from "lucide-react"
export default function Home() {
  return (
    <div className={`h-screen flex flex-col`}>
      <div className={`flex flex-1`}>

        <aside className={`w-72 bg-zinc-950 p-6`}>
          <nav className={`space-y-5`}>
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
          </aside>

        <main className={`flex-1 p-6`}>content</main>

      </div>
      <footer className={'bg-zinc-800 border-t border-zinc-700 p-6'}>footer</footer>
    </div>
      
)
}