import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import InfoIcon from "@mui/icons-material/Info";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";

export const routes = [
  {
    name: "Home",
    url: "/",
    activeIndex: 0,
    icon: <HomeIcon sx={{ color: "#fff", width: "0.90em", height: "0.90em" }} />,
  },
  {
    name: "Services",
    url: "/services",
    activeIndex: 1,
    icon: <HomeRepairServiceIcon sx={{ color: "#fff", width: "0.90em", height: "0.90em" }} />,
  },
  {
    name: "About",
    url: "/about",
    activeIndex: 2,
    icon: <InfoIcon sx={{ color: "#fff", width: "0.90em", height: "0.90em" }} />,
  },
  {
    name: "Contact",
    url: "/contact",
    activeIndex: 3,
    icon: <AttachEmailIcon sx={{ color: "#fff", width: "0.90em", height: "0.90em" }} />,
  },
];
