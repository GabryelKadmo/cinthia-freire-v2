export default function About() {
    return (
        <section id="sobre" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>                            <h2 className="text-4xl font-bold text-white mb-6">
                            Sobre Cinthia Freire
                        </h2>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Advogada especialista com mais de 15 anos de experiência em diversas áreas do direito,
                                sempre comprometida com a excelência no atendimento e resultados eficazes para meus clientes.
                            </p>

                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Formada pela Universidade de São Paulo (USP), pós-graduada em Direito Empresarial
                                e Tributário, com especializações em mediação e arbitragem. Minha missão é oferecer
                                soluções jurídicas personalizadas, sempre priorizando a ética e transparência.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>                                    <div>
                                        <h4 className="font-semibold text-white">Formação Acadêmica</h4>
                                        <p className="text-gray-300">Graduação em Direito - USP</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold text-white">Especializações</h4>
                                        <p className="text-gray-300">Direito Empresarial, Tributário e Civil</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold text-white">Certificações</h4>
                                        <p className="text-gray-300">Mediação e Arbitragem</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:order-first">
                            <div className="relative">                                <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg">
                                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                                    <div className="text-center text-gray-600">
                                        <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                                            <img
                                                src="/Logo.svg"
                                                alt="Cinthia Freire Logo"
                                                className="w-32 h-32 object-contain"
                                            />
                                        </div>
                                        <p className="text-lg font-medium">Cinthia Freire</p>
                                        <p className="text-sm">Advogada</p>
                                    </div>
                                </div>
                            </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-800 rounded-lg opacity-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
