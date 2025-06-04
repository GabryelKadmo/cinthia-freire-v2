export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Description */}
                        <div className="md:col-span-2">                            <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 flex items-center justify-center">
                                <img
                                    src="/Logo.svg"
                                    alt="Cinthia Freire Logo"
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Cinthia Freire</h3>
                                <p className="text-sm text-gray-400">Advocacia & Consultoria</p>
                            </div>
                        </div>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Mais de 15 anos dedicados à advocacia com excelência, ética e compromisso
                                com os resultados. Oferecemos soluções jurídicas personalizadas para
                                pessoas físicas e jurídicas.
                            </p>
                            <div className="text-sm text-gray-500">
                                <p>OAB/SP 123.456</p>
                                <p>CNPJ: 12.345.678/0001-90</p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                            <ul className="space-y-2">
                                <li><a href="#inicio" className="text-gray-400 hover:text-amber-400 transition-colors">Início</a></li>
                                <li><a href="#sobre" className="text-gray-400 hover:text-amber-400 transition-colors">Sobre</a></li>
                                <li><a href="#servicos" className="text-gray-400 hover:text-amber-400 transition-colors">Serviços</a></li>
                                <li><a href="#experiencia" className="text-gray-400 hover:text-amber-400 transition-colors">Experiência</a></li>
                                <li><a href="#contato" className="text-gray-400 hover:text-amber-400 transition-colors">Contato</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Áreas de Atuação</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="text-gray-400">Direito Civil</li>
                                <li className="text-gray-400">Direito Empresarial</li>
                                <li className="text-gray-400">Direito Tributário</li>
                                <li className="text-gray-400">Direito Trabalhista</li>
                                <li className="text-gray-400">Direito do Consumidor</li>
                                <li className="text-gray-400">Direito de Família</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-gray-400 text-sm mb-4 md:mb-0">
                                © 2025 Cinthia Freire Advocacia. Todos os direitos reservados.
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                    Política de Privacidade
                                </a>
                                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                    Termos de Uso
                                </a>
                                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                    Código de Ética
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
