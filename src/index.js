import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { ResultContextProvider } from './context/ResultContextProvider'
ReactDOM.render(
   
   <ResultContextProvider>     
        <Router>
            <App/>
        </Router>
</ResultContextProvider>
,
document.getElementById('root')
);


