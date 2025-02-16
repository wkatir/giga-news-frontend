import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link to="/">Giga News</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Inicio
          </Link>
          <Link to="/noticias" className="hover:text-gray-300">
            Noticias
          </Link>
          <Link to="/nosotros" className="hover:text-gray-300">
            Nosotros
          </Link>
          <Link to="/contacto" className="hover:text-gray-300">
            Contacto
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <Button className="bg-black text-white hover:bg-neutral-900 transition-colors px-4 py-2">
            <Link to="/login">Iniciar sesión</Link>
          </Button>
          <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors px-4 py-2">
            <Link to="/register">Registrarse</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-0">
                <FaBars size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-white w-3/4 sm:w-1/2">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">Menú</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link to="/" className="hover:text-gray-300">
                  Inicio
                </Link>
                <Link to="/noticias" className="hover:text-gray-300">
                  Noticias
                </Link>
                <Link to="/nosotros" className="hover:text-gray-300">
                  Nosotros
                </Link>
                <Link to="/contacto" className="hover:text-gray-300">
                  Contacto
                </Link>
                <div className="pt-4 border-t border-gray-700 flex flex-col space-y-2">
                  <Button className="bg-black text-white hover:bg-neutral-900 transition-colors px-4 py-2">
                    <Link to="/login">Iniciar sesión</Link>
                  </Button>
                  <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors px-4 py-2">
                    <Link to="/register">Registrarse</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
