//Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UserForm from './components/UseForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

// Hooks
import { UserForm } from './hooks/useForm'

import './App.css'

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]

  const { currentStep, currentComponent } = UseForm(formComponents);

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="inputs-container">{currentComponent}</div>
          <div className="action">
            <button type="button">
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
