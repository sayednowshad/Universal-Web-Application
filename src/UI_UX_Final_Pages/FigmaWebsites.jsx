export function FigmaWebsites(){


    const val1 = "https://www.w3schools.com/html/html_quiz.asp";

    return(

        <>
        <h1 className="html_qns_heading">These are the <strong style={{textDecoration : 'underline', color : 'blue'}}>Top 8</strong> recommended Geeks for Geeks links that you can refer with important Topics </h1>


        <h4 className="des_qns_html">

        1. Dive Into The <strong> Main </strong>Page <br/>
        2. Start with Quizz  <br/>
        3. Test Your knowledge what you have, attempt to better Clarification
        </h4>

        {/* <-----------------------------------------1------------------------------------------*/}

        <div className="container_html_qns_links">

        <p className="vid" style={{marginTop : '50px'}}> Website - 01


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :    '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>


         {/* <-----------------------------------------1------------------------------------------*/}

         <div className="container_html_qns_links">

<p className="vid" style={{marginTop : '50px'}}> Behance -02


<button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :    '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

</p>
<p>
</p>

</div>

<div className="container_html_qns_links">

<p className="vid" style={{marginTop : '50px'}}> Website -03


<button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :    '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

</p>
<p>
</p>

</div>




<div className="container_html_qns_links">

<p className="vid" style={{marginTop : '50px'}}> Website -04 


<button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :    '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

</p>
<p>
</p>

</div>



<div className="container_html_qns_links">

<p className="vid" style={{marginTop : '50px'}}> Website -05


<button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :    '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

</p>
<p>
</p>

</div>

        </>
    )
}

export default FigmaWebsites;