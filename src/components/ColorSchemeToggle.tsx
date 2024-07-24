import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import IconButton from '@mui/joy/IconButton'
import { useColorScheme } from '@mui/joy/styles'
import { useState, useEffect } from 'react'

export const ColorSchemeToggle = () => {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <IconButton
      data-test-id='toggleSchemeButton'
      size='md'
      variant='soft'
      color='neutral'
      onClick={() => {
        if (mode === 'light') {
          setMode('dark')
        } else {
          setMode('light')
        }
      }}
      sx={{
        borderRadius: '50%',
        boxShadow: 'sm',
        position: 'fixed',
        right: '1rem',
        top: '1rem',
        zIndex: 999,
      }}
    >
      {mode === 'light' ? <DarkModeRounded /> : <LightModeRounded />}
    </IconButton>
  )
}
