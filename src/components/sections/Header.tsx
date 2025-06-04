import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 flex items-center justify-center">
                            <img
                                src="/Logo.svg"
                                alt="Cinthia Freire Logo"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-white">Cinthia Freire</h1>
                            <p className="text-sm text-white">Advocacia & Consultoria</p>
                        </div>
                    </div>                    <nav className="hidden md:flex space-x-8">
                        <a href="#inicio" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Início</a>
                        <a href="#sobre" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Sobre</a>
                        <a href="#servicos" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Serviços</a>
                        {/* <a href="#experiencia" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Experiência</a> */}
                        <a href="#contato" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Contato</a>
                    </nav>

                    <button
                        className="cursor-pointer md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {isMenuOpen && (<nav className="md:hidden mt-4 py-4 border-t border-gray-700">
                    <div className="flex flex-col space-y-4">
                        <a href="#inicio" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Início</a>
                        <a href="#sobre" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Sobre</a>
                        <a href="#servicos" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Serviços</a>
                        {/* <a href="#experiencia" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Experiência</a> */}
                        <a href="#contato" className="cursor-pointer text-white hover:text-amber-400 transition-colors">Contato</a>
                    </div>
                </nav>
                )}
            </div>
        </header>
    )
}
