import { GetStaticProps, InferGetStaticPropsType } from 'next'

type Movie = {
  title: string
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=ea19850e51eedeaee6ecc4618ffbda6a&language=en-US&query=shrek&page=1&include_adult=false',
  )
  const data = await response.json()
  const movies: Movie[] = data.results
  return {
    props: {
      movies,
    },
    revalidate: 1,
  }
}

const Movies: React.FC = ({
  movies,
}: InferGetStaticPropsType<typeof getStaticProps>) =>
  movies.map((movie) => <p>{movie.title}</p>)
export default Movies
