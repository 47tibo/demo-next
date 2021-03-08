import React from 'react'
import { useRouter } from 'next/router'

const Post: React.FC = () => {
  const { name } = useRouter().query
  return <p>hello vous êtes dans la page {name}</p>
}

export default Post
