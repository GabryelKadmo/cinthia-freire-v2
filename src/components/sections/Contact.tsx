import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
    const handleWhatsAppContact = () => {
        const whatsappNumber = "5521998461237"
        const message = "Olá! Acessei seu site e gostaria de agendar uma consulta jurídica. Podemos conversar?"
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`

        window.open(whatsappUrl, '_blank')
    }

    return (
        <section id="contato" className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h3 className="text-lg font-semibold text-amber-700 uppercase tracking-wider mb-4">
                            Entre em Contato
                        </h3>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Vamos Conversar
                            <span className="block text-amber-600">Sobre Seu Caso</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Agende uma consulta gratuita e tire suas dúvidas.
                            <strong className="text-slate-900"> Estou aqui para oferecer</strong> a melhor solução jurídica para você.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Contact Information */}
                        <div className="flex flex-col justify-center space-y-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
                                    Informações de Contato
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-7 h-7 text-amber-700" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">WhatsApp</h4>
                                            <p className="text-slate-600 mb-2">Resposta rápida e atendimento personalizado</p>
                                            <a
                                                href="https://api.whatsapp.com/send?phone=5521998461237&text=Ol%C3%A1,%20eu%20acessei%20o%20seu%20site%20e%20gostaria%20de%20conversar!"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-amber-700 hover:text-amber-800 font-semibold transition-colors"
                                            >
                                                (21) 9 9846-1237
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-7 h-7 text-amber-700" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">E-mail</h4>
                                            <p className="text-slate-600 mb-2">Para documentos e consultas formais</p>
                                            <a
                                                href="mailto:cinthiafreireadv@icloud.com"
                                                className="text-amber-700 hover:text-amber-800 font-semibold transition-colors"
                                            >
                                                cinthiafreireadv@icloud.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-7 h-7 text-amber-700" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">Localização</h4>
                                            <p className="text-slate-600 mb-2">Atendimento 100% online</p>
                                            <p className="text-amber-700 font-semibold">
                                                Salvador/BA - Todo o Brasil
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-7 h-7 text-amber-700" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">Horário de Atendimento</h4>
                                            <p className="text-slate-600 mb-2">Flexibilidade para sua agenda</p>
                                            <p className="text-amber-700 font-semibold">
                                                Segunda a Sexta, 9h às 18h
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Actions */}
                        <div className="flex flex-col justify-center">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                                    Pronta para Ajudar
                                </h3>
                                <p className="text-lg text-slate-600">
                                    Escolha a forma mais conveniente para entrar em contato
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <button
                                    onClick={handleWhatsAppContact}
                                    className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-3 text-lg"
                                >
                                    <Phone className="w-6 h-6" />
                                    <span>Conversar no WhatsApp</span>
                                </button>

                                <a
                                    href="mailto:cinthiafreireadv@icloud.com?subject=Consulta Jurídica - Site&body=Olá Dra. Cinthia, acessei seu site e gostaria de agendar uma consulta jurídica."
                                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-3 text-lg"
                                >
                                    <Send className="w-6 h-6" />
                                    <span>Enviar E-mail</span>
                                </a>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                                <div className="text-center">
                                    <h4 className="font-bold text-slate-900 mb-2">Consulta Gratuita</h4>
                                    <p className="text-sm text-slate-600">
                                        Primeira conversa sem compromisso para entender seu caso e como posso ajudar
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
