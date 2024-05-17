import { IconButton } from "@mui/material";
import React from "react";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const ScrollTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <IconButton onClick={handleScroll} aria-label="Scroll to Top">
        <EmojiPeopleIcon style={{ fontSize: 40 }} />
      </IconButton>
    </>
  );
};

export default ScrollTop;
