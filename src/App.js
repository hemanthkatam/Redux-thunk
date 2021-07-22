import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Users from './components/Users'

const initialState = {
  userList: [{ last_name: 'hkk' }, { last_name: 'bkk' }]
}
const userListReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case 'SET_DATA': {
      return {
        ...state, userList: data
      }
    }
    default: {
      return { ...state, ...initialState }
    }

  }
}

const store = createStore(userListReducer)


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Users />
      </Provider>
    </div>
  );
}

export default App;
