
import { useState } from 'react';
import './footer.css';

const Footer = () => {
    const [copiedMessage, setCopiedMessage] = useState('');

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedMessage('¡Contenido copiado!');
    
    setTimeout(() => {
      setCopiedMessage('');
    }, 700); 
  };

    return (
      <div className="footer">
        <div className="sb_footer section__padding">
          <div className="sb_footer-links">
            <div className="sb_footer-links_div">
        <h4>Links de Interés</h4>
        <a href="/">
          <p>Inicio</p>
        </a>
        <a href="/Musicos">
          <p>Musicos</p>
        </a>
        <a href="/Oportunidades">
          <p>Oportunidades</p>
        </a>
        <a href="/InicioSesion">
          <p>Inicio Sesion</p>
        </a>
            </div>
            <div className="sb_footer-links_div">
                <h4>Creadores</h4>
                <a href="/resourse">
                    <p>ING.Gonzalez</p>
                </a>
                <a href="/resourse">
                    <p>ING.Zuñiga</p>
                </a>
                <a href="/resourse">
                    <p>ING.Alvarado</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
                <h4>Stage Sync +</h4>
                <a href="/Precios">
                    <p>Vuelvete Premion</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
            <h4>Sobre Nosotros</h4>
            <button onClick={() => handleCopyToClipboard('stage_sync@gmail.com')}>
             <p>stage_sync@gmail.com</p>
           </button>
           <button onClick={() => handleCopyToClipboard('+506 8888-8888')}>
            <p>+506 8888-8888</p>
             </button>
            <button onClick={() => handleCopyToClipboard('Santa Cruz Guanacate, Costa Rica')}>
            <p>Santa Cruz Guanacate, Costa Rica</p>
           </button>
           {copiedMessage && <p>{copiedMessage}</p>}
            </div>
            <div className="sb_footer-links_div">
                <h4>Redes Sociales</h4>
                <div className="socialmedia">
                <p><a href="https://www.facebook.com" target="_blank" 
                rel="noopener noreferrer"><img src="/Img/FBS.png" alt="Facebook"/></a></p>

                <p><a href="https://www.youtube.com" target="_blank" 
                rel="noopener noreferrer"><img src="/Img/YTB.png" alt="Youtube"/></a></p>

                <p><a href="https://www.instagram.com/terremotitos_fc/" target="_blank" 
                rel="noopener noreferrer"><img src="/Img/ING.png" alt="Intagram"/></a></p>

                <p><a href="https://twitter.com/" target="_blank" 
                rel="noopener noreferrer"><img src="/Img/XS.png" alt="Twiter X"/></a></p>
                </div>
            </div>
          </div>

          <hr></hr>

          <div className="sb_footer-below">
      <div className="sb_footer-copyright">
        <p>
          @{new Date().getFullYear()} Stage Sync. All rights reserved.
        </p>
      </div>
      <div className="sb_footer-below-links">
        <a href="/terms">
          <div>
            <p>Terms & Conditions</p>
          </div>
        </a>
        <a href="/privacy">
          <div>
            <p>Privacy</p>
          </div>
        </a>
        <a href="/security">
          <div>
            <p>Security</p>
          </div>
        </a>
        <a href="/cookie">
          <div>
            <p>Cookie Declaration</p>
          </div>
        </a>
      </div>
    </div>
        </div>
     </div>
    );
  }
  
  export default Footer;