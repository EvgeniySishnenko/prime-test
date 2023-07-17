"use client";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";

export default function ToggleTables({ alignment, handleChange }: any) {
  return (
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
      <ToggleButton value="MARGIN">MARGIN</ToggleButton>
      <ToggleButton value="COVESTING">COVESTING</ToggleButton>
    </ToggleButtonGroup>
  );
}
