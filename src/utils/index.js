

export const getAvarageRate = (allResponse, rateKeyname) => {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < allResponse.length; i++) {
        let intValue = parseInt(allResponse[i][rateKeyname], 10);
        if (intValue > 0) {
            sum = sum + intValue;
            count++;
        }
    }
    const average = sum / count;
    return Number(average)
}

export const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0
}

export const floatToPercent = (number, n) => {
    const percentage = Math.floor(number * Math.pow(10, 2 + n)) / Math.pow(10, n);
    return `${percentage}%`
}