//Problem 01

function formatValue(value : number | string | boolean) : number | string | boolean {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    else if( typeof value === 'number'){
        return value * 10;
    }else {
        return !value;
    }
} 

