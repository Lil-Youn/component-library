import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";

const pages = ["home", "site1", "site2", "site3"];

function ArrowAppBar() {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < pages.length) {
      setCurrentSection(index);
      const section = document.getElementById(pages[index]);
      if (section) {
        const scrollTop = section.offsetTop;
        window.scrollTo({ top: scrollTop, behavior: "smooth" });
      }
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  const handleNextSection = () => {
    if (currentSection < pages.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < pages.length; i++) {
        const section = document.getElementById(pages[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setCurrentSection(i);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="relative" //change to fixed when using it in your app
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        borderRadius: 0,
        zIndex: 9999,
        height: "5rem",
        marginBottom: "1rem",
        fontFamily: "Gilroy light",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              onClick={handlePrevSection}
              sx={{
                animation: "pulsate 2s infinite",
                backgroundColor: "#deb841",
                borderRadius: "50%",
                padding: "12px",
                marginRight: "1rem",
                boxShadow: "2px 4px 8px #000",
              }}
            >
              <ArrowBackIcon style={{ color: "#000" }} />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              onClick={handleNextSection}
              sx={{
                animation: "pulsate 2s infinite",
                backgroundColor: "#deb841",
                borderRadius: "50%",
                padding: "12px",
                marginLeft: "1rem",
                boxShadow: "2px 4px 8px #000",
              }}
            >
              <ArrowForwardIcon style={{ color: "#000" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ArrowAppBar;
