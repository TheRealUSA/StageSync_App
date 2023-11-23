import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import {
  RiHome6Line,
  RiMusic2Line,
  RiMoneyDollarCircleLine,
  RiQuestionMark,
  RiMenu3Fill,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
  RiUser3Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

import { FaAddressCard, FaBusinessTime, FaBowlingBall } from "react-icons/fa";

import { ImProfile } from "react-icons/im";

import { AiFillStar } from "react-icons/ai";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 w-3/4 xl:left-0 md:w-96 h-full bg-[#700E11] p-8 flex flex-col justify-between z-50 transition-all overflow-y-auto ${
          showMenu ? "left-0" : "-left-full"
        } `}
      >
        <div>
          <Link
            to={"/"}
            className="text-white flex intem-center justify-center mb-5"
          >
            <img
              src="/Img/Dash.png"
              alt="Logo Stage Sync CR"
              style={{ width: "100px" }}
              onClick={handleLogoClick}
            />
          </Link>
          <ul>
            <li>
              <a
                href="/Dashboard"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <RiHome6Line /> Dashboard
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/Usuarios"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <RiUser3Line /> Publicaciones u ofertas
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/Musico"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <RiMusic2Line /> Postulaciones
              </a>
            </li>
            <li>
              <a
                // href="/Dashboard/Contratantes"
                href="/Dashboard/DataTableReclutamiento"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <RiMoneyDollarCircleLine /> Contrataciones
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/DataTableProfileBusiness"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <ImProfile /> Perfil de negocio
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/DataTableReview"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <AiFillStar /> Revisión
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/DataTableCategoryBusiness"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <FaBusinessTime /> Categoría de negocio
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/DataTableCategorySkills"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <FaAddressCard /> Categoria de Habilidades
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/DataTableSkills"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <FaBusinessTime /> Habilidades
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/DataTableCategoryBusiness"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <RiUser3Line /> Perfil de Usuario
              </a>
            </li>
            <li>
              <a
                href="/Dashboard/DataTableCategoryBusiness"
                className="flex items-center gap-4 hover:bg-[#D1C6AE] text-white transition-colors py-2 px-4 rounded-lg"
              >
                <FaBusinessTime /> Usuarios
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Btn menu movil */}
      <button
        onClick={toggleMenu}
        className="xl:hidden fixed bottom-6 right-6 bg-[#700E11] p-4 rounded-full"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/* Header */}
      <header className="fixed bg-[#D1C6AE] w-full xl:w-[calc(100%-384px)] xl:ml-96 flex flex-col md:flex-row items-center justify-between gap-4 p-4">
        <form className="order-1 md:order-none">
          <div className="relative">
            <RiSearch2Line className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="bg-white outline-none py-1 pl-10 pr-4 rounded-full"
              placeholder="Search"
            />
          </div>
        </form>
        <nav className="flex items-center gap-2 text-lg">
          <Menu as="div">
            <Menu.Button className="flex items-center gap-4 hover:bg-[#700E11] py-2 px-4 rounded-lg transition-colors relative">
              <span className="text-white">Gerald Gonzalez Valdes</span>
              <RiArrowDownSLine className="text-white" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="section"
                className="absolute top-6 right-0 bg-[#700E11] w-72 rounded-lg shadow-lg p-4"
              >
                <div>
                  <Menu.Item>
                    <a
                      href="/#"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#D1C6AE] transition-colors"
                    >
                      <div>
                        <h5 className="text-base text-white">
                          Gerald Gonzalez Valdes
                        </h5>
                        <p className="text-white text-xs">
                          gerald.gonzalez.valdes@gmail.com
                        </p>
                      </div>
                    </a>
                  </Menu.Item>
                  <hr className="my-2" />
                  <Menu.Item>
                    <a
                      href="/InicioSesion"
                      className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#D1C6AE] text-white transition-colors text-base"
                    >
                      <RiLogoutCircleRLine /> Cerrar sesion
                    </a>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button className="flex items-center gap-4 hover:bg-gray-200 py-2 px-4 rounded-lg transition-colors"></button>
        </nav>
      </header>
      {/* Main */}
      <main className="xl:pl-[400px] p-4 pt-40 md:pt-24 xl:pt-28">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
