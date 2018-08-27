import {ThemeLoader} from "./ThemeLoader";
import * as $ from "jquery";

$(document).ready(function () {

    let loader: ThemeLoader = new ThemeLoader();

    let loadTheme = (elem: JQuery<HTMLElement>) => {
        loader.load(elem.text());
    };

    let selected: JQuery<HTMLElement> = $("#themes option:selected");

    loadTheme(selected);
    $("#themes").change(() => {
        loadTheme(selected);
    });
});
