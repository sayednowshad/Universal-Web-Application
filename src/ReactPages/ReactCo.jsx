export function ReactCo(){

    const val1 = " https://www.coursera.org/learn/react-basics";
    const val2 = "  https://www.coursera.org/learn/advanced-react";
    const val3 = " https://www.coursera.org/learn/learn-react";
    const val4 = " https://www.coursera.org/learn/frontend-development-using-react";
    const val5 = " https://www.coursera.org/professional-certificates/meta-front-end-developer";

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

        <p className="vid">1. React Basics ( Meta )


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------2------------------------------------------*/}

        <div className="container_html_co_links">

        <p className="vid"> 2. Advanced React


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val2, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------3------------------------------------------*/}

        <div className="container_html_co_links">

        <p className="vid"> 3. Learn React


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val3, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------4------------------------------------------*/}

        <div className="container_html_co_links">

        <p className="vid"> 4. Frontend Development using React


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val4, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div> 


        {/* <-----------------------------------------5------------------------------------------*/}

        <div className="container_html_co_links">

        <p className="vid"> 5. Meta Front-End Developer Professional Certificate


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val5, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        </>
    )
}

export default ReactCo;