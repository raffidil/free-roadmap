import red from "@mui/material/colors/red";
import pink from "@mui/material/colors/pink";
import purple from "@mui/material/colors/purple";
import deepPurple from "@mui/material/colors/deepPurple";
import indigo from "@mui/material/colors/indigo";
import blue from "@mui/material/colors/blue";
import lightBlue from "@mui/material/colors/lightBlue";
import cyan from "@mui/material/colors/cyan";
import teal from "@mui/material/colors/teal";
import green from "@mui/material/colors/green";
import lightGreen from "@mui/material/colors/lightGreen";
import lime from "@mui/material/colors/lime";
import yellow from "@mui/material/colors/yellow";
import amber from "@mui/material/colors/amber";
import orange from "@mui/material/colors/orange";
import deepOrange from "@mui/material/colors/deepOrange";
import brown from "@mui/material/colors/brown";
import grey from "@mui/material/colors/grey";
import blueGrey from "@mui/material/colors/blueGrey";

const colors = {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
};

export type Color = keyof typeof colors;

const useColors = () => {
  return colors;
};

export default useColors;
