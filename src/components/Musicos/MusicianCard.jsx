
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import { AiFillStar, AiOutlineYoutube } from 'react-icons/ai';
import { Tb360 } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa';
import { TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';

class MusicianCard extends Component {
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
    const { profile } = this.props;

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        {/* Front */}
        <div className={`card-front ${this.state.isFlipped ? 'flipped' : ''}`} onClick={this.handleClick}>
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
            <Tb360 className="absolute top-2 right-2 text-black text-2xl" />
            <h1 className="text-sm text-gray-300 mb-5">Toca la carta para ver más información</h1>
            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
              <img
                src="/Img/Ethan.jpg"
                alt={`Imagen de ${profile.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-semibold text-center">
              {profile.name} {profile.lastname1} {profile.lastname2}
            </div>
            <div className="text-md text-gray-600 text-center mt-2">{"+506" + " "+profile.phone_number}</div>
            <div className="text-sm text-gray-600 text-center mt-2">
              {profile.state}, {profile.city}, {profile.street}, {profile.address}
            </div>
          </div>
        </div>
        {/* Back */}
        <div className={`card-back ${this.state.isFlipped ? 'flipped' : ''}`} onClick={this.handleClick}>
          <div className="bg-[#700E11] rounded-lg shadow-lg p-4 flex flex-col">
            <Tb360 className="absolute top-2 right-2 text-white text-2xl" />
            {/* Contenido de la tarjeta trasera */}
            <div className="text-md text-gray-200 p-0.5">Username: {profile.user.username}</div>
            <div className="text-md text-gray-200 p-0.5">Email: {profile.user.email}</div>
            <div className="text-md text-gray-200 p-0.5">
              Habilidades: {profile.skills.map((skill) => skill.name).join(', ')}
            </div>
          
            <Link to="/ruta-de-destino">
              <button
                className="bg-[#D1C6AE] hover:bg-zinc-100 text-black item-center font-bold py-2 px-44 mt-6 mb-5 rounded-full text-center"
                onClick={(e) => e.stopPropagation()}
              >
                Contratar
              </button>
            </Link>
          
            <div className="text-sm text-gray-600 text-center mt-2 flex items-center justify-center">
              <a href={`https://www.facebook.com/${profile.facebook}`} target="_blank" rel="noopener noreferrer">
                <TiSocialFacebook className="text-2xl mr-10" onClick={(e) => e.stopPropagation()} />
              </a>
              <a href={`https://www.instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer">
                <TiSocialInstagram className="text-2xl mr-10" onClick={(e) => e.stopPropagation()} />
              </a>
              <a href={`https://www.tiktok.com/@${profile.tiktok}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl mr-10" onClick={(e) => e.stopPropagation()} />
              </a>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default MusicianCard;