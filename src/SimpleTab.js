import {Container, Grid, MenuItem} from "@mui/material";
import HHButton from "./HHButton";
import { HHTextField, HHNumberField, HHSwitchField} from "./form-fields";
import {useState} from "react";


const SimpleTab = () => {
  const [state, setState] = useState({
      disposalMinFee: '',
      disposalOverage: '',
      disposalOverageFee: '',
      disposalValue: '',
      costPlus: false,
      autoLink: false,
      disposalFeeName: '',
      materials: [],
  });
  const onSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(state));
  };
  return (
    <Container fixed>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <HHNumberField
              label="Minimum Fee"
              fullWidth
              placeholder="0.00"
              dollarPrefix
              value={state.disposalMinFee}
              onValueChange={values => {
                const { value } = values;
                setState(p=>({...p, disposalMinFee: value}));
              }}
            />
          </Grid>
          <Grid item xs={6} >
            <HHNumberField
              label="Overage"
              fullWidth
              placeholder="0"
              value={state.disposalOverage}
              onValueChange={values => {
                const { value } = values;
                setState(p=>({...p, disposalOverage: value}));
              }}
            />
          </Grid>
          <Grid item xs={6} >
            <HHNumberField
              label="Fee"
              fullWidth
              placeholder="0.00"
              dollarPrefix
              value={state.disposalOverageFee}
              onValueChange={values => {
                const { value } = values;
                setState(p=>({...p, disposalOverageFee: value}));
              }}
            />
          </Grid>
          <Grid item xs={6} >
            <HHNumberField
              label="Price"
              fullWidth
              placeholder="0.00"
              dollarPrefix
              value={state.disposalValue}
              onValueChange={values => {
                const { value } = values;
                setState(p=>({...p, disposalValue: value}));
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <HHSwitchField
              label="Cost plus"
              checked={state.costPlus}
              onChange={value => {
                setState(p=>({...p, costPlus: value}));
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <HHSwitchField
              label="Auto-Link"
              checked={state.autoLink}
              onChange={value => {
                setState(p=>({...p, autoLink: value}));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <HHTextField
              label="Disposal Fee"
              placeholder="Disposal Fee"
              fullWidth
              value={state.disposalFeeName}
              onChange={e => {
                setState(p=>({...p, disposalFeeName: e.target.value}));
              }}
            />
          </Grid>

          {<Grid item xs={6}>
            <HHTextField
              label="Disposal Fee"
              placeholder="Disposal Fee"
              fullWidth
              select
            >
              {[
                {label: 'Bryan May', value: 'bryan'},
                {label: 'John Deacon', value: 'john'},
                {label: 'Roger Taylor', value: 'roger'},
                {label: 'Freddie Mercury', value: 'freddie'},
              ].map(({label, value})=><MenuItem value={value}>{label}</MenuItem>)}
            </HHTextField>
          </Grid>}
          <Grid item xs={12} container alignContent="flex-end" justifyContent="flex-end">
            <HHButton type="submit" variant="contained" color="primary">
              Submit
            </HHButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default SimpleTab;
