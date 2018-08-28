import {ThemeLoader} from "./ThemeLoader";
import * as $ from "jquery";

$(document).ready(function () {

    let loader: ThemeLoader = new ThemeLoader();

    let loadTheme = (elem: JQuery<HTMLElement>) => {
        loader.load(<string>elem.val());
    };

    let themes: JQuery<HTMLElement> = $("#themes");

    loadTheme(themes);
    themes.change((e) => {
        loadTheme($(e.currentTarget));
    });
});
