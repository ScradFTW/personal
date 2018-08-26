import $ = require("jquery");
import {ThemeLoader} from "./themes/ThemeLoader";

let currentTheme: Theme = new ThemeLoader("Matrix").getTheme();
currentTheme.init();