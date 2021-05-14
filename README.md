How To Install
--------------
```
npm install
```


How To Build Javascript
-----------------------
```
node build
```

How To Run Application
-----------------------
```
start index.html
```


Tasks
-----

You are given source code of a small application. The application uses `React` and `Bootstrap`. It has two pages defined: `Main Menu` page and `Programming Languages` page. For all the changes that you do, please keep the code clean and well organized. The code should reflect real life application and it needs to scale nicely. 

Get familiar with the project. Notice that in order to populate list of programming languages, one ajax call with request string "programming-languages" is done to the service which is hard-coded inside the `ajax.js` file. It is possible to call the same service with two more request strings: "movie-titles" and "movie-ratings".

You don't need to worry about backward compatibilities for old browsers.

Your tasks are:

1. In `Programming Languages` page, make sure that no ajax call is in progress when the component is not on screen.

2. In `Programming Languages` page there is a navigation bar with the `Back` button. Make this navigation to be a separate reusable __stateless__ react component.

3. Following the example of `Programming Languages` page, build another page `Movies`.

4. User should be able to visit this page from the Main Menu. Add a list item `Movies` to the Main Menu.

5. The movie list should look like the `Programming Languages` list, except for each list item there should be a movie title on the left side, and its rating aligned on the right side. Use Bootstrap classes to style the ratings.

6. The list must be sorted by ratings (top rated movie on top).

7. As those ajax calls can be slow, for better user experience the two calls should be done in parallel.

8. Sometimes an ajax call fails (about 10% of times). If that happens for any call, the appropriate simple message should be shown on the page instead of the list (simple error as it is already done for `Programming Languages` page is enough). If an error is received while another call is in progress, there is no need to wait for the response of that call as page with error message can be build right away. Handle this situation appropriately.

9. The list or the error message should become visible only after all needed information has been received from the server.

10. Loader should be visible until the page is built with either the list or error message.

11. There is no need to bloat the code with too many comments, but if there is something that is not obvious from the code, please put some comments.


Good luck!