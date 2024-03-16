'use client'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

const ParallaxBox = styled(Box)({
  '@keyframes parallax': {
    to: {
      transform: 'translateY(var(--offset-height))',
    },
  },
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: -1,
  contain: 'paint',
  '& > img': {
    objectFit: 'cover',
  },
  '& > *': {
    animation: 'parallax linear',
    animationTimeline: 'scroll()',
  },
})

const Parallax = ({ children, sx, ...rest }) => {
  const [height, setHeight] = useState()

  useEffect(() => {
    if (window && window.document) {
      setHeight(window.document.body.offsetHeight)
    }
  }, [])

  return (
    <ParallaxBox
      {...rest}
      sx={{ '& > *': { '--offset-height': `${height / 3}px` }, ...sx }}
    >
      {children}
    </ParallaxBox>
  )
}

export default Parallax
