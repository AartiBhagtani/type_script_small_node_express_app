import { Router } from 'express';

import { Todo } from '../models/todo';

const router = Router();
type requestBody = { text: string}
type requestParams = { todoId: string}

let todos: Todo[] = [];

router.get('/', (req, res, next) => {
  res.status(200).json({todos: todos});
})

router.post('/todo', (req, res, next) => {
  const body = req.body as requestBody;
  const todo: Todo = {
    id: new Date().toISOString(),
    text: body.text
  }
  todos.push(todo);
  return res.status(201).json({message: 'Updated successfully', todo: todo, todos: todos});
})

router.put('/todo/:todoId', (req, res, next) => {
  const params = req.params as requestParams;
  const body = req.body as requestBody;
  const tid = params.todoId;
  const todoIndex = todos.findIndex((t) => t.id === tid);
  if(todoIndex > 0) {
    todos[todoIndex] = {id: tid, text: body.text}
    return res.status(200).json({message: 'Updated Succesfully', todos: todos});
  }
  return res.status(404).json({message: 'Could not find todo'});
})

router.delete('/todo/:todoId', (req, res, next) => {
  const params = req.params as requestParams;
  // const tid = req.params.todoId;
  // const todoIndex = todos.findIndex((t) => t.id === tid);
  // if(todoIndex > 0) {
  //   todos.delete(todoIndex)
  // }
  todos = todos.filter((todoItem) => todoItem.id !== params.todoId )
  return res.status(200).json({message: 'Deleted todo', todos: todos});
})
export default router;  