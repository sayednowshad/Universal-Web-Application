export function CssUd(){

    const val1 = "https://www.udemy.com/course/html-5-css-3-web-development-project/?couponCode=24T2MT111524"; 
    const val2 = "https://www.udemy.com/course/modern-web-design-html5-css3-beginners-guide-to-websites/?         ouponCode=24T2MT111524";     
    const val3 = "https://www.udemy.com/course/beginner-crash-course-fundamentals-of-html-css-in-60-mins/?ouponCode=24T2MT111524";
    const val4 = " https://www.udemy.com/course/1-hour-css/?couponCode=24T2MT111524";
    const val5 = " https://www.udemy.com/course/css-complete-course-for-beginners/?couponCode=24T2MT111524";

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

            <p className="vid"> 1. CSS + HTML 101 Crash Course

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

        <p className="vid"> 3. Crash Course: Fundamentals Of HTML & CSS From Scratch.


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val3, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div>

        {/* <-----------------------------------------4------------------------------------------*/}

            <div className="container_html_ud_links">

            <p className="vid"> 4. 1 Hour CSS



            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val4, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div> 


        {/* <-----------------------------------------5------------------------------------------*/}
        
            <div className="container_html_ud_links">

            <p className="vid"> 5. CSS Complete Course For Beginners



            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val5, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div>

        </>
    )
}

export default CssUd;