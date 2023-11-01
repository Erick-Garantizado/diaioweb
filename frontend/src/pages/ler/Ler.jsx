import React from 'react'
import NavUser from '../../components/NavUser'
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material'

const Ler = () => {
  return (
    <>
      <NavUser/>
      <Container>
        <Box>
          <Card sx={{ width: 320 }}>
            <div>
              <Typography level="title-lg">Yosemite National Park</Typography>
              <Typography level="body-sm">April 24 to May 02, 2021</Typography>              
            </div>            
            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
              >
                Explorar
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  )
}

export default Ler