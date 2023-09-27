[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11974279&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

In each iteration through the while-loop we observe that finding the pivot and pushing each sub-array at the end of every iteration run in constant time. However, things get interesting when we turn to partitioning the arrays. I believe this to take linear time given that we must deal with every element of our unsorted array (at least to begin with). Finally, analyzing what's going on with the left and right sub arrays we can see pushing all the elements to both of the sub arrays adds an additional O(2*log2(n)) to our time-complexity. Taking out this constant factor we get a final answer of Θ(n*log2(n))
