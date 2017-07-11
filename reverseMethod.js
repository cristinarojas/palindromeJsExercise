function removeCharacters(str) {
	// 1
    str = str.toLowerCase().replace(/[.,?:;\/() _-]/g, ''); // Coverting letters to lowercase and replace punctuation with no spaces

    // 2
    return str.split('').reverse();
}

removeCharacters('Anita Laba la- tIna');
 
// The reverse() method reverse the order of the elements in an array 

// 1 anitalabalatina
// 2 ["a", "n", "i", "t", "a", "l", "a", "b", "a", "l", "a", "t", "i", "n", "a"]
// 3 ["a", "n", "i", "t", "a", "l", "a", "b", "a", "l", "a", "t", "i", "n", "a"]


// Other example of reverse:  ["a", "n", "i", "t", "s", "i", "r", "c"]
