import React, { Component } from "react";
import { } from "react-bootstrap";

export default class UserAdd extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTelf = this.onChangeTelf.bind(this);
        this.insertUser = this.insertUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
            id: null,
            name: "",
            lastName: "",
            email: "",
            telf: "",
            submitted: false
        }
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    onChangeLastName = (e) => {
        this.setState({ lastName: e.target.value });
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    onChangeTelf = (e) => {
        this.setState({ telf: e.target.value });
    }

    insertUser() {
        const {name, lastName, email, telf} = this.state;
        const error = {};
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const telfRegex = /^\d{10}$/;
    }

    newUser() {
        this.setState({
            id: null,
            name: "",
            lastName: "",
            email: "",
            telf: "",
            submitted: false
        })
    }

    render() {
        const { name, lastName, email, telf } = this.state;
        return (
            <div className="submit-form">
                {this.state.submitted ?
                    (
                        <div>
                            <h4>Se ha registrado exitósamente</h4>
                            <button className="btn btn-success" onClick={this.newUser}>Ingresar</button>
                        </div>
                    ) : (
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" className="form-control" id="name" required value={name} onChange={this.onChangeName} name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Apellido</label>
                                <input type="text" className="form-control" id="lastName" required value={lastName} onChange={this.onChangeLastName} name="lastName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Correo</label>
                                <input type="email" className="form-control" id="email" required value={email} onChange={this.onChangeEmail} name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telf">Teléfono</label>
                                <input type="tel" className="form-control" id="telf" required value={telf} onChange={this.onChangeTelf} name="telf" />
                            </div>
                            <button onClick={this.insertUser} className="btn btn-success">Ingresar</button>
                        </div>
                    )}
            </div>
        );
    }
}