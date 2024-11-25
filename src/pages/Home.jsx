import React from 'react'
import Layout from '../Component/Layout/Layout'
import { Link } from 'react-router-dom'
import egusi2 from "../assets/egusi2.jpg"
import "../styles/HomeStyle.css";
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${egusi2})`,
      // backgroundRepeat:"no-repeat",
      // backgroundPosition:"center",
      // height:"100vh",
      // widows:"100vw",
    }}>
        <div className='headercontainer'> 
<h1> My Food Website</h1>
<p>Best Local Dishes In South East, Nigeria.</p>
<Link to="/menu">
<button>ORDER NOW</button>  
</Link>
    </div>

      </div>
    </Layout>

  )
}

export default Home
