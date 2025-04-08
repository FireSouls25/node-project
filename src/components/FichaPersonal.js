// FichaPersonal.js
import React, { useState } from "react";
import "./FichaPersonal.css";

const FichaPersonal = () => {
    const [formData, setFormData] = useState({
        correo: "",
        nombres: "",
        fechaNacimiento: "",
        telefono: "",
        cedula: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Registro exitoso:\n" + JSON.stringify(formData, null, 2));
    };

    return (
    <form className="FichaPersonal" onSubmit={handleSubmit}>
        <h3>Ficha Personal</h3>
        <label>Correo:
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
        </label>
        <label>Nombres:
        <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required />
        </label>
        <label>Fecha de Nacimiento:
        <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        </label>
        <label>Teléfono:
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </label>
        <label>Cédula:
        <input type="text" name="cedula" value={formData.cedula} onChange={handleChange} required />
        </label>
        <button type="submit">Registrar</button>
    </form>
    );
};

export default FichaPersonal;
