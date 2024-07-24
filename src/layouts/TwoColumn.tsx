import { Avatar, Box, Container, Grid, typographyClasses, Typography } from '@mui/joy'
import { PropsWithChildren } from 'react'

const deps = [
  {
    imgUrl:
      'https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp',
    name: 'NextJs',
  },
  { imgUrl: 'https://cdn-icons-png.flaticon.com/256/919/919832.png', name: 'TypeScript' },
  { imgUrl: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg', name: 'MUI Joy' },
  {
    imgUrl: 'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png',
    name: 'React Query',
  },
  {
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s',
    name: 'Zustand',
  },
  { imgUrl: 'https://seeklogo.com/images/I/immer-logo-6F66C903D6-seeklogo.com.png', name: 'Immer' },
  {
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-256/free-jest-3521517-2945020.png?f=webp&w=256',
    name: 'Jest',
  },
  {
    imgUrl: 'https://w7.pngwing.com/pngs/975/336/png-transparent-eslint-hd-logo.png',
    name: 'ESLint',
  },
  {
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3NGvTsc50zIrOgETbYNxkhh0UtVWAS6Bsw&s',
    name: 'Husky',
  },
]

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
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            '& > div': {
              border: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
            },
            '--Grid-borderWidth': '1px',
          }}
        >
          {deps.map((dep, i) => (
            <Grid
              key={i}
              xs={4}
              display='flex'
              flexDirection='column'
              justifyContent='center'
              gap={1}
              alignItems='center'
              minHeight={150}
            >
              <Avatar variant='plain' src={dep.imgUrl} size='lg' color='neutral' />
              <Typography fontSize='lg' lineHeight='lg'>
                {dep.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
