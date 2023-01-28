// import * as wasm_module from './pkg/wasm_module.js'
// const wasm_module = require('./pkg')
// import * as wasm_module from 'rust-wasm-module'
import { greet, add } from 'rust-wasm-module'

greet("WASM")

console.log('call wasm, 1 + 2 =', add(1, 2))
