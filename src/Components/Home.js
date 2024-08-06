import React from 'react'
import "./style.css"
import image from "../assets/homeimage.jpg"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate=useNavigate()
  const navigathepage=()=>{
    navigate('/quizlist')
  }
  return (
    
    // <div className='container home d-flex '>
       
    //       <div className='home_text'><h1>Welcome to the Quiz</h1>

          
    //              <pre>         
    //               Quiz is powerful Quizzing 
    //                                 platform developed by sivaji
    //               </pre>
                   
    //              <button>Get Started</button>
    //       </div>
    //       <div className='home_text'>
    //         <img src="" alt="not"/>
    //         </div>
      <div className="home d-flex">
          <div className='home-left'>
            <div className='home_text'>
                    <h1>Welcome to Quiz</h1>
              <p className='p-text text-center'>Quiz is a powerful quizzing  platform developed by MultiCode group.</p>
            </div>
          <button
            className="btn get-started-btn shadow-lg p-2 bg-white rounded" 
            onClick={navigathepage}>Get Started</button>
      
          </div>
        
        <div className='home-right'>
            <img src={image} alt="Welcome" className='main-image'/>
        </div>
    </div>

       
    
  )
}

export default Home