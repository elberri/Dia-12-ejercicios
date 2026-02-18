const books = [
  { id: 1, title: "Clean Code", author: "Robert Martin", available: true },
  { id: 2, title: "JavaScript: The Good Parts", author: "Douglas Crockford", available: false },
  { id: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: true }
];
function traerTodosLosDisponibles(params) {
    
}
traerTodosLosDisponibles(books) // Clean Code, Eloquent JavaScript

function traerNombrePorID(id){
    let libro
    for (let i = 0; i < books.length; i++) {
        const element = books[i];
        if (element.id === id) {
            libro = element.title
        }
    }
    return libro
}