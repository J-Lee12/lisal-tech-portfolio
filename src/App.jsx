import { useState } from "react";
import Navbar from "./navbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-56">
        <Card className="p-4 border-none shadow-none w-1/4">
          <CardContent>
            <Typography variant="h2">We Don't Change, but Evolve</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
