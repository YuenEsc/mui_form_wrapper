import {Container, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import HHButton from "./HHButton";
import { HHFormAutocompleteField, HHFormTextField, HHFormMultiSelectAutocompleteField, HHFormSelectField, HHFormNumberField, HHFormPriceField, HHFormSwitchField} from "./form-fields";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object({
  disposalMinFee: yup.string().required(),
  disposalOverage: yup.string().required(),
  disposalOverageFee: yup.string().required(),
  disposalValue: yup.string().required(),
  costPlus: yup.boolean().required(),
  autoLink: yup.boolean(),
  disableFeeName: yup.boolean(),
  disposalFeeName: yup.string().required(),
}).required();

const FormTab = () => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      disposalMinFee: '',
      disposalOverage: '',
      disposalOverageFee: '',
      disposalValue: '',
      costPlus: false,
      autoLink: false,
      disableFeeName: false,
      disposalFeeName: '',
      artist: undefined,
      artist2: undefined,
      albums: undefined,
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
              required
              error={errors.disposalMinFee?.message}
            />
          </Grid>
          <Grid item xs={6} >
            <HHFormNumberField
              label="Overage"
              name="disposalOverage"
              control={control}
              fullWidth
              required
              error={errors.disposalOverage?.message}
            />
          </Grid>
          <Grid item xs={6} >
            <HHFormPriceField
              label="Fee"
              name="disposalOverageFee"
              control={control}
              fullWidth
              required
              error={errors.disposalOverageFee?.message}
            />
          </Grid>
          <Grid item xs={6} >
            <HHFormPriceField
              label="Price"
              name="disposalValue"
              control={control}
              fullWidth
              error={errors.disposalValue?.message}
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
          <Grid item xs={12}>
            <HHFormSwitchField
              control={control}
              name="disableFeeName"
              label="Disable Disposal Fee Input"
            />
          </Grid>
          <Grid item xs={6}>
            <HHFormTextField
              control={control}
              disabled={watch("disableFeeName")}
              name="disposalFeeName"
              label="Disposal Fee"
              placeholder="Disposal Fee"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <HHFormSelectField
              control={control}
              name="artist"
              label="Select artist"
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
          <Grid item xs={6}>
            <HHFormAutocompleteField
              control={control}
              name="artist2"
              label="Disposal Fee"
              placeholder="Disposal Fee"
              options={[
                {label: 'Bryan May', value: 'bryan'},
                {label: 'John Deacon', value: 'john'},
                {label: 'Roger Taylor', value: 'roger'},
                {label: 'Freddie Mercury', value: 'freddie'},
              ]}
              isOptionEqualToValue={(option,value)=>option.value === value?.value}
              getOptionLabel={(option)=>option?.label}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <HHFormMultiSelectAutocompleteField
              control={control}
              name="albums"
              label="Disposal Fee"
              placeholder="Disposal Fee"
              options={[
                {label: 'Death Magnetic', value: 'death_magnetic'},
                {label: 'Black Album', value: 'black_album'},
                {label: 'News of the world', value: 'news_of_the_world'},
                {label: 'Stadium Arcadium', value: 'stadium_arcadium'},
                {label: 'Let\'s dance', value: 'lets_dance'},
              ]}
              isOptionEqualToValue={(option,value)=>option.value === value?.value}
              getOptionLabel={(option)=>option?.label}
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

export default FormTab;
