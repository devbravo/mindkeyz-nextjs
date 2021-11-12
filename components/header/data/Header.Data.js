import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairService";
import InfoRoundedIcon from "@mui/icons-material/Info";
import AttachEmailRoundedIcon from "@mui/icons-material/AttachEmail";

export const routes = [
  {
    name: "Home",
    url: "/",
    activeIndex: 0,
    icon: <HomeRoundedIcon sx={{ color: "#fff", width: "0.90em", height: "0.90em" }} />,
  },
  {
    name: "Services",
    url: "/services",
    activeIndex: 1,
    icon: <HomeRepairServiceRoundedIcon sx={{ color: "#fff", width: "0.90em", height: "0.90em" }} />,
  },
  {
    name: "About",
    url: "/about",
    activeIndex: 2,
    icon: <InfoRoundedIcon sx={{ color: "#fff", width: "0.90em", height: "0.90em" }} />,
  },
  {
    name: "Contact",
    url: "/contact",
    activeIndex: 3,
    icon: <AttachEmailRoundedIcon sx={{ color: "#fff", width: "0.90em", height: "0.90em" }} />,
  },
];
