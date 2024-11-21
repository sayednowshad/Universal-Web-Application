export function GithubUd(){

    const val1 = "https://www.udemy.com/course/javascript-basics-for-beginners/?couponCode=LEARNNOWPLANS";
    const val2 = "https://www.udemy.com/course/javascript-tutorial/?couponCode=LEARNNOWPLANS";
    const val3 = " https://www.udemy.com/course/complete-javascript-full-stack-course/?couponCode=LEARNNOWPLANS";
    const val4 = " https://www.udemy.com/course/javascript-the-basics-for-beginners/?couponCode=LEARNNOWPLANS";
    const val5 = " https://www.udemy.com/course/learn-javascript-online/?couponCode=LEARNNOWPLANS";

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

            <p className="vid"> 1. GitHub Basics for Beginners



            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val1, "_blank")}>  Click Me </button>  
            
            </p>
            <p>
            </p>
            
            </div>

        {/* <-----------------------------------------2------------------------------------------*/}

        <div className="container_html_ud_links">

        <p className="vid"> 2. JavaScript 101: JavaScript for absolute beginners



        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val2, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------3------------------------------------------*/}

        <div className="container_html_ud_links">

        <p className="vid"> 3. Complete JavaScript Full Stack Course 2024 From A - Z



        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val3, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div>

        {/* <-----------------------------------------4------------------------------------------*/}

            <div className="container_html_ud_links">

            <p className="vid"> 4. JavaScript Beginner Bootcamp (2024)



            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val4, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div> 


        {/* <-----------------------------------------5------------------------------------------*/}
        
            <div className="container_html_ud_links">

            <p className="vid"> 5. JavaScript programming: JavaScript for beginners



            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val5, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div>

        </>
    )
}

export default GithubUd;