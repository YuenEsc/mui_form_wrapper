import { Autocomplete, styled } from '@mui/material'
import PopupPaper from "./PopupPaper";

const CustomAutocomplete = (props) => (<Autocomplete {...props} PaperComponent={PopupPaper} />)

const StyledAutocomplete = styled(CustomAutocomplete)(() => ({
  '.MuiAutocomplete-inputRoot': {
    // when flexWrap is set as wrap it doesn't align the text properly
    flexWrap: 'initial',
  },
}))

export default StyledAutocomplete
