function removeCharacters(str) {
	// 1
    str = str.toLowerCase().replace(/[.,?:;\/() _-]/g, ''); // Coverting letters to lowercase and replace punctuation with no spaces

    // 2
    return str.split('').reverse().join('');
}

removeCharacters('Anita Laba la- tIna'); 

// The join() method join the elements of an array into a string. join('') - texttext

// 1 anitalabalatina
// 2 ["a", "n", "i", "t", "a", "l", "a", "b", "a", "l", "a", "t", "i", "n", "a"]
// 3 ["a", "n", "i", "t", "a", "l", "a", "b", "a", "l", "a", "t", "i", "n", "a"]
// 4 anitalabalatina