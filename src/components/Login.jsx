import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Card, TextField, Typography } from "@mui/material";
import axios from "axios";

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
      <div
        style={{ paddingTop: 80, display: "flex", justifyContent: "center" }}
      >
        <Typography variant="h6">
          <h1>Login to admin dashboard</h1>
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 400, padding: 20 }}>
          <br />
          <TextField
            id="outlined-basic"
            value={email}
            fullWidth
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            value={password}
            type="password"
            fullWidth
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button
            size="large"
            variant="contained"
            onClick={async () => {
              const res = await axios.post(
                "https://vpr6lv-3000.csb.app/admin/login",
                {},
                {
                  headers: {
                    username: email,
                    password: password,
                  },
                },
              );
              const data = res.data;
              localStorage.setItem("adminToken", data.token);
              window.location = "/";
            }}
          >
            Login
          </Button>
          <br />
          <br />
          <Typography variant="subtitle1">
            New here? <Link to={"/signup"}>Register</Link>
          </Typography>
        </Card>
      </div>
    </div>
  );
}

export default Login;
