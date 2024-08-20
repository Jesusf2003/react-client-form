import { useState } from "react"
import { Button, Form } from "react-bootstrap";

const Formulary = ({ title }) => {
    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [tel, setTel] = useState('');
    const [dir, setDir] = useState('');
    const [errors, setErrors] = useState({});

    const regexNames = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/;
    const regexTel = /^[0-9]{1,9}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!name) newErrors.name = 'Nombre es requerido';
        if (!lname) newErrors.telf = 'Apellidos es requerido';
        if (!tel) newErrors.telf = 'Teléfono es requerido';
        if (!dir) newErrors.telf = 'Dirección es requerida';
        if (!regexNames.test(name)) {alert("Formato de nombres inválido")}
        if (!regexNames.test(lname)) {alert("Formato de apellidos inválido")}
        if (!regexTel.test(tel)) {alert("Teléfono inválido")}
        setErrors(newErrors);
        alert(`Datos del cliente { ${name}, ${lname}, ${tel} es válido, ${dir} }`);
    }

    const handleNameChange = (e) => setName(e.target.value);
    const handleLNameChange = (e) => setLname(e.target.value);
    const handleTelChange = (e) => setTel(e.target.value);
    const handleDirChange = (e) => setDir(e.target.value);

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>{title}</Form.Label>
                <Form.Control type="text" value={name} onChange={handleNameChange} placeholder="Nombres"></Form.Control>
                <Form.Control type="text" value={lname} onChange={handleLNameChange} placeholder="Apellidos"></Form.Control>
                <Form.Control type="tel" value={tel} onChange={handleTelChange} placeholder="Teléfono"></Form.Control>
                <Form.Control type="text" value={dir} onChange={handleDirChange} placeholder="Dirección"></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
        </Form>
    );
}

export default Formulary;