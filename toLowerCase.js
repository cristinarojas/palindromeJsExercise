function removeCharacters(str) {
    str = str.toLowerCase().replace(/[.,?:;\/() _-]/g, ''); // Coverting letters to lowercase and replace punctuation with no spaces

    return str;
}

// Convert letters to lowercase

removeCharacters('Anita Laba la- tIna'); // anitalabalatina