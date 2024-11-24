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
import {Android }from "./Webpages/Android";
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


import JavaYt from "./Pro_lang_All_Backend/JavaYt";
import JavaUd from "./Pro_lang_All_Backend/JavaUd";
import JavaGfg from "./Pro_lang_All_Backend/JavaGfg";
import JavaPrac from "./Pro_lang_All_Backend/JavaPrac";
import JavaCo from "./Pro_lang_All_Backend/JavaCo";


import JsnodeYt from "./Pro_lang_All_Backend/Js_Yt";
import JsnodeCo from "./Pro_lang_All_Backend/Js_Co";
import JsnodeGfg from "./Pro_lang_All_Backend/Js_Gfg";
import JsnodeUd from "./Pro_lang_All_Backend/Js_Ud";
import JsnodePrac from "./Pro_lang_All_Backend/Js_Prac";


// This below contains the DatBase Categories

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

// This Below contains FrameWorks Of The Backend

import {ExpressYt} from "./FrameWork_Final_Pages/ExpYt";
import {ExpressCo} from "./FrameWork_Final_Pages/ExpCo";
import {ExpressUd} from "./FrameWork_Final_Pages/ExpUd";
import {ExpressGfg} from "./FrameWork_Final_Pages/ExpGfg";
import {ExpressPrac} from "./FrameWork_Final_Pages/ExpPrac";


import {SpringYt} from "./FrameWork_Final_Pages/SpringYt";
import {SpringCo} from "./FrameWork_Final_Pages/SpringCo";
import {SpringPrac} from "./FrameWork_Final_Pages/SpringPrac";
import {SpringUd} from "./FrameWork_Final_Pages/SpringUd";
import {SpringGfg} from "./FrameWork_Final_Pages/SpringGfg";

import {FlaskYt} from "./FrameWork_Final_Pages/FlaskYt"
import {FlaskCo} from "./FrameWork_Final_Pages/FlaskCo"
import {FlaskUd} from "./FrameWork_Final_Pages/FlaskUd"
import {FlaskGfg} from "./FrameWork_Final_Pages/FlaskGfg"
import {FlaskPrac} from "./FrameWork_Final_Pages/FlaskPrac"

import {DjangoYt} from "./FrameWork_Final_Pages/DjangoYt";
import {DjangoCo} from "./FrameWork_Final_Pages/DjangoCo";
import {DjangoUd} from "./FrameWork_Final_Pages/DjangoUd";
import {DjangoGfg} from "./FrameWork_Final_Pages/DjangoGfg";
import {DjangoPrac} from "./FrameWork_Final_Pages/DjangoPrac";

import {ApiYt} from "./API_Final_Pages/ApiYt";
import {ApiCo} from "./API_Final_Pages/ApiCo";
import {ApiGfg} from "./API_Final_Pages/ApiGfg";
import {ApiUd} from "./API_Final_Pages/ApiUd";
import {ApiPrac} from "./API_Final_Pages/ApiPrac";

import GithubYt from "./GitHub_Final_pages/GithubYt";
import GithubCo from "./GitHub_Final_pages/GithubCo";
import GithubUd from "./GitHub_Final_pages/GithubUd";
import GithubGfg from "./GitHub_Final_pages/GithubGfg";
import GithubPrac from "./GitHub_Final_pages/GithubPrac";

//  "Game Development" Page Bro

import Unity from "./GameDevelopment_Resources/Unity";
import UITools from "./GameDevelopment_Resources/UITools";
import GameProjects from "./GameDevelopment_Resources/Projects";
import GameCommunity from "./GameDevelopment_Resources/Community";
import GoDot from "./GameDevelopment_Resources/GoDot";


import UnityCo from "./GameDev_Final_Pages/UnityCo";
import UnityUd from "./GameDev_Final_Pages/UnityUd";
import UnityYt from "./GameDev_Final_Pages/UnityYt";
import UnityDoc from "./GameDev_Final_Pages/UnityDoc";
import UnityGitHub from "./GameDev_Final_Pages/UnityGithub";
import UIToolsYt from "./GameDev_Final_Pages/UIToolsYt";
import UIToolsWebsite from "./GameDev_Final_Pages/UIToolsWebsite";
import GameProYt from "./GameDev_Final_Pages/GameProYt";
import GameProGitHub from "./GameDev_Final_Pages/GameProGitHub";

import GoDotYt from "./GameDev_Final_Pages/GoDotYt";
import GoDotUd from "./GameDev_Final_Pages/GoDotUd";
import GoDotCo from "./GameDev_Final_Pages/GoDotCo";
import GoDotDoc from "./GameDev_Final_Pages/GoDotDoc";
import GoDotGitHub from "./GameDev_Final_Pages/GoDotGithub";

// "DevOps" Page Starts Here Bro......

import SDLC from "./Devops_Resources/SDLC"
import Linux from "./Devops_Resources/Linux"
import CloudDevOps from "./Devops_Resources/CloudDevOps"
import Git from "./Devops_Resources/Git"
import DockerKuber from "./Devops_Resources/DockerKubernetes"
import CiCd from "./Devops_Resources/CiCd"

import SDLCYt from "./DevOps_Final_Pages/SDLCYt";
import SDLCUd from "./DevOps_Final_Pages/SDLCUd";
import SDLCCo from "./DevOps_Final_Pages/SDLCCo";
import SDLCDoc from "./DevOps_Final_Pages/SDLCDoc";

import LinuxYt from "./DevOps_Final_Pages/LinuxYt";
import LinuxUd from "./DevOps_Final_Pages/LinuxUd";
import LinuxCo from "./DevOps_Final_Pages/LinuxCo";
import LinuxPdf from "./DevOps_Final_Pages/LinuxPdf";

import GitYt from "./DevOps_Final_Pages/GitYt";
import GitUd from "./DevOps_Final_Pages/GitUd";
import GitCo from "./DevOps_Final_Pages/GitCo";
import GitPdf from "./DevOps_Final_Pages/GitPdf";

import DockerKuberYt from "./DevOps_Final_Pages/DockerKuberYt";
import DockerKuberUd from "./DevOps_Final_Pages/DockerKuberUd";
import DockerKuberCo from "./DevOps_Final_Pages/DockerKuberCo";
import DockerKuberWebsites from "./DevOps_Final_Pages/DockerKuberWebsites";

import CiCdYt from "./DevOps_Final_Pages/CiCdYt";
import CiCdCo from "./DevOps_Final_Pages/CiCdCo";
import CiCdUd from "./DevOps_Final_Pages/CiCdUd";
import CloudYt from "./DevOps_Final_Pages/CloudYt";

import CloudUd from "./DevOps_Final_Pages/CloudUd";
import CloudCo from "./DevOps_Final_Pages/CloudCo";
import CloudDoc from "./DevOps_Final_Pages/CloudDoc";
import CloudPdf from "./DevOps_Final_Pages/CloudPdf";

// Android App Development

import ReactNative from "./Mobile_App_Resources/ReactNative";
import Flutter from "./Mobile_App_Resources/Flutter";
import KotlinJava from "./Mobile_App_Resources/KotlinJava";
import GitGitHub from "./Mobile_App_Resources/GitGitHub";
import Gradle from "./Mobile_App_Resources/Gradle";
import AndroidProjects from "./Mobile_App_Resources/BasicProjects";

import NativeUd from "./MobileApp_Final_Pages/NativeUd";
import NativeYt from "./MobileApp_Final_Pages/NativeYt";
import NativeCo from "./MobileApp_Final_Pages/NativeCo";
import NativePdf from "./MobileApp_Final_Pages/NativePdf";

import FlutterYt from "./MobileApp_Final_Pages/FlutterYt";
import FlutterUd from "./MobileApp_Final_Pages/FlutterUd";
import FlutterCo from "./MobileApp_Final_Pages/FlutterCo";
import FlutterPdf from "./MobileApp_Final_Pages/FlutterPdf";

import GradleYt from "./MobileApp_Final_Pages/GradleYt";
import GradleUd from "./MobileApp_Final_Pages/GradleUd";
import GradleCo from "./MobileApp_Final_Pages/GradleCo";
import GradlePdf from "./MobileApp_Final_Pages/GradlePdf";

import KotlinJavaYt from "./MobileApp_Final_Pages/KotlinJavaYt";
import KotlinJavaUd from "./MobileApp_Final_Pages/KotlinJavaUd";
import KotlinJavaCo from "./MobileApp_Final_Pages/KotlinJavaCo";
import KotlinJavaPdf from "./MobileApp_Final_Pages/KotlinJavaPdf";

// Cyber Security

import CyberCommunity from "./Cyber_Resources/CyberCommunity";
import Hijacking from "./Cyber_Resources/Hijacking";
import SQLInjection from "./Cyber_Resources/SQLInjection";
import IDAM from "./Cyber_Resources/IDAM";
import WebSecurity from "./Cyber_Resources/WebSecurity";
import CNS from "./Cyber_Resources/CNS";
import Crypto from "./Cyber_Resources/Crypto";


import WebSecurityYt from "./Cyber_Final_Pages/WebSecurityYt";
import WebSecurityUd from "./Cyber_Final_Pages/WebSecurityUd";
import WebSecurityCo from "./Cyber_Final_Pages/WebSecurityCo";
import WebSecurityPdf from "./Cyber_Final_Pages/WebSecurityPdf";

import SQLInjectionYt from "./Cyber_Final_Pages/SQLInjectionYt";
import SQLInjectionUd from "./Cyber_Final_Pages/SQLInjectionUd";
import SQLInjectionCo from "./Cyber_Final_Pages/SQLInjectionCo";
import SQLInjectionPdf from "./Cyber_Final_Pages/SQLInjectionPdf";

import IDAMUd from "./Cyber_Final_Pages/IDAMUd";
import IDAMYt from "./Cyber_Final_Pages/IDAMYT";
import IDAMCo from "./Cyber_Final_Pages/IDAMCo";

import HijackingYt from "./Cyber_Final_Pages/HijackingYt";
import HijackingUd from "./Cyber_Final_Pages/HijackingUd";
import HijackingCo from "./Cyber_Final_Pages/HijackingCo";
import HijackingPdf from "./Cyber_Final_Pages/HijackingPdf";

import CryptoYt from "./Cyber_Final_Pages/CryptoYt";
import CryptoUd from "./Cyber_Final_Pages/CryptoUd";
import CryptoCo from "./Cyber_Final_Pages/CryptoCo";
import CryptoGfg from "./Cyber_Final_Pages/CryptoGfg";

import CNSYt from "./Cyber_Final_Pages/CNSYt";
import CNSUd from "./Cyber_Final_Pages/CNSUd";
import CNSCo from "./Cyber_Final_Pages/CNSCo";
import CNSGfg from "./Cyber_Final_Pages/CNSGfg";

// UI / UX Designers

import UI_UX from "./Webpages/UIUX";
import WireFraming from "./UIUX_Resources/Wireframe_Prototype";
import UIX_Community from "./UIUX_Resources/UIUXCommunity";
import FigmaProjects from "./UIUX_Resources/FigmaProjects";
import UIX_Plugins from "./UIUX_Resources/FigmaPlugins";
import Figma from "./UIUX_Resources/Figma";
import UI_UX_Platforms from "./UIUX_Resources/UIPlatforms";
import UIX_AI_Tools from "./UIUX_Resources/AITools";

import FigmaYt from "./UI_UX_Final_Pages/FigmaYt";
import FigmaUd from "./UI_UX_Final_Pages/FigmaUd";
import FigmaCo from "./UI_UX_Final_Pages/FigmaCo";
import FigmaWebsites from "./UI_UX_Final_Pages/FigmaWebsites";

import WireFrameYt from "./UI_UX_Final_Pages/WireFrameYt";
import WireFrameUd from "./UI_UX_Final_Pages/WireFrameUd";
import WireFrameCo from "./UI_UX_Final_Pages/WireFrameCo";

import UIX_PlatformsYt from "./UI_UX_Final_Pages/UIXPlatformsYt";
import UIX_PlatformsUd from "./UI_UX_Final_Pages/UIXPlatformsUd";
import UIX_PlatformsCo from "./UI_UX_Final_Pages/UIXPlatformsCo";

// AI || ML 

import AIML from "./Webpages/AIML";
import ML_Mathematics from "./ML_Resources_Pages/Mathematics";
import MachineLearning from "./ML_Resources_Pages/MachineLearning";
import Numpy from "./ML_Resources/Numpy";
import Pandas from "./ML_Resources/Pandas";
import TensorFlow from "./ML_Resources/TensorFlow";
import Keras from "./ML_Resources/Keras";
import Matplotlib from "./ML_Resources/Matplotlib";
import PyTorch from "./ML_Resources/PyTorch";
import ML_Python from "./ML_Resources_Pages/Python";
import ML_Community from "./ML_Resources_Pages/ML_Community";
import ML_Projects from "./ML_Resources_Pages/ML_Projects";


import NumpyYt from "./ML_Resources_Final_Pages/NumpyYt";
import NumpyUd from "./ML_Resources_Final_Pages/NumpyUd";
import NumpyW3 from "./ML_Resources_Final_Pages/NumpyW3";

import TensorFlowYt from "./ML_Resources_Final_Pages/TensorFlowYt";
import TensorFlowUd from "./ML_Resources_Final_Pages/TensorFlowUd";
import TensorFlowCo from "./ML_Resources_Final_Pages/TensorFlowCo";

import PandasYt from "./ML_Resources_Final_Pages/PandasYt";
import PandasUd from "./ML_Resources_Final_Pages/PandasUd";
import PandasW3 from "./ML_Resources_Final_Pages/PandasW3";
import PandasCo from "./ML_Resources_Final_Pages/PandasCo";

import KerasYt from "./ML_Resources_Final_Pages/KerasYt";
import KerasUd from "./ML_Resources_Final_Pages/KerasUd";

import MatplotlibYt from "./ML_Resources_Final_Pages/MatplotlibYt";
import MatplotlibUd from "./ML_Resources_Final_Pages/MatplotlibUd";

import PyTorchYt from "./ML_Resources_Final_Pages/PyTorchYt";
import PyTorchUd from "./ML_Resources_Final_Pages/PyTorchUd";
import PyTorchCo from "./ML_Resources_Final_Pages/PyTorchCo";

import ProbabilityYt from "./ML_Resources_Final_Pages/ProbabilityYt";
import ProbabilityCo from "./ML_Resources_Final_Pages/ProbabilityCo";
import ProbabilityUd from "./ML_Resources_Final_Pages/ProbabilityUd";

import CalculusYt from "./ML_Resources_Final_Pages/CalculusYt";
import CalculusUd from "./ML_Resources_Final_Pages/CalculusUd";
import CalculusCo from "./ML_Resources_Final_Pages/CalculusCo";

import AlgebraYt from "./ML_Resources_Final_Pages/AlgebraYt";
import AlgebraUd from "./ML_Resources_Final_Pages/AlgebraUd";
import AlgebraCo from "./ML_Resources_Final_Pages/AlgebraCo";

import Probability from "./ML_Resources/ML_Probability";
import Calculus from "./ML_Resources/ML_Calculus";
import Liner_Algebra from "./ML_Resources/ML_Algebra";






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
          <Route path="/Android" element={<Android/>} />
          <Route path="/cyber" element={<Cyber/>} />
          <Route path="/UI_UX" element={<UI_UX/>} />
          <Route path="/AI_ML" element={<AIML/>} />



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


          <Route path='/Backend_Java_Yt' element={<JavaYt/>} />
          <Route path='/Backend_Java_Udemy' element={<JavaUd/>} />
          <Route path='/Backend_Java_Gfg' element={<JavaGfg/>} />
          <Route path='/Backend_Java_Coursera' element={<JavaCo/>} />
          <Route path='/Backend_Java_Codplat' element={<JavaPrac/>} />


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

        <Route path='/Backend_Api_Yt' element={<ApiYt/>} />
        <Route path='/Backend_Api_Udemy' element={<ApiUd/>} />
        <Route path='/Backend_Api_Gfg' element={<ApiGfg/>} />
        <Route path='/Backend_Api_Codplat' element={<ApiPrac/>} />
        <Route path='/Backend_Api_Coursera' element={<ApiCo/>} />


        <Route path="/Backend_GitHub_Yt" element={<GithubYt/>} />
        <Route path='/Backend_GitHub_Udemy' element={<GithubUd/>} />
        <Route path='/Backend_GitHub_Gfg' element={<GithubGfg/>} />
        <Route path='/Backend_GitHub_Codplat' element={<GithubPrac/>} />
        <Route path='/Backend_GitHub_Coursera' element={<GithubCo/>} />



        <Route path="/Backend_Jsnode_Yt" element={<JsnodeYt/>} />
        <Route path='/Backend_Jsnode_Udemy' element={<JsnodeUd/>} />
        <Route path='/Backend_Jsnode_Gfg' element={<JsnodeGfg/>} />
        <Route path='/Backend_Jsnode_Codplat' element={<JsnodePrac/>} />
        <Route path='/Backend_Jsnode_Coursera' element={<JsnodeCo/>} />

                            {/* Game Development  */}

        <Route path='/Unity' element={<Unity/>} />
        <Route path='/UI_Tools' element={<UITools/>} />
        <Route path='/Game_Projects' element={<GameProjects/>} />
        <Route path='/Community_Group' element={<GameCommunity/>} />
        <Route path='/GoDot' element={<GoDot/>} />


        <Route path='/Game_Unity_Yt' element={<UnityYt/>} />
        <Route path='/Game_Unity_Udemy' element={<UnityUd/>} />
        <Route path='/Game_Unity_Coursera' element={<UnityCo/>} />
        <Route path='/Game_Unity_Doc' element={<UnityDoc/>} />
        <Route path='/Game_Unity_Github' element={<UnityGitHub/>} />


        <Route path='/Game_UITools_Yt' element={<UIToolsYt/>} />
        <Route path='/Game_UITools_Doc' element={<UIToolsWebsite/>} /> 

        <Route path='/Game_Projects_Yt' element={<GameProYt/>} />
        <Route path='/Game_Projects_GitHub' element={<GameProGitHub/>} />


        <Route path='/Game_GoDot_Yt' element={<GoDotYt/>} />
        <Route path='/Game_GoDot_Udemy' element={<GoDotUd/>} />
        <Route path='/Game_GoDot_Coursera' element={<GoDotCo/>} />
        <Route path='/Game_GoDot_Doc' element={<GoDotDoc/>} />
        <Route path='/Game_GoDot_Github' element={<GoDotGitHub/>} />

                                   {/*  DevOps Websites */} 


        <Route path='/SDLC' element={<SDLC/>} />
        <Route path='/Linux' element={<Linux/>} />
        <Route path='/Git' element={<Git/>} />
        <Route path='/DevOps_Cloud' element={<CloudDevOps/>} />
        <Route path='/Docker' element={<DockerKuber/>} />
        <Route path='/CiCd' element={<CiCd/>} />


        <Route path='/DevOps_SDLC_Yt' element={<SDLCYt/>} />
        <Route path='/DevOps_SDLC_Udemy' element={<SDLCUd/>} />
        <Route path='/DevOps_SDLC_Coursera' element={<SDLCCo/>} />
        <Route path='/DevOps_SDLC_Doc' element={<SDLCDoc/>} />


        <Route path='/DevOps_Linux_Yt' element={<LinuxYt/>} />
        <Route path='/DevOps_Linux_Udemy' element={<LinuxUd/>} />
        <Route path='/DevOps_Linux_Coursera' element={<LinuxCo/>} />
        <Route path='/DevOps_Linux_PDF' element={<LinuxPdf/>} />


        <Route path='/DevOps_Git_Yt' element={< GitYt/>} />
        <Route path='/DevOps_Git_Udemy' element={<GitUd/>} />
        <Route path='/DevOps_Git_Coursera' element={<GitCo/>} />
        <Route path='/DevOps_Git_PDF' element={<GitPdf/>} />


        <Route path='/DevOps_DockerKuber_Yt' element={< DockerKuberYt/>} />
        <Route path='/DevOps_DockerKuber_Udemy' element={<DockerKuberUd/>} />
        <Route path='/DevOps_DockerKuber_Coursera' element={<DockerKuberCo/>} />
        <Route path='/DevOps_DockerKuber_Websites' element={<DockerKuberWebsites/>} />


        <Route path='/DevOps_Cloud_Yt' element={<CloudYt/>} />
        <Route path='/DevOps_Cloud_Udemy' element={<CloudUd/>} />
        <Route path='/DevOps_Cloud_Coursera' element={<CloudCo/>} />
        <Route path='/DevOps_Cloud_Doc' element={<CloudDoc/>} />
        <Route path='/DevOps_Cloud_PDF' element={<CloudPdf/>} />


        <Route path='/DevOps_CICD_Yt' element={<CiCdYt/>} /> 
        <Route path='/DevOps_CICD_Udemy' element={<CiCdUd/>} />
        <Route path='/DevOps_CICD_Coursera' element={<CiCdCo/>} />


                    {/* Android App Development */}

        <Route path='/ReactNative' element={<ReactNative/>} />
        <Route path='/Flutter' element={<Flutter/>} />
        <Route path='/Kotlin_Java' element={<KotlinJava/>} />
        <Route path='/Git_GitHub' element={<GitGitHub/>} />
        <Route path='/Gradle' element={<Gradle/>} />
        <Route path='/basicProjects' element={<AndroidProjects/>} />

                  {/* Android App Development Pages */}

        <Route path='/Android_Native_Yt' element={<NativeYt/>} />
        <Route path='/Android_Native_Udemy' element={<NativeUd/>} />
        <Route path='/Android_Native_Coursera' element={<NativeCo/>} />
        <Route path='/Android_Native_Pdf' element={<NativePdf/>} />


        <Route path='/Android_Flutter_Yt' element={<FlutterYt/>} />
        <Route path='/Android_Flutter_Udemy' element={<FlutterUd/>} />
        <Route path='/Android_Flutter_Coursera' element={<FlutterCo/>} />
        <Route path='/Android_Flutter_Pdf' element={<FlutterPdf/>} />


        <Route path='/Android_Gradle_Yt' element={<GradleYt/>} />
        <Route path='/Android_Gradle_Udemy' element={<GradleUd/>} />
        <Route path='/Android_Gradle_Coursera' element={<GradleCo/>} />
        <Route path='/Android_Gradle_Pdf' element={<GradlePdf/>} />


        <Route path='/Android_KotlinJava_Yt' element={<KotlinJavaYt/>} />
        <Route path='/Android_KotlinJava_Udemy' element={<KotlinJavaUd/>} />
        <Route path='/Android_KotlinJava_Coursera' element={<KotlinJavaCo/>} />
        <Route path='/Android_KotlinJava_Pdf' element={<KotlinJavaPdf/>} />


                        {/* Cyber Security */}

    
        <Route path='/Crypto' element={<Crypto/>} />
        <Route path='/CNS' element={<CNS/>} />
        <Route path='/Web_Security' element={<WebSecurity/>} />
        <Route path='/IDAM' element={<IDAM/>} />
        <Route path='/Sniffing_SQLinjection' element={<SQLInjection/>} />
        <Route path='/Hijacking' element={<Hijacking/>} />
        <Route path='/Cyber_Community' element={<CyberCommunity/>} />

                     {/* Cyber Security Page */}
                   
        <Route path='/Cyber_WebSecurity_Yt' element={<WebSecurityYt/>} />
        <Route path='/Cyber_WebSecurity_Udemy' element={<WebSecurityUd/>} />
        <Route path='/Cyber_WebSecurity_Coursera' element={<WebSecurityCo/>} />
        <Route path='/Cyber_WebSecurity_Pdf' element={<WebSecurityPdf/>} />


        <Route path='/Cyber_SQLInjection_Yt' element={<SQLInjectionYt/>} />
        <Route path='/Cyber_SQLInjection_Udemy' element={<SQLInjectionUd/>} />
        <Route path='/Cyber_SQLInjection_Coursera' element={<SQLInjectionCo/>} />
        <Route path='/Cyber_SQLInjection_Pdf' element={<SQLInjectionPdf/>} />


        <Route path='/Cyber_SQLInjection_Yt' element={<SQLInjectionYt/>} />
        <Route path='/Cyber_SQLInjection_Udemy' element={<SQLInjectionUd/>} />
       <Route path='/Cyber_SQLInjection_Coursera' element={<SQLInjectionCo/>} />
        <Route path='/Cyber_SQLInjection_Pdf' element={<SQLInjectionPdf/>} />
       

        <Route path='/Cyber_IDAM_Yt' element={<IDAMYt/>} />
        <Route path='/Cyber_IDAM_Udemy' element={<IDAMUd/>} />
        <Route path='/Cyber_IDAM_Coursera' element={<IDAMCo/>} />


        <Route path='/Cyber_IDAM_Yt' element={<IDAMYt/>} />
        <Route path='/Cyber_IDAM_Udemy' element={<IDAMUd/>} />
        <Route path='/Cyber_IDAM_Coursera' element={<IDAMCo/>} />
        

        <Route path='/Cyber_Hijacking_Yt' element={<HijackingYt/>} />
        <Route path='/Cyber_Hijacking_Udemy' element={<HijackingUd/>} />
       <Route path='/Cyber_Hijacking_Coursera' element={<HijackingCo/>} />
        <Route path='/Cyber_Hijacking_Pdf' element={<HijackingPdf/>} />


        <Route path='/Cyber_Crypto_Yt' element={<CryptoYt/>} />
        <Route path='/Cyber_Crypto_Udemy' element={<CryptoUd/>} />
        <Route path='/Cyber_Crypto_Coursera' element={<CryptoCo/>} />
        <Route path='/Cyber_Crypto_Gfg' element={<CryptoGfg/>} />
        <Route path='/Cyber_Community' element={<CyberCommunity/>} />

      
        <Route path='/Cyber_CNS_Yt' element={<CNSYt/>} />
        <Route path='/Cyber_CNS_Udemy' element={<CNSUd/>} />
        <Route path='/Cyber_CNS_Coursera' element={<CNSCo/>} />
        <Route path='/Cyber_CNS_Gfg' element={<CNSGfg/>} />


        <Route path='/Figma' element={<Figma/>} />
        <Route path='/AdobeXD_Canva_Sketch' element={<UI_UX_Platforms/>} />
        <Route path='/WireFrame_Prototype' element={<WireFraming/>} />
        <Route path='/AITools' element={<UIX_AI_Tools/>} />
        <Route path='/Figma_Plugins' element={<UIX_Plugins/>} />
        <Route path='/UIX_Community_Group' element={<UIX_Community/>} />
        <Route path='/Projects' element={<FigmaProjects/>} />

                          {/* Figma */}

        <Route path='/UI_UX_Figma_Yt' element={<FigmaYt/>} />
        <Route path='/UI_UX_Figma_Udemy' element={<FigmaUd/>} />
        <Route path='/UI_UX_Figma_Coursera' element={<FigmaCo/>} />
        <Route path='/UI_UX_Figma_Websites' element={<FigmaWebsites/>} />

                     {/* Wire Framing & ProtoTypes */}

        <Route path='/UI_UX_Wireframing_ProtoType_Yt' element={<WireFrameYt/>} />
        <Route path='/UI_UX_Wireframing_ProtoType_Udemy' element={<WireFrameUd/>} />
        <Route path='/UI_UX_Wireframing_ProtoType_Coursera' element={<WireFrameCo/>} />

                     {/* Adobe XD , Canava , Sketch */}

        <Route path='/UI_UX_Platforms_Yt' element={<UIX_PlatformsYt/>} />
        <Route path='/UI_UX_Platforms_Udemy' element={<UIX_PlatformsUd/>} />
        <Route path='/UI_UX_Platforms_Coursera' element={<UIX_PlatformsCo/>} />


                              {/* AI / ML  */}

        <Route path='/Mathematics' element={<ML_Mathematics/>} />
        <Route path='/Machine_Learning' element={<MachineLearning/>} />
        <Route path='/ML_Python' element={<ML_Python/>} />
        <Route path='/ML_Community' element={<ML_Community/>} />
        <Route path='/ML_Projects' element={<ML_Projects/>} />


        <Route path='/ML_Probability' element={<Probability/>} />
        <Route path='/ML_Calculus' element={<Calculus/>} />
        <Route path='/ML_Linear_Algebra' element={<Liner_Algebra/>} />

                          {/* Machine Learning Options  */}

        <Route path='/ML_Numpy' element={<Numpy/>} />
        <Route path='/ML_Pandas' element={<Pandas/>} />
        <Route path='/ML_TensorFlow' element={<TensorFlow/>} />
        <Route path='/ML_Keras' element={<Keras/>} />
        <Route path='/ML_Matplotlib' element={<Matplotlib/>} />
        <Route path='/ML_PyTorch' element={<PyTorch/>} /> 

                            {/* ML Pages */}

        <Route path='/ML_Numpy_Yt' element={<NumpyYt/>} />
        <Route path='/ML_Numpy_Udemy' element={<NumpyUd/>} />
        <Route path='/ML_Numpy_W3' element={<NumpyW3/>} />

        <Route path='/ML_TensorFlow_Yt' element={<TensorFlowYt/>} />
        <Route path='/ML_TensorFlow_Udemy' element={<TensorFlowUd/>} />
        <Route path='/ML_TensorFlow_Coursera' element={<TensorFlowCo/>} />

        <Route path='/ML_Pandas_Yt' element={<PandasYt/>} />
        <Route path='/ML_Pandas_Udemy' element={<PandasUd/>} />
        <Route path='/ML_Pandas_Coursera' element={<PandasCo/>} />
        <Route path='/ML_Pandas_W3' element={<PandasW3/>} />

        <Route path='/ML_Keras_Yt' element={<KerasYt/>} />
        <Route path='/ML_Keras_Udemy' element={<KerasUd/>} />

        <Route path='/ML_Matplotlib_Yt' element={<MatplotlibYt/>} />
        <Route path='/ML_Matplotlib_Udemy' element={<MatplotlibUd/>} />

        <Route path='/ML_PyTorch_Yt' element={<PyTorchYt/>} />
        <Route path='/ML_PyTorch_Udemy' element={<PyTorchUd/>} />
        <Route path='/ML_PyTorch_Coursera' element={<PyTorchCo/>} />

        <Route path='/ML_Probability_Yt' element={<ProbabilityYt/>} />
        <Route path='/ML_Probability_Udemy' element={<ProbabilityUd/>} />
        <Route path='/ML_Probability_Coursera' element={<ProbabilityCo/>} />

        <Route path='/ML_Calculus_Yt' element={<CalculusYt/>} />
        <Route path='/ML_Calculus_Udemy' element={<CalculusUd/>} />
        <Route path='/ML_Calculus_Coursera' element={<CalculusCo/>} />

        <Route path='/ML_Liner_Algebra_Yt' element={<AlgebraYt/>} />
        <Route path='/ML_Liner_Algebra_Udemy' element={<AlgebraUd/>} />
        <Route path='/ML_Liner_Algebra_Coursera' element={<AlgebraCo/>} />







        



       


        
        







        </Routes>

      </div>

    </Router>
                       
    </>
    
  );
}

export default App;
