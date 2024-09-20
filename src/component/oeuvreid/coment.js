import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CommentService from "cundo-comment-service"
import Button from '@mui/material/Button';

import axios from "axios";
import { useParams } from "react-router-dom";


const Coments =()=>{
 const apiUrl = "https://nodepeint.varascundo.com"

const {id}=useParams()
console.log("idPage",id)
return (
    <>
     <Accordion sx={{backgroundColor: "transparent", color:"white",border:"1px solid "}}>
        <AccordionSummary
          
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className="text-xl font-bold">COMMENTAIRES</h1>
        </AccordionSummary>
        <AccordionDetails sx={{  }}>
          <div className="text-black">

       <CommentService axio={axios} apiUrl={apiUrl} slug={id}/>
          </div>
        </AccordionDetails>
      </Accordion>
     
     
    </>
)

}


export default Coments