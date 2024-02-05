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
