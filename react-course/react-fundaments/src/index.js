import ReactDOM from 'react-dom';

import './index.css'

import First from './components/basics/First'
import WithProperty from './components/basics/WithProperty';

const tag = <strong>Olá Dan</strong>

ReactDOM.render(
  <div>
    <WithProperty 
      titulo="Student situation" 
      aluno="Dan"
      nota={10} />
    <First />
  </div>,
  document.getElementById('root')
)