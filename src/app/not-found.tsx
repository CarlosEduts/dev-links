import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <small className="font-bold text-gray-800 opacity-60">Dev Links</small>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Página Não Encontrada</h2>
        <p className="text-gray-500 mb-8">Ops! A página que você está procurando não existe.</p>
        <Link href="/">
          
          <Button>Voltar para a Página Inicial</Button>
        </Link>
        
      </div>
    )
  }
  
