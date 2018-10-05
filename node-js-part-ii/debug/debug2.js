
function countList(list) {
    debugger;
    if (list.length === 0) { return 0; }
    return 1 + countList(list.slice(1));
};

const count = countList([1, 2, 3]);
