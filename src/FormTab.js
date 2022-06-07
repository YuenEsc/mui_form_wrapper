import {Container, Grid} from "@mui/material";
import { useForm } from "react-hook-form";
import HHButton from "./HHButton";
import { HHFormTextField, HHFormSelectField, HHFormNumberField, HHFormPriceField, HHFormSwitchField} from "./form-fields";

const FormTab = () => {
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
    <Container fixed>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <HHFormPriceField
              label="Minimum Fee"
              name="disposalMinFee"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} >
            <HHFormNumberField
              label="Overage"
              name="disposalOverage"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} >
            <HHFormPriceField
              label="Fee"
              name="disposalOverageFee"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} >
            <HHFormPriceField
              label="Price"
              name="disposalValue"
              control={control}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <HHFormSwitchField
              control={control}
              name="costPlus"
              label="Cost plus"
            />
          </Grid>
          <Grid item xs={12}>
            <HHFormSwitchField
              control={control}
              name="autoLink"
              label="Auto-Link"
            />
          </Grid>
          <Grid item xs={6}>
            <HHFormTextField
              control={control}
              name="disposalFeeName"
              label="Disposal Fee"
              placeholder="Disposal Fee"
              fullWidth
            />
          </Grid>

          {<Grid item xs={6}>
            <HHFormSelectField
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

export default FormTab;
