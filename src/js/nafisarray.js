export const nafisArray = function (arr){
    return{
        log: () => {
            console.log(arr)
            return self;
        },
        length: () => arr.length,
        toStr: () => arr.toString(),
        join: (data) => arr.join(data),
        pop: () => arr.pop(),
        push: (data) => arr.push(data),
        shift: () => arr.shift(),
        unshift: (data) => arr.unshift(data),
    }
}
