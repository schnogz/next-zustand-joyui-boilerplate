import { Avatar, Box, Container, Grid, typographyClasses, Typography } from '@mui/joy'
import { PropsWithChildren } from 'react'

const deps = [
  {
    imgUrl:
      'https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp',
    name: 'NextJs',
  },
  {
    imgUrl: 'https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png',
    name: 'React',
  },
  {
    imgUrl:
      'https://cdn.iconscout.com/icon/free/png-256/free-typescript-3521774-2945272.png?f=webp&w=256',
    name: 'TypeScript',
  },
  {
    imgUrl: 'https://pbs.twimg.com/profile_images/1438268853079904265/JUtTwrBC_400x400.jpg',
    name: 'MUI Joy',
  },
  {
    imgUrl:
      'https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fglll1swn5umyjemv09ql.png',
    name: 'React Query',
  },
  {
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s',
    name: 'Zustand',
  },
  {
    imgUrl: 'https://logowik.com/content/uploads/images/jest-js7858.logowik.com.webp',
    name: 'Jest',
  },
  {
    imgUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/eslint_logo_icon_171175.png',
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
