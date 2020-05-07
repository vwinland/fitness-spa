class Workout {
  constructor(workoutJSON) {
    this.name = workoutJSON.name;
    this.id = workoutJSON.id;
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name}`;
  }
}
