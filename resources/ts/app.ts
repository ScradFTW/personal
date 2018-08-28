import {ThemeLoader} from "./ThemeLoader";
import * as $ from "jquery";

$(document).ready(function () {

    let loader: ThemeLoader = new ThemeLoader();
    let themes: JQuery<HTMLElement> = $("#themes");
    let loadTheme = (elem: JQuery<HTMLElement>) => {
        loader.load(<string>elem.val());
    };

    // initialize the currently selected theme and listen onto the theme selector for changes in the theme
    loadTheme(themes);
    themes.change((e) => {
        loadTheme($(e.currentTarget));
    });
});
