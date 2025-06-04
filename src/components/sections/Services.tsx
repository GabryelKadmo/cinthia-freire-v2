import { Scale, FileText, Shield, Building, Video, Handshake } from 'lucide-react'

export default function Services() {
    const services = [
        {
            icon: Video,
            title: "Consultoria Jurídica Online",
            description: "Nossa consultoria jurídica online oferece atendimento personalizado por meio de videoconferências, permitindo que você obtenha esclarecimentos e soluções para suas questões legais sem a necessidade de deslocamento."
        },
        {
            icon: FileText,
            title: "Elaboração de Contratos e Documentos",
            description: "Desenvolvemos contratos e documentos jurídicos sob medida para empresas e pessoas físicas, garantindo segurança e conformidade com a legislação vigente. Além da criação, revisamos e ajustamos contratos já existentes."
        },
        {
            icon: Handshake,
            title: "Negociação e Acordos",
            description: "Intermediamos negociações e acordos extrajudiciais, representando nossos clientes em diferentes situações, como disputas contratuais, questões trabalhistas, acordos empresariais e divórcios consensuais."
        },
        {
            icon: Shield,
            title: "Assessoria Jurídica Preventiva",
            description: "A assessoria jurídica preventiva é essencial para empresas e indivíduos que desejam reduzir riscos e evitar complicações legais futuras. Atuamos analisando contratos, regulamentos internos, obrigações fiscais e questões trabalhistas."
        },
        {
            icon: Scale,
            title: "Atuação em Processos Judiciais",
            description: "Prestamos assessoria e representação em processos judiciais, garantindo suporte desde a fase inicial até a execução da sentença. Trabalhamos remotamente na elaboração de peças processuais, petições e recursos."
        },
        {
            icon: Building,
            title: "Atuação em Demandas Extrajudiciais",
            description: "Muitas disputas podem ser resolvidas sem a necessidade de um processo judicial. Nosso serviço de atuação extrajudicial abrange notificações, mediações, elaboração de acordos e representação junto a órgãos administrativos."
        }
    ]

    return (
        <section id="servicos" className="relative py-20 bg-gray-900 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-radial from-amber-900/5 via-transparent to-transparent"></div>

                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-600/10 to-amber-400/5 rounded-full blur-xl animate-float"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-amber-500/8 to-amber-300/3 rounded-full blur-xl animate-float-slow"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-amber-400/6 to-orange-500/3 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-amber-600/8 to-amber-400/4 rounded-full blur-xl animate-float-slow"></div>

                {/* Decorative lines */}
                <div className="absolute inset-0 opacity-3">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-8 left-8 w-6 h-6 border-l-2 border-t-2 border-amber-400/20"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-r-2 border-t-2 border-amber-400/20"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 border-l-2 border-b-2 border-amber-400/20"></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 border-r-2 border-b-2 border-amber-400/20"></div>

                {/* Floating legal icons */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Scale className="absolute top-1/4 left-1/4 w-6 h-6 text-amber-400/10 animate-float" />
                    <Shield className="absolute top-1/3 right-1/4 w-5 h-5 text-amber-400/8 animate-float-slow" />
                    <FileText className="absolute top-1/2 right-1/3 w-4 h-4 text-amber-400/12 animate-float" />
                    <Building className="absolute bottom-1/3 left-1/3 w-5 h-5 text-amber-400/8 animate-float-slow" />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Áreas de Atuação
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Oferecemos serviços jurídicos especializados em diversas áreas do direito,
                            sempre com foco na excelência e resultados eficazes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">          
                                      {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-700 flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
                                <service.icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-300 leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            <div className="mt-6">
                                <a
                                    href="#contato"
                                    className="text-amber-400 hover:text-amber-300 font-semibold transition-all duration-300 inline-flex items-center group"
                                >
                                    Saiba mais
                                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-300 mb-6">
                            Não encontrou o serviço que precisa? Entre em contato conosco!
                        </p>
                        <a
                            href="#contato"
                            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Falar com Advogada
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
