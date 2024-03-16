import { Box, Button, Typography } from '@mui/material'

const About = () => (
  <Box sx={{ py: { xs: 5, md: 'unset' } }}>
    <Typography
      variant='h3'
      fontSize={{ xs: 40, md: 56 }}
      fontWeight={300}
      sx={{ width: { xs: 250, md: 350 } }}
    >
      Luxury Plaza Hotel for You
    </Typography>
    <Typography
      variant='body1'
      fontSize={18}
      fontWeight={300}
      color='#33333380'
      sx={{ mt: 3.5, mb: 4.5, maxWidth: 400 }}
    >
      Distant orb has power to raise and purify our thoughts like a strain of
      sacred music.
    </Typography>
    <Button
      variant='outlined'
      color='inherit'
      sx={{
        borderColor: 'rgba(51, 51, 51, 0.32)',
        borderRadius: '18.25px',
        minWidth: 140,
        fontWeight: 'light',
      }}
    >
      ABOUT US
    </Button>
  </Box>
)

export default About
