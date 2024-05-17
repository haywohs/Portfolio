import React, { useState } from "react";
import "./navbar.scss";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link,
} from "@mui/material";
import { TiThMenu } from "react-icons/ti";
import Resume from "../files/YH_Resume.pdf";

const pages = ["About", "Project", "Skill", "Contact"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDownloadResume = () => {
    window.open(Resume, "_blank");
  };

  return (
    <>
      <div className="navbar">
        <AppBar position="static">
          <Container maxWidth="xl" sx={{ bgcolor: "#3C3431" }}>
            <Toolbar>
              <Link id="nav-logo" href="/">
                H
              </Link>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                  mr: 3,
                }}
              >
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <TiThMenu />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Link
                        href={`#${page.toLowerCase()}`}
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {pages.map((page) => (
                  <Button
                    className="nav-button"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mx: 3,
                      color: "#FDF4E3",
                      display: "block",
                    }}
                    href={`#${page.toLowerCase()}`}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Download Resume">
                  <IconButton
                    sx={{ p: 0 }}
                    onClick={handleDownloadResume}
                    aria-label="download"
                  >
                    <Avatar alt="Haywo" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
