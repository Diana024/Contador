import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [contar, setContar] = useState(0)

  const [numeroMaximo, setNumeroMaximo] = useState(null);
  const [inputMaximo, setInputMaximo] = useState('');

  const manejarEnter = (e) => {
    if (e.key === 'Enter') {
      const valorNumerico = parseInt(inputMaximo, 10);
      if (!isNaN(valorNumerico) && valorNumerico >= 0) {
        setNumeroMaximo(valorNumerico); setInputMaximo('');
      } else {
        alert('Por favor, ingresa un número válido mayor o igual a 0.');
      }
    }
  };

  const manejarCambioInput = (e) => {
      setInputMaximo(e.target.value);
  };

  useEffect(() => {
    if (numeroMaximo !== null && contar === numeroMaximo) {
      alert('Has alcanzado el número máximo.');
    }
  },
    [contar, numeroMaximo]);

  return (
    <>
      <div className="container">
        <h1>CONTADOR</h1>
        <h1> {contar} </h1>
        <div className="card pt-5 pb-5">
          <button onClick={() => setContar((contar) => contar + 1)}>
            +
          </button>
          <button onClick={() => setContar((contar) => (contar > 0 ? contar - 1 : contar))}>
            -
          </button>
        </div>
        <div className="card pt-5 pb-5">
          <input type="number" value={inputMaximo} onChange={manejarCambioInput} onKeyDown={manejarEnter} placeholder="Establecer número máximo" />
          <p>Número máximo actual: {numeroMaximo !== null ? numeroMaximo : 'No establecido'}</p>
        </div>
        <button onClick={() => setContar(0)}>
          Reiniciar
        </button>
      </div>
    </>
  )
}

export default App
