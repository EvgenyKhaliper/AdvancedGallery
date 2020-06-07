# Advanced Gallery
You need to create 2 ReactJS applications - 'search' & 'gallery' which communicate via 'api'. Now these two applicatons are basic placeholders of 'create-react-app' with no content which you will need to add.

## Application 'Search'
A search input which on enter informs the application 'Gallery' of the desired query.

## Application 'Gallery'
1. Query 9 images from https://pixabay.com based on query of 'Search' application.
2. Present the images in 3 columns per row as 100x100 px thumbnails. Underneath each image there should be tags/title (depends on image service you use). 
3. Once the image is clicked on, a new React view should open with a full size image.

## Application 'API'
Simple express.js server to which you can POST a query object, and GET from.

### Notes
1. Create branch in github repository with your full name. ie. john-snow
2. You can use any package.
3. You should use modern design techniques both for JavaScript, HTML and CSS.
4. You can replace https://pixabay.com with any other image service you know of.
5. You will need to understand 'api' inner workings to fulfill the task.
6. Make sure your code is modular and gallery can be re-used with other APIs in the future.