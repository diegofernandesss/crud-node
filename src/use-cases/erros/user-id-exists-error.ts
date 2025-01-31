export class UserIdExistsError extends Error {
    constructor() {
        super('O id não existe no banco de dados')
    }
}