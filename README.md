# JavaScript Null Handling Bug

This repository demonstrates a subtle bug in a JavaScript function designed to add two numbers. The bug is related to how the function handles null or undefined values. 

## Bug Description

The `foo` function attempts to handle null values by returning 0 when either `a` or `b` is null. However, it does not explicitly handle the case where both `a` and `b` are null. This leads to incorrect behavior in some scenarios.

## How to reproduce

1. Clone the repository.
2. Run `bug.js`. The output will be 0 when only one argument is null, but not when both are null.
3. Run `bugSolution.js` to see the corrected version.

## Solution

The solution involves explicitly checking if both `a` and `b` are null and returning 0. This ensures that the function always handles null values consistently.