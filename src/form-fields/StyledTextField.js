import { TextField, styled } from '@mui/material'

const StyledTextField = styled(TextField)(({ theme, size, disabled, }) => ({
  '& .MuiOutlinedInput-root': {
    height: size === 'small' ? 32 : 40,
    backgroundColor: disabled ? theme.palette.background.disabled : theme.palette.background.paper
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
