import * as React from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import PropTypes from "prop-types";

import "./style.css";

const ButtonGroupComponent = ({ buttons }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
};

ButtonGroupComponent.defaultProps = {
  buttons: [],
};

ButtonGroupComponent.propTypes = {
  buttons: PropTypes.array.isRequired,
};

export default ButtonGroupComponent;
