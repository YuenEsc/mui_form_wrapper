import { TextField, styled } from '@mui/material'

const StyledTextField = styled(TextField)(({ theme, size, disabled }) => ({
  '& .MuiOutlinedInput-root': {
    height: size === 'small' ? 32 : 40,
    backgroundColor: disabled ? theme.palette.background.disabled : theme.palette.background.paper,
    '& fieldset': {
      borderColor: '#D1D5DB',
    },
    '&:hover fieldset': {
      borderColor: '#D1D5DB'
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main
    }
  },
  input: {
    '&::placeholder': {
      ...theme.typography.body1,
      color: theme.palette.text.secondary,
      verticalAlign: 'middle',
    },
    ...theme.typography.body1,
    color: theme.palette.text.primary,
  },
}))

export default StyledTextField
