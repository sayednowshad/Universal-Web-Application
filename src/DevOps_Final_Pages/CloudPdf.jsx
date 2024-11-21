export function CloudPdf(){

    const val1 = "https://www.udemy.com/course/intro-to-html-web-development/?couponCode=ST7MT110524";
    const val2 = "https://www.udemy.com/course/html-and-css-for-beginners-crash-course-learn-fast-easy/?couponCode=ST7MT110524";
    const val3 = "https://www.udemy.com/course/learn-html-and-css-in-7-days-web-developer-bootcamp/?couponCode=ST7MT110524";
    const val4 = "https://www.udemy.com/course/html-course-for-beginners/?couponCode=ST7MT110524";
    const val5 = "https://www.udemy.com/course/html5-authoring-certification/?couponCode=ST7MT110524 ";

    return(

        <>
         <h1 className="html_ud_heading">These are the <strong style={{textDecoration : 'underline', color : 'blue'}}>Top 5</strong> recommended Udemy links That You can Refer with certifications  </h1>


<h4 className="des_ud_html">

    1. Dive Into The Main Concepts <br/>
    2. Animation Explanations with real world Examples <br/>
    3. Important with Note Clarification.
    </h4>

        {/* <-----------------------------------------1------------------------------------------*/}
        <div className="container_html_ud_links">

            <p className="vid"> 1. Unity Ud - Introduction to HTML Web Development


            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val1, "_blank")}>  Click Me </button>  
            
            </p>
            <p>
            </p>
            
            </div>

        {/* <-----------------------------------------2------------------------------------------*/}

        <div className="container_html_ud_links">

        <p className="vid"> 2. HTML and CSS for Beginners - Build a Website & Launch ONLINE


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val2, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------3------------------------------------------*/}

        <div className="container_html_ud_links">

        <p className="vid"> 3. Learn HTML and CSS in 7 Days | Web Developer Bootcamp


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val3, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div>

        {/* <-----------------------------------------4------------------------------------------*/}

            <div className="container_html_ud_links">

            <p className="vid"> 4. Learn HTML: Course For Beginners


            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val4, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div> 


        {/* <-----------------------------------------5------------------------------------------*/}
        
            <div className="container_html_ud_links">

            <p className="vid"> 5. HTML5: HTML Authoring Certification Course


            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val5, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div>

        </>
    )
}

export default CloudPdf;