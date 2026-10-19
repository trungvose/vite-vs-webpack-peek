import { readFileSync, writeFileSync } from 'node:fs'
import { parseSync } from 'oxc-parser'

const file = process.argv[2]
const { program, errors } = parseSync(file, readFileSync(file, 'utf8'))

if (errors.length) console.error(errors)
writeFileSync(`${file}.ast.json`, JSON.stringify(program, null, 2))
console.log(`${file}.ast.json`)
