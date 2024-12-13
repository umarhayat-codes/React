import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Frontend from './pages/Frontend';
import "bootstrap/dist/js/bootstrap.bundle";
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
function App() {
  // let isAuthentication = false
  // if (isAuthentication) return <Login/> 
  return (
    <>
      <Header/>
      <Frontend/>
      {/* <Login/> */}
      {/* <Signup/> */}
      
      <Footer/>
    </>
  );
}

export default App;
