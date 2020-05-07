// class Exercises {
//   constructor() {
//     this.exercises = [];
//     this.adapter = new ExercisesAdapter();
//     this.initBindingsAndEventListeners();
//     this.fetchAndLoadExercises();
//   }

//   initBindingsAndEventListeners() {
//     this.workoutsContainer = document.getElementById("workouts-container");
//     this.name = document.querySelector("body");
//     this.newWorkoutName = document.getElementById("new-workout-name");
//     this.exerciseName = document.getElementById("exercise-name");
//     this.workoutForm = document.getElementById("new-workout-form");
//     this.name.append(this.exerciseName);
//   }

//   createExercise(e) {
//     e.preventDefault();
//     const value = this.newWorkoutName.value;

//     this.adapter.createExercise(value).then((exercise) => {
//       this.exercise.push(new Workout(exercise));
//       this.newWExerciseName.value = "";
//       this.render();
//     });
//   }

//   handleWorkoutClick(e) {
//     this.toggleWorkout(e);
//   }

//   toggleWorkout(e) {
//     const li = e.target;
//     li.contentEditable = true;
//     li.focus();
//     li.classList.add("editable");
//   }

//   updateExercise(e) {
//     const li = e.target;
//     li.contentEditable = false;
//     li.classList.remove("editable");
//     const newValue = li.innerHTML;
//     const id = li.dataset.id;
//     this.adapter.updateExercise(newValue, id);
//   }

//   fetchAndLoadExercises() {
//     this.adapter
//       .getExercises()
//       .then((exercise) => {
//         exercise
//           .sort((a, b) => a.id - b.id)
//           .forEach((exercise) => this.exercises.push(new Exercise(exercise)));
//       })
//       .then(() => {
//         this.render();
//       });
//   }

//   render() {
//     this.workoutsContainer.innerHTML = this.exercises
//       .map((exercise) => exercise.renderLi())
//       .join("");
//   }
// }
