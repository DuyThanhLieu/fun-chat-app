import './App.css';
import Login from './components/Login';
import { Route, BrowserRouter, } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AuthProvider from './components/Context/AuthProvider';
// import AppProvider from './components/Context/AppProvider';

function App() {
  return (
    <div className="App">
      <return>
        <BrowserRouter >
          <AuthProvider>
            {/* <AppProvider> */}
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={ChatRoom} />
            </Switch>
            {/* </AppProvider> */}
          </AuthProvider>
        </BrowserRouter>
      </return>
    </div>
  );
}

export default App;
