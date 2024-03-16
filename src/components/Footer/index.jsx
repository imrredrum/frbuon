import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material'
import {
  MailOutlined as MailIcon,
  PhoneInTalkOutlined as PhoneInTalkIcon,
  WhereToVoteOutlined as WhereToVoteIcon,
} from '@mui/icons-material'

const Footer = () => (
  <Box component='footer' sx={{ bgcolor: '#2C4664', color: '#fff', py: 9 }}>
    <Container>
      <Grid container alignItems='flex-end' spacing={8}>
        <Grid item xs={12} sm>
          <Typography fontSize={56} component='div'>
            HOTEL
          </Typography>
          <List
            dense
            disablePadding
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              columnGap: 3.5,
              '.MuiListItemIcon-root': {
                color: 'inherit',
                minWidth: 'unset',
                mr: 2,
              },
              '.MuiListItem-root': { width: { xs: '100%', sm: 'unset' } },
              '.MuiTypography-root': { fontSize: 18 },
            }}
          >
            <ListItem disableGutters>
              <ListItemIcon>
                <PhoneInTalkIcon />
              </ListItemIcon>
              <ListItemText primary='(4321) 0987-654-320' />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary='support@hotel.com' />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <WhereToVoteIcon />
              </ListItemIcon>
              <ListItemText
                primary='33 Jaja Park Rd, Yellow, USA'
                primaryTypographyProps={{ color: '#FFFFFF80' }}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md='auto'>
          <Typography fontSize={24} component='div' sx={{ width: { md: 274 } }}>
            Subscribe
          </Typography>
          <TextField
            type='email'
            fullWidth
            placeholder='Email'
            sx={{
              mt: { xs: 3, md: 2 },
              mb: { xs: 2, md: 1.5 },
              '.MuiInputBase-root': { bgcolor: '#fff' },
            }}
          />
          <Typography
            variant='caption'
            fontSize={14}
            fontWeight={300}
            color='#FFFFFF7E'
            component='div'
          >
            No spam. Only profit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer
