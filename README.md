# mern-auth-task-manager

Fullstack MERN project

You can create, edit and delete users and tasks based on user roles. You can also assign tasks to users and track their progress. There are four types of users: Admin, Manager, Employee and Visitors.

- Admin can create, edit and delete users and tasks.
- Admin can promote and demote users to Managers and Employees
- Manager can create, edit and delete tasks, but not users.
- Manager can assign tasks to users and ban accounts.
- Employee can create a new tasks and edit assigned task.
- Login Required to enter the app, default accout upon registration = Employee
- Public landing page for Visitors


## To run locally:

1. Connect to your MongoDB in the .env file
2. open terminal for client & server and run simultaneously on each
``` 
npm i
npm run dev
```


