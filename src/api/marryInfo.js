// Информация о молодоженах
const _newlyweds = [
    {
        'husbandName':          '',
        'wifeName':             '',
        'marryDay':             '13',
        'marryMonth':           'июль',
        'marryYear':            '2024',
        'address':              'г. Челябинск, улица Труда, д. 153, гостиница «Малахит», банкетный зал Портофино',
        'guestsArriveAction':   '15:30',
        'weddingCeremonyStart': '16:00',
        'banquetStart':         '17:00'
    }
]


export default {
    getNewlyweds(cb) {
        cb(_newlyweds);
    }
}