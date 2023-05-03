import React from "react";
import { TextField, Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ onSubmit, isLoading }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={isLoading}
        fullWidth
      >
        {isLoading ? "Loading..." : "Log in"}
      </Button>
    </form>
  );
};

export default LoginForm;
