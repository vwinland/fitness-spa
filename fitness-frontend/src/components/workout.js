class Workout {
  constructor(workoutJSON) {
    this.name = workoutJSON.name;
    this.id = workoutJSON.id;
    this.exercise_id = workoutJSON.exercise_id;
  }

  exerciseArray() {
    Exercises.find((x) => x.id === this.exercise_id).name;
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name} ${this.exercise_id}`;
  }
}
