class AppContainer {
  workouts = [];
  exercises = [];
  url = "http://localhost:3000";
  workoutRoutine = {}; //fn that renders user routine after exercises added
  getWorkouts() {
    //make a fetch req to /workouts
    fetch(this.url + "/workouts")
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => alert(err));
    //populate the activities and categories properties with the returned data
    //call renderWorkouts
  }
  renderWorkouts() {
    //create DOM and insert data into them to append to the DOM
  }
}
