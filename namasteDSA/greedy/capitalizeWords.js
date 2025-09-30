function capitalizeWords(sentence) {
    return sentence
        .trim() // remove leading/trailing spaces
        .split(/\s+/) // split on one or more spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}