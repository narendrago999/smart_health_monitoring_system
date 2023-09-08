import Header from "./components/header/Header"
// import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import Logo from "./components/Logo/Logo.js"

import './App.css';

function App() {
  return (
     <>
        <Header />
        <div className="logo">
         <Logo />
        </div>
        <Sidebar />

        {/* <Footer /> */}
     </>
  );
}

export default App;
