# 08 Let's get Classy


## Q: How do you create `Nested Routes` react-router-dom configuration?
A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages
```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```
Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "child",      // Don't use '/' because then react-router-dom will understand it it's the direct path
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```


## Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)


## Q: What is the order of life cycle method calls in `Class Based Components`?
A: Following is the order of lifecycle methods calls in `Class Based Components`:
1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


## Q: Why do we use `componentDidMount`?
A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.


## Q: Why do we use `componentWillUnmount`? Show with example.
A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.


## Q: (Research) Why do we use `super(props)` in constructor?
A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.
The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.


## Q: (Research) Why can't we have the `callback function` of `useEffect async`?
A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.

## Topics Covered

1. Class based component example
2. Props, Props in Function based component, Destructure
3. How to write the same example in a Class based component
4. Mentioned about “Super(props)”
5. What if you want more props?
6. How can we write local/state variables in a Function Component
7. How can we create state/local variable in Class component
8. “this.state” explained, Destructuring 
9. How do we create 2 state/local variables in both functional & class-based component
10. How to update the state variables in Class component 
11. Interview Question
12. Life cycle of Class based components
    - Detailed Explanation
    - Parent, child – Constructor 
    - Parent, child – Render
13. ComponentDidMount(){ }, Life cycle of a Parent-child relationship
14. ComponentDidMount() used for API calls
15. API calls inside useEffect()
16. this.props.name + “child constructor” 
17. React Lifecycle Methods Diagram
18. Why React is so fast?
19. DOM Manipulation 
20. Render phase, Commit phase
21. How to make API calls in class based components?
22. GitHub API call
23. How to update the JSON data into our web page
24. Coding UserClass.js component
25. How life cycle works here in this code
26. Debugger
27. ComponentDidUpdate()
28. Mounting Cycle
29. API rate limit exceeded
30. Unmounting Phase/cycle
31. In older days we were coding like this
32. How to write the same in class based component – ProfileClass.js
33. More Deeper we explore the old way of writing React Code
34. What is the use case of componentWillUnmount()?
35. Problem of Single Page Application
36. Senior Developer should know this
37. What will happen if we create setInterval inside useEffect
38. Coding Profile.js 
39. Async in useEffect()

