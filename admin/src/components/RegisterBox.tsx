import * as React from "react";
import { Box, CardContent, Typography, TextField, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

export default function RegisterBox() {
  const router = useRouter();

  const handleRegister=()=>{
    router.push("/")
  }

  return (
    <Grid minWidth="500px" className="customCard">
      <form>
        <CardContent>
          <Grid container direction="column" alignItems="center">
            <Typography variant="h4">Register</Typography>
            <Typography variant="subtitle1">Access to our dashboard</Typography>
          </Grid>

          <Box mt={3}>
            <Typography className="customLabel">Email Address</Typography>
            <TextField fullWidth id="fullWidth" className="customInput" type="email" autoComplete="off" name="email" />
          </Box>

          <Box mt={3}>
            <Typography className="customLabel">Password</Typography>
            <TextField fullWidth id="fullWidth" className="customInput" type="password" autoComplete="current-password" name="password" />
          </Box>

          <Box mt={3}>
            <Typography className="customLabel">Confirm Password</Typography>
            <TextField fullWidth id="fullWidth" className="customInput" type="password" autoComplete="current-password" name="confirmPassword" />
          </Box>

          <Box mt={3}>
            <Button type="submit" fullWidth size="large" variant="contained"  onClick={handleRegister}  >
              Register
            </Button>
          </Box>

          <Box mt={3}>
            <Grid container justifyContent="center">
              <Typography>Already have an account ?</Typography>
              <Typography
                className="customSecondaryColor cp"
                onClick={() => {
                  router.push("/login");
                }}>
                Login
              </Typography>
            </Grid>
          </Box>
        </CardContent>
      </form>
    </Grid>
  );
}
