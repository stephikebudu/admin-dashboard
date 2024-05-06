import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
// grey
indigo: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414"
}

// primary dark blue 
black: {
    100: "#d0d1d5",
    200: "#a1a4ab",
    300: "#727681",
    400: "#434957",
    500: "#141b2d",
    600: "#101624",
    700: "#0c101b",
    800: "#080b12",
    900: "#040509"
}

// green accent
green: {
    100: "#dbf5ee",
    200: "#b7ebde",
    300: "#94e2cd",
    400: "#70d8bd",
    500: "#4cceac",
    600: "#3da58a",
    700: "#2e7c67",
    800: "#1e5245",
    900: "#0f2922"
}

//red accent
red: {
    100: "#f8dcdb",
    200: "#f1b9b7",
    300: "#e99592",
    400: "#e2726e",
    500: "#db4f4a",
    600: "#af3f3b",
    700: "#832f2c",
    800: "#58201e",
    900: "#2c100f"
}

// blue accent
indigo: {
    100: "#e1e2db",
    200: "#c3c6b7",
    300: "#a4a992",
    400: "#868d6e",
    500: "#68704a",
    600: "#535a3b",
    700: "#3e432c",
    800: "#2a2d1e",
    900: "#15160f"
}