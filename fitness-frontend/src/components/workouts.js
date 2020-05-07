class Workouts {
  constructor() {
    this.workouts = [];
    this.adapter = new WorkoutsAdapter();
    this.fetchAndLoadWorkouts()
  }
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