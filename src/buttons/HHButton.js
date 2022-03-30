import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const HHButton = withStyles(theme => ({
  root: {
    height: 32,
    padding: '4px 12px',
    borderRadius: 4,
  },
  disabled: {
    cursor: 'not-allowed',
  },
  label: {
    fontSize: 13,
  },
  contained: {
    background: '#F0F6FC',
    boxShadow: 'none',
    color: '#7A869A',
    '&:hover': {
      boxShadow: 'none',
      background: '#F0F6FC',
    },
  },
  containedPrimary: {
    background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0068CF 100%);`,
    boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.12)',
    color: theme.palette.background.paper,
    '&:hover': {
      background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0068CF 100%);`,
      boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.12)',
    },
    '&:disabled': {
      background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, #0068CF 100%);`,
      boxShadow: '0px 2px 5px rgba(60, 66, 87, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.12)',
      color: theme.palette.background.paper,
    },
  },
  outlined: {
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
  outlinedPrimary: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
  text: {
    color: theme.palette.text.secondary,
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
}))(Button);

export default HHButton;
