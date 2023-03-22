import { TrendingMoviesList } from "components/TrendingMoviesList/TrendingMoviesList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "services/api";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function saveTrendigMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
        // console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    saveTrendigMovies();
  }, []);

  console.log(trendingMovies);
  return (
    <main>
      <section>
        <div>
          {error && <h2>{error}</h2>}
          {/* {isLoading && <h2>Загружаем...</h2>} */}
          <TrendingMoviesList trendingMovies={trendingMovies} />
        </div>
      </section>
    </main>
  );
}

export default Home;
