import { useState } from "react";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Appbar position="static">
        <Toolbar className="bg-slate-500 h-32">
          <Typography variant="h5" component="div" className="flex-grow">
            Lisal Tech Engineering
          </Typography>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Industries</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </Appbar>
      <div className="flex items-center justify-center mt-20">
        <Card className="p-6 border-none shadow-none">
          <CardContent>
            <Typography variant="h4" className="font-family-[Open_Sans]">
              We Don't Change, but Evolve
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
