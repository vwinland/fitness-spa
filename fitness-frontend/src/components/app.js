class App {
  constructor() {
    const workout = new Workout();
    workout.renderAllExercises();
    workout.addEventListenerToWorkout();
    workout.sortExercises();
  }
}
