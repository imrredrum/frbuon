import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material'
import { Box, IconButton as MuiIconButton, styled } from '@mui/material'

const StyledButton = styled(MuiIconButton)({
  color: 'inherit',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.3)',
  borderStyle: 'solid',
  flex: '0 0 auto',
  marginRight: 10,
})

const IconButton = props => (
  <StyledButton
    size='large'
    target='_blank'
    rel='noopener noreferrer'
    {...props}
  />
)

const Thumbnails = () => (
  <Box sx={{ mt: 5.5 }}>
    <IconButton href='/facebbok'>
      <FacebookIcon />
    </IconButton>
    <IconButton href='/twitter'>
      <TwitterIcon />
    </IconButton>
    <IconButton href='/instagram'>
      <InstagramIcon />
    </IconButton>
  </Box>
)
export default Thumbnails
