import React from "react";
import './web.css';
import './App.css';
// import CssUd from './CssPages/CssUd';

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

import { CssYt } from "./CssPages/CssYt"; 
import { CssUd } from "./CssPages/CssUd";
import { CssCo } from "./CssPages/CssCo";
import { CssBp } from "./CssPages/CssBp";
import { CssGfg } from "./CssPages/CssGfg";
import { CssQns } from "./CssPages/CssQns";



function App(){ 

  return (

    <>

<Router>

      <NavBar />
      <div className="page-content">

        <Routes>

          <Route path="/home" element={<Home />} />
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

{/* Below contains Path + File , file means the final destination of the HTML Folder which means link was provided */}

          <Route path='/Exp_Fro_Html_Yt' element={<HtmlYt/>} />
          <Route path='/Exp_Fro_Html_Udemy' element={<HtmlUd/>} />
          <Route path='/Exp_Fro_Html_Qns' element={<HtmlQns/>} />
          <Route path='/Exp_Fro_Html_GitHub' element={<HtmlGit/>} />
          <Route path='/Exp_Fro_Html_Gfg' element={<HtmlGfg/>} />
          <Route path='/Exp_Fro_Html_Coursera' element={<HtmlCo/>} />
          <Route path='/Exp_Fro_Html_BasicProjects' element={<HtmlBp/>} /> 

          <Route path='/Exp_Fro_Css_Yt' element={<CssYt/>} />
          <Route path='/Exp_Fro_Css_Udemy' element={<CssUd/>} />
          <Route path='/Exp_Fro_Css_Qns' element={<CssQns/>} />
          <Route path='/Exp_Fro_Css_Gfg' element={<CssGfg/>} />
          <Route path='/Exp_Fro_Css_Coursera' element={<CssCo/>} />
          <Route path='/Exp_Fro_Css_BasicProjects' element={<CssBp/>} /> 



        </Routes>

      </div>

    </Router>
                       
    </>
    
  );
}

export default App;
