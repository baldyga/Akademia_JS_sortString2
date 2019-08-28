function sortString(string) {
    let res = string.split("");
    let sort = res.sort();
    let scal = sort.join("");
    
    return scal;
}
console.log(sortString("Akademia 108"));