class Workout {
  constructor(name) {
    this.name = name;
    this.workoutsAdapter = new WorkoutsAdapter();
    this.exercisesAdapter = new ExercisesAdapter();
    this.form = document.querySelector("#create-workout-exercise-form");
    this.appendWorkoutNameToFrom();
  }

  addEventListenerToWorkout() {
    const workoutNames = document.querySelectorAll(".workout-name");
    workoutNames.forEach((workout) => {
      workout.addEventListener("click", () => {
        const container = document.querySelector(".container");
        container.style.display = "flex";
        switch (workout.textContent) {
          case "Workout A":
            this.clearPage();
            this.renderWorkoutAExercises();
            break;
          case "Workout B":
            this.clearPage();
            this.renderWorkoutBExercises();
            break;
          case "Workout C":
            this.clearPage();
            this.renderWorkoutCExercises();
            break;
          case "Add New Exercises":
            this.clearPage();
            this.renderAddWorkoutExerciseForm();
            break;
          default:
            this.clearPage();
            this.renderAllExercises;
        }
      });
    });
  }

  clearPage() {
    const clearExercises = document.querySelectorAll(".exercise-card");
    Array.form(clearExercises).forEach((exercise) => {
      exercise.remove();
    });
    this.form.style.display = "none";
  }
}
