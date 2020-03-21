function formatDate(date) {

    let dateTime = new Date(date);

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    let formatted_date = dateTime.getDate() + "-" + months[dateTime.getMonth()] + "-" + dateTime.getFullYear() + " " + dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();

    let diff = new Date() - date; // the difference in milliseconds

    if (diff < 1000) { // less than 1 second
        return 'right now';
    }

    let sec = Math.floor(diff / 1000); // convert diff to seconds

    if (sec < 60) {
        return sec + ' sec. ago';
    }

    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
        return min + ' min. ago';
    }

    else {
        return `${formatted_date}`
    }

    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    /*let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component

    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');*/
}


export default formatDate;