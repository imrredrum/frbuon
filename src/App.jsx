import { Box, Container, Grid } from '@mui/material'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Video from './components/Video'
import Footer from './components/Footer'
import Filter from './components/Filter'

const App = () => (
  <Box>
    <Nav />
    <Hero />
    <Filter />
    <Container component='section' sx={{ color: '#333' }}>
      <Grid
        container
        alignItems='center'
        sx={{ pt: { xs: 11, sm: 18 }, pb: { xs: 14, md: 18 } }}
      >
        <Grid item xs={12} md={6}>
          <About />
        </Grid>
        <Grid item xs={12} md={6}>
          <Video />
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </Box>
)

export default App
