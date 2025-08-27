import { Button } from '../ui/button'
import { Shield, CheckCircle, Phone, Mail, Clock } from 'lucide-react'

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex items-center justify-center min-h-screen py-8 sm:py-12">

                    {/* Centered Content */}
                    <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 lg:space-y-12">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-full px-6 py-3 text-sm font-semibold text-amber-800 shadow-sm">
                            <Shield className="w-4 h-4 mr-2 text-amber-700" />
                            <span>OAB/BA 69.826 • Advocacia Confiável</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-6 sm:space-y-8">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                                <span className="text-slate-900 block mb-2">Advocacia</span>
                                <span className="text-amber-600 block">
                                    Especializada
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl text-slate-700 leading-relaxed max-w-4xl font-normal mx-auto">
                                Soluções jurídicas estratégicas em <strong className="text-slate-900">direito de família</strong> e <strong className="text-slate-900">sucessões</strong>,
                                com foco em resultados e atendimento humanizado.
                            </p>
                        </div>


                        {/* Key Benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto py-6">
                            <div className="flex items-center space-x-3 justify-center">
                                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                                <span className="text-base sm:text-lg text-slate-800 font-semibold">Atendimento Personalizado</span>
                            </div>
                            <div className="flex items-center space-x-3 justify-center">
                                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                                <span className="text-base sm:text-lg text-slate-800 font-semibold">Resultados Comprovados</span>
                            </div>
                            <div className="flex items-center space-x-3 justify-center">
                                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                                <span className="text-base sm:text-lg text-slate-800 font-semibold">Transparência Total</span>
                            </div>
                            <div className="flex items-center space-x-3 justify-center">
                                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                                <span className="text-base sm:text-lg text-slate-800 font-semibold">Ética Profissional</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 max-w-lg mx-auto">
                            <Button
                                size="lg"
                                className="bg-amber-600 text-white px-8 py-4 text-lg font-bold shadow-lg rounded-xl w-full sm:w-auto"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Agendar Consulta
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-amber-200 text-slate-800 px-8 py-4 text-lg font-medium shadow-lg bg-white rounded-xl w-full sm:w-auto transition-all duration-300 ease-in-out hover:bg-amber-50 hover:text-black hover:border-amber-300 hover:shadow-xl hover:scale-105 active:scale-95"
                                onClick={() => {
                                    const servicosSection = document.getElementById('servicos');
                                    servicosSection?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Áreas de Atuação
                            </Button>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6 pt-6 text-sm sm:text-base text-slate-600">
                            <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-slate-700" />
                                <span className="font-medium">Seg-Sex: 8h às 18h</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-slate-700" />
                                <span className="font-medium">Resposta em até 2h</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Shield className="w-4 h-4 text-slate-700" />
                                <span className="font-medium">Consulta Gratuita</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1200 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                >
                    <path
                        d="M0 120V30C200 10 400 20 600 30C800 40 1000 20 1200 40V120Z"
                        fill="rgba(255, 251, 235, 0.8)"
                        className="animate-float-slower"
                    />
                </svg>
            </div> */}
        </section>
    )
}
