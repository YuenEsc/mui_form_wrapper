import { TextField as MuiTextField, withStyles, makeStyles } from '@material-ui/core';
import { classNames } from '../utils/styling';

const useStyles = makeStyles(theme => ({
  input: {
    '&::placeholder': {
      ...theme.typography.body1,
      color: theme.palette.text.secondary,
    },
    ...theme.typography.body1,
    color: theme.palette.text.primary,
  },
  root: {
    '& .MuiOutlinedInput-root': {
      height: ({ size }) => {
        switch (size) {
          case 'medium':
            return 40;
          case 'small':
            return 32;
          default:
            return 40;
        }
      },
    },
  },
}));

const StyledTextField = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1px solid #dfe1e6',
        boxShadow: '0 1px 1px rgba(0,0,0,.08)',
      },
      '&:hover fieldset': {
        border: '1px solid #dfe1e6',
        boxShadow: '0 1px 1px rgba(0,0,0,.08)',
      },
      '&.Mui-disabled fieldset': {
        border: '1px solid #dfe1e6',
        boxShadow: '0 1px 1px rgba(0,0,0,.08)',
      },
      '&.Mui-focused fieldset': {
        border: `2px solid ${theme.palette.primary.main}`,
        boxShadow: '0 1px 1px rgba(0,0,0,.08)',
      },
    },
  },
}))(props => {
  const { InputProps, size } = props;
  const classes = useStyles({ size });
  return (
    <MuiTextField
      {...props}
      className={classNames([classes.root, props?.className])}
      InputProps={{
        ...InputProps,
        classes: {
          ...InputProps?.classes,
          input: classes.input,
        },
      }}
    />
  );
});

export default StyledTextField;
