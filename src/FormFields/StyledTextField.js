import {TextField as MuiTextField, withStyles} from "@material-ui/core";

const StyledTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1px solid #dfe1e6',
        boxShadow: '0 1px 1px rgba(0,0,0,.08)',
      },
      '&:hover fieldset': {
        border: '1px solid #dfe1e6',
        boxShadow: '0 1px 1px rgba(0,0,0,.08)',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #dfe1e6',
        boxShadow: '0 1px 1px rgba(0,0,0,.08)',
      },
    }
  },
})(MuiTextField);

export default StyledTextField;