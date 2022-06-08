import { TextField, styled } from '@mui/material'

const StyledTextField = styled(TextField)(({ theme, size }) => ({
  '& .MuiOutlinedInput-root': {
    height: size === 'small' ? 32 : 40,
  },
  input: {
    '&::placeholder': {
      ...theme.typography.body1,
      color: theme.palette.text.secondary,
      verticalAlign: 'middle',
    },
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    height: size === 'small' ? 32 : 40,
  },
}))

export default StyledTextField
