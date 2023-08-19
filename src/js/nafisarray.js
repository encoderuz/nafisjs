export const nafisArray = function (arr){
    return{
        log: () => {
            console.log(arr)
            return self;
        },
        length: () => {
            return arr.length;
        }
    }
}
