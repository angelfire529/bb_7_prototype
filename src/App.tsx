import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import './js/scripts';
import './styles/App.scss';
import Main from './Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
