import React, {Component} from 'react';
import {withRouter} from '../common/with-router'

class Users extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.findUser = this.findUser.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {
            currentUser: {
                id: null,
                name: "",
                email: "",
                status: false
            },
            message: ""
        }
    }

    componentDidMount() {
        this.findUser(this.props.router.params.id);
    }

    onChangeName(e) {
        const name = e.target.value;
        this.setState(function(prevState) {
            return {
                currentUser: {
                    ...prevState.currentUser,
                    name: name
                }
            }
        })
    }

    onChangeEmail(e) {
        const email = e.target.value;
        this.setState(prevState => {
            return {
                currentUser: {
                    ...prevState.currentUser,
                    email: email
                }
            }
        });
    }

    findUser(id) {
        // TODO: Buscar por Id
    }

    updateStatus(status) {
        let data = {
            id: this.state.currentUser.id,
            name: this.state.currentUser.name,
            email: this.state.currentUser.email,
            status: status
        }
        // TODO: Función actualizar estado
    }

    updateUser() {
        // TODO: Función actualizar user
    }

    deleteUser() {
        // TODO: Función delete user
    }

    render() {
        const {currentUser} = this.state;
        return (
            <div>
                {currentUser ? (<div className="edit-form">
                    <h4>Usuarios</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" className="form-control" id="name" value={currentUser.name} onChange={this.onChangeName}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo</label>
                            <input type="email" className="form-control" id="email" value={currentUser.email} onChange={this.onChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label><strong>Estado:</strong></label> {currentUser.status ? "Activo" : "Pendiente"}
                        </div>
                    </form>
                    {currentUser.status ? (<button className="badge badge-primary mr-2" onClick={() => this.updateStatus(false)}>No activo</button>) : (<button className="badge badge-primary mr-2" onClick={() => {this.updateStatus(true)}}></button>)}
                    <button className="badge badge-danger mr-2" onClick={this.deleteUser}>Eliminar</button>
                    <button type="submit" className="badge badge-success" onClick={this.updateUser}>Actualizar</button>
                    <p>{this.state.message}</p>
                </div>) : (<div>
                    <br />
                    <p>Por favor, seleccione un usuario</p>
                </div>)}
            </div>
        );
    }
}

export default withRouter(Users);