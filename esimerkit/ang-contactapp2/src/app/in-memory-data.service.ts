import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact';

export class InMemoryDataService implements InMemoryDbService {
    createDb() { // createDb() on InMemoryDbService -rajapinnan metodi joka palauttaa olion
        const contacts: Contact[] = [
            {
                id: 1,
                name: 'Elmeri Rummukainen',
                email: 'elmeri@maili.com'
            },
            {
                id: 2,
                name: 'Ana Rummukainen',
                email: 'ana@somewhere.com'
            },
            {
                id: 3,
                name: 'Vilippus Rummukainen',
                email: 'vili@somewhere.com'
            },
            {
                id: 4,
                name: 'Jappo Husso',
                email: 'jappo@somewhere.com'
            },
        ];

        return {contacts};
    }
}
