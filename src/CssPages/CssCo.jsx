export function CssCo(){

    const val1 = "https://www.coursera.org/learn/html-and-css-in-depth"; 
    const val2 = "https://www.coursera.org/learn/introcss"; 
    const val3 = "https://www.coursera.org/learn/build-a-webpage-with-html-and-css"; 
    const val4 = "https://coursera.org/learn/learn-tailwind-css"; 
    const val5 = "https://www.coursera.org/specializations/tailwind-css"; 

    return(

        <>
        

        <h1 className="html_co_heading">These are the <strong style={{textDecoration : 'underline', color : 'blue'}}>Top 5</strong> recommended Coursera courses links that you can refer  with certifications  </h1>


    <h4 className="des_co_html">

    1. Dive Into The Main Concepts <br/>
    2. Animation Explanations with real world Examples <br/>
    3. Important with Note Clarification. 

    </h4>

         {/* <-----------------------------------------1------------------------------------------*/}
         <div className="container_html_co_links">

        <p className="vid">1. HTML and CSS in depth (From Meta )

        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

        </p>
        
        <p>
        </p>

        </div>

        {/* <-----------------------------------------2------------------------------------------*/}

        <div className="container_html_co_links">

        <p className="vid"> 2. Introduction to CSS3

        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val2, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------3------------------------------------------*/}

        <div className="container_html_co_links">

        <p className="vid"> 3. Build a Webpage with HTML and CSS

        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val3, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------4------------------------------------------*/}

        <div className="container_html_co_links">

        <p className="vid"> 4. Learn Tailwind CSS

        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val4, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div> 


        {/* <-----------------------------------------5------------------------------------------*/}

        <div className="container_html_co_links">

        <p className="vid"> 5. Tailwind CSS Specialization

        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val5, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        </>
    )
}

export default CssCo;