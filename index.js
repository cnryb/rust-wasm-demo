// import * as wasm_module from './pkg/wasm_module.js'
// const wasm_module = require('./pkg')
import * as wasm_module from 'rust-wasm-module'

wasm_module.greet("WASM")

console.log(wasm_module.add(1, 2))