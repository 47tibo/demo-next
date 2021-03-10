import { GetStaticPaths, GetStaticProps } from 'next'
import { MoviesProps } from '../movies'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=ea19850e51eedeaee6ecc4618ffbda6a&language=en-US&query=shrek&page=1&include_adult=false',
  )
  const data = await response.json()
  const movies: MoviesProps[] = data.results
  const paths = movies
    .filter((movie) => movie.poster_path !== null)
    .map((movie) => {
      const id = movie.poster_path.slice(1).split('.')[0]
      return { params: { id } }
    })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { id: params.id },
})

type PosterProps = {
  id: string
}
const Poster: React.FC<PosterProps> = ({ id }) => (
  <img
    src={`https://image.tmdb.org/t/p/w780/${id}.jpg`}
    alt="nice poster!"
  />
)
export default Poster
