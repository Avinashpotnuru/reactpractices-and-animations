import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";

function PhoneForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Phone Number:</label>
      <Controller
        name="phone"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <PhoneInput
            {...field}
            defaultCountry="US"
            placeholder="Enter phone number"
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PhoneForm;
