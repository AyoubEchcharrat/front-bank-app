// rollup.config.js
import alias from '@rollup/plugin-alias';
import * as _path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

/*
Define any path here that triggers the "is not exported" error

This is not needed if the react libraries are marked as `externals` and excluded from the bundle.
This is only an needed because we **want** react to be included in the bundle.
*/
let pathReact = 'umd/react.production.min.js';
let pathReactDom = 'umd/react-dom.production.min.js';
let pathReactJsx = 'cjs/react-jsx-runtime.production.min.js';
if (!isProduction) {
    pathReact = 'umd/react.development.js';
    pathReactDom = 'umd/react-dom.development.js';
    pathReactJsx = 'cjs/react-jsx-dev-runtime.development.js';
}

module.exports = {
    input: 'src/index.js',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [
        alias({
            entries: [
                {
                    find: /^react$/,
                    replacement: require.resolve(_path.join('react', pathReact)),
                },
                {
                    find: /^react-dom$/,
                    replacement: require.resolve(_path.join('react-dom', pathReactDom)),
                },
                {
                    /*
                    2022-03-11
                    https://github.com/vitejs/vite/issues/6215#issuecomment-1064247764
                    */
                    find: /react\/jsx-runtime/,
                    replacement: require.resolve(_path.join('react', pathReactJsx)),
                },
            ]
        })
    ]
};