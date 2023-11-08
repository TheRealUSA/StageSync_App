import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Tb360 } from 'react-icons/tb';
import { Link } from 'react-router-dom';

class OportunitiCard extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { Oportuniti } = this.props;

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        {/* Front */}
        <div className={`card-front ${this.state.isFlipped ? 'flipped' : ''}`} onClick={this.handleClick}>
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center ">
          <Tb360 className="absolute top-2 right-2 text-black text-2xl" />
          <h1 className='text-sm text-gray-300 mb-5'>Toca la carta para ver más información</h1>
            <div className="text-xl font-semibold text-center">{Oportuniti.contractorId}</div>
            <div className="text-md text-gray-600 text-center mt-2">Ubicación: {Oportuniti.eventLocation}</div>
            <div className="text-sm text-gray-600 text-center mt-2">Fecha: {Oportuniti.dateHire}</div>
            <div className="text-sm text-gray-600 text-center mt-2">Tipo de evento: {Oportuniti.typeEvent}</div>
          </div>
        </div>

        {/* Back */}
        <div className={`card-back ${this.state.isFlipped ? 'flipped' : ''}`} onClick={this.handleClick}>
          <div className="bg-[#700E11] rounded-lg shadow-lg p-4 flex flex-col ">
          <Tb360 className="absolute top-2 right-2 text-white text-2xl" />
            {/* Contenido de la tarjeta trasera */}
            <div className="text-md text-gray-200 p-0.5">
              Hora de inicio: {Oportuniti.startTime}
            </div>
            <div className="text-md text-gray-200 p-0.5">
              Hora final: {Oportuniti.endTime}
            </div>
            <div className="text-md text-gray-200 p-0.5">
              Tarifa: {Oportuniti.agreedRate}
            </div>
            <div className="text-md text-gray-200 p-0.5">
              Dia de pago: {Oportuniti.paymentDate}
            </div>
            <Link to="/ruta-de-destino">
            <button className="bg-[#D1C6AE] hover:bg-zinc-100 text-black item-center font-bold py-2 px-44 mt-6 mb-5 rounded-full text-center" onClick={(e) => e.stopPropagation()} >
            Contactar
          </button>
          </Link>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default OportunitiCard;