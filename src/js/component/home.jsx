import React, { useState } from 'react';

const Semaforo = () => {
  const [color, setColor] = useState('');

  const encenderLuz = (colorLuz) => {
    setColor(colorLuz);
  };

  return (
    <div className="container">
      <div className="semaforo">
        <div
          className={`luz1 luzRoja ${color === 'rojo' ? 'encendida' : ''}`}
          onClick={() => encenderLuz('rojo')}
        ></div>
        <div
          className={`luz2 luzAmarilla ${color === 'amarillo' ? 'encendida' : ''}`}
          onClick={() => encenderLuz('amarillo')}
        ></div>
        <div
          className={`luz3 luzVerde ${color === 'verde' ? 'encendida' : ''}`}
          onClick={() => encenderLuz('verde')}
        ></div>
      </div>
    </div>
  );
};

export default Semaforo;