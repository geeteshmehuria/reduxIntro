import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Counter from './component/Counter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* heheh */}
        <h1>
          <Counter />
        </h1>
      </div>
    </Provider>
  )
}

export default App
