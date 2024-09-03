/* eslint-disable react/prop-types */
import { TextField, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import "./Sidebar.css";

export default function Pincode({ name, setName, handleRequest, closeDrawer }) {
  const onSetName = (e) => {
    setName(e.target.value);
  };

  const handleClick = async () => {
    await handleRequest();
    closeDrawer();
  };

  return (
    <>
      <h1 className="locationhead">
        Choose Your <br />
        Location
      </h1>
      <TextField
        sx={{
          "& > :not(style)": { marginLeft: 1, marginTop: 0, width: "400px" },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" onClick={handleClick}>
                Enter Pincode
              </Button>
            </InputAdornment>
          ),
        }}
        value={name}
        onChange={onSetName}
        placeholder="Enter Pincode"
      />
    </>
  );
}
