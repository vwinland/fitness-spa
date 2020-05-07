class WorkoutsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/workouts";
  }

  getWorkouts() {
    return fetch(this.baseUrl)
      .then((resp) => resp.json())
      .then((json) => json.data);
  }
}
