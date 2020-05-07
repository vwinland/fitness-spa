class Workout {
  constructor(name) {
    this.name = name;
    this.workoutsAdapter = new WorkoutsAdapter();
    this.exercisesAdapter = new ExercisesAdapter();
    this.exercise_id = workoutJSON.exercise_id;
  }

  exerciseArray() {
    Exercises.find((x) => x.id === this.exercise_id).name;
  }

  renderLi() {
    return `<li data-id=${this.id}>${this.name} ${this.exercise_id}`;
  }
}
