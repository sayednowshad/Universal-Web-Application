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

//All the for the HTML

import {HtmlYt} from "./HtmlPages/HtmlYt";
import {HtmlUd} from "./HtmlPages/HtmlUd";
import {HtmlGit} from "./HtmlPages/HtmlGit";
import {HtmlCo} from "./HtmlPages/HtmlCo";
import {HtmlBp} from "./HtmlPages/HtmlBp";
import {HtmlGfg} from "./HtmlPages/HtmlGfg";
import {HtmlQns} from "./HtmlPages/HtmlQns"; 

// All for the CSS

import { CssYt } from "./CssPages/CssYt"; 
import { CssUd } from "./CssPages/CssUd";
import { CssCo } from "./CssPages/CssCo";
import { CssBp } from "./CssPages/CssBp";
import { CssGfg } from "./CssPages/CssGfg";
import { CssQns } from "./CssPages/CssQns";

// All for the JavaScript

import JsYt from "./JsPages/JsYt";
import JsUd from "./JsPages/JsUd";
import JsGit from "./JsPages/JsGit";
import JsCo from "./JsPages/JsCo";
import JsBp from "./JsPages/JsBp";
import JsGfg from "./JsPages/JsGfg";
import JsQns from "./JsPages/JsQns";

//All for the React means Reaction hahahhahaha bro iam just mad burrraaah

import ReactYt from "./ReactPages/ReactYt";
import ReactUd from "./ReactPages/ReactUd";
import ReactQns from "./ReactPages/ReactQns";
import ReactGit from "./ReactPages/ReactGit";
import ReactGfg from "./ReactPages/ReactGfg";
import ReactCo from "./ReactPages/ReactCo";
import ReactBp from "./ReactPages/ReactBp";


import {Lang_op} from "./Backend_choose/Lang_op";
import { Dbms_op } from "./Backend_choose/Dbms";
import { GitHub_op } from "./Backend_choose/github";
import { Frame_op } from "./Backend_choose/Frame";
import { Api_op } from "./Backend_choose/Api";
import {MySQL} from "./Backend_Bases/MySql";
import {MongoDB} from "./Backend_Bases/MongoDb";
import {FireBase} from "./Backend_Bases/FireBase";


import {Java} from "./Backend_lang/Java";
import {Python} from "./Backend_lang/Python";
import {Js} from "./Backend_lang/Js";

import {Flask} from "./Frame_Options/Flask";
import {ExpressJs} from "./Frame_Options/Exp";
import {Django} from "./Frame_Options/Django";
import {Spring} from "./Frame_Options/Spring";

import PyYt from "./Pro_lang_All_Backend/PyYt";
import PyCo from "./Pro_lang_All_Backend/PyCo";
import PyCodplat from "./Pro_lang_All_Backend/PyCoplat";
import PyGfg from "./Pro_lang_All_Backend/PyGfg";
import PyUd from "./Pro_lang_All_Backend/PyUd";




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

    {/* it is for the on-Click of the choice to the frontend bro  */} 

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


          <Route path='/Exp_Fro_Js_Yt' element={<JsYt/>} />
          <Route path='/Exp_Fro_Js_Udemy' element={<JsUd/>} />
          <Route path='/Exp_Fro_Js_Qns' element={<JsQns/>} />
          <Route path='/Exp_Fro_Js_GitHub' element={<JsGit/>} />
          <Route path='/Exp_Fro_Js_Gfg' element={<JsGfg/>} />
          <Route path='/Exp_Fro_Js_Coursera' element={<JsCo/>} />
          <Route path='/Exp_Fro_Js_BasicProjects' element={<JsBp/>} />

          
          <Route path='/Exp_Fro_React_Yt' element={<ReactYt/>} />
          <Route path='/Exp_Fro_React_Udemy' element={<ReactUd/>} />
          <Route path='/Exp_Fro_React_Qns' element={<ReactQns/>} />
          <Route path='/Exp_Fro_React_GitHub' element={<ReactGit/>} />
          <Route path='/Exp_Fro_React_Gfg' element={<ReactGfg/>} />
          <Route path='/Exp_Fro_React_Coursera' element={<ReactCo/>} />
          <Route path='/Exp_Fro_React_BasicProjects' element={<ReactBp/>} />


          <Route path='/Pro_languages' element={<Lang_op/>} />
          <Route path='/dbms' element={<Dbms_op/>} />
          <Route path='/Frames' element={<Frame_op/>} />
          <Route path='/Api' element={<Api_op/>} />
          <Route path='/Github' element={<GitHub_op/>} />

           
          <Route path='/Dbms_MySQL' element={<MySQL/>} />
          <Route path='/Dbms_MongoDB' element={<MongoDB/>} />
          <Route path='/Dbms_FireBase' element={<FireBase/>} /> 

          {/* create the above for the Pro_languages ok ???? easy with simple trick dont confuse see how the after click again see the after click function call and come here means this "App.js" ok magic happens bro trust me.....  */}

          <Route path='/Pro_languages_Java' element={<Java/>} />
          <Route path='/Pro_languages_Python' element={<Python/>} />
          <Route path='/Pro_languages_Js' element={<Js/>} />


          <Route path='/FrameWork_ExpressJs' element={<ExpressJs/>} />
          <Route path='/FrameWork_Django' element={<Django/>} />
          <Route path='/FrameWork_Flask' element={<Flask/>} />
          <Route path='/FrameWork_Spring' element={<Spring/>} />


          <Route path='/Backend_Py_Yt' element={<PyYt/>} />
          <Route path='/Backend_Py_Udemy' element={<PyUd/>} />
          <Route path='/Backend_Py_Gfg' element={<PyGfg/>} />
          <Route path='/Backend_Py_Coursera' element={<PyCo/>} />
          <Route path='/Backend_Py_Codplat' element={<PyCodplat/>} />





        </Routes>

      </div>

    </Router>
                       
    </>
    
  );
}

export default App;
