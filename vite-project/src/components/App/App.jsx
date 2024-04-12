import './App.css'
import Promo from '../Promo/Promo.jsx'
import SkillsList from '../SkillsList/SkillsList.jsx'
import FutureSkillsList from '../FutureSkillsList/FutureSkillsList.jsx'

function App() {
 
  return (
    <div className='app'>
      <Promo />
      <SkillsList title="Мои навыки:"/>
      <FutureSkillsList title="Хочу обучиться:"/>
    </div>
  )
}

export default App
