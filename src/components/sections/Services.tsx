import { Scale, FileText, Shield, Building, Video, Handshake, ArrowRight } from 'lucide-react'

export default function Services() {
    const services = [
        {
            icon: Video,
            title: "Consultoria Online",
            shortDesc: "Atendimento personalizado por videoconferência",
            benefits: ["Sem deslocamento", "Horário flexível", "Documentos digitais"]
        },
        {
            icon: Shield,
            title: "Defesa Criminal",
            shortDesc: "Especialização em Lei Maria da Penha e crimes sexuais",
            benefits: ["Defesa de mulheres", "Acompanhamento integral", "Sigilo absoluto"]
        },
        {
            icon: Scale,
            title: "Direito de Família",
            shortDesc: "Divórcio, guarda, pensão e sucessões",
            benefits: ["Mediação familiar", "Acordos consensuais", "Proteção patrimonial"]
        },
        {
            icon: FileText,
            title: "Contratos & Documentos",
            shortDesc: "Elaboração e revisão de contratos personalizados",
            benefits: ["Segurança jurídica", "Linguagem clara", "Conformidade legal"]
        },
        {
            icon: Building,
            title: "Direito Administrativo",
            shortDesc: "Questões envolvendo órgãos públicos",
            benefits: ["Recursos administrativos", "Licitações", "Concursos públicos"]
        },
        {
            icon: Handshake,
            title: "Mediação & Arbitragem",
            shortDesc: "Resolução de conflitos sem processo judicial",
            benefits: ["Economia de tempo", "Menor custo", "Solução rápida"]
        }
    ]

    const handleWhatsAppContact = (serviceTitle: string) => {
        const whatsappNumber = "5521998461237"
        const message = `Olá! Gostaria de saber mais sobre o serviço: *${serviceTitle}*. Vim através do seu site e tenho interesse em uma consulta.`
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`

        window.open(whatsappUrl, '_blank')
    }

    return (
        <section id="servicos" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h3 className="text-lg font-semibold text-amber-700 uppercase tracking-wider mb-4">
                            Meus Serviços
                        </h3>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Soluções Jurídicas
                            <span className="block text-amber-600">Especializadas</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Atendimento personalizado com foco em <strong className="text-slate-900">resultados eficazes</strong>
                            e soluções estratégicas para suas necessidades jurídicas.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="group bg-white border-2 border-slate-100 rounded-2xl p-6 sm:p-8 hover:border-amber-200 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
                                {/* Icon */}
                                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                                    <service.icon className="w-7 h-7 text-amber-700" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed">
                                        {service.shortDesc}
                                    </p>

                                    {/* Benefits */}
                                    <div className="space-y-2">
                                        {service.benefits.map((benefit, benefitIdx) => (
                                            <div key={benefitIdx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                                                <span className="text-sm text-slate-600 font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action - Always at bottom */}
                                <div className="mt-6 pt-4 border-t border-slate-100">
                                    <button
                                        onClick={() => handleWhatsAppContact(service.title)}
                                        className="cursor-pointer flex items-center space-x-2 text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors"
                                    >
                                        <span>Saiba mais</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-12 sm:mt-16">
                        <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-2xl p-8 sm:p-12">
                            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                                Precisa de Ajuda Jurídica?
                            </h3>
                            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                                Agende uma consulta gratuita e descubra como posso ajudar a resolver sua situação.
                            </p>
                            <button
                                onClick={() => handleWhatsAppContact("Consulta Gratuita")}
                                className="cursor-pointer bg-amber-600 text-white px-8 py-4 text-lg font-bold shadow-lg rounded-xl hover:bg-amber-700 transition-colors"
                            >
                                Agendar Consulta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}