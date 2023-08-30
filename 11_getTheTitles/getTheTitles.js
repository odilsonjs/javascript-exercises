const getTheTitles = function(array) {
    let titles = [];
    for (let book of array){
        titles.push(book.title);
    }
    return titles;
};

module.exports = getTheTitles;
