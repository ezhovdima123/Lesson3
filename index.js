const pinCode = ["1111", "5678", "1234", "9999"];

for (const myPin of pinCode) {
if (myPin === "1234") {
console.log(`${myPin} - Пин-код найден!`);
break;
}
else (myPin !== "1234") 
{
    console.log(`${myPin} - Неверный пин...`);
}

}