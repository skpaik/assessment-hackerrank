# You need to finish a todo list application.

You can choose whether to use class-based components or functional components in combination with hooks API. Go to `App.tsx` and uncomment an import according to your choice.

note: do not remove "data-tesid" attributes from JSX. They are necessary for tests to run correctly.

## Requirements:

* it should work to toggle the done state of a todo via an existing button
* "x items left" should display the number of todos that are not done e.g. "3 items left"
* upon clicking "clear completed" button, all todos that are done should be removed
* implement switching views(all/active/done): done should only show done items, active should only show items that are not done and all should show both.