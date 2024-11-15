export function CssQns(){


    const val1 = "https://www.w3schools.com/css/css_quiz.asp";

    return(

        <>
         <h1 className="html_qns_heading">These are the recommended Qns for CSS Testing  links that you can refer with this Website  </h1>


     <h4 className="des_qns_html">

         1. Dive Into The <strong> Main </strong>Page <br/>
         2. Click Start with Quizz  <br/>
         3. Test Your knowledge what you have, attempt to better Clarification
     </h4>

     {/* <---------------------------------------1------------------------------------------*/}

        <div className="container_html_qns_links">

        <p className="vid" style={{marginTop : '50px'}}> **** Practice For CSS (Quiz) ***


         <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :    '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        </>
    )
}

export default CssQns;