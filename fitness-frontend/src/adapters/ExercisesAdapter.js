class ExercisesAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/exercises";
  }

  getExercises() {
    return fetch(this.baseUrl)
      .then((resp) => resp.json())
      .then((json) => json.data);
  }

  postExercises(data) {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
  }

  deleteExercises(id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
  }
}
