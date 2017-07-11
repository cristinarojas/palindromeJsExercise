function removeCharacters(str) {
	// 1
    str = str.toLowerCase().replace(/[.,?:;\/() _-]/g, ''); // Coverting letters to lowercase and replace punctuation with no spaces

    // 2
    return str.split('');
}

removeCharacters('Anita Laba la- tIna'); 


// The split() method is used to split a string into an array of substrings, and returns the new array.

// 1 anitalabalatina
// 2 ["a", "n", "i", "t", "a", "l", "a", "b", "a", "l", "a", "t", "i", "n", "a"]