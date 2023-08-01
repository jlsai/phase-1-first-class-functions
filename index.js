function receivesAFunction(Spy) {
    return Spy();
}

function returnsANamedFunction() {
    return function func() {

    };
}

function returnsAnAnonymousFunction() {
    return () => {
        
    }
}
