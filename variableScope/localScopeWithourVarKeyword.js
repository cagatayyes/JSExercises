function showScope() {
    scope = 'local';

    return scope;
}

scope = 'global';

console.log(scope);
console.log(showScope());
console.log(scope);

/*
scope normalde global. ama function'ı çağırınca local'e dönüyor ve öyle kalıyor. 
bu yüzden her zaman 'var' kullanmalıyız
 */
