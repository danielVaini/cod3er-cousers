import ReactDOM from 'react-dom';

import './index.css'

import First from './components/basics/First'

const tag = <strong>Olá Dan</strong>

ReactDOM.render(
  <div>
   <First />
  </div>,
  document.getElementById('root')
  )