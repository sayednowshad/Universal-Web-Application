import { useNavigate } from 'react-router-dom';
import { Footer } from '../First';

export function Explore(){

    var navigate = useNavigate(); // FrontEnd

    var FrontEnd = () => {
      navigate('/Frontend');
    };

    var navigate = useNavigate(); // BackEnd

    var BackEnd = () =>{

        navigate('/Backend');
    }

    var navigate = useNavigate(); // Game
    var Game = () =>{

        navigate('/Game'); 
    }

    var navigate = useNavigate(); // Devops

    var Devops = () =>{

        navigate('/Devops');
    }

    var navigate = useNavigate(); // Cloud

    var Cloud = () =>{

        navigate('/Android'); 
    }

    var navigate = useNavigate(); // Cyber 

    var Cyber = () =>{

        navigate('/Cyber');
    }

    var navigate = useNavigate(); // UI UX 

    var UI_UX = () =>{

        navigate('/UI_UX');
    }

    var navigate = useNavigate(); // AI / ML 

    var AI_ML = () =>{

        navigate('/AI_ML');
    }

    var navigate = useNavigate(); // Data Analyst 

    var Data_Analyst = () =>{

        navigate('/Data_Analyst');
    }

    return (

        
        <>
        
        <h3 className="exp_1" > In this page we provide to can explore all of domain you wish </h3>

        <h3 className="exp_2"> Software Development </h3>

        <div className="exp_container">  {/* Main Container ok bro Main Container  */}

            <div className="exp_contain"> {/* Frontend */}

            <img src="https://www.webbygalery.com/wp-content/uploads/2023/08/front-end-pic-1024x720.jpg" style={{height : '250px' , width : '350px' , marginLeft : '30px', borderRadius : '3px'}} /> 
        <h4 className="exp_tittle" onClick={FrontEnd} style={{cursor : 'pointer'}}> Front-End Development </h4>

            </div>
        
        <div className="exp_contain">  {/* Backend */}

        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp" style={{height : '250px' , width : '350px' , marginLeft : '30px' , borderRadius : '3px'}} />
        <h4 className="exp_tittle" onClick={BackEnd} style={{cursor :"pointer"}}> Back-End Development </h4> 
        
        </div>
      
        <div className="exp_contain"> {/* Game */}

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQEbG8BrpfCViKhbL8I6zJ_NW4JYSJ6JsUQ&s" style={{height : '250px' , width : '350px' , marginLeft : '30px' , borderRadius : '3px'}}  />
            <h4 className="exp_tittle" onClick={Game} style={{marginLeft : '90px' , cursor : 'pointer'}}> Game Development </h4>  
        </div>


        <div className="exp_contain"> {/* Devops */}

            <img src="https://s3.amazonaws.com/img2.copperdigital.com/wp-content/uploads/2023/02/23125510/Untitled-design-35-1.jpg" style={{height : '250px' , width : '350px' , marginLeft : '30px' , borderRadius : '3px' , marginTop :'40px'}} />
            <h4 className="exp_tittle" onClick={Devops} style={{marginLeft : '150px' , cursor : 'pointer'}}> Devops  </h4>  
        </div>

 
        <div className="exp_contain"> {/* Cloud */}

            <img src="https://media.licdn.com/dms/image/v2/D5612AQG_bD2NRnPM_w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1710221337254?e=2147483647&v=beta&t=sy7Exjl2cXNFH2Up5Dxq-q8myVxo6Mw15-EU_9yGonM" style={{height : '250px' , width : '350px' , marginLeft : '30px' , borderRadius : '3px' , marginTop :'40px'}}  />

            <h4 className="exp_tittle" onClick={Cloud} style={{marginLeft : '80px',  cursor : 'pointer'}} > Android App Development  </h4>  
        </div>

        <div className="exp_contain"> {/* Cyber */}

            <img src="https://cdn.bap-software.net/2024/06/27220717/Cyber-Security.jpg" style={{height : '250px' , width : '350px' , marginLeft : '30px' , borderRadius : '3px' , marginTop :'40px'}}  />

            <h4 className="exp_tittle" onClick={Cyber} style={{marginLeft : '120px' , cursor : 'pointer'}}  > Cyber Security </h4>  
        </div> 


        <div className="exp_contain"> {/* UI / UX */}

        <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg" style={{height : '250px' , width : '350px' , marginLeft : '30px' , borderRadius : '3px' , marginTop :'40px'}}  />

        <h4 className="exp_tittle" onClick={UI_UX} style={{marginLeft : '120px' , cursor : 'pointer'}}  > UI / UX Designer </h4> 
        </div>


        <div className="exp_contain"> {/* AI / ML */}

        <img src="https://miro.medium.com/v2/resize:fit:1400/1*PTXHpPJ4rrDKqhSiVBGHMA.png" style={{height : '250px' , width : '350px' , marginLeft : '30px' , borderRadius : '3px' , marginTop :'40px'}}  />

        <h4 className="exp_tittle" onClick={AI_ML} style={{marginLeft : '150px' , cursor : 'pointer'}}> AI / ML </h4> 
        </div>


        <div className="exp_contain"> {/* Data Analyst */}

        <img src="https://verpex.com/assets/uploads/images/blog/How-To-Become-A-Freelance-Data-Analyst.webp?v=1711104899" style={{height : '250px' , width : '350px' , marginLeft : '30px' , borderRadius : '3px' , marginTop :'40px'}}  />

        <h4 className="exp_tittle" onClick={Data_Analyst} style={{marginLeft : '120px' , cursor : 'pointer'}}> Data     Analyst </h4> 
        </div>














        </div>


        

        <Footer />
        
        </>
    )
}

export default Explore;