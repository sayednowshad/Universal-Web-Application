import React from "react";
import './web.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import { NavBar } from "./First";
import { FAQ } from "./First";
import { Home } from './Pages/Home'; 
import { Contact } from './Pages/Contact'; 
import { About } from './Pages/About'; 
import { Explore } from './Pages/Explore'; 
import { Subscription } from './Pages/Subscription';

// All below are after clicking individual pages for the Software Development.....

import {Frontend }from "./Webpages/Frontend";
import {Backend }from "./Webpages/Backend";
import {Game }from "./Webpages/Game";
import {Cloud }from "./Webpages/Cloud";
import {Devops }from "./Webpages/Devops";
import {Cyber }from "./Webpages/Cyber";

// All are the after Clicking the domain selection with the specific topic.....

import {HTML} from './FrontOption/HTML';
import {CSS} from "./FrontOption/CSS";
import {JavaScript} from "./FrontOption/JavaScript";
import {Reaction} from "./FrontOption/Reaction";

//All the 

import {HtmlYt} from "./HtmlPages/HtmlYt";
import {HtmlUd} from "./HtmlPages/HtmlUd";
import {HtmlGit} from "./HtmlPages/HtmlGit";
import {HtmlCo} from "./HtmlPages/HtmlCo";
import {HtmlBp} from "./HtmlPages/HtmlBp";
import {HtmlGfg} from "./HtmlPages/HtmlGfg";
import {HtmlQns} from "./HtmlPages/HtmlQns"; 


function App(){ 

  return (

    <>

<Router>

      <NavBar />
      <div className="page-content">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/faq" element={<FAQ />} /> 
          
          <Route path="/frontend" element={<Frontend/>} />
          <Route path="/backend" element={<Backend/>} />
          <Route path="/game" element={<Game/>} />
          <Route path="/devops" element={<Devops/>} />
          <Route path="/cloud" element={<Cloud/>} />
          <Route path="/cyber" element={<Cyber/>} />

{/* it is for the on Click of the choice of the frontend bro  */} 

          <Route path='/html' element={<HTML/>} />
          <Route path='/css' element={<CSS/>} />
          <Route path='/js' element={<JavaScript/>} />
          <Route path='/react' element={<Reaction/>} />

          <Route path='/Exp_Fro_Html_Yt' element={<HtmlYt/>} />
          <Route path='/Exp_Fro_Html_Udemy' element={<HtmlUd/>} />
          <Route path='/Exp_Fro_Html_Qns' element={<HtmlQns/>} />
          <Route path='/Exp_Fro_Html_GitHub' element={<HtmlGit/>} />
          <Route path='/Exp_Fro_Html_Gfg' element={<HtmlGfg/>} />
          <Route path='/Exp_Fro_Html_Coursera' element={<HtmlCo/>} />
          <Route path='/Exp_Fro_Html_BasicProjects' element={<HtmlBp/>} />
        </Routes>

      </div>

    </Router>
                       
    </>
    
  );
}

export default App;
