var imported = document.createElement('script');
imported.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
document.head.appendChild(imported);

const Download = () => {




    const wb = XLSX.utils.book_new();

    wb.Props = {
        Title: 'titulo',
        Subject: 'descricao',
        Author: 'autor',
        CreatedDate: new Date(),
    };

    wb.SheetNames.push('tabela 1');

    const dados = [
        ['Nome', 'Usuario', 'E-mail', ' preço'],
        ['gustavo', 'login123', 'gustavovianaveiga721@gmail.com', 'R$8'],
        ['luis', 'log333', 'gustavovianaveiga12@gmail.com', 'R$5'],
        ['vagner', 'lsada22', 'gustavovianaveiga34@gmail.com', 'R$4']
    ];

    const ws = XLSX.utils.aoa_to_sheet(dados);

    wb.Sheets['tabela 1'] = ws;

    XLSX.writeFile(wb, 'nome do arquivo.xlsx', { bookType: 'xlsx', type: 'bynary' });

}

const button = document.querySelector('#button');
button.addEventListener('click', () => {
    Download()
});