import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00d6bc',
    },
    secondary: {
      main: '#30aba9',
    },
    common: {
      white: '#F1F5F9',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#00535e',
      secondary: '#30aba9',
    },
  },
})

export const COLORS = {
  primary: '#00d6bc',
  secondary: '#30aba9',
  green: '#06CCB5',
  common: {
    white: '#F1F5F9',
  },
  background: {
    default: '#FFFFFF',
  },
  text: {
    primary: '#00535e',
    secondary: '#30aba9',
    white: '#FFFFFF',
    white_green: '#F1F5F9',
  },
  chip: {
    cooking: {
      color: '#16a34a',
      backgroundColor: '#dcfce7',
    },
    served: {
      color: '#4f46e5',
      backgroundColor: '#e0e7ff',
    },
    error: {
      color: '#e54646',
      backgroundColor: '#ffe0e0',
    },
  },
}
