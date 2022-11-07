# Todo-List


![Screenshot (101)](https://user-images.githubusercontent.com/107311665/200239603-31a883ba-2185-43f1-b7ef-1977e581ca5e.png)


Requirements:
As a user, I want to see an input field in which I can enter my task.

As a user, I can press a button with the text "Add Task" so that your completed task is added to the list.

As a user, when I clicked the add button, I see the task appear in my task list.

Delete task: As a user, I can click in the task list on an icon of a trash can, to the right of the task, which removes the task from my task list.

note: there are a lot of examples of TODO-list apps with Vanilla JavaScript on the internet ⇒ Copying code one-to-one from a website or from a fellow student is not the intention.

API requirements:
GET: Get the (initial) list of tasks from the database.

POST: Update the task list with 1 new task. Send only {description: "blah", done: false}

DELETE: Delete a task from the database. Use the id you get back as an identifier.

Create a file called api-client.js as you have learned lately for all your requests.
Extra Bonus:
Additional requirements:

Cross out a task: As a user, I can click on a checkbox in the task list, to the left of the task, which crosses the text of the task.
As a user, I want to be able to click on my task and change the text.
Additional API requirements (related to the above):

PUT: update an existing task the property done or not done.
PUT: update an existing task with the PUT method.
