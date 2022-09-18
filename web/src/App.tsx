import './styles/main.css'
import logoNlw from './assets/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-16">
      <img src={logoNlw} alt="logo eSports" />

      <h1 className="text-6xl font-black text-white mt-16">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo</span> está aqui.
      </h1>

      <div>
        <div className="grid grid-cols-6 gap-5 mt-16">
          <a href="#" className=" relative rounded-lg overflow-hidden">
            <img src="game-1.png" alt="" />
            <div className="absolute w-full pt-16 pb-4 px-4 bottom-0 left-0 bg-game-gradient text-white">
              <strong>
                League of Legends <span className="block text-zinc-300 font-normal"> 3 anúncios
                </span>
              </strong>
            </div>
          </a>
          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src="game-2.png" alt="" />
            <div className="absolute w-full pt-16 pb-4 px-4 bottom-0 left-0 bg-game-gradient text-white">
              <strong>
                Dota 2{' '}
                <span className="block text-zinc-300 font-normal">
                  3 anúncios
                </span>
              </strong>
            </div>
          </a>
          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src="game-3.png" alt="" />
            <div className="absolute w-full pt-16 pb-4 px-4 bottom-0 left-0 bg-game-gradient text-white">
              <strong>
                Counter Strike{' '}
                <span className="block text-zinc-300 font-normal">
                  3 anúncios
                </span>
              </strong>
            </div>
          </a>
          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src="game-4.png" alt="" />
            <div className="absolute w-full pt-16 pb-4 px-4 bottom-0 left-0 bg-game-gradient text-white">
              <strong>
                Apex Legends{' '}
                <span className="block text-zinc-300 font-normal">
                  3 anúncios
                </span>
              </strong>
            </div>
          </a>
          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src="game-5.png" alt="" />
            <div className="absolute w-full pt-16 pb-4 px-4 bottom-0 left-0 bg-game-gradient text-white">
              <strong>
                Fortnite{' '}
                <span className="block text-zinc-300 font-normal">
                  3 anúncios
                </span>
              </strong>
            </div>
          </a>
          <a href="#" className="relative rounded-lg overflow-hidden">
            <img src="game-6.png" alt="" />
            <div className="absolute w-full pt-16 pb-4 px-4 bottom-0 left-0 bg-game-gradient text-white">
              <strong>
                Word of war craft{' '}
                <span className="block text-zinc-300 font-normal">
                  3 anúncios
                </span>
              </strong>
            </div>
          </a>
        </div>
        <div className="relative bg-nlw-gradient w-full pt-1 mt-6 rounded-md overflow-hidden">
          <div className="bg-[#2A2634] overflow-hidden w-full rounded-t-md flex justify-between items-center p-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Não encontrou seu duo?
              </h2>
              <span className="text-zinc-400">
                Publique um anúncio para encontrar novos players!
              </span>
            </div>

            <button 
              className="bg-violet-500 hover:bg-violet-600 transition-colors px-4 py-3 rounded text-white font-medium flex items-center gap-3">
              <MagnifyingGlassPlus size={18} />
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
