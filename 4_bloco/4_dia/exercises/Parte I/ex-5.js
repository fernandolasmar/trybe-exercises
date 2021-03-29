let info = {
    character: 'Margarida',
    source: 'Pato Donald',
    note: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recotent: 'Sim',
};

let info2 = {
    character: 'Tio Patinhas',
    source: 'Christimas on Bear Moutain, Dells four color Comics #178',
    note: 'O ultimo macpatinhas',
    recotent: 'Sim',
}

for (let properties in info) {
    if ( info[properties] === info.recotent && info[properties] === 'Sim' && info[properties] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[properties] + ' e ' + info2[properties]);
    }
}