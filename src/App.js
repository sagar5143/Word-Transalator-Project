// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/textForm';

function App() {
  return (
    <>
   <Navbar title="TextUtils" AboutText="About Us"/>
   <div className="container my-3">
    <About/>
   {/* <TextForm heading="Enter Text To Anylize Below"/> */}
   </div>
    </>
  );
}

export default App;
