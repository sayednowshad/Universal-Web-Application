import { useNavigate } from 'react-router-dom';

export function HTML(){

    var navigate = useNavigate();

    var HtmlYt = () => {
      navigate('/Exp_Fro_Html_Yt');
    };

    var navigate = useNavigate();

    var HtmlUd = () => {
      navigate('/Exp_Fro_Html_Udemy');
    };

    var navigate = useNavigate();

    var HtmlQns = () => {
      navigate('/Exp_Fro_Html_Qns');
    };

    var navigate = useNavigate();

    var HtmlGit = () => {
      navigate('/Exp_Fro_Html_GitHub');
    };

    var navigate = useNavigate();

    var HtmlGfg = () => {
      navigate('/Exp_Fro_Html_Gfg');
    };

    var navigate = useNavigate();

    var HtmlCo = () => {
      navigate('/Exp_Fro_Html_Coursera');
    };

    var navigate = useNavigate();

    var HtmlBp = () => {
      navigate('/Exp_Fro_Html_BasicProjects');
    };
   

    return (

        <>
        
        <h1 className="html_head"> Links are below </h1> 

        <p className="html_para"> These are the platforms for your <strong>HTML</strong> Study purpose. Utilize this and these are the recommended platforms to explore and gain knowledge for practice and do more, again this is not for any Promotions it is for the <strong> educational purpose </strong> to do more, explore all in shorten time.</p>

            <h3 className="reco_html"> Recommended Platforms </h3>

        {/* < ------------------------------------- 1 ------------------------------------------------ >*/}

            <div className="container_html_pg" >  {/* Container FOr Youtube.... */}

            <img className="html_logo_yt" style={{height : '90px' , width : '90px'}}  src="https://thumbs.dreamstime.com/b/high-resolution-colored-youtube-logo-white-background-vector-eps-file-available-additional-download-colored-youtube-logo-175730434.jpg" />
            <h5 style={{margin : '30px 0px 0px 30px' , fontFamily : 'Arial' , fontWeight : 'bold'}}> Youtube Playlists &#9754; </h5>
            <div className="butt_yt">

            <button className="btn_html_yt" onClick={HtmlYt} > Click Me </button>
            </div>
            </div> {/* Ending Of YT Container.... */}

        {/* < ------------------------------------------ 2 ------------------------------------------------ >*/}

            <div className="container_html_pg" >  {/* Container FOr Youtube.... */}

            <img className="html_logo_yt" style={{height : '90px' , width : '90px'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVgLGfhr0DKM1D4bBSvZh9h6UdIG84qhbSsHAsn_P1KeOEa_wGqqbO9z1zcyn3atADVU&usqp=CAU" />
            <h5 style={{margin : '30px 0px 0px 30px' , fontFamily : 'Arial' , fontWeight : 'bold'}}> Coursera &#9754;  </h5>
            <div className="butt_yt">

            <button className="btn_html_yt"  onClick = {HtmlCo } > Click Me </button>
            </div>
            </div>

        {/* < ---------------------------------------- 3 ---------------------------------------------------- >*/}

            <div className="container_html_pg" >  {/* Container FOr Youtube.... */}

            <img className="html_logo_yt" style={{height : '90px' , width : '90px'}}  src="https://logowik.com/content/uploads/images/udemy-new-20212512.jpg" />
            <h5 style={{margin : '30px 0px 0px 30px' , fontFamily : 'Arial' , fontWeight : 'bold'}}> Udemy Courses &#9754;  </h5>
            <div className="butt_yt">

            <button className="btn_html_yt" onClick = {HtmlUd } > Click Me </button>
            </div>
            </div>

        {/* < ---------------------------------------- 4 ---------------------------------------------------- >*/}

            <div className="container_html_pg" >  {/* Container FOr Youtube.... */}

            <img className="html_logo_yt" style={{height : '90px' , width : '90px'}}  src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" />
            <h5 style={{margin : '30px 0px 0px 30px' , fontFamily : 'Arial' , fontWeight : 'bold'}}> GitHub &#9754; </h5>
            <div className="butt_yt">

            <button className="btn_html_yt"  onClick = { HtmlGit} > Click Me </button>
            </div>
            </div>

            {/* < -------------------------------------- 5 ---------------------------------------------------- >*/}

            <div className="container_html_pg" >  {/* Container FOr Youtube.... */}

            <img className="html_logo_yt" style={{height : '90px' , width : '120px', marginLeft : '30px'}}  src="https://miro.medium.com/v2/resize:fit:799/0*yxCtOgS-v50Sqfzw.jpeg" />
            <h5 style={{margin : '30px 0px 0px 20px' , fontFamily : 'Arial' , fontWeight : 'bold'}}> Geeks For Geeks &#9754; </h5>
            <div className="butt_yt">

            <button className="btn_html_yt"  onClick = {HtmlGfg } > Click Me </button>
            </div>
            </div>

            {/* < -------------------------------------- 6 ---------------------------------------------------- >*/}

            <div className="container_html_pg" >  {/* Container FOr Youtube.... */}

            <img className="html_logo_yt" style={{height : '90px' , width : '90px'}}  src="https://img.freepik.com/premium-vector/continuous-line-building-city-logo-design_15473-14266.jpg?semt=ais_hybrid" />
            <h5 style={{margin : '30px 0px 0px 30px' , fontFamily : 'Arial' , fontWeight : 'bold'}}> Basic Projects &#9754;  </h5>
            <div className="butt_yt">

            <button className="btn_html_yt" onClick = { HtmlBp} > Click Me </button>

            </div>
            </div>

            {/* < ------------------------------------- 7 ---------------------------------------------------- >*/}

            <div className="container_html_pg" >  {/* Container For Youtube.... */}

            <img className="html_logo_yt" style={{height : '90px' , width : '90px'}}  src="https://cdn3.vectorstock.com/i/1000x1000/69/17/practice-stamp-on-white-vector-21646917.jpg" />
            <h5 style={{margin : '30px 0px 0px 30px' , fontFamily : 'Arial' , fontWeight : 'bold'}}>Practice Qns &#9754; </h5>
            <div className="butt_yt">

            <button className="btn_html_yt"  onClick = {HtmlQns } > Click Me </button>

            </div>
            </div>

        </>
    )
}

export default HTML; 