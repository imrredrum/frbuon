import {
  Add as AddIcon,
  ExpandMore as ExpandMoreIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material'
import {
  alpha,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Grid,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
import { useRef, useState } from 'react'

const Picker = ({ open, handleClose, min, defaultValue, handleChange }) => {
  const pickerRef = useRef(defaultValue)

  const handleSubmit = () => {
    handleClose()
    handleChange(pickerRef.current)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <DateCalendar
          disableHighlightToday
          defaultValue={defaultValue}
          sx={{ width: '100%' }}
          minDate={min}
          onChange={(newValue, selectionState) => {
            if (selectionState === 'finish') pickerRef.current = newValue
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const CardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  backgroundColor: '#2C4664',
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 32,
  paddingRight: 32,
  [theme.breakpoints.up('md')]: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingLeft: 22,
    paddingRight: 22,
  },
}))

const DateButton = ({ date, handleClick }) => (
  <Button
    color='inherit'
    startIcon={
      <Box>
        <Typography fontSize={56} component='div'>
          {date.format('DD')}
        </Typography>
      </Box>
    }
    endIcon={<ExpandMoreIcon />}
    sx={{
      textAlign: 'left',
      textTransform: 'capitalize',
      '.MuiButton-startIcon': { mr: 2.5 },
      '.MuiButton-endIcon': { mr: 'unset' },
    }}
    onClick={handleClick}
  >
    <Stack spacing={1} sx={{ minWidth: 88 }}>
      <Typography fontSize={18} lineHeight={1} component='div'>
        {date.format('MMM, YYYY')}
      </Typography>
      <Typography
        fontSize={14}
        fontWeight={300}
        lineHeight={1}
        color='#FFFFFF7E'
        component='div'
      >
        {date.format('dddd')}
      </Typography>
    </Stack>
  </Button>
)

const PeopleAmount = ({ amount, min = 0, handleChange }) => (
  <Stack
    direction='row'
    justifyContent='center'
    alignItems='center'
    spacing={1}
    sx={{ p: '6px 8px' }}
  >
    <IconButton
      color='inherit'
      onClick={handleChange(-1)}
      disabled={amount <= min}
      sx={{
        '&.Mui-disabled': {
          color: 'rgba(255, 255, 255, 0.26)',
        },
      }}
    >
      <RemoveIcon />
    </IconButton>
    <Typography fontSize={56} component='div'>
      {amount}
    </Typography>
    <IconButton color='inherit' onClick={handleChange(1)}>
      <AddIcon />
    </IconButton>
  </Stack>
)

const Filter = () => {
  const [arrival, setArrival] = useState(dayjs())
  const [departure, setDeparture] = useState(dayjs().add(1, 'days'))
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  const [open, setOpen] = useState(false)

  const handleOpen = dialog => () => {
    setOpen(dialog)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChangeDate = dialog => newValue => {
    if (dialog === 'arrival') {
      setDeparture(prev => {
        if (!prev.isAfter(newValue))
          return prev.add(prev.diff(arrival, 'days'), 'days')
        return prev
      })
      setArrival(newValue)
    } else if (dialog === 'departure') {
      setDeparture(newValue)
    }
  }

  const handleChangeAmount = setTarget => change => () => {
    setTarget(prev => prev + change)
  }

  return (
    <>
      <Container
        sx={{
          mt: { xs: -50, sm: -27.5 },
        }}
      >
        <Card
          sx={{
            bgcolor: '#21364E',
            color: '#fff',
            borderRadius: 3.75,
          }}
        >
          <Grid container alignItems='stretch' spacing='1px'>
            <Grid item xs={12} md>
              <CardBox>
                <Typography
                  variant='subtitle2'
                  fontSize={14}
                  fontWeight={300}
                  component='div'
                  color='#FFFFFF7E'
                >
                  ARRIVAL
                </Typography>
                <DateButton
                  date={arrival}
                  handleClick={handleOpen('arrival')}
                />
              </CardBox>
            </Grid>
            <Grid item xs={12} md>
              <CardBox>
                <Typography
                  variant='subtitle2'
                  fontSize={14}
                  fontWeight={300}
                  component='div'
                  color='#FFFFFF7E'
                >
                  DEPARTURE
                </Typography>
                <DateButton
                  date={departure}
                  handleClick={handleOpen('departure')}
                />
              </CardBox>
            </Grid>
            <Grid item xs={12} md>
              <Grid container wrap='nowrap' spacing='1px'>
                <Grid item xs={6} md>
                  <CardBox>
                    <Typography
                      variant='subtitle2'
                      fontSize={14}
                      fontWeight={300}
                      align='center'
                      component='div'
                      color='#FFFFFF7E'
                    >
                      ADULTS
                    </Typography>
                    <PeopleAmount
                      amount={adults}
                      min={1}
                      handleChange={handleChangeAmount(setAdults)}
                    />
                  </CardBox>
                </Grid>
                <Grid item xs={6} md>
                  <CardBox>
                    <Typography
                      variant='subtitle2'
                      fontSize={14}
                      fontWeight={300}
                      align='center'
                      component='div'
                      color='#FFFFFF7E'
                    >
                      CHILDREN
                    </Typography>
                    <PeopleAmount
                      amount={children}
                      handleChange={handleChangeAmount(setChildren)}
                    />
                  </CardBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md>
              <CardBox sx={{ px: { xs: 8, md: 4 }, py: 6 }}>
                <Button
                  variant='contained'
                  disableElevation
                  fullWidth
                  size='large'
                  sx={{
                    bgcolor: '#C8FF8C',
                    color: '#333',
                    fontWeight: 300,
                    borderRadius: 5.5,
                    whiteSpace: 'nowrap',
                    '&:hover': { bgcolor: alpha('#C8FF8C', 0.8) },
                  }}
                >
                  CHECK AVAILABILITY
                </Button>
              </CardBox>
            </Grid>
          </Grid>
        </Card>
        <IconButton
          size='large'
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#fff',
            color: '#333',
            '&:hover': {
              bgcolor: '#fff',
            },
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Container>
      {open && (
        <Picker
          open={Boolean(open)}
          handleClose={handleClose}
          min={open === 'departure' ? arrival.add(1, 'days') : dayjs()}
          defaultValue={
            open === 'arrival'
              ? arrival
              : open === 'departure'
              ? departure
              : dayjs()
          }
          handleChange={handleChangeDate(open)}
        />
      )}
    </>
  )
}

export default Filter
