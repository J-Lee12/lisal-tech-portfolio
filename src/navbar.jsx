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
            menuItems={["Codes Consulting", "Fire Protection", "Modeling", "Hazardous Material Analysis", 
            "Fire Protection Systems Design", "Inspection", "Emergency Mangagement", "Construction Safety"]}
        />

        <ProjectMenu
            buttonLabel="Industries"
            menuItems={["General Assembly", "Aviation", "Education", "Business", "Residential", "Healthcare",
                        "High Rise Buildings", "Warehouse", "Manufacturing", "Advanced Technology"]}
        />
        
        <ProjectMenu
            buttonLabel="About"
            menuItems={["Who We Are", "Contact"]}
        />

      </Toolbar>
    </Appbar>
  );
}
