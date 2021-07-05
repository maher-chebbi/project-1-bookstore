console.log(localStorage.getItem('Books'));
Books = JSON.parse(localStorage.getItem('Books'));

title = localStorage.getItem('choosen book').toString();





function Getitem() {
    console.log(title);

    return Books.filter(book => book.name === title);
}
aa = Getitem();
console.log(aa);
document.write('<p class="style3">' + title + '</p>' + '&nbsp &nbsp &nbsp' + '<br>')
document.write('<p class="style2">' + 'Ecrivain: ' + aa[0].ecrivain + '<br><br>')

document.write('<p class="style4">' + 'Resumé: ' + '<br><br><br>')
document.write('<p class="style1">' + aa[0].resume + '</p>')