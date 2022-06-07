import { InputLabel, styled } from '@mui/material';
import PropTypes from 'prop-types';

const HHInputLabel = styled(InputLabel)(({theme, size})=>({
  textAlign: 'left',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 12,
  lineHeight: '24px',
  color: '#7A869A',
  '& .MuiFormLabel-asterisk': {
    color: '#aa2b2b'
  }
}));

const WithInputLabel = ({children, label = undefined, required = false, endIcon}) => {
  return (<>
    {!!label
      ?
      <>
        <HHInputLabel
          required={required}
          shrink={false}
        >
          {label}{endIcon}
        </HHInputLabel>
        {children}
      </>
      :
      children}
  </>)
};

WithInputLabel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  required: PropTypes.bool,
  endIcon: PropTypes.node,
}

export default WithInputLabel;
