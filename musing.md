## Notes on app
- What should the card data structure contain...from a db level, I want to group things with parent and children so that
if a note inherits from another note, I can make them sequential. So, foreign keys for child-item and parent-item I guess?
- In terms of DB and server side language, I need to make a decision. I guess I'll make the frontend first and then deal with that
when I get to it.
- Loosely, I'm going to lay out priorities in terms of
  - frontend code and store
  - adding Express or whatever
  - Figuring out db & data models
  - connecting the whole shebang
  - styles
- Board data model:
  - should have an id, a name, id will be another foreign key in cards
- Card data model:
  - foreign keys: parent (can be null), child (can be null), board (CANNOT be null)
