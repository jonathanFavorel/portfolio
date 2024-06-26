// LeftMenu.js
import React, { useEffect, useRef, useState } from "react";
import "../leftMenu/leftMenu.css";
import useProgressAnimations from "../leftMenu/progressAnimation";

// Import des images
import Linkedin from "../leftMenu/src/Linkedin.svg";
import Profile from "../leftMenu/src/Profile.png";
import Cross from "../leftMenu/src/cross.svg";
import Download from "../leftMenu/src/download.svg";
import Git from "../leftMenu/src/git.svg";
import Square from "../leftMenu/src/square.svg";

const LeftMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { progressWidths, languageProgress, startAnimations } =
    useProgressAnimations();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (sidebarOpen) {
      // Démarrer les animations de progression lorsque le menu est ouvert
      startAnimations();
    }
  }, [sidebarOpen, startAnimations]);

  // Fonction pour fermer la barre latérale lors du clic en dehors de celle-ci
  const handleClickOutsideSidebar = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Ajouter un écouteur d'événements pour gérer le clic en dehors de la barre latérale
    document.addEventListener("mousedown", handleClickOutsideSidebar);
    return () => {
      // Nettoyer l'écouteur d'événements lors du démontage du composant
      document.removeEventListener("mousedown", handleClickOutsideSidebar);
    };
  }, []);

  return (
    <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scroll-container ">
      {/* <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 mr-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 absolute right-0"
      >
        <svg
          className={`w-6 h-6 ${
            sidebarOpen ? "text-gray-500 dark:text-black" : "text-gray-500"
          }`}
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button> */}

      <aside
        id="default-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-full sm:w-96 h-screen transition-transform bg-white1 ${
          sidebarOpen ? "translate-y-0" : "-translate-y-full"
        } sm:translate-y-0 bg-gray`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray dark:bg-blackdark">
          <button
            onClick={toggleSidebar}
            className="absolute top-3 right-3 text-white hover:text-gray-300 focus:outline-none sm:hidden"
          >
            <img src={Cross} alt="Close sidebar" className="w-6 h-6" />
          </button>
          <ul className="space-y-2 font-medium mx-0">
            <li className="flex flex-col items-center justify-center mb-4">
              <div className="relative">
                <img
                  className="w-28 h-28 rounded-full mt-2 "
                  src={Profile}
                  alt=""
                />
                <span className="bottom-2 right-2 absolute w-4 h-4 bg-green rounded-full"></span>
                <span className="bottom-2 right-2 absolute w-4 h-4 bg-green rounded-full animate-ping"></span>
              </div>
              <h1 className="mt-5 font-inter-medium text-lg dark:text-white1">
                Jonathan Favorel
              </h1>
              <h5 className="mt-0 font-inter-regular text-sm text-grey dark:text-white">
                Développeur Front-end
              </h5>
              <div className="relative flex justify-center space-x-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/jonathan-favorel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-7 h-7 rounded-full"
                    src={Linkedin}
                    alt="LinkedIn Profile"
                  />
                </a>
                <a
                  href="https://github.com/jonathanFavorel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-7 h-7 rounded-full" src={Git} alt=""></img>
                </a>
              </div>
            </li>
            <div className="border-b border-white "></div>
            <li>
              <ul className="flex-col justify-center mb-4 space-y-2.5 font-inter-regular text-base r ml-14">
                <li className="flex items-center">
                  <h5 className="mr-2 dark:text-white text-sm">Age :</h5>
                  <button className="bg-yellow rounded-lg h-6 py-0 px-4 text-sm ml-32 text-base text-black flex items-center dark:text-white">
                    24
                  </button>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 dark:text-white text-sm">
                    Expérience :
                  </span>
                  <button className="bg-yellow rounded-lg h-6 py-0 px-4 text-sm ml-20 text-base text-black flex items-center dark:text-white">
                    4 ans
                  </button>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 dark:text-white text-sm">
                    Secteur :
                  </span>
                  <button className="bg-yellow rounded-lg h-6 py-0 px-4 ml-24 text-sm text-base text-black flex items-center dark:text-white">
                    France
                  </button>
                </li>
                <li className="flex items-center dark:text-white text-sm">
                  En recherche :
                  <div className="relative ml-24">
                    <div className="toggle__line w-8 h-5 bg-white rounded-full shadow-inner border-2 border-green dark:bg-black"></div>
                    <div className="toggle__dot absolute w-3 h-3 bg-green rounded-full shadow left-4 top-1"></div>
                  </div>
                </li>
              </ul>
            </li>
            <div className="border-b border-white "></div>
            <li>
              <ul className="flex-col justify-center mb-4 space-y-2.5 ml-14">
                <li className="flex items-center">
                  <h1 className="flex items-center font-inter-medium text-lg dark:text-white">
                    Langue
                  </h1>
                </li>
                <li className="relative">
                  <h1 className="font-inter-regular text-base text-sm text-grey dark:text-white">
                    Français{" "}
                    <span className="absolute top-0 right-16 text-sm dark:text-white">
                      100%
                    </span>
                  </h1>
                  <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex dark:bg-black">
                    <div
                      className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5"
                      style={{ width: `${languageProgress.french}%` }}
                    ></div>
                  </div>
                </li>
                <li className="relative">
                  <h1 className="font-inter-regular text-base text-sm text-grey dark:text-white">
                    Anglais{" "}
                    <span className="absolute top-0 right-16 text-sm dark:text-white">
                      60%
                    </span>
                  </h1>
                  <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex dark:bg-black">
                    <div
                      className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5 "
                      style={{ width: `${languageProgress.english}%` }}
                    ></div>
                  </div>
                </li>
              </ul>
            </li>
            <div className="border-b border-white "></div>
            <li>
              <ul className="flex-col justify-center mb-4 space-y-2.5 ml-14">
                <li className="flex items-center">
                  <h1 className="flex items-center font-inter-medium text-lg dark:text-white">
                    Langage
                  </h1>
                </li>
                <li className="relative">
                  <h1 className="font-inter-regular text-base text-grey text-sm dark:text-white">
                    HTML{" "}
                    <span className="absolute top-0 right-16 text-sm dark:text-white">
                      90.5%
                    </span>
                  </h1>
                  <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex transition-width duration-500 ease-in-out dark:bg-black">
                    <div
                      className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5"
                      style={{ width: `${progressWidths.html}%` }}
                    ></div>
                  </div>
                </li>
                <li className="relative">
                  <h1 className="font-inter-regular text-base text-grey text-sm dark:text-white">
                    CSS{" "}
                    <span className="absolute top-0 right-16 text-sm dark:text-white">
                      85.5%
                    </span>
                  </h1>
                  <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex transition-width duration-500 ease-in-out dark:bg-black">
                    <div
                      className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5"
                      style={{ width: `${progressWidths.css}%` }}
                    ></div>
                  </div>
                </li>
                <li className="relative">
                  <h1 className="font-inter-regular text-base text-grey text-sm dark:text-white">
                    JS{" "}
                    <span className="absolute top-0 right-16 text-sm dark:text-white">
                      70.5%
                    </span>
                  </h1>
                  <div className="relative h-3 w-64 bg-white border-2 border-yellow rounded-full overflow-hidden flex transition-width duration-500 ease-in-out dark:bg-black">
                    <div
                      className="absolute top-0 left-0 h-1 bg-yellow rounded-full mt-0.5 ml-0.5"
                      style={{ width: `${progressWidths.js}%` }}
                    ></div>
                  </div>
                </li>
              </ul>
            </li>
            <div className="border-b border-white "></div>
            <li>
              <ul className="flex-col justify-center space-y-2 ml-14">
                <li className="flex items-center">
                  <h1 className="flex items-center font-inter-medium text-lg dark:text-white">
                    Technologies
                  </h1>
                </li>
                <li className="relative flex items-center">
                  <div className="flex items-center">
                    <img className="w-15 h-15 mt-2" src={Square} alt=""></img>
                    <h1 className="font-inter-regular text-base text-grey ml-2 mt-2 text-sm dark:text-white">
                      Bootstrap, Tailwind
                    </h1>
                  </div>
                </li>
                <li className="relative flex items-center">
                  <div className="flex items-center">
                    <img className="w-15 h-15 mt-2" src={Square} alt=""></img>
                    <h1 className="font-inter-regular text-base text-grey ml-2 text-sm mt-2 dark:text-white">
                      React, Angular, NextJS
                    </h1>
                  </div>
                </li>
                <li className="relative flex items-center">
                  <div className="flex items-center">
                    <img className="w-15 h-15 mt-2" src={Square} alt=""></img>
                    <h1 className="font-inter-regular text-base text-grey ml-2 mt-2 text-sm dark:text-white">
                      Figma, Trello
                    </h1>
                  </div>
                </li>
                <li className="relative flex items-center">
                  <div className="flex items-center">
                    <img className="w-15 h-15 mt-2" src={Square} alt=""></img>
                    <h1 className="font-inter-regular text-base text-grey ml-2 mt-2 text-sm dark:text-white">
                      GIT
                    </h1>
                  </div>
                </li>
              </ul>
            </li>
            <li className="relative flex items-center justify-center h-full">
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow hover:bg-yellow1 text-black font-bold text-lg py-2 px-4 rounded flex items-center dark:text-white"
              >
                CV{" "}
                <img
                  className="w-15 h-15 mt-1 ml-2 dark:invert"
                  src={Download}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default LeftMenu;
