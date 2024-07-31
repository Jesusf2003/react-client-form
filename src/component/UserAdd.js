import React, { Component } from "react";

export default class UserAdd extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.insertUser = this.insertUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
            id: null,
            name: "",
            email: "",
            submitted: false
        }
    }

    onChangeName(e) {
        this.setState({title: e.target.value});
    }

    onChangeEmail(e) {
        this.setState({email: e.target.value});
    }

    insertUser() {
        let data = {
            name: this.state.name,
            email: this.state.email
        }
        // TODO: Función que inserta
    }

    newUser() {
        this.setState({
            id: null,
            name: "",
            email: "",
            submitted: false
        })
    }

    render() {
        return(
            <div className="submit-form">
                {this.state.submitted ? (<div>
                    <h4>Se ha registrado exitósamente</h4>
                    <button className="btn btn-success" onClick={this.newUser}>Ingresar</button>
                </div>) : (<div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" id="name" required value={this.state.name} onChange={this.onChangeName} name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo</label>
                        <input type="email" className="form-control" id="email" required value={this.state.email} onChange={this.onChangeEmail} name="email" />
                    </div>
                    <button onClick={this.insertUser} className="btn btn-success">Ingresar</button>
                </div>)}
            </div>
        );
    }
}