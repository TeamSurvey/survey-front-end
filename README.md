#Survey App (possible new name later)

###Links:
**URL for deployed front-end app** :
**link to back-end repo** :
**link to wireframes** (sketches of major views / interfaces)
**link to ERD** :
**link to User Stories** : (who are your users, what do they want, and why?)

###Installation instructions and dependencies:

###Description of Survey App:
  (How it works)
  (A couple of paragraphs detailing the general approach we took)

  (Notes on any unsolved problems or major hurdles your team had to overcome)

  We iterated a few times with different data models, which yielded not only a bit of stress, but also significant learning. We had one iteration with a schema that used one model for both the options and the votes, using linked arrays. We moved into a final schema that still had an array for options but separated out the votes into a separate model.

  With Antony's guidance, we decided to create a new document every time a vote is made. This was an improvement over writing to the Poll document when every vote is made,which would have created contention issues in a real-world setting. It would also have been more confusing code to maintain. It was our intent to write this app to leverage the strengths of Mongo, one of which is the ability to create many documents very quickly. We also recognized that this gave us the ability to extend functionality to ask multiple questions in each poll, which we had identified as a stretch goal.

###Technologies used:
  (Node modules, Express middleware etc)

###User Stories:
