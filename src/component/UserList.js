import { Component } from "react";
import { Link } from "react-router-dom";

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrieveUsers = this.retrieveUsers.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveUser = this.setActiveUser.bind(this);
        this.searchUsers = this.searchUsers.bind(this);
        this.state = {
            users: [],
            currentUser: null,
            currentIndex: -1,
            searchName: ""
        }
    }

    componentDidMount() {
    }

    onChangeSearchName(e) {
        const search = e.target.value;
        this.setState({searchName: search});
    }

    retrieveUsers() {
        // TODO: Traer lista de usuarios
    }

    refreshList() {
        this.retrieveUsers();
        this.setState({currentName: null, currentIndex: -1});
    }

    setActiveUser(data, index) {
        this.setState({currentUser: data, currentIndex: index});
    }

    searchUsers() {
        this.setState({currentUser: null, currentIndex: -1});
        // TODO: Función de búsqueda por nombre
    }

    render() {
        const {searchName, users, currentUser, currentIndex} = this.state;
        return(
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Filtrar por nombre" value={searchName} onChange={this.onChangeSearchName}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.searchUsers}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Lista de nombres</h4>
                    <ul className="list-group">
                        {users && users.map((user, index) => (
                            <li className={"list-group-item "+(index===currentIndex ? "active" : "")} onClick={() => this.setActiveUser(user, index)} key={index}>{user.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentUser ? (<div>
                        <h4>Tutorial</h4>
                        <div><label><strong>Nombre:</strong></label>{" "} {currentUser.name}</div>
                        <div><label><strong>Correo:</strong></label>{" "} {currentUser.email}</div>
                        <div><label><strong>Estado:</strong></label>{" "} {currentUser.status ? "Activo" : "Pendiente"}</div>
                        <Link to={"/users/"+currentUser.id} className="btn btn-warning btn-sm">Editar</Link>
                    </div>) : (<div>
                        <br/>
                        <p>Por favor, seleccionar un usuario...</p>
                    </div>)}
                </div>
            </div>
        );
    }
}