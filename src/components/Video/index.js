import { PlayArrow as PlayArrowIcon } from '@mui/icons-material'
import {
  alpha,
  Box,
  Card,
  CardMedia,
  IconButton,
  Typography,
  styled,
} from '@mui/material'
import VideoCover from './cover.svg'

const PlayButton = styled(IconButton)(({ theme }) => ({
  width: 80,
  height: 80,
  backgroundColor: '#2C4664',
  color: '#C8FF8C',
  transition: theme.transitions.create(
    ['background-color', 'border-color', 'color'],
    {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }
  ),
  '&:hover': {
    backgroundColor: alpha('#2C4664', 0.9),
  },
}))

const Video = () => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      my: { xs: 5, md: 'unset' },
      aspectRatio: { xs: '346 / 560', sm: '1 / 1' },
      borderRadius: 7.5,
      boxShadow: '20px 20px 40px #0000001A',
    }}
  >
    <CardMedia
      component='img'
      sx={{ aspectRatio: { xs: '346 / 416', sm: '570 / 416' } }}
      image={VideoCover}
      alt='video cover'
    />
    <Box
      sx={{
        flex: '1 0 auto',
        px: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <PlayButton aria-label='play/pause'>
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      </PlayButton>
      <Box sx={{ flex: '1 0 auto', px: 2 }}>
        <Typography
          variant='subtitle1'
          fontSize={24}
          fontWeight={300}
          component='div'
        >
          Play Video
        </Typography>
        <Typography
          variant='caption'
          fontSize={18}
          fontWeight={300}
          color='#33333380'
          component='div'
        >
          2:34
        </Typography>
      </Box>
    </Box>
  </Card>
)

export default Video
