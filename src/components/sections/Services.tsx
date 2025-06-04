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
        <section id="servicos" className="relative py-20 bg-gradient-to-br from-white to-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-radial from-amber-100/40 via-transparent to-transparent"></div>
                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-200/30 to-amber-100/20 rounded-full blur-xl animate-float"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200/20 to-purple-200/10 rounded-full blur-xl animate-float-slow"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-amber-100/20 to-orange-100/10 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-amber-200/20 to-amber-100/10 rounded-full blur-xl animate-float-slow"></div>
                {/* Decorative lines */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-100/70 to-transparent"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-100/40 to-transparent"></div>
                </div>
                {/* Corner decorations */}
                <div className="absolute top-8 left-8 w-6 h-6 border-l-2 border-t-2 border-amber-200/40"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-amber-700 mb-6">Nossos Serviços</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Soluções jurídicas personalizadas para você e sua empresa.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white border border-amber-100 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-amber-200 transition-all duration-300">
                            <div className="mb-4">
                                <service.icon className="w-12 h-12 text-amber-500" />
                            </div>
                            <h3 className="text-xl font-bold text-amber-700 mb-2">{service.title}</h3>
                            <p className="text-gray-700 text-base">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/*
Adicione no seu CSS global (ex: index.css):
@keyframes bg-float {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 40px); }
}
.animate-bg-float {
  animation: bg-float 8s ease-in-out infinite;
}
*/
