import {ThemeLoader} from "./ThemeLoader";
import * as $ from "jquery";

$(document).ready(new ThemeLoader("Matrix").getTheme().init);
