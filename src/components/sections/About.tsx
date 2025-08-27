import { CheckCircle } from 'lucide-react'

export default function About() {
    return (
        <section id="sobre" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left - Photo */}
                        <div className="relative flex items-center justify-center lg:justify-start">
                            <div className="relative max-w-md mx-auto lg:mx-0">
                                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl bg-slate-100">
                                    <img
                                        src="/cinthia-pfp.webp"
                                        alt="Dra. Cinthia Freire"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="flex items-center lg:items-start">
                            <div className="space-y-8 w-full">
                                {/* Header */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-amber-700 uppercase tracking-wider">
                                        Sobre Mim
                                    </h3>

                                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                                        Dra. Cinthia Freire
                                    </h2>

                                    <p className="text-xl sm:text-2xl text-amber-700 font-semibold">
                                        Advogada • Escritora • Conferencista
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                                    <p>
                                        Sou <strong className="text-slate-900">advogada especialista</strong> em múltiplas áreas do direito,
                                        com formação em <strong className="text-slate-900">Direito Internacional pela EBRADI</strong> e
                                        certificações em Mediação e Arbitragem.
                                    </p>

                                    <p>
                                        Dedico-me especialmente à <strong className="text-slate-900">defesa de mulheres</strong> no âmbito
                                        da Lei Maria da Penha, além de atuar em Direito Administrativo e questões familiares.
                                        Também desenvolvo atividades como escritora e conferencista.
                                    </p>
                                </div>

                                {/* Key Specializations */}
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                    <div className="text-center bg-amber-50 rounded-lg py-3 px-2">
                                        <div className="text-sm font-semibold text-slate-900">Direito Internacional</div>
                                        <div className="text-xs text-slate-600">EBRADI</div>
                                    </div>
                                    <div className="text-center bg-amber-50 rounded-lg py-3 px-2">
                                        <div className="text-sm font-semibold text-slate-900">Lei Maria da Penha</div>
                                        <div className="text-xs text-slate-600">Defesa de Mulheres</div>
                                    </div>
                                    <div className="text-center bg-amber-50 rounded-lg py-3 px-2">
                                        <div className="text-sm font-semibold text-slate-900">Mediação</div>
                                        <div className="text-xs text-slate-600">Arbitragem</div>
                                    </div>
                                </div>

                                {/* Credentials */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">OAB/BA 69.826</h4>
                                            <p className="text-slate-600">Registro Ativo</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Membro IBDFAM</h4>
                                            <p className="text-slate-600">Instituto Brasileiro de Direito de Família</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Comissão OAB/BA</h4>
                                            <p className="text-slate-600">Direito de Família</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-900">Certificações</h4>
                                            <p className="text-slate-600">Mediação e Arbitragem</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
