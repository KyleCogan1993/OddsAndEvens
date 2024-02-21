import {Provider} from 'react-redux'
import AddNumber from './components/AddNumber' 
import NumberBank from './components/NumberBank'
import SortedNumbers from './components/SortedNumbers'

import './App.css'

function App() {

  return (
    <>
      <Provider store={store}>
         <AddNumber />
         <NumberBank />
         <SortedNumbers />
      </Provider>

    </>
  )
}

export default App
