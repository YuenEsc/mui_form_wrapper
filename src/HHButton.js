import { Button, styled } from '@mui/material'

const HHButton = styled(Button)(({ theme }) => ({
  height: 32,
  padding: '4px 12px',
  borderRadius: 4,
  label: {
    fontSize: 13,
  },
  '&.MuiButton-contained': {
    background: '#F0F6FC',
    boxShadow: 'none',
    color: '#7A869A',
    '&:hover': {
      boxShadow: 'none',
      background: '#F0F6FC',
    },
  },
  '&.MuiButton-containedPrimary': {
    backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0068CF 100%)`,
    boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.12)',
    color: theme.palette.background.paper,
    '&:hover': {
      backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0068CF 100%)`,
      boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.12)',
    },
  },
  '&.MuiButton-outlined': {
    borderColor: '1px solid #DFE1E6;',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1);',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
    '&:hover': {
      borderColor: '1px solid #DFE1E6;',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1);',
      color: theme.palette.text.secondary,
      backgroundColor: 'transparent',
    },
  },
  '&.MuiButton-outlinedPrimary': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
}))

export default HHButton