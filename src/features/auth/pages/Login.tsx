import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 p-4">
      <div className="max-w-sm w-full bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-center mb-6">
          <span className="text-3xl font-bold text-red-600">Giga News</span>
        </div>
        <h2 className="text-xl font-semibold text-center mb-2">
          Inicia sesión en tu cuenta de Giga News
        </h2>
        <p className="text-center text-sm mb-6">
          ¿No tienes cuenta? <Link to="/register" className="text-red-600 hover:underline">Regístrate</Link>
        </p>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="Ingresa tu correo"
              className="mt-1 w-full"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              className="mt-1 w-full"
            />
          </div>
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors">
            Iniciar sesión
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
        <p className="text-xs text-gray-600 mt-4">
          Al registrarte o iniciar sesión, aceptas nuestros{' '}
          <Link to="/terms" className="text-red-600 hover:underline">
            Términos de Uso
          </Link>{' '}
          y reconoces nuestra{' '}
          <Link to="/privacy" className="text-red-600 hover:underline">
            Política de Privacidad
          </Link>. Giga News y sus afiliados pueden utilizar tu correo electrónico para enviar actualizaciones, anuncios y ofertas. Puedes optar por no participar a través de la{' '}
          <Link to="/privacy" className="text-red-600 hover:underline">
            Política de Privacidad
          </Link>.
        </p>
      </div>
    </div>
  )
}

export default Login
