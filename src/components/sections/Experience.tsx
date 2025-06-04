export default function Experience() {
    const experiences = [
        {
            year: "2023 - Atual",
            position: "Advogada Sênior - Consultoria Independente",
            description: "Prestação de serviços jurídicos especializados para empresas de médio e grande porte, com foco em direito empresarial e tributário."
        },
        {
            year: "2018 - 2023",
            position: "Sócia - Freire & Associados",
            description: "Co-fundadora do escritório, responsável pela área de direito civil e empresarial, liderando equipe de 8 advogados."
        },
        {
            year: "2012 - 2018",
            position: "Advogada Pleno - Silva, Costa & Advogados",
            description: "Atuação em contencioso cível e empresarial, com especialização em contratos e responsabilidade civil."
        },
        {
            year: "2008 - 2012",
            position: "Advogada Júnior - Escritório Martins & Cia",
            description: "Início da carreira com foco em direito do consumidor e direito de família, desenvolvendo expertise em mediação."
        }
    ]

    const achievements = [
        "Reconhecimento como uma das Top 50 Advogadas de São Paulo (2022)",
        "Presidente da Comissão de Direito Empresarial da OAB-SP (2020-2022)",
        "Palestrante em mais de 30 eventos jurídicos nacionais",
        "Autora de artigos em revistas jurídicas especializadas",
        "Mediadora certificada pelo TJSP"
    ]

    return (
        <section id="experiencia" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">                    <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Experiência Profissional
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Uma trajetória sólida de mais de 15 anos dedicados ao direito,
                        sempre em busca da excelência e inovação.
                    </p>
                </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Timeline */}
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-8">Trajetória</h3>
                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-8">
                                        <div className="absolute left-0 top-0 w-4 h-4 bg-amber-600 rounded-full"></div>
                                        <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200"></div>                                        <div className="bg-slate-700 p-6 rounded-lg">
                                            <div className="text-amber-400 font-medium text-sm mb-2">
                                                {exp.year}
                                            </div>
                                            <h4 className="text-lg font-semibold text-white mb-3">
                                                {exp.position}
                                            </h4>
                                            <p className="text-gray-300 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-8">Reconhecimentos</h3>
                            <div className="space-y-6">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed">{achievement}</p>
                                    </div>
                                ))}
                            </div>                            <div className="mt-12 p-6 bg-gradient-to-r from-amber-900/30 to-amber-800/30 rounded-lg border border-amber-600/20">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    Formação Continuada
                                </h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Participação constante em cursos, seminários e congressos para
                                    manter-se atualizada com as mudanças legislativas e melhores
                                    práticas do mercado jurídico.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
