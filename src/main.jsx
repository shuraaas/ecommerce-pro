import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './scss/_global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  // {/* </React.StrictMode>, */}
);

// TODO: сделать липкую шапку
// TODO: сделать модалку для католога