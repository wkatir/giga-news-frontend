import { Link } from 'react-router-dom'
import { FaFacebook, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
          <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
            <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
              <div className="flex items-center mb-2">
                <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">
                  Giga News
                </span>
              </div>
              <p>
                Giga News es una plataforma moderna de noticias tecnológicas con un enfoque centralizado de gestión de contenidos.
              </p>
              <ul className="space-x-3 mt-6 mb-6 lg:mb-0">
                <li className="inline-block">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <FaFacebook size={32} className="hover:text-gray-100" />
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X"
                  >
                    <FaXTwitter size={32} className="hover:text-gray-100" />
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube"
                  >
                    <FaYoutube size={32} className="hover:text-gray-100" />
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    <FaInstagram size={32} className="hover:text-gray-100" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
              <div className="flex flex-wrap flex-row">
                <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                  <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                    Información
                  </h4>
                  <ul>
                    <li className="py-1 hover:text-white">
                      <Link to="/sobre-nosotros">Sobre nosotros</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/equipo-editorial">Equipo editorial</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/contacto">Contacto</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/bolsa-de-trabajo">Bolsa de trabajo</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                  <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                    Secciones
                  </h4>
                  <ul>
                    <li className="py-1 hover:text-white">
                      <Link to="/tecnologia">Tecnología</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/opinion">Opinión</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/videos">Videos</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/podcasts">Podcasts</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/emprendimiento">Emprendimiento</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                  <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                    Suscripciones
                  </h4>
                  <ul>
                    <li className="py-1 hover:text-white">
                      <Link to="/boletin">Boletín</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/rss">RSS</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/premium">Premium</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/publicidad">Publicidad</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                  <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">
                    Legal
                  </h4>
                  <ul>
                    <li className="py-1 hover:text-white">
                      <Link to="/politica-de-privacidad">Política de privacidad</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/terminos-de-uso">Términos de uso</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/licencia">Licencia</Link>
                    </li>
                    <li className="py-1 hover:text-white">
                      <Link to="/gdpr">GDPR</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container py-4 border-t border-gray-200 border-opacity-10">
          <div className="row">
            <div className="col-12 col-md text-center">
              <p className="my-3">
                © Giga News | Plataforma de noticias tecnológicas – Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
