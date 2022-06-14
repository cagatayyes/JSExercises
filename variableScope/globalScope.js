/* 
A Pure Function is a function (a block of code)
that always returns the same result if the same arguments are passed.
It does not depend on any state or data change during a program’s execution.
Rather, it only depends on its input arguments.
*/
function showScope() {
    return scope;
}

var scope = 'global';

console.log(scope);
console.log(showScope());