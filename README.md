# JuniorFrontendTest

#### About the code

The code is organized in 3 main files. The names are autodescriptive but this is a quick summary:

- index.html --> Contains the main structure of the code. You can see that most of the elements in the screen don't appear in this file, that is because some elements are added with javascript which will be seen in the next file explanation.

- script.js --> The main javascript file. In this we make the GitHub API calls to get the necessary data that will be displayed in the web. Moreover, because of the lack of other technologies permitted Javascript's been used to complete the whole website structure depending on the data provided by the API. For Example, if the code received is 200 OK, then we call the methods to display user info; if the code is 404 then not found message will be displayed.

- styles folder --> contains both main styles and fontawesome styles (need to add icons)

	- style.css --> main css styles.

	- font-awesome.min.css --> it has been necessary to add font-awesome styles to add the icons needed to represent forks and stars. It is the only use of font awesome made in this web service. There is a folder called "fonts" as well, which provides the icons.

	
## GOALS


#### The main goal of this tech test is to create a client side web application that reproduces the screenshots below by using [GitHub API](https://developer.github.com/v3/) .

We will only evaluate the client side code and the criteria will be based mainly on:

1. Good use of **pure Javascript** language without additional frameworks
2. Clean HTML and CSS markup
3. Clean, maintainable & easy­to­read
4. Good architectural practices

## HOW TO START

1. Investigate the github api calls for user and repos (for example: test them in the browser)
2. Fork this repository & cd into the directory
3. Launch the web application, for example with: python -m SimpleHTTPServer 1337
4. Open the browser with http://localhost:1337/ and start coding!

## NOT REQUIRED, BUT IMPRESSIVE

- Adding Unit Testing


## SCREENSHOTS

#### First Screen

The user can search a username of GitHub

![](https://github.com/gerardcobas/JuniorFrontendTest/blob/master/images/First-Screen.png)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![](https://github.com/gerardcobas/JuniorFrontendTest/blob/master/images/Success-screen.png)

#### Error Screen

If the searched username does not exist: An error is shown

![](https://github.com/gerardcobas/JuniorFrontendTest/blob/master/images/Error-screen.png)



