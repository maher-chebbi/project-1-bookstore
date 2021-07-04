console.log(localStorage.getItem('Books'));
Books = JSON.parse(localStorage.getItem('Books'));

title = localStorage.getItem('choosen book').toString();



document.write(title + '&nbsp &nbsp &nbsp ' + '<br> <br> <br>')

function Getitem() {
    console.log(title);

    return Books.filter(book => book.name === title);
}
aa = Getitem();
console.log(aa);
document.writeln('Ecrivain: ')
document.write(aa[0].ecrivain + '&nbsp &nbsp &nbsp ' + '<br> <br> <br>');
document.write('Resumé: ')
document.write(aa[0].resume)