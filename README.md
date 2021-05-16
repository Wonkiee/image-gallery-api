# image-gallery-api

Technologies Used:
`Node Version - v10.24.1.`
`DB - mongoDB - 4.2.11`

This is the API implementation of the image gallery product.

How to Build the Project. 

`Checkout to master branch and then follow the steps`
1) Place the configuration file like below.
  `/etc/image-gallery/image-gallery-api/default.json`
  Working config file is in the repository. (`resources/default.json`)
2) If the log file directory is needed to be changed, you can change it from the config file (`default.json`)
3) run `npm install`
4) Then run `npm start`

If you're running this in the local environment, hit the health end point and see whether the app is running.
`http://localhost:3201/health`
