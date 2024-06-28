import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/accueil";
import Peinture from "./pages/peinture";
import Digital from "./pages/digital";
import { Header } from "./component/common/nav";
import ArticleDetailPage from "./pages/oeuvreId";
import Contact from "./pages/contact";
import APropos from "./pages/aPropos";


import MovingDivs from './component/accueil/mouvDiv';
import Breadcrumb from './component/common/breadcrumb';

const RoutesPage = () => {


    return (
        <div className="w-full h-dvh   flex flex-col   justify-center max-md:p-3  ">
            <Router>
                <div className="flex   max-w-screen ">

                    <Link to="/" className='z-50'>

                        <div className="m-2 cursor-pointer z-50 ">
                            <img className="  z-50 focus:outline-none active:bg-violet-900 focus:ring focus:ring-violet-900 hover:opacity-80 h-[5rem] min-w-[8rem] rounded-xl" src="/images/logo/log.PNG" alt="logo" />
                        </div>

                    </Link>
                    <div className='z-10 p-2  relative  w-full'>

                        <MovingDivs />
                    </div>


                </div>
                <div className=" h-full   m-auto max-lg:ml-1 xl:ml-0 total_total w-full 2xl:h-5/6  relative  2xl:m-auto 2xl:w-10/12 overscroll-y-auto " >
                    <Header />
                    <div className="  h-full relative z-40 m-auto    ">
                        <div className='ml-96'>

                
                        </div>
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