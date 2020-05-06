class AppContainer {
  workouts = [];
  exercises = [];
  url = "http://localhost:3000";
  workoutRoutine = {};

  initBindingsAndEventListeners() {
    this.workoutsContainer = document.getElementById("workouts-container");
    this.name = document.querySelector("body");
    this.newWorkoutName = document.getElementById("new-workout-name");
    this.newExerciseName = document.getElementById("add-exercise-name");
    this.workoutForm = document.getElementById("new-workout-form");
    this.workoutForm.addEventListener("submit", this.createWorkout.bind(this));
    this.workoutsContainer.addEventListener(
      "dblclick",
      this.handleWorkoutClick.bind(this)
    );
  }

  getWorkouts() {
    //make a fetch req to /workouts	    //make a fetch req to /workouts
    fetch(this.url + "/workouts")
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => alert(err));
    //populate the activities and categories properties with the returned data	    //populate the activities and categories properties with the returned data
    //call renderWorkouts
  }

  render() {
    this.workoutsContaier.innerHTML = this.workouts
      .map((workout) => workout.renderli())
      .join("");
  }
}
