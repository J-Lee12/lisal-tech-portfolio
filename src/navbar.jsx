import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ProjectMenu from "./projectmenu";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Appbar position="static">
      <Toolbar className="bg-blue-300 h-32">
        <Typography variant="h5" component="div" className="flex-grow">
          Lisal Tech Engineering
        </Typography>

        <ProjectMenu 
            buttonLabel="Services" 
            menuItems={["Fire Protection", "Consulating", "Design"]}
        />

        <ProjectMenu
            buttonLabel="Projects"
            menuItems={["Current", "Completed", "Future"]}
        />
        
        <ProjectMenu
            buttonLabel="About"
            menuItems={["Company", "Team", "Contact"]}
        />

      </Toolbar>
    </Appbar>
  );
}
