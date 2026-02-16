// package src/models
export default class UserModel {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    Object.freeze(this);
  }
}