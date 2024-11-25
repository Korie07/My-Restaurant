import React from 'react'
import {menulist} from '../Data/Data'
import Layout from '../Component/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, MenuList, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex', flexWrap:"wrap", justifyContent:'center'}}>
        {
           menulist.map(Menu =>(
          <Card sx={{maxWidth:'390px', display:'flex', m:2}}>
            <CardActionArea>
              <CardMedia  
              sx={{minHeight:"400px"}}
              component={'img'} 
              src={Menu.image} 
              alt={Menu.name}/>

              <CardContent>
                <Typography variant='h5' gutterBottom component={"div"}>
                  {Menu.name}
                </Typography>
                <Typography variant=' body2' >{Menu.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>  
          )

          )
        }
      </Box>
    </Layout>
  )
}

export default Menu
