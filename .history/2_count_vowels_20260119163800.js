function countVowels(str) {
    
    for (let i = 0; i < str.length; i++)
    {
        if ((i == "A") || (i == "E") || (i == "I") || (i == "O") || (i == "U")) 
            count++;
    }
}

countVowels("programming");
console.log(count);