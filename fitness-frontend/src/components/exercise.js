class Exercise {
  constructor(name, id, workout_id, workout_name) {
    this.name = name;
    this.id = id;
    this.workout_id = workout_id;
    this.workout_name = workout_name;
    this.exercisesAdapter = new ExercisesAdapter();
  }

  createExerciseCard() {
    const container = document.querySelector(".container");
    const exerciseCard = document.createElement("div");
    exerciseCard.className = "exercise-card";
    exerciseCard.setAttribute("data-id", `${this.id}`);
    exerciseCard.setAttribute("data-workout-id", `${this.workout_id}`);
    const exerciseName = document.createElement("div");
    exerciseName.className = "exercise-name";
    exerciseName.textContent = this.name;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-exercise";
    deleteBtn.textContent = "Delete Exercise";
    deleteBtn.addEventListener("click", (e) => this.deleteExercise(e));
    exerciseCard.append(exerciseName, deleteBtn);
    container.append(exerciseCard);
  }

  deleteExercise(e) {
    const id = e.target.parentElement.dataset.id;
    this.exercisesAdapter
      .deleteExercises(id)
      .then(() => e.target.parentElement.remove());
  }
}
