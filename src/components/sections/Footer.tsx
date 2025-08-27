import { Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-amber-50 via-white to-white text-gray-700 py-12 border-t border-amber-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        src="/Logo.svg"
                                        alt="Cinthia Freire Logo"
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-amber-700">Cinthia Freire</h3>
                                    <p className="text-sm text-amber-600">Advocacia & Consultoria</p>
                                </div>
                            </div>
                            <div className="text-sm text-amber-700 mb-6">
                                <p>OAB/BA 69.826</p>
                            </div>
                            <div className="bg-gradient-to-r from-amber-100/80 to-amber-50/80 border border-amber-200 rounded-lg p-4 mb-6">
                                <h4 className="text-amber-700 font-semibold mb-2">Precisa de ajuda jurídica?</h4>
                                <p className="text-gray-700 text-sm mb-3">
                                    Entre em contato conosco e agende uma consulta.
                                    Estamos prontos para ajudar você!
                                </p>
                                <a
                                    href="#contato"
                                    className="cursor-pointer inline-block bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                                >
                                    Falar Conosco
                                </a>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-amber-700 font-semibold mb-3">Siga-nos nas redes sociais</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://api.whatsapp.com/send?phone=5521998461237&text=Ol%C3%A1,%20eu%20acessei%20o%20seu%20site%20e%20gostaria%20de%20conversar!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        title="WhatsApp"
                                    >
                                        <FaWhatsapp className="w-5 h-5 text-white" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/cinthia_af_sampaio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer w-10 h-10 bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400 hover:from-pink-500 hover:to-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                                        title="Instagram"
                                    >
                                        <Instagram className="w-5 h-5 text-white drop-shadow-[0_1px_4px_rgba(199,88,255,0.5)]" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                            <ul className="space-y-2">
                                <li><a href="#inicio" className="cursor-pointer text-gray-800 hover:text-gray-500 transition-colors">Início</a></li>
                                <li><a href="#sobre" className="cursor-pointer text-gray-800 hover:text-gray-500 transition-colors">Sobre</a></li>
                                <li><a href="#servicos" className="cursor-pointer text-gray-800 hover:text-gray-500 transition-colors">Serviços</a></li>
                                {/* <li><a href="#experiencia" className="cursor-pointer text-gray-800 hover:text-gray-500 transition-colors">Experiência</a></li> */}
                                <li><a href="#contato" className="cursor-pointer text-gray-800 hover:text-gray-500 transition-colors">Contato</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Áreas de Atuação</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="text-gray-800">Consultoria Jurídica Online</li>
                                <li className="text-gray-800">Elaboração de Contratos e Documentos</li>
                                <li className="text-gray-800">Negociação e Acordos</li>
                                <li className="text-gray-800">Assessoria Jurídica Preventiva</li>
                                <li className="text-gray-800">Atuação em Processos Judiciais</li>
                                <li className="text-gray-800">Atuação em Demandas Extrajudiciais</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-gray-800 text-sm mb-4 md:mb-0">
                                © 2025 Cinthia Freire Advocacia. Todos os direitos reservados.
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <a href="https://www.termsfeed.com/live/7101aef2-3f12-46ff-b0ce-14cf54bebe83" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-gray-800 hover:text-gray-500 transition-colors">
                                    Política de Privacidade
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
