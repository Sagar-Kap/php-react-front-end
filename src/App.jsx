import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/EditUser';
import EditUser from './components/EditUser';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h5>React CRUD operations using PHP API and MySQL</h5>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="user/create">Create User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path='user/create' element={<CreateUser />} />
        <Route path='us/:id/edit' element={<EditUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
