import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "Food",
    link: "site1",
  },
  {
    name: "Drinks",
    link: "site2",
  },
  {
    name: "Location",
    link: "site3",
  },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      navigate(id);
    }
  };

  return (
    <AppBar
      position="relative" // Change 'fixed' to 'relative'
      sx={{
        backgroundColor: "#bfbdc1",
        boxShadow: "none",
        borderRadius: 0,
        zIndex: 9999,
        height: "5rem", // Adjust the height to fit inside the box
        marginBottom: "1rem",
        fontFamily: "Gilroy light",
      }}
    >
      <Container maxWidth="xs">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component="a"
                href={`#${page.link}`}
                sx={{
                  marginLeft: "-1rem",
                  background: "transparent",
                  fontFamily: "Gilroy light",
                  fontSize: "0.5rem",
                  fontWeight: 700,

                  letterSpacing: ".2rem",
                  textDecoration: "none",
                  color: "#6D6A75",
                  "&:click": {
                    color: "#DE9E36",
                  },
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(page.link);
                }}
              >
                {page.name}
              </Button>
            ))}
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
                key={page.name}
                component="a"
                href={`#${page.link}`}
                sx={{
                  background: "transparent",
                  fontFamily: "Gilroy light",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                  color: "#6D6A75",
                  "&:hover": {
                    fontFamily: "Gilroy extra bold",
                    textDecoration: "underline",
                    textDecorationStyle: "dotted",
                    transition: "text-decoration 0.2s ease-in-out",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#DE9E36",
                    background: "transparent",
                    textShadow: "2px  8px 8px #000",
                  },
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(page.link);
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
