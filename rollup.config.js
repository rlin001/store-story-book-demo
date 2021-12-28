import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");
//const extensions = ['.ts'];
const resolvePath = (...args) => path.resolve(...args);

const config = [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ useTsconfigDeclarationDir: true }),
            postcss({
                extensions: ['.css']
            })
        ]
    },
    {
        input: "src/index.ts",
        output:{
            file: packageJson.types,
            format: "es",
            sourcemap: false
        },
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ useTsconfigDeclarationDir: true }),
            postcss({
                // plugins: []
                extract: true,
            }),
            dts()
        ]
    }
];

export default config;
