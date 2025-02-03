function Hello(){

    var a = 'Thissss';
    // var a declare kiya 
    // return me { yha js likh skte h} now hmne { a} use kiya mtlb wha a ki value aaegi even method bhi use kar skte h jaise.

    let b = () => {
        return 'That';
    }
    return <h1>
        
        Hey there React {a} {b()}
    </h1>
}

export default Hello