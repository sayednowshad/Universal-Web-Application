import HtmlUd from "./HtmlUd";

export function HtmlGfg(){

const val1 = "https://www.geeksforgeeks.org/html-introduction/?ref=lbp";
const val2 = "https://www.geeksforgeeks.org/html-basics/?ref=lbp";
const val3 = "https://www.geeksforgeeks.org/html-attributes/?ref=lbp";
const val4 = "https://www.geeksforgeeks.org/html-heading/?ref=lbp";
const val5 = "https://www.geeksforgeeks.org/html-colors/?ref=lbp";
const val6 = "https://www.geeksforgeeks.org/html-links/?ref=lbp";
const val7 = "https://www.geeksforgeeks.org/html-tables/?ref=lbp";
const val8 = "https://www.geeksforgeeks.org/html-forms/?ref=lbp";


    return(

        <>

                
        <h1 className="html_gfg_heading">These are the <strong style={{textDecoration : 'underline', color : 'blue'}}>Top 8</strong> recommended Geeks for Geeks links that you can refer with important Topics </h1>


        <h4 className="des_co_html">

        1. Dive Into The<strong> Main </strong>Concepts <br/>
        2. Enough Concepts to learn & Understand  <br/>
        3. Only important Concepts to learn through every topics
        </h4>
        {/* <-----------------------------------------1------------------------------------------*/}
        <div className="container_html_gfg_links">

        <p className="vid">1. (Part-1) Introduction To  HTML


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :        '8px'}}        onClick={() => window.open(val1, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------2------------------------------------------*/}

        <div className="container_html_gfg_links">

        <p className="vid"> 2. (Part-2) HTML Basics


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :        '8px'}}        onClick={() => window.open(val2, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------3------------------------------------------*/}

        <div className="container_html_gfg_links">

        <p className="vid"> 3. (Part-3) HTML Attributes


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :        '8px'}}        onClick={() => window.open(val3, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------4------------------------------------------*/}

        <div className="container_html_gfg_links">

        <p className="vid"> 4. (Part-4) HTML Headings

        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius :        '8px'}}        onClick={() => window.open(val4, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div> 


        {/* <-----------------------------------------5------------------------------------------*/}

        <div className="container_html_gfg_links">

        <p className="vid"> 5. (Part-5)HTML Colors


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val5, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------6------------------------------------------*/}

        <div className="container_html_gfg_links">

        <p className="vid"> 6. (Part-6)HTML Links Hyperlinks + Images


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val6, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------7------------------------------------------*/}

        <div className="container_html_gfg_links">

        <p className="vid"> 7. (Part-7)HTML Tables


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val7, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------8------------------------------------------*/}

        <div className="container_html_gfg_links">

        <p className="vid"> 8. (Part-8)HTML Forms 


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}}        onClick={() => window.open(val8, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        
        </>
    )
}

export default HtmlGfg;