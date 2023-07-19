import {useGlobalContext} from '../../context/context'
import '../SearchForm/styles.css'

const SearchForm = () => {

  const {setSearchValue} = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchValue(searchValue)
  }
  return (
    <section >
      <h1 className='title'>Imagenator</h1>
      <form className='search-form' onSubmit={handleSubmit} >
        <input type="text" name='search' placeholder='Digite o nome da imagem' className='form-input-search-input' />
        <button type='submit' className='btn'>Buscar</button>
      </form>
    </section>
  )
}
export default SearchForm