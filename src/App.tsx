
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Home} from "./screens/home" 
import {NewRoom} from './screens/NewRoom'
import {Room} from './screens/Room'
import {AuthContextProvider} from './contexts/AuthContext'

function App() {
  
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  
  );
}

export default App;
