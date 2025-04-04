"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner/Header Section */}
      <div className="relative h-[33vh] bg-[#D35400] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://raw.githubusercontent.com/ThaisMx/presente/refs/heads/main/public/ezequiel.jpg"
            alt="Will com café Starbucks"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            PRESENTE DO WILL
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Title Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            COMO PROMETIDO, AQUI ESTÁ MEU PRESENTE PARA VOCÊ
          </h2>
          
          <p className="text-lg text-gray-700 mb-4">
            Este são os sinais que me renderam mais de 400 mil dólares e que eu uso pessoalmente para minhas operações.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Agora é seu, de graça.
          </p>

          {/* Download Button */}
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 text-lg px-6 py-3"
            onClick={() => window.open("https://t.me/copycashforexfree", "_blank")}
          >
            <Download className="w-5 h-5" />
            Resgate seu presente
          </Button>
        </div>

        {/* Instructions Section */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Agora, use as metodologias ensinadas na aula "O Segredo dos Novos Ricos".
          </p>
          <p className="text-lg text-gray-700">
            Você está a caminho de assumir o controle da sua carreira em trading e começar a ganhar MUITO dinheiro a partir de agora!
          </p>
        </div>

        {/* Signature Section */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-lg text-gray-700">Seu amigo e mentor,</p>
          <p className="text-xl font-semibold text-gray-900">Willian Aksenen</p>
        </div>
      </div>
    </main>
  );
}