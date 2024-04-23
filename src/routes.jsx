import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/accueil";
import Peinture from "./pages/peinture";
import Digital from "./pages/digital";
import { Header } from "./component/common/nav";
import ArticleDetailPage from "./pages/oeuvreId";
import Contact from "./pages/contact";
import APropos from "./pages/aPropos";

const RoutesPage = () => {


    return (
        <div className="w-full h-dvh  flex flex-col  justify-center max-md:p-3  ">
            <Router>
                <div>
                    
                  <Link to="/">

                        <div className="m-2 cursor-pointer ">
                        <img className="hover:opacity-80 h-20 rounded-xl" src="/images/logo/log.PNG"/>
                    </div>

                  </Link>
                        
                   
                        </div>
                <div className="   m-auto max-lg:ml-1 xl:ml-0 total_total h-full w-full 2xl:h-5/6  relative 2xl:border-red-600 2xl:m-auto 2xl:w-10/12 lg:overflow-hidden overflow-y-scroll " >
                    <Header />
                    <div className="  h-full m-auto  z-40 m-auto md:overflow-hidden">
                        <Routes>
                            <Route path="/" element={<Accueil />} />
                            <Route path="/peinture" element={<Peinture />} />
                            <Route path="/digital" element={<Digital />} />
                            <Route path="/oeuvre/:id" element={<ArticleDetailPage />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/apropos" element={<APropos />} />
                        </Routes>

                    </div>
                </div>
            </Router>
        </div>
    )
}

export default RoutesPage