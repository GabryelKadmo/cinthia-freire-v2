import { Menu } from 'lucide-react'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '../ui/sheet'

export default function Header() {
    const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
        if (event) {
            event.preventDefault();
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-white/90 backdrop-blur-md text-gray-900 shadow-lg border-b border-black/10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div
                            className="w-16 h-16 flex items-center justify-center cursor-pointer"
                            onClick={scrollToTop}
                        >
                            <img
                                src="/Logo.svg"
                                alt="Cinthia Freire Logo"
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={scrollToTop}
                        >
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-900 bg-clip-text text-transparent drop-shadow-sm">Cinthia Freire</h1>
                            <p className="text-sm bg-gradient-to-r from-yellow-600 to-yellow-900 bg-clip-text text-transparent">Advocacia & Consultoria</p>
                        </div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={(e) => scrollToSection('inicio', e)} className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Início</button>
                        <button onClick={(e) => scrollToSection('sobre', e)} className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Sobre</button>
                        <button onClick={(e) => scrollToSection('servicos', e)} className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Serviços</button>
                        {/* <button onClick={(e) => scrollToSection('experiencia', e)} className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Experiência</button> */}
                        <button onClick={(e) => scrollToSection('contato', e)} className="cursor-pointer text-gray-800 hover:text-amber-700 font-medium transition-colors">Contato</button>
                    </nav>

                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="cursor-pointer text-amber-700 p-3 rounded-xl hover:bg-amber-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm hover:shadow-md">
                                    <Menu size={24} className="drop-shadow-sm" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 p-0 bg-white">
                                <div className="flex flex-col h-full">
                                    <div className="p-6 border-b border-amber-100 bg-gradient-to-r from-amber-50 to-white">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                                                onClick={scrollToTop}
                                            >
                                                <img src="/Logo.svg" alt="Logo" className="w-12 h-12 object-contain" />
                                            </div>
                                            <div
                                                className="cursor-pointer"
                                                onClick={scrollToTop}
                                            >
                                                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-900 bg-clip-text text-transparent drop-shadow-sm">Cinthia Freire</h1>

                                                <p className="text-xs text-amber-600 mt-1">OAB/BA 69.826</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 p-6">
                                        <nav className="flex flex-col gap-4">
                                            <SheetClose asChild>
                                                <button onClick={(e) => scrollToSection('inicio', e)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-amber-100 transition-all duration-200 text-gray-800 hover:text-amber-700">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-125 transition-transform"></div>
                                                    <span className="font-medium">Início</span>
                                                </button>
                                            </SheetClose>
                                            <SheetClose asChild>
                                                <button onClick={(e) => scrollToSection('sobre', e)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-amber-100 transition-all duration-200 text-gray-800 hover:text-amber-700">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-125 transition-transform"></div>
                                                    <span className="font-medium">Sobre</span>
                                                </button>
                                            </SheetClose>
                                            <SheetClose asChild>
                                                <button onClick={(e) => scrollToSection('servicos', e)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-amber-100 transition-all duration-200 text-gray-800 hover:text-amber-700">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-125 transition-transform"></div>
                                                    <span className="font-medium">Serviços</span>
                                                </button>
                                            </SheetClose>
                                            <SheetClose asChild>
                                                <button onClick={(e) => scrollToSection('contato', e)} className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-amber-100 transition-all duration-200 text-gray-800 hover:text-amber-700">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-125 transition-transform"></div>
                                                    <span className="font-medium">Contato</span>
                                                </button>
                                            </SheetClose>
                                        </nav>
                                    </div>

                                    <div className="p-6 border-t border-amber-100 bg-gradient-to-r from-white to-amber-50">
                                        <div className="text-center">
                                            <div className="text-xs text-gray-500 mb-2">© 2025 Cinthia Freire</div>
                                            <div className="text-xs text-amber-600 font-medium">Advocacia & Consultoria</div>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
