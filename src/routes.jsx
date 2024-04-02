import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import Peinture from "./pages/peinture";
import Digital from "./pages/digital";
import { Header } from "./component/common/nav";
import ArticleDetailPage from "./pages/oeuvreId";
import Contact from "./pages/contact";
import APropos from "./pages/aPropos";

const  RoutesPage=()=>{


    return(
        <div className="w-full h-dvh flex flex-col  ">
        <Router>
  <div><h1 className="text-4xl">Ntahan Vallan art</h1></div>
      <div className="border total_total h-full w-full 2xl:h-5/6 relative 2xl:border-red-600 m-auto 2xl:w-11/12 lg:overflow-hidden " >
        <Header/>
      <div className="  max-w-full z-40 m-auto md:overflow-hidden">
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/peinture" element={<Peinture/>} />
                <Route path="/digital" element={<Digital/>} />
                <Route path="/oeuvre/:id" element={<ArticleDetailPage/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/apropos" element={<APropos/>} />
            </Routes>

      </div>
            </div>
        </Router>
        </div>
    )
}

export default RoutesPage