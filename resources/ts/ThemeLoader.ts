import {MatrixTheme} from "./MatrixTheme"

export class ThemeLoader {

    private readonly themes: { [keyName: string]: Theme } = {
        "Matrix": new MatrixTheme()
    };

    private currentTheme: any | null;

    constructor(private readonly name: string) {
    }

    getTheme(): Theme {
        if (this.currentTheme != null)
            this.currentTheme.destruct();

        this.currentTheme = this.themes[this.name];

        return this.currentTheme;
    }
}
