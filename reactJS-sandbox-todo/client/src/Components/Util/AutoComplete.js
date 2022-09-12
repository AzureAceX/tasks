import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutoComplete = (props) => {
  const { value, setValue, options } = props;
  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text"
        options={options}
        renderOption={(props, option) => <li {...props}>{option}</li>}
        sx={{ width: 300 }}
        freeSolo
        getOptionLabel={(option) => option.name || ""}
        renderInput={(params) => <TextField {...params} label="Parent Task" />}
      />
    </>
  );
};
export default AutoComplete;
