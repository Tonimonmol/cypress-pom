import TodoPage from '../../support/pages/TodoPage';

const todoPage = new TodoPage();

describe('TodoMVC Tests', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/#/');
  });

  it('Debe agregar una tarea y verificar que existe', () => {
    todoPage.addTodo('Aprender Cypress');
    todoPage.verifyTodoExists('Aprender Cypress');
    todoPage.getTodoCount().should('eq', 1);
  });
});




