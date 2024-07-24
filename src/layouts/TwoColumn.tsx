import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Container from '@mui/joy/Container'
import { typographyClasses } from '@mui/joy/Typography'
import { PropsWithChildren } from 'react'

export default function TwoSidedLayout({
  children,
  reversed,
}: PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Container
      sx={(theme) => ({
        alignItems: 'center',
        display: 'flex',
        flexDirection: reversed ? 'column-reverse' : 'column',
        gap: 4,
        minHeight: '100vh',
        position: 'relative',
        py: 10,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 999,
          gap: '1rem',
          maxWidth: '50ch',
          textAlign: 'center',
          [theme.breakpoints.up(834)]: {
            alignItems: 'flex-start',
            minWidth: 420,
            textAlign: 'initial',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        {children}
      </Box>
      <AspectRatio
        ratio={600 / 520}
        variant='outlined'
        maxHeight={300}
        sx={(theme) => ({
          alignSelf: 'stretch',
          bgcolor: 'background.level2',
          [theme.breakpoints.up(834)]: {
            '--AspectRatio-maxHeight': '520px',
            '--AspectRatio-minHeight': '400px',
            alignSelf: 'initial',
            flexGrow: 1,
          },
          borderRadius: 'sm',
          flexBasis: '50%',
          minWidth: 300,
        })}
      >
        <img
          src='https://images.unsplash.com/photo-1483791424735-e9ad0209eea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          alt=''
        />
      </AspectRatio>
    </Container>
  )
}
