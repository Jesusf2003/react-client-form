import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Users from './component/Users';
import UserAdd from './component/UserAdd';
import UserList from './component/UserList';

export default class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/users"} className="navbar-brand">
                        Fernando
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/users"} className="nav-link">
                                Libros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">Insertar</Link>
                        </li>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<UserList />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/add" element={<UserAdd />} />
                        <Route path="/users/:id" element={<Users />} />
                    </Routes>
                </div>
            </div>
        );
    }
}