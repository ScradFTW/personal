import {MatrixTheme} from "MatrixTheme"

export class ThemeLoader {
    private readonly themes: { [keyName: string]: Theme } = {
        "Matrix": new MatrixTheme()
    };

    constructor(private readonly name: string) {
    }

    getTheme(): Theme {
        return this.themes[this.name];
    }
}
