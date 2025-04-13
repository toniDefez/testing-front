import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renderiza el título correctamente', () => {
    render(<App />);
    const titulo = screen.getByText(/hola mundo/i);
    expect(titulo).toBeInTheDocument();
  });

  it('muestra un mensaje adicional', () => {
    render(<App />);
    const mensaje = screen.getByText(/todo está listo/i);
    expect(mensaje).toBeInTheDocument();
  });
});