import { useContext } from "react";
import ThemeBotton from "./ThemeBotton";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled"></a>
              </li>
            </ul>
          </div>
        </div>
        <ThemeBotton />
      </nav>
      <div className="hero-image">
        <div className={darkMode ? "overlay-dark" : "overlay"}>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
      {/* About Details */}
      <center>
        <div className={darkMode ? "about-details-dark" : "about-details"}>
          <div className="text-left">
            <hr />
            <p>
              Dolor id mollit sit ut dolor cillum esse. Fugiat voluptate
              cupidatat irure eiusmod nulla eiusmod excepteur incididunt tempor
              nulla laboris aliqua. Dolor exercitation commodo est reprehenderit
              dolore ea aute velit reprehenderit minim. Incididunt consequat
              incididunt exercitation do nostrud. Magna reprehenderit occaecat
              duis sunt sit Lorem. Qui ea adipisicing cillum ea esse minim quis
              labore. Aliqua laboris voluptate fugiat anim consequat id veniam
              labore. Ut culpa anim nostrud quis culpa adipisicing commodo
              exercitation reprehenderit ea exercitation eiusmod. Labore elit
              ullamco eu tempor sit ipsum. Tempor amet non dolore laborum. Est
              eu aute sunt duis nisi ullamco aute dolore ipsum commodo. Sint
              magna eu adipisicing qui. Irure voluptate id sunt duis ullamco
              exercitation fugiat cillum Lorem ut dolor. Enim aliquip
              reprehenderit sint non. Incididunt labore est irure occaecat
              cupidatat. Quis eiusmod incididunt nostrud anim aliqua deserunt
              nostrud adipisicing laborum et in est. Ea aliqua in dolor velit do
              qui sunt reprehenderit irure minim sit anim aute voluptate. Aliqua
              eu irure reprehenderit commodo sunt officia ipsum sint ad minim
              adipisicing mollit est officia. Consequat eiusmod adipisicing
              proident veniam laborum. Ut ea incididunt excepteur dolore do
              reprehenderit tempor deserunt. Tempor laborum incididunt nulla
              duis enim. Occaecat proident mollit laboris dolor fugiat
              consectetur tempor nisi aliqua culpa quis Lorem dolore ut. Dolor
              commodo excepteur minim id qui non laboris sint deserunt anim
              mollit cillum proident est. Pariatur proident in mollit laborum.
              Cillum mollit nulla veniam fugiat minim elit mollit cupidatat
              commodo reprehenderit dolore.
            </p>
          </div>
         
        </div>
      </center>
      
      
    </div>
  );
}

export default App;
