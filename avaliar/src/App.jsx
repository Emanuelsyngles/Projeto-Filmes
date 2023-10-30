//Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks';
import Steps from './components/Steps';

// Hooks
import UseForm from './hooks/UseForm'

import './App.css'

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep, ifFirstStep } = UseForm(formComponents);

  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto.</p>
      </div>
      <div className="form-container">
        {Steps}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!ifFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
