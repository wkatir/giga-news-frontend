import { useState, useEffect } from "react"
import { Article } from "@/interfaces/Article"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Loading from "@/components/common/Loading"
import { getTechNewsInSpanish } from "../services/newsService"

const MainContent = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getTechNewsInSpanish()
        setArticles(fetchedArticles)
      } catch (error) {
        console.error("Error al obtener noticias:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (!articles.length) {
    return (
      <p className="text-center py-10 text-gray-600">
        No hay noticias disponibles.
      </p>
    )
  }

  const heroArticle = articles[0]
  const restArticles = articles.slice(1)

  return (
    <main id="content" className="bg-gray-50">
      <section className="py-8 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <a href={heroArticle.url} target="_blank" rel="noopener noreferrer">
              <img
                src={heroArticle.urlToImage}
                alt={heroArticle.title}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-block bg-red-600 text-white text-xs font-semibold px-2 py-1 mb-2 rounded">
                Destacado
              </span>
              <h2 className="text-white text-3xl font-bold mb-2 max-w-lg">
                <a
                  href={heroArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {heroArticle.title}
                </a>
              </h2>
              <p className="text-gray-200 max-w-md hidden md:block line-clamp-2">
                {heroArticle.description}
              </p>
              <div className="mt-4">
                <Button className="bg-red-600 text-white hover:bg-red-700 transition-colors px-4 py-2 rounded" asChild>
                  <a
                    href={heroArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leer más
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {restArticles.slice(0, 3).map((item, idx) => (
              <Card key={idx} className="flex-1 hover:shadow-xl transition-shadow">
                <div className="flex gap-4">
                  <div className="w-1/3 relative overflow-hidden rounded-l">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.urlToImage}
                        alt={item.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="w-2/3 p-4 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0">
                        <CardTitle className="text-lg font-bold mb-1">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {item.title}
                          </a>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-sm text-gray-500 line-clamp-2">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      {item.source.name}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-800 text-2xl font-bold mb-6">
            Más noticias de tecnología
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restArticles.slice(3, 9).map((article, idx) => (
              <Card
                key={idx}
                className="hover:shadow-xl transition-shadow rounded overflow-hidden"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </a>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-bold mb-2">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {article.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-3">
                    {article.description}
                  </CardDescription>
                  <div className="mt-2 text-xs text-gray-500">
                    {article.source.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-800 text-2xl font-bold mb-6">
            Últimas noticias
          </h2>
          <div className="space-y-4">
            {restArticles.slice(9).map((article, idx) => (
              <Card
                key={idx}
                className="flex flex-col md:flex-row gap-4 items-center hover:bg-gray-100 transition-colors p-4 rounded"
              >
                <div className="w-full md:w-1/3 relative overflow-hidden rounded">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-32 object-cover transform hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="w-full md:w-2/3">
                  <CardTitle className="text-lg font-bold mb-1">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {article.title}
                    </a>
                  </CardTitle>
                  <CardContent className="p-0">
                    <CardDescription className="text-sm text-gray-600 line-clamp-2">
                      {article.description}
                    </CardDescription>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {article.source.name}
                    </span>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainContent
