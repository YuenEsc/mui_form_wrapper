import { createTheme } from '@material-ui/core/styles';
import {
  PRIMARY,
  SECONDARY,
  ERROR,
  WARNING,
  INFO,
  SUCCESS,
  TEXT,
  BACKGROUND,
  BORDER,
  GREY,
} from './colors';

const haulerHeroTheme = createTheme({
  typography: {
    h1: {
      fontSize: 35,
      fontWeight: 500,
      lineHeight: '40px',
    },
    h2: {
      fontSize: 29,
      fontWeight: 500,
      lineHeight: '32px',
    },
    h3: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '28px',
    },
    h4: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '24px',
    },
    h5: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '20px',
    },
    h6: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '16px',
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: '16px',
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '16px',
      color: TEXT.secondary,
    },
    body2: {
      fontSize: 11,
      fontWeight: 500,
      lineHeight: '16px',
      color: TEXT.secondary,
    },
    caption: {
      fontSize: 11,
      fontWeight: 400,
      lineHeight: '14px',
      color: TEXT.secondary,
    },
    overline: {
      fontSize: 11,
      fontWeight: 600,
      lineHeight: '13.31px',
      textTransform: 'none',
    },
    body1: {
      fontSize: 13,
      fontWeight: 400,
      lineHeight: '20px',
    },
    fontFamily: `"Inter", sans-serif`,
    fontStyle: 'normal',
    fontWeight: 400,
    color: TEXT.primary,
  },
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    error: ERROR,
    warning: WARNING,
    info: INFO,
    success: SUCCESS,
    background: BACKGROUND,
    text: TEXT,
    border: BORDER,
    main: '#0073E6',
    cancelBtn: '#E5E7EB',
    grey: GREY,
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#FFFFFF',
        textTransform: 'capitalize',
      },
    },
  },
  background: {
    default: '#F7F9FC',
    white: '#fff',
    black: '#000',
    success: '#DCFCE7',
  },
  toolbar: {
    item: {
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
    }
  }
});

export default haulerHeroTheme;
