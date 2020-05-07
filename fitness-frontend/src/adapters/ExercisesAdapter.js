class ExercisesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/exercises";
  }

  getExercises() {
    return fetch(this.baseUrl)
      .then((resp) => resp.json())
      .then((json) => json.data);
  }
}
