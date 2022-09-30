import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <App />
    </div>
);
// Create component without JSX
// root.render(React.createElement('button', 
//                                 { disabled: false,
//                                   onClick: () => console.log('Click')
//                                 }, 'Try click me!!!'));