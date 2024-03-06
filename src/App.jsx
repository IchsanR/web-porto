import './App.css';
import {Provider} from 'react-redux'
import {store} from './redux/store';
import {NextUIProvider} from "@nextui-org/react";
import Router from './routes/router';

function App() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Router />
      </NextUIProvider>
    </Provider>
  );
}

export default App;
