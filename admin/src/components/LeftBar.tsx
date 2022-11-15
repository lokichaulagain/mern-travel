import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import GridViewIcon from "@mui/icons-material/GridView";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { ImHome } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { GiFamilyHouse } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { BsInfoCircleFill } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import { ImBlogger2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { FiGrid } from "react-icons/fi";

const navItems = [
  {
    icon: <FiGrid />,
    label: "Dashboard",
    route: "/",
  },

  {
    icon: <ImHome />,
    label: "Home",
    route: "/home",
  },

  {
    icon: <RiTeamFill />,
    label: "Our Team",
    route: "/team",
  },

  {
    icon: <GiFamilyHouse />,
    label: "Shelter",
    route: "/shelter",
  },

  {
    icon: <MdFastfood />,
    label: "Foods",
    route: "/food",
  },

  {
    icon: <MdOutlineEventAvailable />,
    label: "Events",
    route: "/event",
  },

  {
    icon: <MdOutlineHomeRepairService />,
    label: "Our Services",
    route: "/ourServices",
  },

  {
    icon: <ImPriceTags />,
    label: "Price Packages",
    route: "/pricePackages",
  },

  {
    icon: <BsInfoCircleFill />,
    label: "About",
    route: "/about",
  },

  {
    icon: <RiProfileLine />,
    label: "Portfolio",
    route: "/portfolio",
  },
  {
    icon: <ImBlogger2 />,
    label: "Blog",
    route: "/blog",
  },

  {
    icon: <IoMdSettings />,
    label: "CMS Settings",
    route: "/cms",
  },

  {
    icon: <GrMail />,
    label: "Mails",
    route: "/mail",
  },
];

export default function LeftAppBar() {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // NavSelection
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box style={{ height: "100vh" }}>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => {
                handleListItemClick(event, index), router.push(item.route);
              }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
