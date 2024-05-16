// import styles from "./app.module.css"
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Portfolio from "./pages/portfolio/Portfolio.js";
import Product from "./pages/product/Product.js"
import { Layout } from "./navigation/Layout.js";
import { Footer } from "./navigation/Footer.js";
import "../src/navigation/footer.css";
import "./app.css";
import data from "./base.json";

const mappedData = data.map(person => ({
 ...person,
 fullname: `${person.name}  ${person.surname}`
}))

function App() {
useEffect(() => {
  console.log(mappedData);
}) 
  


  return (
   <>


   <Layout/>
    <Routes>

      <Route path = "/" element = {<Home />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/Contact" element = {<Contact />} />
      <Route path = "/Portfolio" element = {<Portfolio />} />
      <Route path = "/Product" element = {<Product />} />
      <Route path = "*" element = {<Contact />} />

    </Routes>

    <Footer/>
   </>
  );
}

export default App;
