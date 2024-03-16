import {
  AppBar,
  alpha,
  Button,
  Box,
  Container,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  styled,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { MenuRounded as MenuRoundedIcon } from '@mui/icons-material'
import { useState } from 'react'

const DRAWER_WIDTH = 240

const ROUTES = [
  {
    path: '/about',
    title: 'about',
  },
  {
    path: '/service',
    title: 'Service',
  },
  {
    path: '/rooms',
    title: 'rooms',
  },
  {
    path: '/blog',
    title: 'blog',
  },
  {
    path: '/contact',
    title: 'contact',
  },
]

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  textTransform: 'capitalize',
  fontWeight: 'normal',
  minWidth: 'unset',
}))

const DesktopNav = () => (
  <Stack
    direction='row'
    justifyContent='space-evenly'
    sx={{ flexGrow: 1, mx: 'auto', px: 1.5, maxWidth: 480 }}
  >
    {ROUTES.map(({ title, path }) => (
      <StyledButton key={path} LinkComponent='a' to={path}>
        {title}
      </StyledButton>
    ))}
  </Stack>
)

const Drawer = ({ handleDrawerToggle }) => (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Toolbar />
    <List>
      {ROUTES.map(({ title, path }) => (
        <ListItem key={path} disablePadding>
          <ListItemButton
            LinkComponent='a'
            to={path}
            sx={theme => ({
              '&.active': {
                bgcolor: alpha(
                  theme.palette.primary.main,
                  theme.palette.action.selectedOpacity
                ),
              },
            })}
          >
            <ListItemText
              align='center'
              primary={title}
              sx={{ textTransform: 'capitalize' }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)

const MobileNav = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        // edge='end'
        onClick={handleDrawerToggle}
        sx={{
          order: 1,
          ml: 1.5,
          borderWidth: 1,
          borderColor: '#FFFFFF4B',
          borderStyle: 'solid',
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
      <nav>
        <MuiDrawer
          anchor='right'
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              bgcolor: '#EDF1F5',
            },
          }}
        >
          <Drawer handleDrawerToggle={handleDrawerToggle} />
        </MuiDrawer>
      </nav>
    </>
  )
}

const Nav = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <AppBar
      variant='stat'
      component='nav'
      elevation={0}
      sx={{
        background:
          'linear-gradient(180deg, #21364E 0%, rgba(33, 54, 78, 0.1) 90%, rgba(33, 54, 78, 0) 100%)',
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant='h5'
            component='div'
            fontWeight='normal'
            sx={{
              width: 140,
              pr: 1.5,
              flexGrow: { xs: 1, md: 0 },
              flexShrink: 1,
              cursor: 'default',
            }}
          >
            HOTEL
          </Typography>
          {isDesktop ? <DesktopNav /> : <MobileNav />}
          <Button
            variant='outlined'
            color='inherit'
            sx={{
              borderColor: '#FFFFFF4B',
              borderRadius: '18.25px',
              minWidth: 140,
              fontWeight: 'light',
            }}
          >
            SIGN UP
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav
