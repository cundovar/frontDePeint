import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Button from '@mui/material/Button';
import LesCommentaires from "../../pages/lesCommentaires";


const Coments =()=>{

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
          <LesCommentaires/>
        </AccordionDetails>
      </Accordion>
     
     
    </>
)

}


export default Coments