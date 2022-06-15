function showScope() {
    var scope = 'local';

    return scope;
}

var scope = 'global';

console.log(scope); // global
console.log(showScope()); // local