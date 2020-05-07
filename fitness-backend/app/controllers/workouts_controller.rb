class WorkoutsController < ApplicationController

    def index 
        workouts = Workout.all 
        render json: WorkoutSerializer.new(workouts)
    end

    def show 
        workout = Workout.find_by(id: params[:id])

        render json: WorkoutSerializer.new(workout).serialized_json
    end

    # def create #add in validation later
    #     exercise = Exercise.find(params[:exercise].downcase)

    #     @workout = Workout.create(name: params[:name], exercise: exercise)
    #     render json: @workout, status: 200
    # end

    # def update #add in validation later
    #     @workout = Workout.find(params[:id])
    #     @workout.update(workout_params)
    #     render json: @workout, status: 200
    # end

    # def destroy
    #     @workout = Workout.find(params[:id])
    #     @workout.delete

    #     render json: {workoutId: @workout.id}
    # end



    # #whitelist params
    # private  
    #  def workout_params
    #    params.require(:workout).permit(:name, :exercise_id)
    # end
end

