export function HtmlYt(props){

const val1 = "https://youtu.be/UB1O30fR-EE?si=55EoNNF7zKL4Fnoo";
const val2 = "https://www.youtube.com/watch?v=HD13eq_Pmp8&ab_channel=BroCode";
const val3 = "https://youtu.be/qz0aGYrrlhU?si=tWdacM93KSAjZvtx";
const val4 = "https://youtu.be/G3e-cpL7ofc?si=6iQlsVI7HL-jYrRu";
const val5 = "https://youtu.be/h3bTwCqX4ns?si=J5P1ilR-7tOwhaD9";
const val6 = "https://youtu.be/HcOc7P5BMi4?si=Gxr49hacmcwLwjNz";
const val7 = "https://youtu.be/MBlkKE0GYGg?si=_pKv42eoHdG41q5q ";
const val8 = "https://youtu.be/kUMe1FH4CHE?si=X1KIU2bg53mbrCmT ";
const val9 = "https://youtu.be/5ccq_nLHneE?si=Ibnkp0MZP0eH0ErK ";
const val10 = "https://youtu.be/k2DSi1zGEc8?si=oOG6Xni9tJsYAX-c ";



    return (

        <>

        <h1 className="html_yt_heading">These are the <strong style={{textDecoration : 'underline', color : 'blue'}}>Top 10</strong>  Youtube Playlists That You can Refer  </h1>


        <h4 className="des_yt_html">
        
            1. Dive Into The Main Concepts <br/>
            2. Animation Explanations with real world Examples <br/>
            3. Important with Note Clarification.
            </h4>
        {/* <-----------------------------------------1------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid"> 1 . CodeTech 

            {/* <strong style={{marginLeft : '40px', marginRight : '40px' ,border: '1px solid black', padding : '9px' , borderRadius: '7px', fontSize : '17px'
            }}> HTML</strong> 4.7 &#9733; &#9733; &#9733; &#9733;
            */}

            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

            </p>
        <p>
            </p>

        </div>
            {/* <-----------------------------------------2------------------------------------------*/}

        <div className="container_html_yt_links">

            <p className="vid">
                 2 . CodeBro  

            
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val2, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>

            {/*  <-----------------------------------------3------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid">
                 3. Programming with Mosh
                 
            
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val3, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>

            {/*  <-----------------------------------------4------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid">
                 4. SuperSimpleDev 

            
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val4, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>


        {/*  <-----------------------------------------5------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid">
                 5.Kevin Powell

            
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val5, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>

            {/*  <-----------------------------------------6------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid">
            6. Apna College 
                 
            
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val6, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>

            {/*  <-----------------------------------------7------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid">
                 7. DesignCourse
                
            
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val7, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>

            {/*  <-----------------------------------------8------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid">
                 8. FreeCodeCamp.org 
                  
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val8, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>

        { /*  <-----------------------------------------9------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid">
                 9. Thapa Technical   
              
            
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val9, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>
    {/*  <-----------------------------------------10------------------------------------------*/}
        <div className="container_html_yt_links">

            <p className="vid"> 
                10. CodeWithHarry 
               
            
            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val10, "_blank")} >  Click Me </button>  

            </p>
        <p>
            </p>

        </div>

        </>
    )
}

export default HtmlYt;