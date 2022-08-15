/* The MyList class is a blueprint for creating objects that have a description, completed, and id
property */
class MyList {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}
export default MyList;
