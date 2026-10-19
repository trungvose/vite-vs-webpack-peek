import { readFileSync } from 'node:fs'
import { print } from 'esrap'
import ts from 'esrap/languages/ts'
import tsx from 'esrap/languages/tsx'
import { parseSync } from 'oxc-parser'

// Usage: node parse/roundtrip.mjs <file>  →  parse with Oxc, print the AST back to code with esrap
const file = process.argv[2]
const { program } = parseSync(file, readFileSync(file, 'utf8'))
const { code } = print(program, /\.[jt]sx$/.test(file) ? tsx() : ts())

console.log(code)
