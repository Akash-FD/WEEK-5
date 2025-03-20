import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import ContactUS from "./Component/ContactUS";
import Navbar from "./Component/Navbar";
import { PostComponentWithData } from "./HOF";
import AboutCompany from "./Component/NestedComponent/AboutCompany";
import AboutTecnology from "./Component/NestedComponent/AboutTecnology";
import AboutWork from "./Component/NestedComponent/AboutWork";
import PageNotFound from "./Component/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />}></Route>

          <Route path="/aboutus" element={<AboutUs />}>
            <Route path="aboutcompany" element={<AboutCompany />}></Route>
            <Route path="abouttecnology" element={<AboutTecnology />}></Route>
            <Route path="aboutwork" element={<AboutWork />}></Route>
          </Route>

          <Route path="/contactus" element={<ContactUS />}></Route>
          <Route path="/hoc" element={<PostComponentWithData />}></Route>
          <Route path="/*" element={<PageNotFound/>}></Route>


        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
