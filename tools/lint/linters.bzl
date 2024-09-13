"Define linter aspects"

load("@aspect_rules_lint//lint:buf.bzl", "lint_buf_aspect")
load("@aspect_rules_lint//lint:ruff.bzl", "lint_ruff_aspect")

buf = lint_buf_aspect(
    config = "@@//tools/lint:buf.yaml",
)

ruff = lint_ruff_aspect(
    binary = "@multitool//tools/ruff",
    configs = [
        "@@//tools/lint:.ruff.toml",
    ],
)

ruff_test = lint_test(aspect = ruff)
