// import { Typography, Grid, TextField } from "@mui/material";
// import { useFormContext } from "react-hook-form";



// export default function AddressForm(){
//     const {register, formState: {errors}} = useFormContext();
//     return (
//         <>
//         <Typography variant="h6" gutterBottom>
//             Shipping Address
//         </Typography>
//         <form>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="firstName"
//               {...register("firstName")}
//               label="First name"
//               fullWidth
//               helperText="Enter First Name"
//               autoComplete="given-name"
//               variant="standard"
//               error={!!errors.firstName} 
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="lastName"
//               {...register("lastName")}
//               label="Last name"
//               helperText="Enter Last Name"
//               fullWidth
//               autoComplete="family-name"
//               variant="standard"
//               error={!!errors.lastName}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="address1"
//               {...register("address1")}
//               label="Address line 1"
//               helperText="Enter Address Line 1"
//               fullWidth
//               autoComplete="shipping address-line1"
//               variant="standard"
//               error={!!errors.address1}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="address2"
//               {...register("address2")}
//               label="Address line 2"
//               helperText="Enter Address Line 2"
//               fullWidth
//               autoComplete="shipping address-line2"
//               variant="standard"
//               error={!!errors.address2}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="city"
//               {...register("city")}
//               label="City"
//               helperText="Enter City"
//               fullWidth
//               autoComplete="shipping address-level2"
//               variant="standard"
//               error={!!errors.city}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="state"
//               {...register("state")}
//               label="State/Province/Region"
//               helperText="Enter State"
//               fullWidth
//               variant="standard"
//               error={!!errors.state}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="zip"
//               {...register("zip")}
//               label="Zip / Postal code"
//               helperText="Enter Zip"
//               fullWidth
//               autoComplete="shipping postal-code"
//               variant="standard"
//               error={!!errors.zip}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               required
//               id="country"
//               {...register("country")}
//               label="Country"
//               helperText="Enter Country"
//               fullWidth
//               autoComplete="shipping country"
//               variant="standard"
//               error={!!errors.country}
//             />
//           </Grid>          
//         </Grid>
//         </form>
//         </>
//     )
// }





import React, { useState } from "react";
import { Typography, Grid, TextField, MenuItem, Select, FormControl, InputLabel, FormHelperText } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";  // Import Controller
import citiesData from "../../city/citiesData";  // Import the cities data

export default function AddressForm() {
  const { control, setValue, formState: { errors }, getValues } = useFormContext();  // Destructure getValues
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [autofilledState, setAutofilledState] = useState<boolean>(false);
  const [autofilledCountry, setAutofilledCountry] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null); // Track focused field

  // Handle city selection to update state and country
  const handleCityChange = (cityName: string) => {
    setSelectedCity(cityName);

    // Find the city data to autofill state and country
    const cityInfo = citiesData.find((city) => city.name === cityName);
    if (cityInfo) {
      setValue('state', cityInfo.state);  // Autofill state
      setValue('country', cityInfo.country);  // Autofill country
      setAutofilledState(true);  // Indicate that the state was autofilled
      setAutofilledCountry(true);  // Indicate that the country was autofilled
    }
  };

  // Handle focus event to hide helper text when field is focused
  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  // Handle blur event to show helper text when field is blurred
  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              {...control.register("firstName")}
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              error={!!errors.firstName}
              onFocus={() => handleFocus("firstName")}
              onBlur={handleBlur}
              helperText={focusedField !== "firstName" && !autofilledState ? "Enter First Name" : ""}
              InputLabelProps={{
                shrink: focusedField === "firstName" || !!getValues().firstName  // Use getValues() here
              }}
            />
            {errors.firstName && !focusedField && (
              <FormHelperText error>{(errors.firstName as any).message}</FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              {...control.register("lastName")}
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              error={!!errors.lastName}
              onFocus={() => handleFocus("lastName")}
              onBlur={handleBlur}
              helperText={focusedField !== "lastName" && !autofilledState ? "Enter Last Name" : ""}
              InputLabelProps={{
                shrink: focusedField === "lastName" || !!getValues().lastName  // Use getValues() here
              }}
            />
            {errors.lastName && !focusedField && (
              <FormHelperText error>{(errors.lastName as any).message}</FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              {...control.register("address1")}
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              error={!!errors.address1}
              onFocus={() => handleFocus("address1")}
              onBlur={handleBlur}
              helperText={focusedField !== "address1" && !autofilledState ? "Enter Address Line 1" : ""}
              InputLabelProps={{
                shrink: focusedField === "address1" || !!getValues().address1  // Use getValues() here
              }}
            />
            {errors.address1 && !focusedField && (
              <FormHelperText error>{(errors.address1 as any).message}</FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              {...control.register("address2")}
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              error={!!errors.address2}
              onFocus={() => handleFocus("address2")}
              onBlur={handleBlur}
              helperText={focusedField !== "address2" && !autofilledState ? "Enter Address Line 2" : ""}
              InputLabelProps={{
                shrink: focusedField === "address2" || !!getValues().address2  // Use getValues() here
              }}
            />
            {errors.address2 && !focusedField && (
              <FormHelperText error>{(errors.address2 as any).message}</FormHelperText>
            )}
          </Grid>

          {/* City Field */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="standard" error={!!errors.city}>
              <InputLabel>City</InputLabel>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    value={selectedCity}
                    onChange={(e) => {
                      handleCityChange(e.target.value);
                      field.onChange(e);  // Make sure the react-hook-form register is called
                    }}
                  >
                    {citiesData.map((city) => (
                      <MenuItem key={city.name} value={city.name}>
                        {city.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
            {errors.city && !focusedField && (
              <FormHelperText error>{(errors.city as any).message}</FormHelperText>
            )}
          </Grid>

          {/* State Field - No Helper Text */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              {...control.register("state")}
              label="State/Province/Region"
              fullWidth
              variant="standard"
              error={!!errors.state}
              onFocus={() => handleFocus("state")}
              onBlur={handleBlur}
              helperText=""  // Removed helper text
              InputLabelProps={{
                shrink: focusedField === "state" || !!getValues().state  // Use getValues() here
              }}
            />
          </Grid>

          {/* Zip Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              {...control.register("zip")}
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              error={!!errors.zip}
              onFocus={() => handleFocus("zip")}
              onBlur={handleBlur}
              helperText={focusedField !== "zip" && !autofilledState ? "Enter Zip" : ""}
              InputLabelProps={{
                shrink: focusedField === "zip" || !!getValues().zip  // Use getValues() here
              }}
            />
            {errors.zip && !focusedField && (
              <FormHelperText error>{(errors.zip as any).message}</FormHelperText>
            )}
          </Grid>

          {/* Country Field - No Helper Text */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              {...control.register("country")}
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              error={!!errors.country}
              onFocus={() => handleFocus("country")}
              onBlur={handleBlur}
              helperText=""  // Removed helper text
              InputLabelProps={{
                shrink: focusedField === "country" || !!getValues().country  // Use getValues() here
              }}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
