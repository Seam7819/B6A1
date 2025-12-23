//Problem 01

function formatValue(value: number | string | boolean): number | string | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value;
    }
}


// Problem 02

function getLength(value: string | any[]): number {
    if (Array.isArray(value)) {
        return value.length;
    } else if (typeof value === 'string') {
        return value.length;
    }
    {
        return 0;
    }
}