#Duck Poll

This project was created by [Kathleen McMahon](https://github.com/resource11), [Ben Spencer](https://github.com/baz1389), and [Laurisa Neuwirth](https://github.com/LaurisaNeuwirth).

**NOTE: This is still a *work in progress* **

Deployed front-end URL: http://teamsurvey.github.io/survey-front-end

To see the **back-end** repository, click [here](https://github.com/TeamSurvey/survey-back-end).

##Description

This single-page application (SPA) can be used to create custom polls.


##Technologies Used

###Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

###Express:

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile application.

###Passport

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

###Mongoose

Mongoose is used for elegant mongodb object modeling for node.js. Mongoose provides a straight-forward, schema-based solution to model application data. It includes built-in type casting, validation, query building, business logic hooks etc.

###MongoDB

It is a cross-platform document-oriented database.
Classified as a NoSQL database, MongoDB eschews the traditional table-based relational database structure in favor of JSON-like documents with dynamic schemas (MongoDB calls the format BSON), making the integration of data in certain types of applications easier and faster.
MongoDB is free and open-source software.

###jQuery

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.

###Javacript

JavaScript is a high-level, dynamic, untyped, and interpreted programming language. Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.

###HTML5

HTML5 is a markup language used for structuring and presenting content on the World Wide Web.

###CSS3

CSS3 is a style sheet language used for describing the presentation of a document written in a markup language.

###Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

##Approach

- [Wireframes](http://i.imgur.com/bHvabIp.jpg)
- [User Journey](http://imgur.com/iGlESh4)
- [User Stories and Work Process](https://trello.com/b/V36WDCbW/survey-says)
- [Initial ERM Diagram](http://imgur.com/iZBmK9U)
- [Final ERM Diagram](http://i.imgur.com/6Kgo7Fj.jpg)


##Unsolved Issues

- Can successfully log-in, however cannot successfully submit a poll when using the app via mobile Safari on an iPad using iOS8.
- The mobile phone UX is incomplete... CSS media queries are still in progress.


##Major Hurdles

- We kept vacillating between different data models, which yielded not only a bit of stress, but also significant learning. Our initial data model utilized one model which included both answers and votes. We eventually decided to create two data models that stored polls and poll answers (which would then be aggregated by the answer chosen in the poll model), respectively. This second option was chosen as it was our intent to write this app to leverage the strengths of Mongo, one of which is the ability to create many documents very quickly. We also recognized that this gave us the ability to extend functionality to creat surveys instead of single question polls, which we had identified as a stretch goal.
- De-scoping
  - Due to time restraints we had to hard code various aspects just to get more features working.
- When splitting up work as the deadline came closer, we ran into some difficult merge conflicts.

##Growth Milestones - Improvements Achieved with:

- Git control
- Group communication
- Javascript familiarity - especially with respect to binding data to dynamically-generated elements and traversing the DOM!

##Future Additions

- RWD layout for mobile
- Real-time poll results
