import { useState } from "react";
import Navbar from "./navbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Grid container direction="column">
        <Grid item xs={12} sm={12}>
          <div className="flex items-center justify-center mt-56">
            <Card className="p-4 border-none shadow-none w-1/4">
              <CardContent>
                <Typography variant="h2">
                  We Don't Change, but Evolve
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Card elevation={0}>
            <CardContent>
              <Typography variant="h4">We Provide</Typography>
              <Typography variant="body1"> Example text</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
