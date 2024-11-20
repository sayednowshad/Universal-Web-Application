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
import {Game}from "./Webpages/Game";
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
import {Jsnode} from "./Backend_lang/Js";

import {Flask} from "./Frame_Options/Flask";
import {ExpressJs} from "./Frame_Options/Exp";
import {Django} from "./Frame_Options/Django";
import {Spring} from "./Frame_Options/Spring";

import {PyYt} from "./Pro_lang_All_Backend/PyYt";
import {PyCo} from "./Pro_lang_All_Backend/PyCo";
import {PyCodplat} from "./Pro_lang_All_Backend/PyCoplat";
import {PyGfg} from "./Pro_lang_All_Backend/PyGfg";
import {PyUd} from "./Pro_lang_All_Backend/PyUd";


import {SQLYt} from "./All_Backend_Base_Pages/SqlYt";
import {SQLUd} from "./All_Backend_Base_Pages/SqlUd";
import {SQLCo} from "./All_Backend_Base_Pages/SqlCo";
import {SQLPrac} from "./All_Backend_Base_Pages/SqlPrac";
import {SQLGfg} from "./All_Backend_Base_Pages/SqlGfg";


import {MongoYt}  from "./All_Backend_Base_Pages/MongoYt";
import {MongoCo} from "./All_Backend_Base_Pages/MongoCo";
import {MongoGfg} from "./All_Backend_Base_Pages/MongoGfg";
import {MongoPrac} from "./All_Backend_Base_Pages/MongoPrac";
import {MongoUd} from "./All_Backend_Base_Pages/MongoUd";

import {FireBaseYt} from "./All_Backend_Base_Pages/FireBaseYt";
import {FireBaseUd} from "./All_Backend_Base_Pages/FireBaseUd";
import {FireBaseCo} from "./All_Backend_Base_Pages/FireBaseCo";
import {FireBaseGfg} from "./All_Backend_Base_Pages/FireBaseGfg";
import {FireBasePrac} from "./All_Backend_Base_Pages/FireBasePrac";

import {ExpressYt} from "./FrameWork_Final_Pages/ExpYt";
import {ExpressCo} from "./FrameWork_Final_Pages/ExpCo";
import {ExpressUd} from "./FrameWork_Final_Pages/ExpUd";
import {ExpressGfg} from "./FrameWork_Final_Pages/ExpGfg";
import {ExpressPrac} from "./FrameWork_Final_Pages/ExpPrac";


import SpringYt from "./FrameWork_Final_Pages/SpringYt";
import SpringCo from "./FrameWork_Final_Pages/SpringCo";
import SpringPrac from "./FrameWork_Final_Pages/SpringPrac";
import SpringUd from "./FrameWork_Final_Pages/SpringUd";
import SpringGfg from "./FrameWork_Final_Pages/SpringGfg";

import FlaskYt from "./FrameWork_Final_Pages/FlaskYt"
import FlaskCo from "./FrameWork_Final_Pages/FlaskCo"
import FlaskUd from "./FrameWork_Final_Pages/FlaskUd"
import FlaskGfg from "./FrameWork_Final_Pages/FlaskGfg"
import FlaskPrac from "./FrameWork_Final_Pages/FlaskPrac"

import DjangoYt from "./FrameWork_Final_Pages/DjangoYt";
import DjangoCo from "./FrameWork_Final_Pages/DjangoCo";
import DjangoUd from "./FrameWork_Final_Pages/DjangoUd";
import DjangoGfg from "./FrameWork_Final_Pages/DjangoGfg";
import DjangoPrac from "./FrameWork_Final_Pages/DjangoPrac";







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
          <Route path='/Pro_languages_Js' element={<Jsnode/>} />


          <Route path='/FrameWork_ExpressJs' element={<ExpressJs/>} />
          <Route path='/FrameWork_Django' element={<Django/>} />
          <Route path='/FrameWork_Flask' element={<Flask/>} />
          <Route path='/FrameWork_Spring' element={<Spring/>} />


          <Route path='/Backend_Py_Yt' element={<PyYt/>} />
          <Route path='/Backend_Py_Udemy' element={<PyUd/>} />
          <Route path='/Backend_Py_Gfg' element={<PyGfg/>} />
          <Route path='/Backend_Py_Coursera' element={<PyCo/>} />
          <Route path='/Backend_Py_Codplat' element={<PyCodplat/>} />



          <Route path='/Backend_Sql_Yt' element={<SQLYt/>} />
          <Route path='/Backend_Sql_Udemy' element={<SQLUd/>} />
          <Route path='/Backend_Sql_Gfg' element={<SQLGfg/>} />
          <Route path='/Backend_Sql_Coursera' element={<SQLCo/>} />
          <Route path='/Backend_Sql_Prac' element={<SQLPrac/>} />


          <Route path='/Backend_Mongo_Yt' element={<MongoYt/>} />
          <Route path='/Backend_Mongo_Udemy' element={<MongoUd/>} />
          <Route path='/Backend_Mongo_Gfg' element={<MongoGfg/>} />
          <Route path='/Backend_Mongo_Prac' element={<MongoPrac/>} />
          <Route path='/Backend_Mongo_Coursera' element={<MongoCo/>} />
          



          <Route path='/Backend_FireBase_Yt' element={<FireBaseYt/>} />
          <Route path='/Backend_FireBase_Udemy' element={<FireBaseUd/>} />
          <Route path='/Backend_FireBase_Gfg' element={<FireBaseGfg/>} />
          <Route path='/Backend_FireBase_Codplat' element={<FireBasePrac/>} />
          <Route path='/Backend_FireBase_Coursera' element={<FireBaseCo/>} />

{/* 1st express js */}
          <Route path='/Backend_Frame_ExpressJs_Yt' element={<ExpressYt/>} />
          <Route path='/Backend_Frame_ExpressJs_Udemy' element={<ExpressUd/>} />
          <Route path='/Backend_Frame_ExpressJs_Gfg' element={<ExpressGfg/>} />
          <Route path='/Backend_Frame_ExpressJs_Codplat' element={<ExpressPrac/>} />
          <Route path='/Backend_Frame_ExpressJs_Coursera' element={<ExpressCo/>} />

{/* 2nd Spring Boot */}
          <Route path='/Backend_Frame_Spring_Yt' element={<SpringYt/>} />
          <Route path='/Backend_Frame_Spring_Udemy' element={<SpringUd/>} />
          <Route path='/Backend_Frame_Spring_Gfg' element={<SpringGfg/>} />
          <Route path='/Backend_Frame_Spring_Codplat' element={<SpringPrac/>} />
          <Route path='/Backend_Frame_Spring_Coursera' element={<SpringCo/>} />

{/* 3rd  Flask */}
          <Route path='/Backend_Frame_Flask_Yt' element={<FlaskYt/>} />
          <Route path='/Backend_Frame_Flask_Udemy' element={<FlaskUd/>} />
          <Route path='/Backend_Frame_Flask_Gfg' element={<FlaskGfg/>} />
          <Route path='/Backend_Frame_Flask_Codplat' element={<FlaskPrac/>} />
          <Route path='/Backend_Frame_Flask_Coursera' element={<FlaskCo/>} />

{/* 4th  Django */}

          <Route path='/Backend_Frame_Django_Yt' element={<DjangoYt/>} />
          <Route path='/Backend_Frame_Django_Udemy' element={<DjangoUd/>} />
          <Route path='/Backend_Frame_Django_Gfg' element={<DjangoGfg/>} />
          <Route path='/Backend_Frame_Django_Codplat' element={<DjangoPrac/>} />
          <Route path='/Backend_Frame_Django_Coursera' element={<DjangoCo/>} />



        </Routes>

      </div>

    </Router>
                       
    </>
    
  );
}

export default App;
