# Advanced Gallery
You need to create a ReactJS application 'gallery' which communicate via 'api' between it's 2 main components.

## 'Gallery'
1. Component 'search' - an input which on enter saves the query using the API.
2. Component 'gallery' - images from https://pixabay.com API using the query in 
   'search' component. 3-columns per row layout, 100x100px per image. Images should not be stretched. 
3. Underneath each image there should be tags/title. 
4. Once the image is clicked on, a new React view should open with a full size image.

## 'API'
An express.js server to which allows you to communicate between search and gallery components.

### Notes
1. Create branch in github repository with your full name. ie. john-snow
2. You can use any package.
3. You should use modern design techniques both for JavaScript, HTML and CSS.
4. You can replace https://pixabay.com with any other image service you know of.
5. You will need to understand 'api' inner workings to fulfill the task.
6. Make sure your code is modular so the gallery component can be re-used with other APIs in the future.