import React from 'react'
import Layout from '../Component/Layout/Layout'
import Header from '../Component/Layout/Header'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
    <Layout>
       <Box sx={{
        my:15,
        textAlign:"center",
        p:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify",
        },
       "@media (max-width:667px)":{
        mt:0,
        "& h4":{
          fontSize:"1.5rem",
        }
       }
       }}
       >
        <Typography variant='h4'> Welcome TO My Restaurant </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          A fuga vero repellat unde id officia possimus quisquam quos magni 
          laboriosam ex asperiores natus corrupti nemo rerum voluptatibus harum,
           quaerat quia magnam necessitatibus. Quia recusandae aut sit est at quaerat
            consequatur, non architecto modi officiis dolore asperiores blanditiis fugit 
            tempora voluptatibus optio placeat, beatae, quod distinctio. Minus iste dolorem
             voluptate similique culpa veritatis, optio eveniet aut iusto rerum molestiae 
             obcaecati tempora commodi, inventore dolore sequi consequuntur ullam. Similique
             obcaecati deserunt aspernatur provident! Eligendi, amet quis quos omnis necessitatibus
              corporis suscipit doloribus odit, assumenda dolorem voluptatibus sed dignissimos 
              itaque minima nihil reiciendis.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, libero. Natus quia perspiciatis
           nemo ad adipisci minima provident quam, placeat quisquam illum velit mollitia doloribus 
           reprehenderit sunt cupiditate voluptas asperiores impedit odio iure modi iusto consequatur 
           maxime totam. Odit, consequuntur ipsum. Iste, ad. Consequatur adipisci dolorem perspiciatis 
           fuga voluptates quidem magnam voluptas fugiat repudiandae consequuntur vel quae unde ea rerum 
           officia, inventore quas omnis recusandae impedit sed asperiores consectetur! Commodi
           accusamus, quam illo error facilis ab repellat atque modi cupiditate doloribus nesciunt
            velit dignissimos, exercitationem ea animi deserunt quidem non fugiat, iusto nam ducimus? Delectus animi
           deleniti voluptas accusamus similique?
        </p>
       </Box>
    </Layout>
  
  
  )
}

export default About
