function setTimeObj(time) {
    time = time.split(':');
    time[0] = Number(time[0]);
    if (time[1].slice(2,) === 'pm') time[0] = time[0] + 12;
    time[1] = Number(time[1].slice(0, 2));
    // console.log(time);
    let date = new Date();
    date.setHours(time[0]);
    date.setMinutes(time[1]);
    return date;
    }
    function CountingMinutesI(str) {
    let [time1, time2] = str.split('-');
    const date1 = setTimeObj(time1);
    const date2 = setTimeObj(time2);
    let result = date2.getHours() - date1.getHours();
    if (result < 0) result = (24 + result);
    // console.log(result);
    result *= 60;
    result += date2.getMinutes() - date1.getMinutes();
    if (result < 0) result = 24 * 60 + result;
    return result;
    }
    console.log(CountingMinutesI('11:00am-11:00pm'));
    
    
    
    
    
    