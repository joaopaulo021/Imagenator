// import {useFetchImgs} from '../reactQueryCustomHooks'

import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import {useGlobalContext} from '../../context/context'
import '../Gallery/styles.css'

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`

const Gallery = () => {
  const {searchValue, page, setPage} = useGlobalContext()

  const response = useQuery({
    queryKey: ['images', searchValue, page],
    queryFn: async () => {
      const result = await axios.get(`${url}&per_page=12&page=${page}&query=${searchValue}`)
      return result.data
    }
  })

  if (response.isLoading) {
    return (
      <div className='loading-container'>
        <div className='loading'></div>
        <h4>Carregando...</h4>
      </div>
    )
  }
  if (response.isError) {
    return (
      <h4>Algo deu errado..</h4>
    )
  }
  const results = response.data.results
  if (results.length < 1) {
    return (
      <h4>Sem resultados</h4>
    )
  }
  return (
    <>
      <section className='image-container'>
        {results.map((item) => {
          const url = item?.urls?.regular
          return (
            <a href={url} key={item.id} target="_blank">
              <img src={url} className='img' />
            </a>
          )
        })}
      </section>

      <div className='btns-container'>
        <button className='btn-hipster' onClick={() => setPage(page - 1 || 1)}>Anterior</button>
        <p>Página {page}</p>
        <button className='btn-hipster' onClick={() => setPage(page + 1)}>Próxima</button>
      </div>
    </>
  )
}

export default Gallery
