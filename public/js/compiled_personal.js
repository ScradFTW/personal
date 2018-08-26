"use strict";
define("themes/MatrixTheme", ["require", "exports", "jquery", "jquery-ui"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MatrixTheme = (function () {
        function MatrixTheme() {
            this.URL = "https://raw.githubusercontent.com/torvalds/linux/master/security/integrity/evm/evm_crypto.c";
        }
        MatrixTheme.prototype.init = function () {
            var _this = this;
            var draggables = $(".draggable");
            draggables.fadeIn(1000);
            this.makeTopElem(draggables, false);
            draggables.draggable()
                .mousedown(function () {
                _this.makeTopElem(draggables, false);
                _this.makeTopElem($(_this));
            });
            $.get(this.URL, function (data) {
                var tokens = data.match(/\S+/g) || [];
                var canvas = document.getElementById("matrix");
                var ctx = canvas.getContext("2d");
                _this.drawCode(tokens, canvas, ctx);
                setInterval(function () {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    _this.drawCode(tokens, canvas, ctx);
                }, 250);
            });
        };
        MatrixTheme.prototype.makeTopElem = function (elems, top) {
            if (top === void 0) { top = true; }
            var zIndex = top ? 1 : 0;
            var color = top ? "#3b4b72" : "#4e555b";
            elems.css("z-index", zIndex)
                .css("border-color", color)
                .css("border-width", "5px");
        };
        MatrixTheme.prototype.drawCode = function (data, canvas, ctx) {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
            var font_size = 12;
            ctx.font = font_size + "px monospace";
            var columns = canvas.width / font_size;
            var rows = canvas.height / font_size;
            for (var c = 0; c < columns; c++) {
                for (var r = 0; r < rows; r++) {
                    var rand = Math.random();
                    var opacity = rand - ((r + 1) / rows);
                    ctx.fillStyle = "rgba(0, 255, 0, " + opacity + ")";
                    var token = data[Math.floor(rand * data.length)];
                    ctx.fillText(token, c * font_size, r * font_size);
                }
            }
        };
        return MatrixTheme;
    }());
    exports.MatrixTheme = MatrixTheme;
});
define("themes/ThemeLoader", ["require", "exports", "themes/MatrixTheme"], function (require, exports, MatrixTheme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThemeLoader = (function () {
        function ThemeLoader(name) {
            this.name = name;
            this.themes = {
                "Matrix": new MatrixTheme_1.MatrixTheme()
            };
        }
        ThemeLoader.prototype.getTheme = function () {
            return this.themes[this.name];
        };
        return ThemeLoader;
    }());
    exports.ThemeLoader = ThemeLoader;
});
define("bootstrap", ["require", "exports", "themes/ThemeLoader"], function (require, exports, ThemeLoader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var currentTheme = new ThemeLoader_1.ThemeLoader("Matrix").getTheme();
    currentTheme.init();
});
