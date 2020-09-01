
// Завдання 1
/*
let numb = +prompt(`Введіть якесь число`);

if(numb > 0) {
    console.log(`1 Ваше значення ${numb} більше нуля`);
} else if (numb < 0) {
    console.log(`-1 Ваше значення ${numb} менше нуля`);
} else {
    console.log(`0 Ваше значення ${numb} дорівнює нулю`);
}



// Завдання 2

let login = prompt(`Who is there?`);
let password;

if (login == 'Admin') {
    password = prompt(`Enter your password`);
    if(password == 'TheMaster') {
        console.log(`Welcome!`)
    } else if (password == null) {
        console.log(`Canceled.`);
    } else if (password != 'TheMaster') {
        console.log(`Wrong password`);
    }
} else if(login == null) {
    console.log(`Canceled.`);
} else if (login != 'Admin') {
    console.log(`I don't know you`);
}



// Завдання 3

let login = prompt(`Who is there?`);
let password;

switch(login) {
    case 'Admin': {
        password = prompt(`Enter your password`);
        switch(password) {
            case 'TheMaster': {
                console.log(`Welcome!`);
                break;
            }
            case null: {
                console.log(`Canceled.`);
                break;        
            }
            default: {
                console.log(`Wrong password`);
            }
        }
        break;
    }
    case null: {
        console.log(`Canceled.`);
        break;
    }
    default: {
        console.log(`I don't know you`);
    }

}

*/