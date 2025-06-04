import { Scale, Users, FileText, Shield, Building, Heart } from 'lucide-react'

export default function Services() {
    const services = [
        {
            icon: Scale,
            title: "Direito Civil",
            description: "Contratos, responsabilidade civil, direito de família e sucessões com atendimento personalizado."
        },
        {
            icon: Building,
            title: "Direito Empresarial",
            description: "Constituição de empresas, contratos comerciais, fusões e aquisições, compliance corporativo."
        },
        {
            icon: FileText,
            title: "Direito Tributário",
            description: "Planejamento tributário, defesas fiscais, recuperação de créditos e consultoria fiscal."
        },
        {
            icon: Users,
            title: "Direito Trabalhista",
            description: "Relações de trabalho, contratos, demissões, processos trabalhistas e consultoria preventiva."
        },
        {
            icon: Shield,
            title: "Direito do Consumidor",
            description: "Defesa de direitos do consumidor, indenizações, contratos de consumo e recall de produtos."
        },
        {
            icon: Heart,
            title: "Direito de Família",
            description: "Divórcio, guarda, pensão alimentícia, inventário e planejamento sucessório."
        }
    ]

    return (
        <section id="servicos" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
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
                                className="bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-slate-600"
                            >
                                <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mb-6">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-300 leading-relaxed">
                                    {service.description}
                                </p>                                <div className="mt-6">
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
