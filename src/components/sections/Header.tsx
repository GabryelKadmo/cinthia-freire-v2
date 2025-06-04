import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-white/90 backdrop-blur-md text-gray-900 shadow-lg border-b border-black/10">
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
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-900 bg-clip-text text-transparent drop-shadow-sm">Cinthia Freire</h1>
                            <p className="text-sm bg-gradient-to-r from-yellow-600 to-yellow-900 bg-clip-text text-transparent">Advocacia & Consultoria</p>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#inicio" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Início</a>
                        <a href="#sobre" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Sobre</a>
                        <a href="#servicos" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Serviços</a>
                        {/* <a href="#experiencia" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Experiência</a> */}
                        <a href="#contato" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Contato</a>
                    </nav>

                    <button
                        className="cursor-pointer md:hidden text-amber-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 py-4 border-t border-amber-100 bg-white/95 rounded-lg shadow">
                        <div className="flex flex-col space-y-4">
                            <a href="#inicio" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Início</a>
                            <a href="#sobre" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Sobre</a>
                            <a href="#servicos" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Serviços</a>
                            {/* <a href="#experiencia" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Experiência</a> */}
                            <a href="#contato" className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Contato</a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
