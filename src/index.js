import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/EDGAR/useRef/Example_2/App'

import { BrowserRouter as Router } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
    <App />
	</Router>
);
