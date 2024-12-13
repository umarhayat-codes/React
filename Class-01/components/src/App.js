import "./App.scss";
import Header from './component/Header';
import Footer from './component/Footer';
// import Main from './component/Main';
import "bootstrap/dist/js/bootstrap.bundle";
import Todo from "./Frontend/Todo";

function App() {
  return (              // return only one element
    <>
      <Header/>
      {/* <Main/> */}
      <Todo/>
      <Footer/>
    </>

  );

  // Fragment use for not divide in section  <></>
}

export default App;

