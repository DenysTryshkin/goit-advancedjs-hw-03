# Topic 6. HTTP Requests and Backend Interaction. Homework

## Main steps for completing the homework

Create a repository named `goit-advancedjs-hw-03`. Build the project using Vite.
We have prepared a ready-made build with all additional project settings and
recommend using it. Use the Axios library for HTTP requests. Read the assignment
and complete it in your code editor. Make sure the code is formatted with
Prettier, and that there are no errors or warnings in the console when opening
the live page of the assignment. Submit the homework for review.

## Grading format:

Score from 0 to 100

## Submission format:

Two links: to the source files and the live page on GitHub Pages Attached
repository archive in `.zip` format Important: Review the instructions for
uploading the working file from the GitHub repository

💡 Pay attention! File and folder names, as well as their nesting structure,
must match the specified scheme. Otherwise, the work will not be accepted.

---

For code organization, use modularity and the `export/import` syntax:

In the `pixabay-api.js` file, store functions for performing HTTP requests:

`getImagesByQuery(query)`. This function must accept one parameter `query` (a
search keyword, which is a string), perform an HTTP request, and return the
value of the `data` property from the received response.

In the `render-functions.js` file, create an instance of `SimpleLightbox` for
working with the modal window and store functions for displaying interface
elements:

`createGallery(images)`. This function must accept an array `images`, create
HTML markup for the gallery, add it to the gallery container, and call the
`refresh()` method of the `SimpleLightbox` instance. Returns nothing.

`clearGallery()`. This function accepts nothing and must clear the gallery
container content. Returns nothing.

`showLoader()`. This function accepts nothing, must add a class for displaying
the loader. Returns nothing.

`hideLoader()`. This function accepts nothing, must remove the class for
displaying the loader. Returns nothing.

In the `main.js` file, write all the application logic. Calls to `iziToast`
notifications and all checks for the array length in the received response must
be implemented specifically in this file. Import functions from `pixabay-api.js`
and `render-functions.js` and call them at the appropriate moment.

---

# Task. Image Search

Create an application for searching images by keyword and viewing them in a
gallery. Add styling for interface elements according to the mockup. 💡 Use this
mockup to style your assignment.

## Search Form

Add the following form markup to the HTML file:

```html
<form class="form">
  <label>
    <input
      type="text"
      name="search-text"
      placeholder="Search images..."
      required
    />
  </label>
  <button type="submit">Search</button>
</form>
```

The user will enter a search string into the text field, and upon form
submission, an HTTP request with this search query must be performed.

When the submit button is clicked, add validation for the text field content to
check for an empty string so that the user cannot submit a request if the search
field is empty.

## HTTP Requests

Add the Axios library to the project for writing code related to HTTP requests.
Use the public Pixabay API service as the backend. Register, get your unique
access key, and review the documentation.

List of required query string parameters:

- `key` — your unique API access key.
- `q` — the search keyword entered by the user.
- `image_type` — image type. Only photos are needed, so set the value to
  `photo`.
- `orientation` — image orientation. Set the value to `horizontal`.
- `safesearch` — age filter. Set the value to `true`.

The response will contain an object with several properties, one of which
(`hits`) will contain an array of image objects that match the query parameter
criteria.

Be sure to move HTTP request functions into the `pixabay-api.js` file inside the
`js` folder. This is good practice and an opportunity to practice a modular
development approach.

If the backend returns an empty array, it means that nothing suitable was found.
In this case, display the following message:

```text
Sorry, there are no images matching your search query. Please try again!
```

Use the `iziToast` library for notifications. To connect the library CSS code to
the project, you need to add one more import in addition to the one described in
the documentation.

```js
// Described in the documentation
import iziToast from 'izitoast';

// Additional import for styles
import 'izitoast/dist/css/iziToast.min.css';
```

Watch the demo video of the application at this stage.

## Gallery and Image Cards

The gallery element (a list of identical elements `<ul class="gallery">`) must
already exist in the HTML document. After performing HTTP requests, you need to
add image card markup to it.

Each image is described by an object, from which you are only interested in the
following properties:

- `webformatURL` — link to the small image for the gallery card list
- `largeImageURL` — link to the large image for the modal window
- `tags` — image description string. Suitable for the `alt` attribute
- `likes` — number of likes
- `views` — number of views
- `comments` — number of comments
- `downloads` — number of downloads

Before searching with a new keyword, you must completely clear the gallery
content so that search results are not mixed.

Watch the demo video of the application at this stage.

## SimpleLightbox Library

Add large image display functionality using the `SimpleLightbox` library for a
full-featured gallery.

To connect the library CSS code to the project, you need to add one more import
in addition to the one described in the documentation.

```js
// Described in the documentation
import SimpleLightbox from 'simplelightbox';

// Additional import for styles
import 'simplelightbox/dist/simple-lightbox.min.css';
```

In the markup, you will need to wrap each image card in a link, as described in
the documentation in the “Markup” section.

The library contains a `refresh()` method, which must be called every time after
adding new elements to the gallery.

Watch the demo video of the application at this stage.

## Loading Indicator

Add an element that informs the user that the process of loading images from the
backend is in progress. The loader must appear immediately before the HTTP
request starts and disappear after the request is completed.

Watch the demo video of the application at this stage.

Instead of plain text, as implemented in the demo video, you can use a library
with beautiful loading indicators, for example `css-loader`. A video instruction
on how to use this library is available in the `README.md` file of their
repository.

## What the mentor will pay attention to during review:

- The homework contains two links: to the source files and the live page on
  GitHub Pages, as well as an attached `.zip` archive of the repository
- The project is built using Vite
- The console in developer tools contains no errors, warnings, or console logs
- The project includes the libraries `iziToast`, `SimpleLightbox`, and
  `css-loader`
- The page elements are styled according to the mockup (or with custom styles)
- The `pixabay-api.js` file contains the `getImagesByQuery(query)` function for
  performing HTTP requests
- The `render-functions.js` file contains a `SimpleLightbox` instance and
  functions for displaying interface elements: `createGallery(images)`,
  `clearGallery()`, `showLoader()`, `hideLoader()`
- All application logic is described in the `main.js` file
- The page contains an image search form by keyword
- When the form is submitted, a `css-loader` loading indicator appears before
  sending the request to the backend, and previous search results are cleared
  from the page
- When the form is submitted, a request is sent to the backend using the keyword
  for image search with all parameters specified in the technical requirements
- After receiving a response from the backend, the loading indicator disappears
  and images are rendered on the page based on the received backend data, or a
  notification appears that no suitable results were found
- New images are added to the DOM in a single operation
- After adding new elements to the image list, the `refresh()` method is called
  on the `SimpleLightbox` instance
- Clicking on a small image in the gallery opens its enlarged version in a modal
  window using the `SimpleLightbox` library
- During HTTP requests, `then()` and `catch()` handlers are used to process
  possible errors and prevent the page from crashing
