/// <reference types='cypress' />
import type {} from '../../support/cypress';

beforeEach((): void => {
  cy.prepare();
});

after(() => {
  cy.complete();
});

describe('modals', function () {
  it('modal opening', function () {
    cy.get('[data-testid=ingredients_list] li:first').click();
    cy.get('[data-testid=modal]').should(
      'have.text',
      'Краторная булка N-200iКалории, ккал420Белки, г80Жиры, г24Углеводы, г53'
    );
  });
  it('modal closing by clicking on close button', function () {
    cy.get('[data-testid=ingredients_list] li:first').click();
    cy.get('[data-testid=modal_close-btn]').click();
    cy.get('[data-testid=modal]').should('not.exist');
  });
  // it('modal closing by clicking on overlay', function () {});
});

describe('order', function () {
  it('ordering a burger', function () {
    cy.get('[data-testid=ingredients_list] ul').as('ingredientsList');
    cy.get('@ingredientsList').first().find('li:first button').click();
    cy.get('@ingredientsList').eq(1).find('li:first button').click();
    cy.get('@ingredientsList').last().find('li:first button').click();

    cy.get('[data-testid=constructor_bun]').should(
      'have.text',
      'Краторная булка N-200i (верх)1255'
    );
    cy.get('[data-testid=constructor_ingredients]').should(
      'have.text',
      'Биокотлета из марсианской Магнолии424Соус Spicy-X90'
    );

    cy.get('[data-testid=make-order]').click();
    cy.get('[data-testid=modal]').should('exist');

    cy.get('[data-testid=modal]').should(
      'have.text',
      '85860идентификатор заказаВаш заказ начали готовитьДождитесь готовности на орбитальной станции'
    );

    cy.get('[data-testid=modal_close-btn]').click();
    cy.get('[data-testid=modal]').should('not.exist');

    cy.get('[data-testid=constructor_bun-empty]').should(
      'have.text',
      'Выберите булки'
    );
    cy.get('[data-testid=constructor_ingredients-empty]').should(
      'have.text',
      'Выберите начинку'
    );
  });
});
