import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const links = [
  {
    link: '/',
    text: 'Inicio',
    id: 1,
  },
  {
    link: '/Musicos',
    text: 'Musicos',
    id: 2,
  },
  {
    link: '/Oportunidades',
    text: 'Eventos',
    id: 3,
  },
  {
    link: '/Precios',
    text: 'Precios',
    id: 4,
  },
  {
    link: '/InicioSesion',
    text: 'Inicio sesión',
    id: 5,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [showNavbar, setShowNavbar] = useState(true);

  const detectSize = () => {
    setWindowDimension({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (windowDimension.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  }, [location, windowDimension.innerWidth]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShowNavbar = currentScrollPos <= prevScrollPos || currentScrollPos < 100;
      setShowNavbar(shouldShowNavbar);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`${showNavbar
          ? "flex fixed items-center bg-zinc-900 bg-opacity-50 w-full px-10 justify-around z-10"
          : "hidden"
        } py-1`}
    >
      <Link to={"/"} className="text-white font-semibold text-base p-2">
        <img
          src="/Img/SSBlanco.png"
          alt="Logo Stage Sync CR"
          style={{ width: "40px" }}
          onClick={scrollToTop}
        />
      </Link>
      {windowDimension.innerWidth > 768 ? (
        <div className="flex space-x-10">
          {links.map((l) => (
            <Link
              className="text-base text-white font-georgia"
              to={l.link}
              key={l.id}
              onClick={scrollToTop}
            >
              {l.text}
            </Link>
          ))}
        </div>
      ) : (
        isMenuOpen && (
          <div className="flex flex-col space-y-4">
            {links.map((l) => (
              <Link
                className="text-base text-white font-semibold"
                to={l.link}
                key={l.id}
              >
                {l.text}
              </Link>
            ))}
          </div>
        )
      )}
      {!isMenuOpen && windowDimension.innerWidth < 768 ? (
        <AiOutlineMenu
          cursor={"pointer"}
          size={24}
          color="#f2f2f2"
          onClick={() => {
            setIsMenuOpen(true);
            scrollToTop();
          }}
        />
      ) : (
        isMenuOpen && windowDimension.innerWidth < 768 && (
          <AiOutlineClose
            cursor={"pointer"}
            size={24}
            color="#f2f2f2"
            onClick={() => {
              setIsMenuOpen(false);
              scrollToTop();
            }}
          />
        )
      )}
    </div>
  );
};

export default Navbar;