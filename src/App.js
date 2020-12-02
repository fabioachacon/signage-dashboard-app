import React, {useState} from 'react';
import './styles/app.scss';
import Upload from './pages/Upload';
import Nav from './components/Nav';
import Playlist from './pages/Playlist';
import { Switch, Route } from 'react-router-dom';

function App() {

  const [data, setData] = useState({
      id: '', 
      name: '', 
      description: '',
      url: ''
  });

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Upload 
          setData={setData} 
          data={data} 
            
          /> 
        </Route>
        <Route path='/playlist'>
          <Playlist />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
