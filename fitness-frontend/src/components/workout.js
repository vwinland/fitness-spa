class Workout {
  constructor(name) {
    this.name = name;
    this.workoutsAdapter = new WorkoutsAdapter();
    this.exercisesAdapter = new ExercisesAdapter();
    this.form = document.querySelector("#create-workout-exercise-form");
    this.appendWorkoutNameToForm();
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
          case "Add Exercises":
            this.clearPage();
            this.renderAddWorkoutExerciseForm();
            break;
          default:
            this.clearPage();
            this.renderAllExercises();
        }
      });
    });
  }

  clearPage() {
    const clearExercises = document.querySelectorAll(".exercise-card");
    Array.from(clearExercises).forEach((exercise) => {
      exercise.remove();
    });
    this.form.style.display = "none";
  }

  renderWorkoutAExercises() {
    this.workoutsAdapter.getWorkouts().then((workouts) => {
      workouts[0].attributes.exercises.forEach((exercise) => {
        const workoutAExercise = new Exercise(
          exercise.name,
          exercise.id,
          exercise.workout_id
        );
        workoutAExercise.createExerciseCard();
      });
    });
  }

  renderWorkoutBExercises() {
    this.workoutsAdapter.getWorkouts().then((workouts) => {
      workouts[1].attributes.exercises.forEach((exercise) => {
        const workoutBExercise = new Exercise(
          exercise.name,
          exercise.id,
          exercise.workout_id
        );
        workoutBExercise.createExerciseCard();
      });
    });
  }

  renderWorkoutCExercises() {
    this.workoutsAdapter.getWorkouts().then((workouts) => {
      workouts[2].attributes.exercises.forEach((exercise) => {
        const workoutCExercise = new Exercise(
          exercise.name,
          exercise.id,
          exercise.workout_id
        );
        workoutCExercise.createExerciseCard();
      });
    });
  }

  renderAllExercises() {
    this.exercisesAdapter.getExercises().then((exercises) => {
      exercises.forEach((exercise) => {
        const exerciseObj = new Exercise(
          exercise.attributes.name,
          exercise.id,
          exercise.attributes.workout.id,
          exercise.attributes.workout.name
        );
        exerciseObj.createExerciseCard();
      });
    });
  }

  renderAddWorkoutExerciseForm() {
    this.form.style.display = "block";
    this.form.style.margin = "0 auto";
    this.form.addEventListener("submit", (e) => this.addNewWorkoutExercise(e));
  }

  appendWorkoutNameToForm() {
    this.workoutsAdapter.getWorkouts().then((workouts) => {
      workouts.forEach((workout) => {
        const selectBox = document.querySelector("#workout-select");
        const option = document.createElement("option");
        option.textContent = workout.attributes.name;
        option.value = workout.id;
        selectBox.append(option);
      });
    });
  }

  addNewWorkoutExercise(e) {
    e.preventDefault();
    const workoutNameSelect = document.querySelector("#workout-select").value;
    const exerciseName = document.querySelector("#exercise-name").value;
    const data = {
      name: exerciseName,
      workout_id: workoutNameSelect,
    };
    this.exercisesAdapter.postExercises(data).then((data) => {
      alert("Exercise successfully added!");
      this.form.reset();
      this.clearPage();
      this.renderAllExercises();
    });
  }
}
