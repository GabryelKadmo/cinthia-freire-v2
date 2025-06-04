import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../ui/button'

export default function Contact() {
    return (
        <section id="contato" className="py-20 bg-gradient-to-br from-white via-amber-50 to-white text-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-amber-700 mb-6">
                            Entre em Contato
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Agende uma consulta e tire suas dúvidas. Estamos aqui para oferecer
                            a melhor solução jurídica para o seu caso.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-amber-700 mb-8">Informações de Contato</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Phone className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Telefone</h4>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=5521998461237&text=Ol%C3%A1,%20eu%20acessei%20o%20seu%20site%20e%20gostaria%20de%20conversar!"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer text-amber-700 hover:text-amber-900 transition-colors font-medium"
                                        >
                                            (21) 9 9846-1237
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Mail className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">E-mail</h4>
                                        <a
                                            href="mailto:cinthiafreireadv@icloud.com"
                                            className="cursor-pointer text-amber-700 hover:text-amber-900 transition-colors font-medium"
                                        >
                                            cinthiafreireadv@icloud.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <MapPin className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Endereço</h4>
                                        <p className="text-amber-700 font-medium">
                                            Salvador/BA - Atendimentos online para todo o Brasil
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Clock className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Horário</h4>
                                        <p className="text-amber-700 font-medium">Segunda a Sexta, 9h às 18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/80 border border-amber-100 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
                            <h4 className="text-xl font-bold text-amber-700 mb-4 text-center">Envie sua mensagem</h4>
                            <form className="space-y-4">
                                <input type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-white text-gray-900 focus:ring-2 focus:ring-amber-300 outline-none transition" />
                                <input type="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-white text-gray-900 focus:ring-2 focus:ring-amber-300 outline-none transition" />
                                <textarea placeholder="Mensagem" rows={4} className="w-full px-4 py-3 rounded-lg border border-amber-200 bg-white text-gray-900 focus:ring-2 focus:ring-amber-300 outline-none transition" />
                                <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300">Enviar</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
