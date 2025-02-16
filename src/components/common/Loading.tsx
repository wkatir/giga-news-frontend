const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-16 h-16 border-4 border-t-4 border-t-red-600 border-gray-200 rounded-full animate-spin"></div>
      <span className="mt-4 text-gray-600 text-lg">Cargando noticias...</span>
    </div>
  );
};

export default Loading;
