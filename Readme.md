# React Review

-   [Video](https://youtu.be/4DtB4oB1sfI)
-   [notes](https://github.com/jbarson/Todo-app)

## Agenda

-   \[x\] Run through server
-   \[x\] Planning your app (todo list)
-   \[x\] Building a component
-   \[x\] Passing props
-   \[x\] Handling state

## Recap - Components, Props & State

### Components

Components are the building blocks of react Take a functionality of a small piece of your application and encapsulated its own isolated container A component encapsulate or hide the underlying complexity of what's going on(state, events, etc) You build a large app out of multiple smaller apps

### Props

Props are to components what attributes are to an HTML element (the 'src' tag in an is needed to make the image work) Props are arguments given to the component so that it can do it's job properly Props are accessible in an object in the first argument of a functional component

### State

State is information that our app uses and modifies State is built to be changed during the course of our app Using state with functional components needs the useState hook

## Recap - Express Backend

Express is a framework built for Node.js, and it's main purpose is to manage routes easily and add quick and easy support for middleware.

Example route:

      app.get('/hello', (req, res) ={
        res.send('Hello world!');
      });


Express can be used as an API server, like the scheduler-api.

      app.get('/api/posts', (req, res) ={
        res.json(someObject);
      });