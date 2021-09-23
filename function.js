function conjugation(verb = "делать", pronoun = "я") {
    const excludes1 = ["брить", "стилить"];
    const excludes2 = ["гнать", "держать", "терпеть", "обидеть", "видеть", "слышать", "ненавидеть",
                        "зависеть", "вертеть", "дышать", "смотреть"];
    let newWord;
    const b = verb.substr(verb.length -3, verb.length).toLocaleLowerCase();
    const pronounLowerCase = pronoun.toLocaleLowerCase();
    if (b === "ить" && !excludes1.includes(verb) || excludes2.includes(verb) ) {
        newWord = verb.substr(0, verb.length - 3 ).toLocaleLowerCase();
        switch (pronounLowerCase) {
            case "я":
                if (newWord.length === 1) newWord += "ь";
                newWord += "ю";
                break;
            case "мы":
                if (newWord.length === 1) { newWord += "ьем";} // для слов: бить, пить
                else { newWord += "им" };
                break;
            case "ты":
                if (newWord.length === 1) { newWord += "ьешь";}
                else { newWord += "ишь" };
                break;
            case "вы":
                if (newWord.length === 1) { newWord += "ьете";}
                else { newWord += "ите" };
                break;
            case "они":
                if (newWord.length === 1) { newWord += "ьют";}
                else { newWord += "ят" };
                break;
            case "он":
            case "она":
            case "оно":
                if (newWord.length === 1) { newWord += "ьет";}
                else { newWord += "ит" };
                break;
            default:
                newWord += "ить"
                break;
        }
    } else {
        newWord = verb.substr(0,verb.length - 2).toLocaleLowerCase();
        switch (pronounLowerCase) {
            case "я":
                if (b === "ять" || b === "ить") 
                    newWord = verb.substr(0,verb.length - 3 ).toLocaleLowerCase(); // для глаголов по типу: лаять, лелеять, стилить
                newWord += "ю";
                break;
            case "мы":
                newWord += "ем";
                break;
            case "ты":
                newWord += "ешь";
                break;
            case "вы":
                newWord += "ете";
                break;
            case "они":
                newWord += "ют";
                break;
            case "он":
            case "она":
            case "оно":
                newWord += "ет";
                break;
            default:
                newWord += "ть"
                break;
            }
        }

    return `${pronounLowerCase} ${newWord}`;
}

console.log(conjugation("говорить", "я"));
console.log(conjugation("думать", "я"));
console.log(conjugation("получать", "я"));
console.log(conjugation("лаять","я"));
console.log(conjugation("кашлять","я")); 
console.log(conjugation("ХВАЛИТЬ","ОН")); 
console.log(conjugation("проДать","вы"));
console.log(conjugation("держать","оно"));
console.log(conjugation("сделать","я"));
console.log(conjugation());
console.log(conjugation("стилить","я"));
console.log(conjugation("смотреть","я"));
console.log(conjugation("бить","я"));