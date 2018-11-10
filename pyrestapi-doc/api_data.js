define({ "api": [
  {
    "type": "delete",
    "url": "/todo/<todo_id>",
    "title": "delete todo task by id",
    "version": "0.1.0",
    "name": "DeleteTodo",
    "group": "Todo",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "todo_id",
            "description": "<p>The todo id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://localhost:5000/v1/todo/todo1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 401 Not Authenticated\n{\"error\": \"NoAccessRight\"}",
          "type": "json"
        }
      ]
    },
    "filename": "pyrestapi/todo.py",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "/todo/<todo_id>",
    "title": "get todo by id",
    "version": "0.2.0",
    "name": "GetTodoItem",
    "group": "Todo",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "todo_id",
            "description": "<p>The todo id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://localhost:5000/v1/todo/todo1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{'task': 'Build an API'}",
          "type": "json"
        }
      ]
    },
    "filename": "pyrestapi/todo.py",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "/todo/task/<task_id>",
    "title": "get todo by id",
    "version": "0.1.0",
    "name": "GetTodoItem",
    "group": "Todo",
    "permission": [
      {
        "name": "all"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>The todo id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://localhost:5000/v1/todo/task/todo1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{'task': 'Build an API'}",
          "type": "json"
        }
      ]
    },
    "filename": "pyrestapi/todo.py",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "/todos",
    "title": "get todolist",
    "version": "0.1.0",
    "name": "GetTodoList",
    "group": "TodoList",
    "permission": [
      {
        "name": "all"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://localhost:5000/v1/todos",
        "type": "json"
      }
    ],
    "filename": "pyrestapi/todo.py",
    "groupTitle": "TodoList"
  },
  {
    "type": "post",
    "url": "/todos",
    "title": "post todo list",
    "version": "0.1.0",
    "name": "PostTodoList",
    "group": "TodoList",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://localhost:5000/v1/todo/todo1\n{\"task\":\"New Task\"}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{'task': 'New Task'}",
          "type": "json"
        }
      ]
    },
    "filename": "pyrestapi/todo.py",
    "groupTitle": "TodoList"
  },
  {
    "type": "put",
    "url": "/todo/<todo_id>",
    "title": "put a new task",
    "version": "0.1.0",
    "name": "PutTask",
    "group": "Todo",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "todo_id",
            "description": "<p>The todo id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://localhost:5000/v1/todo/todo1\n{\"task\": \"New Task\"}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created \n{\"task\": \"New Task\"}",
          "type": "json"
        }
      ]
    },
    "filename": "pyrestapi/todo.py",
    "groupTitle": "Todo"
  }
] });
