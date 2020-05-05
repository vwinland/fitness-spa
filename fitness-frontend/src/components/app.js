class AppContainer {
  workouts = [];
  exercises = [];
  url = "http://localhost:3000";
  workoutRoutine = {}; //fn that renders user routine after exercises added

  initBindingsAndEventListeners() {
    this.workoutsContainer = document.getElementById("workouts-container");
    this.name = document.querySelector("body");
    this.newWorkoutName = document.getElementById("new-workout-name");
    this.newExerciseName = document.getElementById("add-exercise-name");
    this.workoutForm = document.getElementById("new-workout-form");
    // this.workoutForm.addEventListener("submit", this.createWorkout.bind(this));
    // this.workoutsContainer.addEventListener(
    //   "dblclick",
    //   this.handleWorkoutClick.bind(this)
    // );
    // this.name.addEventListener("blur", this.updateWorkout.bind(this), true);
  }

  getWorkouts() {
    //make a fetch req to /workouts
    fetch(this.url + "/workouts")
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => alert(err));
  }
  fetchAndLoadWorkouts() {
    this.getWorkouts()
      .then((workouts) => {
        workouts
          .sort((a, b) => a.id - b.id)
          .forEach((workout) => this.workouts.push(new Workout(workout)));
      })
      .then(() => {
        this.render();
      });
  }
  renderLi() {
    return `<li data-id=${this.id}>${this.name}`;
  }

  render() {
    this.workoutsContainer.innerHTML = this.workouts
      .map((workout) => workout.renderLi())
      .join("");
  }
  //populate the activities and categories properties with the returned data
  //call renderWorkouts
  //   renderWorkouts() {
  //     //create DOM and insert data into them to append to the DOM
  //   }
}
