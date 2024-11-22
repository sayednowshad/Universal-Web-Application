import { useNavigate } from 'react-router-dom';
import { Footer } from '../First';


// import JavaScript from '../FrontOption/JavaScript';
// import Reaction from '../FrontOption/Reaction';

export function UI_UX(){



    var navigate = useNavigate(); 
    var Unity = () => { 
      navigate('/Figma');

    }; 

    var navigate = useNavigate();
    var Godot = () => {
      navigate('/AdobeXD_Canva_Sketch'); 

    };

    var navigate = useNavigate(); 
    var Tools = () => {
      navigate('/WireFrame_Prototype'); 

    };

    var navigate = useNavigate(); 
    var Projects = () => {
      navigate('/AITools'); 

    };

    var navigate = useNavigate(); 
    var Community = () => { 
      navigate('/Figma_Plugins'); 

    };

    var navigate = useNavigate(); 
    var Groups = () => { 
      navigate('/UIX_Community_Group');

    };

    var navigate = useNavigate(); 
    var Pro = () => { 
      navigate('/Projects'); 

    };



    return (
  
    <>

    <div className="front_container">

        <div className="front_contain"> 

        <h2 className="fr_1"> UI / UX Designer  </h2>
        <p className="fr_2"> All the resources are available through the links only kindly refer to this. We are providing the <br/> recommended platform not for any other promotions. </p>
     
        <p className="fr_rating">4.4 &#9733; &#9733; &#9733; &#9733; </p>
        <p> Created by  <a href="https://www.linkedin.com/in/sayednowshad/" style={{textDecoration: "underline" , fontSize : '17px' , fontFamily: 'sans-serif'}}> SayedNowshad </a>  </p>

        </div>   {/*  Image i need to page on the right end for that i forgot how to do that ha ha ha ha ha ha */}

        {/* <div className="fr_img">

        <img className="fr_img" src="https://www.webbygalery.com/wp-content/uploads/2023/08/front-end-pic-1024x720.jpg" style={{height : '290px' ,      width : '400px',marginLeft : '30px', borderRadius : '3px'}} />  */}

        {/* </div> */}

    </div> 

     <h2 className="fr_des"> Description </h2>
     <ul className="fr_list">

        <li className="fr_li" > Click the below topics for more concepts to Unlock &#x1F512; </li>
        <li className="fr_li"> See the topic wise and select the topic </li>
        <li className="fr_li"> Here, we are provided the all the facility for searching, finding the best resources for you get <br/>this and share this to your friends and spread this out </li>
        <li className="fr_li"> Thanks &  Enjoy <strong> "Stay Hard &#x1F4AA;, Stay Consistently" </strong> </li>

     </ul>


            <h3 className="fr_cont"> Content </h3>

            <div className="fr_butt">

                <button className="fr_butt_click" onClick={Unity} > Figma </button>
                <button className="fr_butt_click" onClick={Godot}> Adobe XD / Canva / Sketch </button>
                <button className="fr_butt_click" onClick={Tools}> WireFraming & Prototype </button>
                <button className="fr_butt_click" onClick={Projects}> AI Tools </button>
                <button className="fr_butt_click" onClick={Community}> Figma Plugins </button> 
                <button className="fr_butt_click" onClick={Groups}> Community Groups </button> 
                <button className="fr_butt_click" onClick={Pro}> Projects </button> 
                
            </div>

            <Footer />
    </>

    )
}

export default UI_UX;

