class Exercise {
  constructor(name, id, workout_id, workout_name) {
    this.name = name;
    this.id = id;
    this.workout_id = workout_id;
    this.workout_name = workout_name;
    this.exercisesAdapter = new ExercisesAdapter();
  }
}
