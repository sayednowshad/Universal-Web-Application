import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import './web.css';


export function NavBar(){ 

    return (

        <>

        <nav>

      <ul>

        <li><Link to="/"> Home Page </Link></li>
        <li><Link className='hello' to="/contact"> Contact </Link></li>
        <li><Link to="/about"> About </Link></li>
        <li><Link to="/explore"> Explore More </Link> </li>
        <li><Link to="/subscription"> Subscription </Link></li>
        {/* <li><Link to='/faq'> FAQ </Link></li>  */}

      </ul>

      </nav>
   
    </>
        
    )
}

// export function Header(){

//   return(

//     <>
    

//     </>
//   )
// }

export function CardSec(){

  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explore');
  };

    return(

        <>

           <div className="h1">

            <h1 className="universal"> Welcome to Universal All In<br/> One WEBSITE</h1>

            </div>

            <h4 >

            <h3 className='tittle'> Unlimited resources to reduce your searching time, increasing explore more.<br/> Yeah,This website to             explore more with effective and reduce the time. </h3>

            </h4>

            <button className="butt" onClick={handleExploreClick} > Explore More &#x2192; </button>

            <h2 className='head'> Dive into your specific catagories for more</h2>

            <h5 className='about'> Get all your wish domain to search more , do more without wasting a second you can chose the<br/> topic related on <strong style={{textDecoration: 'underline'}}> YouTube , Video Playlists, Coursera , LinkedIn</strong>  & more </h5>


        <div className="contain">

        <div className="container">

    <img className='image' src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/00b4aa50ad9e3233e50c4a39e3df94f0.png?auto=format%2Ccompress&dpr=1&h=55"/>

    <p className="matt"> Explore More </p>
    <p className='matter'> Explore any interest or trending topic, advance your skills without waste of time &more to get through easily</p>
    <button className='b_t' onClick={handleExploreClick}> Explore more </button>
    </div>
      {/*2nd container*/}

    <div className="container">

    <img className='image' style={{height : '60px' , width : '70px', marginTop : '15px'}} src="https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-sand-clock-line-icon-vector-png-image_6630917.png" />

    <p className="matt"> Save Time </p>
    <p> Save your time & explore more contains all the values you can you this for the better experience further more.</p>
    <button className='b_t' style= {{marginTop : '4px'}} onClick={handleExploreClick}> Explore more </button>
    </div>
        {/* 3nd container */}

    <div className="container"> 

    <img className='image' style={{height : '50px' , width : '50px'}} src="https://thumbs.dreamstime.com/b/link-icon-vector-isolated-white-background-transparent-sign-warning-symbol-warni-133798619.jpg" />

    <p className="matt"> All page links </p>
    <p> Contains the all the links for all the specific domain if you were chosen related topic of for your choice wish. </p>

    <button className='b_t' style= {{marginTop : '28px'}} onClick={handleExploreClick}> Explore more </button>

    </div>

    </div>

        </>
    )
}

export function AboutCard(){

    return(

        <>
        
            <h1 className='card_head'> What you can do with this website </h1>

            <div className="use_case">
              <h4> we provide all the links of social media without searching further more. If your a Web developer || AI / ML || UI designer & more... all the related links are available of your topic </h4>
            </div>

            <h2 className="P_F"> Platforms like: </h2>

            <div className="Images">

              <img style={{height : '90px' , width : '100px', marginRight: '40px'}} src="https://www.shutterstock.com/image-vector/gomel-belarus-november-23-2023-600nw-2397966501.jpg" /> 
              <img style={{height : '90px' , width: '100px', marginRight: '50px'}} src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=360" />

              <img style={{height : '65px' , width: '70px', marginRight: '50px' , marginTop:'10px'}} src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" />

              <img style={{height : '90px' , width: '100px', marginRight: '50px'}} src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" />
      
              <img style={{height : '90px' , width: '100px', marginRight: '50px'}} src="https://external-preview.redd.it/_YkDt-pGSmFgQ95HdwH63zyqX340f_Z8C7x138BX2no.jpg?auto=webp&s=ae3c5522567706e0667fd85c58338dfcceeaaea2"/>
      
              <img style={{height : '90px' , width: '100px', marginRight: '50px'}} src="https://www.brentozar.com/wp-content/uploads/2020/06/Stack_Overflow.png"/>
      
              <img style={{height : '90px' , width: '100px', marginRight: '50px'}} src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"/>
      
              <img style={{height : '90px' , width: '100px', marginRight: '50px'}} src="https://i0.wp.com/blog.tunemymusic.com/wp-content/uploads/2023/05/YouTube-Playlist-article-feature-image.jpg?fit=1200%2C670&ssl=1"/>
      
              <img style={{height : '90px' , width: '100px', marginRight: '50px'}} src=" https://pageflows.com/media/logos/udemy.png"/>

            </div>

        </>
    )
}

export function Login(){


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return(

    <>
    
      <h3 className='final'> You can access the all the available files and link for free Please Login our page </h3>
      <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-heading">Login</h2>
        <label htmlFor="email" className="login-label">Email</label>
        <input
          type="email"
          id="email"
          className="login-input"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password" className="login-label">Password</label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>


    </>
  )
}

export function FAQ(){

<div className='concat'>

</div>
  const faqData = [

    {  question: "1. What is this platform about?", answer: "Our platform provides links to resources, guides, and tutorials for a wide range of domains and technical aspects, making it easier to find valuable learning materials." },
    { question: "2. How can I find a link for Domains? ", answer: " Click on the Explore More and go to that page and explore what or which domain you want." },
    { question: "3. Are these resources free to access?", answer: " Yeah, Now most of the links we provide are free, but we will bring into premium version soon." },
    { question : "4. How often are the links updated?" , answer : "We update our links regularly to ensure they remain relevant and accessible. If you find a broken link, please report it to us. "},
    { question : "5. What types of resources are available? " , answer : " We offer a variety of resources, including articles, tutorials, videos, and guides across multiple technical fields."},
    { question : "6.  What if I don’t find resources for the topic I’m looking for?" , answer : "  If a topic isn’t available, please use our “Suggest a Topic” feature, and we’ll work on adding resources for it as soon as possible."},
  
  ];

  // State to track which answer is open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the answer
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return(


    <>
    
    <div className="faq-section">

      <h2 className='header'> Frequently Asked Questions </h2>

      {faqData.map((faq, index) => (
        <div key={index} style={{ cursor: 'pointer' }}>
          <h3 onClick={() => toggleAnswer(index)} style={{ color: 'black', border :' 1px solid black' , padding : '20px', fontSize: '24px' }}>
            {faq.question}

          </h3>

          {openIndex === index && <p style={{ color: 'grey' , fontSize: "22px" , marginTop: '20px' , fontFamily : 'cursive' , marginLeft : '15px' }}>{faq.answer}</p>}

        </div>
      ))}
    </div>
    
    </>
  )
}

                   // Footer Section 

export function Footer(){

  return(


    <>
    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text"> We are dedicated to providing quality content and services for our users. </p>
        </div> 
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">Email: sayednowshad58@gmail.com </p>
          <p className="footer-text">Phone: 8688938129</p>
        </div>
      {/* Footer Section I Love This */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Me </h3>
          <p className="footer-text">
            <a href="https://www.linkedin.com/in/sayednowshad/" className="footer-link">LinkedIn</a> | 
            <a href="https://github.com/sayednowshad" className="footer-link"> GitHub</a> | 
            <a href="https://www.geeksforgeeks.org/user/sayednowbrg5/" className="footer-link"> GFG </a>
          </p>
        </div>
      {/* Footer Section End I Miss this */} 

      </div>
      <div className="footer-bottom-text">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>

    </>
  )
}
