import {useGlobalContext} from '../../context/context'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import '../ThemeToggle/styles.css'
import Switch from "react-switch";

const ThemeToggle = () => {
  const {isDarkTheme, toggleDarkTheme} = useGlobalContext()

  return (

    <section className='toggle-container'>
      <Switch
        className="react-switch"
        id="material-switch"
        onColor="#645cff"
        checkedIcon={<i></i>}
        uncheckedIcon={<i></i>}
        checked={isDarkTheme}
        onChange={() => toggleDarkTheme(!isDarkTheme)}
      />

      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme
          ? <BsFillMoonFill className='toggle-icon' />
          : <BsFillSunFill className='toggle-icon' />
        }
      </button>
    </section>
  )
}
export default ThemeToggle
