function removeCharacters(str) {
    str = str.replace(/[.,?:;\/() _-]/g, ''); // Replace punctuation with no spaces

    return str;
}

removeCharacters('Hi, this IS the da-y CrisTINa_'); // HithisISthedayCrisTINa