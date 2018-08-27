import * as $ from "jquery";
import "jquery-ui-bundle"

export class MatrixTheme implements Theme {
    private static readonly URL: string
        = "https://raw.githubusercontent.com/torvalds/linux/master/security/integrity/evm/evm_crypto.c";

    init(): void {
        $("body").prepend(
            '<div id="terminal"><i>$</i> ./brad_jobe_personal_site.sh<span id="cursor"> </span></div>'
        ).append(
            '<canvas id="matrix"></canvas>'
        );

        let draggables: JQuery<HTMLElement> = $(".draggable");

        draggables.fadeIn(1000);

        MatrixTheme.makeTopElem(draggables, false);
        draggables.draggable().mousedown((elem) => {
            MatrixTheme.makeTopElem(draggables, false);
            MatrixTheme.makeTopElem($(elem.currentTarget));
        });

        $.get(MatrixTheme.URL, (data) => {

            let tokens: string[] = data.match(/\S+/g) || [];
            let canvas: any = document.getElementById("matrix");
            let ctx = canvas.getContext("2d");

            MatrixTheme.drawCode(tokens, canvas, ctx);

            setInterval(() => {
                // clear the canvas of previous data
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                MatrixTheme.drawCode(tokens, canvas, ctx);
            }, 250);
        });
    }

    destruct(): void {
        $("body").remove("#terminal").remove("#matrix");
    }

    private static makeTopElem(elems: any, top: boolean = true): void {
        let zIndex = top ? 1 : 0;
        let color = top ? "#3b4b72" : "#4e555b";

        elems.css("z-index", zIndex).css("border-color", color).css("border-width", "5px");
    }

    private static drawCode(data: string[], canvas: any, ctx: any): void {
        //making the canvas full screen
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        let font_size = 12;

        ctx.font = font_size + "px monospace";
        //chinese characters - taken from the unicode charset
        let columns = canvas.width / font_size; //number of columns for the rain
        let rows = canvas.height / font_size;

        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows; r++) {
                let rand = Math.random();
                let opacity = rand - ((r + 1) / rows);
                ctx.fillStyle = "rgba(0, 255, 0, " + opacity + ")";

                let token = data[Math.floor(rand * data.length)];
                ctx.fillText(token, c * font_size, r * font_size);
            }
        }
    }
}