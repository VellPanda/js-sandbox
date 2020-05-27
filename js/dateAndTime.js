let val;

const today = new Date ();
let birthday = new Date ('11-03-1993 04:30:00');
birthday = new Date ('Nov 03 1993');
birthday = new Date ('11/03/1993');

val = birthday.getDate();
val = birthday.getMonth();
val = birthday.getDay();
val = birthday.getFullYear();
val = birthday.getTime();
val = birthday.getHours();
val = birthday.getMinutes();
val = birthday.getSeconds();
val = birthday.getMilliseconds();


val = birthday.setDate(12);
val = birthday.setMonth(4);
val = birthday.setFullYear(1999);
val = birthday.setHours(03);
val = birthday.setMinutes(16);
val = birthday.setSeconds(30);

console.log(birthday);