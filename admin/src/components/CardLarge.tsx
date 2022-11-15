import * as React from "react";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
        />
      </Box>
    </Box>
  );
}

export default function CardLarge() {
  const [progress, setProgress] = React.useState(10);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className="customCard"
      p={2}
      gap={1.5}
      style={{ width: "400px" }}>
      <Grid
        item
        container
        justifyContent="space-between">
        <Typography variant="h6">New Employee</Typography>
        <Typography style={{ color: "green" }}>+10%</Typography>
      </Grid>

      <Grid
        item
        container>
        <Typography>22</Typography>
      </Grid>

      <Grid
        item
        container>
        <Box sx={{ width: "100%" }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1">Overall Employee 218</Typography>
      </Grid>
    </Grid>
  );
}
