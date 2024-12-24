import { useState } from "react";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./App.css";
import { CardMedia } from "@mui/material";

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
        <Card className="flex items-center p-4 shadow-none border-none max-w-3xl">
          <CardMedia
            component="img"
            image="/cheol_headshot.HEIC"
            alt="Headshot"
            className="w-[50%] h-auto mr-12 object-cover"
          ></CardMedia>
          <CardContent className="p-0">
            <Typography variant="h5" className="font-sans text-gray-800">
              We Don't Change, but Evolve
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
