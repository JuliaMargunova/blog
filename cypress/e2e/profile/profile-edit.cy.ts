import { User } from '@/entities/User';

let profileId = '';
describe('Пользователь заходит на страницу', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data:User) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружен', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('и редектирует его', () => {
        const newFirstname = 'Arsenii';
        const newLastname = 'Margunov';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
