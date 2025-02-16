import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const UrlNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-6">
          La URL a la que intentas acceder no existe o ya no está disponible.
        </p>
        <Button
          asChild
          className="bg-red-600 text-white hover:bg-red-700 transition-colors px-6 py-2 rounded"
        >
          <Link to="/">Regresar a Inicio</Link>
        </Button>
      </div>
    </div>
  );
};

export default UrlNotFound;
