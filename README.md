# rollup-swc-crash-reproduction
Minimal reproduction for [Rollup #5379](https://github.com/rollup/rollup/issues/5379).

To reproduce the crash:

```
cd rollup-swc-crash-reproduction
npm install
npm test
```

Expected output:

```
$ npm test

> rollup-swc-crash-reproduction@1.0.0 test
> node ./index.js

Caught an error: ...some error message...
```

Actual output:

```
$ npm test

> rollup-swc-crash-reproduction@1.0.0 test
> node ./index.js

thread '<unnamed>' panicked at parse_ast/src/convert_ast/converter.rs:848:26:
not implemented: Cannot convert Prop::Assign
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
fatal runtime error: failed to initiate panic, error 5
Aborted (core dumped)
```

Note that the logic in the `catch` block never executes.

## SWC Test

There's also a minimal reproduction for the same crash in SWC directly.

```
$ npm run test-swc

> rollup-swc-crash-reproduction@1.0.0 test-swc
> node ./test-swc.js

thread '<unnamed>' panicked at /usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/swc_ecma_compat_es2015-0.4.0/src/duplicate_keys.rs:67:33:
internal error: entered unreachable code: assign property in object literal is invalid
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
Caught an error from SWC:  [Error: failed to handle: internal error: entered unreachable code: assign property in object literal is invalid] {
  code: 'GenericFailure'
}
[Error: failed to handle: internal error: entered unreachable code: assign property in object literal is invalid] {
  code: 'GenericFailure'
}
```
