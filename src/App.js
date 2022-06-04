import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
    type:type
  })
setTimeout(()=>{
setAlert(null); 

},1500);

  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#061322";
      showAlert("dark mode enabled","success");

    }
  };


  return (
    <>
     {/* <Navbar />  */}
     {/* <Router> */}
      <Navbar
        title="Text Utils 2"
        AboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
     <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter your Text" mode={mode} showAlert={showAlert} />
          {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={ <TextForm heading="Enter your Text" mode={mode} showAlert={showAlert} />}/>
        </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
