import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

export type MoviesProps = {
  title: string
  poster_path: string | null
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=ea19850e51eedeaee6ecc4618ffbda6a&language=en-US&query=shrek&page=1&include_adult=false',
  )
  const data = await response.json()
  const movies: MoviesProps[] = data.results
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
  movies.map((movie: MoviesProps) => {
    if (movie.poster_path) {
      const id = movie.poster_path.slice(1).split('.')[0]
      return (
        <>
          <Link href={`/poster/${id}`}>
            <a target="_blank">{movie.title}</a>
          </Link>
          <style jsx>{`
            a {
              display: block;
            }
          `}</style>
        </>
      )
    }
    return <p>{movie.title}</p>
  })
export default Movies
