const { ValidationError } = require("../utils/errors");

class ClientRecord {
    constructor(obj) {
        const { id, name, email, nextContactAt, notes } = obj;

        if (!id || typeof id !== 'string') {
            throw new ValidationError('ID musi być nie pustym tekstem')
        }

        if (!name || typeof name !== 'string' || name.length <= 2) {
            throw new ValidationError('Imię musi być, tekstem minimum 2 znaki!')
        }

        if (!email || typeof email !== 'string' || email.indexOf('@') === -1) {
            throw new ValidationError('Mail nie prawidłowy')
        }

        if (typeof nextContactAt !== 'string') {
            throw new ValidationError('Data następnego kontaktu musi być tekstem')
        }

        if (typeof notes !== 'string') {
            throw new ValidationError('Notatki muszą być tekstem')
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