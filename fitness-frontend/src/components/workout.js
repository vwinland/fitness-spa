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

renderWorkoutAExercises(){
  this.workoutsAdapter.getWorkouts().then(workouts => {
    workouts[1].attributes.exercises.forEach(exercise => {
      const workoutAExercise = new Exercise(exercise.name, exercise.id, exercise.workout_id)
      workoutAExercise.createExerciseCard()
    })
  })

  renderWorkoutBExercises(){
    this.workoutsAdapter.getWorkouts().then(workouts => {
      workouts[2].attributes.exercises.forEach(exercise => {
        const workoutBExercise = new Exercise(exercise.name, exercise.id, exercise.workout_id)
        workoutBExercise.createExerciseCard()
      })
    })

    renderWorkoutCExercises(){
      this.workoutsAdapter.getWorkouts().then(workouts => {
        workouts[3].attributes.exercises.forEach(exercise => {
          const workoutCExercise = new Exercise(exercise.name, exercise.id, exercise.workout_id)
          workoutCExercise.createExerciseCard()
        })
      })

      renderAllExercises(){
        this.exercisesAdapter.getExercises().then(exercises => {
          exercises.forEach(exercise => {
            const exerciseObj = new Exercise(exercise.attributes.name, item.id, item.attributes.workout.id, item.attributes.workout.name)
            exerciseObj.createExerciseCard()
          })
        })
      }
}
