import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const url =
  'https://api.unsplash.com/search/photos?client_id=B4ZLSOzMaomVLddUzD8TD1rqyzjqGF8fChzXJCi0w6o&query=office'

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url)

      return result.data
    },
  })

  console.log(response)
  return <h2>Gallery</h2>
}
export default Gallery
