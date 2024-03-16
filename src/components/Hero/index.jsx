import { Box, Container, Toolbar, Typography } from '@mui/material'
import Parallax from '../Parallax'
import HeroBg from './background.svg'
import Thumbnails from './Thumbnails'

const Hero = () => (
  <Box sx={{ width: '100%', height: 880, position: 'relative', color: '#fff' }}>
    <Parallax>
      <img
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src={HeroBg}
        alt=''
      />
    </Parallax>
    <Container sx={{ position: 'relative', height: '100%' }}>
      <Toolbar />
      <Typography
        variant='h1'
        fontSize={{ xs: 56, sm: 72 }}
        sx={{ mt: { xs: 7, sm: 19.5 }, width: { xs: 230, sm: 330 } }}
      >
        Exclusive Boutique Hotel
      </Typography>
      <Typography variant='subtitle1' fontSize={20} sx={{ mt: 3 }}>
        Luxury Boutique Hotel
      </Typography>
      <Thumbnails />
    </Container>
  </Box>
)

export default Hero
