function convertToRoman(num) {
    if (num < 1 || num > 100000) {
        return '';
    }
    
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    
    let roman = '';
    
    for (let [symbol, value] of romanSymbols) {
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }
    
    return roman;
}
