import * as $ from "jquery";
import "jquery-ui-bundle"

export class MatrixTheme implements Theme {
    private static readonly URL: string
        = "https://raw.githubusercontent.com/torvalds/linux/master/security/integrity/evm/evm_crypto.c";

    /**
     * Initialize the state of the Matrix Theme.
     */
    init(): void {
        // Add the terminal and matrix (code background) elements to the page
        $("body").prepend(
            '<div id="terminal"><i>$</i> ./brad_jobe_personal_site.sh<span id="cursor"> </span></div>'
        ).append(
            '<canvas id="matrix"></canvas>'
        );

        // grab all our draggable elements and initialize their state
        let draggables: JQuery<HTMLElement> = $(".draggable").fadeIn(1000);

        this.makeTopElem(draggables, false);
        draggables.draggable().mousedown((elem) => {
            // set all the draggable windows to be bottom elements, then set the currently selected one to the top one
            this.makeTopElem(draggables, false);
            this.makeTopElem($(elem.currentTarget));
        });

        $.get(MatrixTheme.URL, (data) => {
            let tokens: string[] = data.match(/\S+/g) || [];
            let canvas: any = document.getElementById("matrix");
            let ctx = canvas.getContext("2d");

            this.drawCode(tokens, canvas, ctx);
            setInterval(() => {
                // clear the canvas of previous data
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // draw the next version of the background code
                this.drawCode(tokens, canvas, ctx);
            }, 250);
        });
    }

    /**
     * When we want to change the theme, we need to remove the elements specific to this theme
     */
    destruct(): void {
        $("#terminal").remove();
        $("#matrix").remove();
        $(".draggable").draggable("disable")
    }

    private makeTopElem(elems: any, top: boolean = true): void {
        let zIndex = top ? 1 : 0;
        let color = top ? "#3b4b72" : "#4e555b";

        elems.css("z-index", zIndex).css("border-color", color).css("border-width", "5px");
    }

    private drawCode(data: string[], canvas: any, ctx: any): void {
        //make the canvas full screen
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        let font_size = 12;

        ctx.font = font_size + "px monospace";
        let columns = canvas.width / font_size;
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