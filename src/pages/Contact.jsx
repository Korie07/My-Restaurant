import React from 'react'
import Layout from '../Component/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
       <Box sx={{my:10, ml:10, "& h4":{fontWeight:'bold', mb:2 }}}>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur dolores assumenda tempora dolorem ex iure nam itaque ipsam harum laudantium hic, totam voluptatum qui asperiores, aliquid natus, ratione perspiciatis.
        </p>
       </Box>
       <Box sx={{m:3, width:'600px', ml:10, "@media (max-width:667px)":{
width:"333px",
       }
        
       }}
       >
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white',  }} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                 <SupportAgentIcon sx={{color:"red", pt:1}} /> 0087-3422-1235 (torollfree)
                </TableCell>
                
              </TableRow>
              <TableRow>
                 <TableCell>
                 <EmailIcon sx={{color:"skyblue", pt:1}} /> jennylove.com
                </TableCell>
              </TableRow>
               <TableRow>
                 <TableCell>
                 <CallIcon sx={{color:"green", pt:1}} /> 0815789432
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>

        </TableContainer>
       </Box>
    </Layout>
  
  )
}

export default Contact
