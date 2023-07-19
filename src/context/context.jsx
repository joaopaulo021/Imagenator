import {createContext, useContext, useState, useEffect} from 'react';

const AppContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-schema:dark)'
  ).matches

  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';
  return storedDarkMode || prefersDarkMode;
}

export const AppProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchValue, setSearchValue] = useState('dog')
  const [page, setPage] = useState(1)

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme);
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchValue,
        setSearchValue,
        page,
        setPage
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)