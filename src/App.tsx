import { useState } from 'react';
import "./App.css";
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigation = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
      case 5:
        return <Page5 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <main className="landing">
      <div className="logo">
        <img src="/test.png" alt="Logo" />
      </div>
      <section>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation(1); }}>
                Step <span>01</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation(2); }}>
                Step <span>02</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation(3); }}>
                Step <span>03</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation(4); }}>
                Step <span>04</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation(5); }}>
                Step <span>05</span>
              </a>
            </li>
          </ul>
          <a href="#" className="next">
            <span>Next</span>{" "}
            <svg
              width="30px"
              height="30px"
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 22.4199C17.5228 22.4199 22 17.9428 22 12.4199C22 6.89707 17.5228 2.41992 12 2.41992C6.47715 2.41992 2 6.89707 2 12.4199C2 17.9428 6.47715 22.4199 12 22.4199Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M10.5596 8.41992L13.6196 11.29C13.778 11.4326 13.9047 11.6068 13.9914 11.8015C14.0781 11.9962 14.123 12.2068 14.123 12.4199C14.123 12.633 14.0781 12.8439 13.9914 13.0386C13.9047 13.2332 13.778 13.4075 13.6196 13.55L10.5596 16.4199"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </nav>
      </section>

      <section className='main'>
        {renderCurrentPage()}
      </section>
    </main>
  );
}

export default App;
