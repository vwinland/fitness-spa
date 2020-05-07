class Workouts {
  constructor() {
    this.workouts = [];
    this.exercises = [];
    this.adapter = new WorkoutsAdapter();
    this.initBindingsAndEventListeners();
    this.fetchAndLoadWorkouts();
  }

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
    this.name.addEventListener("blur", this.updateWorkout.bind(this), true);
  }

  createWorkout(e) {
    e.preventDefault();
    const value = this.newWorkoutName.value;

    this.adapter.createWorkout(value).then((workout) => {
      this.workouts.push(new Workout(workout));
      this.newWorkoutName.value = "";
      this.render();
    });
  }

  handleWorkoutClick(e) {
    this.toggleWorkout(e);
  }

  toggleWorkout(e) {
    const li = e.target;
    li.contentEditable = true;
    li.focus();
    li.classList.add("editable");
  }

  updateWorkout(e) {
    const li = e.target;
    li.contentEditable = false;
    li.classList.remove("editable");
    const newValue = li.innerHTML;
    const id = li.dataset.id;
    this.adapter.updateWorkout(newValue, id);
  }

  fetchAndLoadWorkouts() {
    this.adapter
      .getWorkouts()
      .then((workouts) => {
        workouts
          .sort((a, b) => a.id - b.id)
          .forEach((workout) => this.workouts.push(new Workout(workout)));
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    this.workoutsContainer.innerHTML = this.workouts
      .map((workout) => workout.renderLi())
      .join("");
  }
}
