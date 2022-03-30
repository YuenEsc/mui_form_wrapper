import {Grid, Button, Container, makeStyles} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { PriceField, NumberField, TextField, SwitchField, MultiSelectAutocompleteField, SelectField } from './form-fields'
import { HHButton } from './buttons';

const useStyles = makeStyles(theme=>({
  gap: {
    marginRight: theme.spacing(2)
  }
}))

function App() {
  const classes = useStyles()
  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      disposalMinFee: '',
      disposalOverage: '',
      disposalOverageFee: '',
      disposalValue: '',
      costPlus: false,
      autoLink: false,
      disposalFeeName: '',
      materials: [],
    }
  });
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <Container fixed >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <HHButton className={classes.gap} variant="contained" color="primary">
              Contained (Primary)
            </HHButton>
            <HHButton className={classes.gap} variant="contained" color="default">
              Contained (default)
            </HHButton>
            <HHButton className={classes.gap} variant="outlined" color="primary">
              Outlined (Primary)
            </HHButton>
            <HHButton className={classes.gap} variant="outlined" color="default">
              Outlined (default)
            </HHButton>
          </Grid>
          <Grid item xs={6}>
            <PriceField
              label="Minimum Fee"
              name="disposalMinFee"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} >
            <NumberField
              label="Overage"
              name="disposalOverage"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} >
            <PriceField
              label="Fee"
              name="disposalOverageFee"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} >
            <PriceField
              label="Price"
              name="disposalValue"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <SwitchField
              control={control}
              name="costPlus"
              label="Cost plus"
            />
          </Grid>
          <Grid item xs={12}>
            <SwitchField
              control={control}
              name="autoLink"
              label="Auto-Link"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              control={control}
              name="disposalFeeName"
              label="Disposal Fee"
              placeholder="Disposal Fee"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <SelectField
              control={control}
              name="materials"
              label="Disposal Fee"
              placeholder="Disposal Fee"
              options={[
                {label: 'Bryan May', value: 'bryan'},
                {label: 'John Deacon', value: 'john'},
                {label: 'Roger Taylor', value: 'roger'},
                {label: 'Freddie Mercury', value: 'freddie'},
              ]}
              fullWidth
            />
          </Grid>
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

export default App;
