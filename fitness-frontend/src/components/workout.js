class Workout {
  constructor(workoutJSON) {
    this.id = workoutJSON.id;
    this.name = workoutJSON.name;
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name}`;
  }
}
