// import React , {useState} from "react";
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/Contact';
import "bootstrap/dist/js/bootstrap.bundle"
function App() {
  // const {isLogin} = useState(false)
  return (
    <div>
      <Header/>
      <Main fullName = "Umar Hayat" city = "fsd"/>
      {/* <button className="btn btn-primary" onClick={() => {isLogin = true}}>Login</button> */}
      {/* {isLogin} ? <Main fullName = "Umar Hayat" city = "fsd"/> : <Contact/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
