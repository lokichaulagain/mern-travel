import * as React from "react";
import { Box, CardContent, Typography, TextField, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

export default function LoginBox() {
  const router = useRouter();

  const handleLogin=()=>{
    router.push("/")
  }

  return (
    <Grid minWidth="500px" className="customCard">
      <CardContent>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h4">Login</Typography>
          <Typography variant="subtitle1">Access to our dashboard</Typography>
        </Grid>

        <Box mt={3}>
          <Typography className="customLabel">Email Address</Typography>
          <TextField fullWidth id="fullWidth" className="customInput" type="email" autoComplete="off" />
        </Box>

        <Box mt={3}>
          <Grid container justifyContent="space-between">
            <Typography className="customLabel">Password</Typography>
            <Typography className="txtMuted cp">Forgot Password</Typography>
          </Grid>
          <TextField fullWidth id="fullWidth" className="customInput" type="password" autoComplete="current-password" />
        </Box>

        <Box mt={3}>
          <Button fullWidth size="large" variant="contained" onClick={handleLogin}   >
            Login
          </Button>
        </Box>

        <Box mt={3}>
          <Grid container justifyContent="center">
            <Typography>Dont have an account yet? </Typography>
            <Typography
              className="customSecondaryColor cp"
              onClick={() => {
                router.push("/register");
              }}>
              Register
            </Typography>
          </Grid>
        </Box>
      </CardContent>
    </Grid>
  );
}
