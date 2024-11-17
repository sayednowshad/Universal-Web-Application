export function ReactUd(){

    const val1 = " https://www.udemy.com/course/master-react/?couponCode=LEARNNOWPLANS";
    const val2 = " https://www.udemy.com/course/react-redux/" ;
    const val3 = " https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=LEARNNOWPLANS";
    const val4 = " https://www.udemy.com/course/the-complete-react-fullstack-course/?couponCode=LEARNNOWPLANS";
    const val5 = " https://www.udemy.com/course/the-ultimate-react-course-2023-w-real-world-projects/?couponCode=LEARNNOWPLANS";

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

            <p className="vid"> 1. React 18 Course - Learn React JS the fast way


        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val1, "_blank")}>  Click Me </button>  
            
            </p>
            <p>
            </p>
            
            </div>

        {/* <-----------------------------------------2------------------------------------------*/}

        <div className="container_html_ud_links">

        <p className="vid"> 2. Modern React with Redux 

        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val2, "_blank")}>  Click Me </button>  

        </p>
        <p>
        </p>

        </div>

        {/* <-----------------------------------------3------------------------------------------*/}

        <div className="container_html_ud_links">

        <p className="vid"> 3. React - The Complete Guide (incl. Next.js, Redux)

        <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val3, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div>

        {/* <-----------------------------------------4------------------------------------------*/}

            <div className="container_html_ud_links">

            <p className="vid"> 4. The complete React 18 Fullstack course 


            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val4, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div> 


        {/* <-----------------------------------------5------------------------------------------*/}
        
            <div className="container_html_ud_links">

            <p className="vid"> 5. The Ultimate React JS Course: Start from Scratch


            <button style={{marginLeft : '200px', padding : '7px' , background : 'black', color:'white' , borderRadius : '8px'}} onClick={() => window.open(val5, "_blank")}>  Click Me </button>  

            </p>
            <p>
            </p>

            </div>

        </>
    )
}

export default ReactUd;