const one = () => {
    const two = () => {
        setTimeout(() => {
            console.log('two')
        }, [3000])
    }
    two();
    console.log('one')
}
one();





/*
        clg(one)
        clg(two)
        two()
        one()
        stack
*/