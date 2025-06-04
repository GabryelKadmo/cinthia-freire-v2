import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '../ui/button'

export default function Contact() {
    return (
        <section id="contato" className="py-20 bg-gray-950 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">
                            Entre em Contato
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Agende uma consulta e tire suas dúvidas. Estamos aqui para oferecer
                            a melhor solução jurídica para o seu caso.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Telefone</h4>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=5521998461237&text=Ol%C3%A1,%20eu%20acessei%20o%20seu%20site%20e%20gostaria%20de%20conversar!"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer text-gray-300 hover:text-amber-400 transition-colors"
                                        >
                                            (21) 9 9846-1237
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">E-mail</h4>
                                        <a
                                            href="mailto:cinthiafreireadv@icloud.com"
                                            className="cursor-pointer text-gray-300 hover:text-amber-400 transition-colors"
                                        >
                                            cinthiafreireadv@icloud.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Endereço</h4>
                                        <p className="text-gray-300">
                                            Av. Paulista, 1234 - Sala 567<br />
                                            Bela Vista, São Paulo - SP<br />
                                            CEP: 01310-100
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
                                        <p className="text-gray-300">
                                            Segunda a Sexta: 8h às 18h<br />
                                            Sábado: 8h às 12h<br />
                                            Atendimento de emergência: 24h
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                            <h3 className="text-2xl font-semibold mb-6">Envie sua Mensagem</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Nome</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                                        placeholder="Seu nome completo"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">E-mail</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                                    <textarea
                                        rows={4}
                                        className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                                        placeholder="Descreva brevemente seu caso ou dúvida..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
                                >
                                    Enviar Mensagem
                                </Button>
                            </form>

                            <p className="text-sm text-gray-400 mt-4">
                                Responderemos em até 24 horas. Para casos urgentes, ligue diretamente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
