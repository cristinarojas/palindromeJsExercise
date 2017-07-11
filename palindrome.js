function checkPalindrome(str) {
    // remove punctuation, to lower case.
    str = str.replace(/[.,?:;\/() _-]/g, '').toLowerCase();

    // Compare the string with it's reversed version.
    return str == str.split('').reverse().join('');
}

checkPalindrome('Anita laba la tina');

// The split() method is used to split a string into an array of substrings, and returns the new array.

// The reverse() method reverse the order of the elements in an array

// The join() method join the elements of an array into a string. join(" ") - text text

