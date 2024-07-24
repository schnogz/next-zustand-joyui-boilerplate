import { inputClasses } from '@mui/joy/Input'
import { extendTheme } from '@mui/joy/styles'

export default extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: 'var(--joy-palette-common-black)',
          surface: 'var(--joy-palette-neutral-900)',
        },
        primary: {
          100: '#0A318C',
          200: '#1347CC',
          300: '#1055EA',
          400: '#357AEA',
          50: '#1D223F',
          500: '#2E88F6',
          600: '#50A1FF',
          700: '#7AB7FF',
          800: '#DCEBFE',
          900: '#F0F6FF',
          solidActiveBg: 'var(--joy-palette-primary-400)',
          solidBg: 'var(--joy-palette-primary-700)',
          solidColor: 'var(--joy-palette-common-black)',
          solidHoverBg: 'var(--joy-palette-primary-600)',
        },
      },
    },
    light: {
      palette: {
        primary: {
          100: '#DCEBFE',
          200: '#BDDAFE',
          300: '#91C3FC',
          400: '#60A5FA',
          50: '#F2F7FF',
          500: '#3479E8',
          600: '#2362EA',
          700: '#1D4FD7',
          800: '#1D3FAE',
          900: '#1E3B8A',
          solidActiveBg: 'var(--joy-palette-primary-400)',
          solidBg: 'var(--joy-palette-primary-600)',
          solidHoverBg: 'var(--joy-palette-primary-500)',
        },
      },
    },
  },
  components: {
    JoyInput: {
      styleOverrides: {
        input: {
          caretColor: 'var(--Input-focusedHighlight)',
        },
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'outlined' && {
            [`&:not(.${inputClasses.focused}):hover::before`]: {
              boxShadow: `inset 0 0 0 2px ${
                theme.vars.palette?.[ownerState.color!]?.outlinedBorder
              }`,
            },
          }),
        }),
      },
    },
  },
  fontFamily: {
    body: "'Inter', var(--joy-fontFamily-fallback)",
    display: "'Inter', var(--joy-fontFamily-fallback)",
  },
})
