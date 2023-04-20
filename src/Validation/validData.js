export function isValidDate(val){
    
    const [year , month , date]  = val.split("-")
    const currDate = new Date().getDate()
    const currMonth = new Date().getMonth() + 1
    const currYear = new Date().getFullYear()
    
    if(year < currYear) return false
    if(year == currYear && Number(month) < currMonth) return false
    if(year == currYear && month == currMonth && currDate > date) return false

    return true
    
}

export function isToday(val){
    let arr = val.split(':')
    if(arr.length !== 3){
        arr = val.split('-')
    }
    console.log(arr);
    const [year , month , date]  = arr
    const currDate = new Date().getDate()
    const currMonth = new Date().getMonth() + 1
    const currYear = new Date().getFullYear()

    if(year == currYear && month == currMonth && currDate == date) return true
    return false

}


// console.log(isToday('2023-04-21'));

export function isValidTime(start , end){
    let arr1 = start.split(':')
    if(arr1.length == 1){
        arr1 = start.split('-')
    }
    let arr2 = end.split(':')
    if(arr2.length == 1){
        arr2 = end.split('-')
    }

    let [startHour , startMin , startSecond]  = arr1
    let [endHour , endMin , endSecond]  = arr2

    const currHor = new Date().getHours()
    const currMint = new Date().getMinutes()
    
    if(currHor > 12 && startHour < 12){
        let Hour = currHor - 12
        if(Hour > startHour) return false
    }

    console.log(startHour , startMin);
    // return startTime <= endTime
}

let s  = '10:40' , e = '10:35'
console.log(isValidTime(s , e));

