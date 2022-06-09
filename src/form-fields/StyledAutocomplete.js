import { Autocomplete, styled } from '@mui/material'

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '.MuiAutocomplete-inputRoot': {
    // when flexWrap is set as wrap it doesn't align the text properly
    flexWrap: 'initial',
  },
}))

export default StyledAutocomplete
