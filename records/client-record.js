class ClientRecord {
    constructor(obj) {
        const { id, name, email, nextContactAt, notes } = obj;

        if (!id || typeof id !== 'string') {
            throw new Error('ID musi być nie pustym tekstem')
        }

        if (!name || typeof name !== 'string' || name.length <= 2) {
            throw new Error('Imię musi być, tekstem minimum 2 znaki!')
        }

        if (!email || typeof email !== 'string' || email.indexOf('@') === -1) {
            throw new Error('Mail nie prawidłowy')
        }

        if (typeof nextContactAt !== 'string') {
            throw new Error('Data następnego kontaktu musi być tekstem')
        }

        if (typeof notes !== 'string') {
            throw new Error('Notatki muszą być tekstem')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.nextContactAt = obj.nextContactAt;
        this.notes = obj.notes;
    }
}

module.exports = {
    ClientRecord,
}