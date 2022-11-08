import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";

const navItems = [
  {
    icon: <GridViewIcon />,
    label: "Dashboard",
    route: "/",
  },

  {
    icon: <SettingsOutlinedIcon />,
    label: "Our Services",
    route: "/ourServices",
  },

  {
    icon: <SettingsOutlinedIcon />,
    label: "About",
    route: "/about",
  },

  {
    icon: <SettingsOutlinedIcon />,
    label: "Portfolio",
    route: "/portfolio",
  },
  {
    icon: <SettingsOutlinedIcon />,
    label: "Blog",
    route: "/blog",
  },

  {
    icon: <SettingsOutlinedIcon />,
    label: "CMS Settings",
    route: "/cms",
  },


  {
    icon: <SettingsOutlinedIcon />,
    label: "Mails",
    route: "/mail",
  },
];

export default function LeftAppBar() {
  const router = useRouter();

  //   const { window } = props;
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
          <ListItem key={index} disablePadding>
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
