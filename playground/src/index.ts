import * as w from 'workspace'
import { hello, type Hello } from 'workspace/bar'
import { bar } from 'workspace'

console.log(hello as Hello, bar, w.bar, w.hello, process.env.NODE_ENV)
