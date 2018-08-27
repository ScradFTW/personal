module.exports = {
    "mode": "development",
    resolve: {
        extensions: [".ts"]
    },
    "entry": "./resources/ts/app.ts",
    "output": {
        "path": __dirname + '/public/js/compiled/',
        "filename": "compiled.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.tsx?$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "ts-loader",
                    "options": {
                        "transpileOnly": true
                    }
                }
            }
        ]
    }
};
