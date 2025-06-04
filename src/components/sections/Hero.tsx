import { Button } from '../ui/button'
import { Scale, Shield, Users, ArrowRight, Star, Award } from 'lucide-react'

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-dvh bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-radial from-amber-900/10 via-transparent to-transparent"></div>

                {/* Geometric Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsMTkxLDM2LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyIiBmaWxsPSJyZ2JhKDI1MSwxOTEsMzYsMC4wOCkiLz48Y2lyY2xlIGN4PSI3NSIgY3k9Ijc1IiByPSIxLjUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

                {/* Floating Orbs */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-600/20 to-amber-400/10 rounded-full blur-xl animate-float"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-600/15 to-purple-600/10 rounded-full blur-xl animate-float-slow"></div>
                <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-amber-500/10 to-orange-500/5 rounded-full blur-2xl animate-float"></div>

                {/* Legal Document Lines Effect */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
                </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Scale className="absolute top-1/4 left-1/4 w-8 h-8 text-amber-400/20 animate-float" />
                <Shield className="absolute top-1/3 right-1/4 w-6 h-6 text-amber-400/15 animate-float-slow" />
                <Award className="absolute top-1/2 right-1/3 w-5 h-5 text-amber-400/20 animate-float" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                    {/* Content Side */}
                    <div className="space-y-8 animate-fade-in-left">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-amber-600/10 border border-amber-600/20 rounded-full px-4 py-2 text-sm font-medium text-amber-400">
                            <Star className="w-4 h-4 mr-2 fill-current" />
                            Advocacia de confiança e qualidade
                        </div>

                        {/* Logo */}
                        <div className="flex items-center space-x-4">
                            <img
                                src="/Logo.svg"
                                alt="Cinthia Freire Logo"
                                className="w-16 h-16 filter drop-shadow-lg"
                            />
                            <div>
                                <h1 className="text-2xl font-bold text-white">Cinthia Freire</h1>
                                <p className="text-amber-400 font-medium">Advocacia & Consultoria</p>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Advocacia de
                                <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text block">
                                    Excelência
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                                Oferecemos soluções jurídicas personalizadas com expertise comprovada,
                                garantindo segurança e resultados eficazes para nossos clientes.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                Agendar Consulta
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-amber-600/50 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent backdrop-blur-sm"
                            >
                                Conheça Nossos Serviços
                            </Button>
                        </div>
                        {/* Trust Indicators */}
                        <div className="flex items-center space-x-6 pt-6 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                                <Shield className="w-4 h-4 text-amber-400" />
                                <span>OAB/BA Ativa</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Scale className="w-4 h-4 text-amber-400" />
                                <span>Ética Profissional</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Award className="w-4 h-4 text-amber-400" />
                                <span>Resultados Comprovados</span>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative animate-fade-in-right">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl shadow-2xl overflow-hidden">
                                <div className="aspect-[4/5] flex items-center justify-center p-8">
                                    {/* Professional Lawyer Illustration */}
                                    <div className="text-center text-gray-700 relative w-full h-full">
                                        {/* Background Elements */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl"></div>

                                        {/* Central Justice Scale Watermark */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="opacity-[0.02] w-32 h-32 md:w-auto md:h-auto">
                                                <img src="/balance.png" alt="balance icon" className="w-full h-full object-contain" />
                                            </div>
                                        </div>

                                        {/* Justice Elements */}
                                        <div className="absolute top-8 left-8">
                                            <Scale className="w-12 h-12 text-amber-600/30" />
                                        </div>
                                        <div className="absolute top-8 right-8">
                                            <Shield className="w-10 h-10 text-amber-600/30" />
                                        </div>
                                        <div className="absolute bottom-8 left-8">
                                            <Users className="w-10 h-10 text-amber-600/30" />
                                        </div>
                                        <div className="absolute bottom-8 right-8">
                                            <Award className="w-10 h-10 text-amber-600/30" />
                                        </div>

                                        {/* Central Content */}
                                        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:p-0">
                                            <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6 flex items-center justify-center bg-white rounded-full shadow-lg">
                                                <img
                                                    src="/Logo.svg"
                                                    alt="Cinthia Freire Logo"
                                                    className="w-16 h-16 md:w-24 md:h-24 object-contain"
                                                />
                                            </div>
                                            <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 text-center">Dra. Cinthia Freire</h3>
                                            <p className="text-base md:text-lg text-amber-700 font-medium mb-3 md:mb-4 text-center">Advogada Especialista</p>
                                            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600 text-center">
                                                <p>OAB/BA 69.826</p>
                                                <p className="px-2">Especialista em direito de família e sucessões.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl animate-float">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-700">Disponível para consulta</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-amber-600 rounded-lg p-4 shadow-xl text-white animate-float-slow">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">100%</div>
                                    <div className="text-xs">Comprometimento</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 120V46.29c47.79 22.2 103.59 32.17 171 32.17 160 0 293-93.17 453-93.17 160 0 293 93.17 453 93.17 67.41 0 123.21-9.97 171-32.17V120z"
                        fill="rgb(17, 24, 39)"
                    />
                </svg>
            </div>
        </section>
    )
}
