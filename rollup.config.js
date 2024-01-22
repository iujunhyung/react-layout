import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from "@rollup/plugin-terser";
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.tsx',
  chache: false,
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    terser(),
    postcss(),
  ],
  external: [
    'react', 
    'react-dom'
  ]
};
