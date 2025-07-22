class TodoPage {
  elements = {
    inputNewTodo: () => cy.get('input.new-todo'),
    todoItems: () => cy.get('.todo-list li'),
    todoLabel: (text) => cy.contains('label', text),
  };

  addTodo(task) {
    this.elements.inputNewTodo().type(`${task}{enter}`);
  }

  verifyTodoExists(task) {
    this.elements.todoLabel(task).should('exist');
  }

  getTodoCount() {
    return this.elements.todoItems().its('length');
  }
}

export default TodoPage;
