import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FichaPersonal from "./FichaPersonal";

beforeAll(() => {
    window.alert = jest.fn();
});


test("formulario se completa correctamente", () => {
    render(<FichaPersonal />);

    fireEvent.change(screen.getByLabelText(/Correo/i), { target: { value: "test@mail.com" } });
    fireEvent.change(screen.getByLabelText(/Nombres/i), { target: { value: "Juan Perez" } });
    fireEvent.change(screen.getByLabelText(/Fecha de Nacimiento/i), { target: { value: "2000-01-01" } });
    fireEvent.change(screen.getByLabelText(/Teléfono/i), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText(/Cédula/i), { target: { value: "12345678" } });

    fireEvent.click(screen.getByText(/Registrar/i));

    expect(screen.getByText(/Ficha Personal/i)).toBeInTheDocument();
});
