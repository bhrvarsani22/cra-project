import "./App.css";
import User from "./pages/Users";
import Header from "./pages/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='*' element={<Home />}
          />
        </Routes>
      </Provider>

    </BrowserRouter>
  );
}

export default App;
