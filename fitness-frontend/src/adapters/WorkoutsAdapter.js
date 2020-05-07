class WorkoutsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/workouts";
  }

  getWorkouts() {
    return fetch(this.baseUrl)
      .then((res) => res.json())
      .catch((err) => alert(err));
  }

  createWorkout(value) {
    const workout = {
      name: value,
    };

    return fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ workout }),
    }).then((res) => res.json());
  }

  updateWorkout(value, id) {
    const workout = {
      name: value,
    };

    return fetch(`${this.baseUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ workout }),
    }).then((res) => res.json());
  }
}
