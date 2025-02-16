import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 p-4">
      <div className="max-w-sm w-full bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-center mb-6">
          <span className="text-3xl font-bold text-red-600">Giga News</span>
        </div>
        <h2 className="text-xl font-semibold text-center mb-2">
          Regístrate para obtener tu cuenta de Giga News
        </h2>
        <p className="text-center text-sm mb-6">
          ¿Ya tienes cuenta? <Link to="/login" className="text-red-600 hover:underline">Inicia sesión</Link>
        </p>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="Ingresa tu correo" className="mt-1 w-full" />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium">Contraseña</Label>
            <Input id="password" type="password" placeholder="Ingresa tu contraseña" className="mt-1 w-full" />
          </div>
          <p className="text-xs text-gray-600">
            Al registrarte o iniciar sesión, aceptas nuestros <Link to="/terms" className="text-red-600 hover:underline">Términos de Uso</Link> y has leído nuestra <Link to="/privacy" className="text-red-600 hover:underline">Política de Privacidad</Link>.
          </p>
          <div className="flex items-start space-x-2">
            <Checkbox id="offers" />
            <Label htmlFor="offers" className="text-sm text-gray-700 leading-tight">
              Giga News y sus afiliados pueden utilizar mi correo electrónico para proporcionar actualizaciones, anuncios y ofertas. Puedo optar por no participar mediante la <Link to="/privacy" className="text-red-600 hover:underline">Política de Privacidad</Link>.
            </Label>
          </div>
          <Button type="submit" className="w-full bg-black text-white hover:bg-neutral-900 transition-colors">
            Registrarse
          </Button>
        </form>
        <div className="my-4 flex items-center">
          <Separator className="flex-1" />
          <span className="mx-2 text-sm text-gray-400">o</span>
          <Separator className="flex-1" />
        </div>
        <div className="flex flex-col space-y-2">
          <Button variant="outline" className="w-full justify-center flex items-center gap-2">
            <FcGoogle size={20} />
            Continuar con Google
          </Button>
          <Button variant="outline" className="w-full justify-center flex items-center gap-2">
            <FaApple size={20} />
            Continuar con Apple
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Register
