import ArrowForward from '@mui/icons-material/ArrowForward'
import Star from '@mui/icons-material/Star'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Input from '@mui/joy/Input'
import Typography from '@mui/joy/Typography'

import { ColorSchemeToggle } from '@/components/ColorSchemeToggle'
import TwoColumnLayout from '@/layouts/TwoColumn'
import { useContentState } from '@/store/useStore'
import { NextPageWithLayout } from '@/types/layout'

const HomePage: NextPageWithLayout = () => {
  const { title } = useContentState()
  return (
    <>
      <ColorSchemeToggle />
      <Typography color='primary' fontSize='lg' fontWeight='lg'>
        The boilerplate to build fast
      </Typography>
      <Typography level='h1' fontWeight='xl' fontSize='clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)'>
        {title}
      </Typography>
      <Typography fontSize='lg' textColor='text.secondary' lineHeight='lg'>
        The form does not work and the following information is not necessarily true!
      </Typography>
      <Box
        sx={{
          '& > *': { flex: 'auto' },
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          my: 2,
        }}
      >
        <Input size='lg' placeholder='Sign in with email' />
        <Button size='lg' endDecorator={<ArrowForward sx={{ fontSize: 'xl' }} />}>
          Get Started
        </Button>
      </Box>
      <Box
        sx={(theme) => ({
          '& > *': {
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
          },
          alignSelf: 'stretch',
          columnGap: 4.5,
          display: 'flex',
          textAlign: 'center',
          [theme.breakpoints.up(834)]: {
            '& > *': {
              flex: 'none',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              gap: 1.5,
              justifyContent: 'initial',
            },
            textAlign: 'left',
          },
        })}
      >
        <div>
          <Typography
            fontSize='xl4'
            fontWeight='lg'
            endDecorator={<Star sx={{ color: 'warning.300', fontSize: 'xl4' }} />}
          >
            4.9
          </Typography>
          <Typography textColor='text.secondary'>
            <b>5k+</b> reviews
          </Typography>
        </div>
        <div>
          <Typography fontSize='xl4' fontWeight='lg'>
            9M
          </Typography>
          <Typography textColor='text.secondary'>NPM installs</Typography>
        </div>
      </Box>
    </>
  )
}

HomePage.getLayout = (page) => <TwoColumnLayout>{page}</TwoColumnLayout>

export default HomePage
