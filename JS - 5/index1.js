//Merge values
const stock = {
    pencil: {
        name: 'natraj',
        type: ['HB', '2H', 'H'],
        rate: [3, 5, 5],
        available_stock: 250
    },
    note_book: {
        name: 'class mate',
        type: ['long size', 'king size'],
        rate: [35, 20],
        available_stock: 500
    }
};
var newValues = { 
    rate: [6, 10],
    type : ['small size','ruled','un ruled']
 };
var updatedStock = {
    pencil : {
        ... stock.pencil,
        rate : [...stock.pencil.rate, ...newValues.rate]
    },
    note_book : {
        ...stock.note_book,
        type : [...stock.note_book.type, ... newValues.type]
    }
};
console.log(updatedStock);