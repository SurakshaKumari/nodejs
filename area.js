module.exports = (x,y,callback) => {
    if(x <= 0 || y <= 0 ){
        setTimeout(() => callback(new Error(console.log("should greater than 0")),null), 1000);
    }
    else {
        setTimeout(() => callback(null, {
            area : () => (x*y)
        }), 1000);
    }
}

