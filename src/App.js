import {Grid, Button, Container} from '@material-ui/core';
import { useForm, handleSubmit } from 'react-hook-form';
import PriceField from "./FormFields/PriceField";
import SwitchField from "./FormFields/SwitchField";
import NumberField from "./FormFields/NumberField";
import TextField from "./FormFields/TextField";

function App() {
  const { control, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <Container fixed >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <PriceField
              label="Minimum Fee"
              name="disposalMinFee"
              control={control}
              required
            />
          </Grid>
          <Grid item xs={6} >
            <NumberField
              label="Overage"
              name="disposalOverage"
              control={control}
              required
            />
          </Grid>
          <Grid item xs={6} >
            <PriceField
              label="Fee"
              name="disposalOverageFee"
              control={control}
              required
            />
          </Grid>
          <Grid item xs={6} >
            <PriceField
              label="Price"
              name="disposalValue"
              control={control}
              required
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
          <Grid item xs={12}>
            <TextField
              control={control}
              name="disposalFeeName"
              label="Disposal Fee"
              placeholder="Disposal Fee"
            />
          </Grid>
          <Grid item xs={6} >
            <Button type="submit">
              Submit
            </Button>
          </Grid>

        </Grid>
      </form>
    </Container>
  );
}

export default App;
