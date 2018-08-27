import {MatrixTheme} from "./MatrixTheme"

class PretentiousTheme implements Theme {
    destruct(): void {
    }

    init(): void {
    }
}

class Theme1996 implements Theme {
    destruct(): void {
    }

    init(): void {
    }
}

export class ThemeLoader {
    private readonly themes: { [keyName: string]: Theme } = {
        "Matrix": new MatrixTheme(),
        "Pretentious": new PretentiousTheme(),
        "1996": new Theme1996()
    };

    private currentTheme: Theme | null;

    load(name: string): void {
        if (this.currentTheme != null)
            this.currentTheme.destruct();

        this.currentTheme = this.themes[name];
        this.currentTheme.init();
    }
}
