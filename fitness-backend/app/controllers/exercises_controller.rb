class ExercisesController < ApplicationController

    def index 
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end

    def show 
        exercise = Exercise.find_by(id: params[:id])
        render json: ExerciseSerializer.new(exercise).serialized_json
    end

    def create 
        exercise = Exercise.new(exercise_params)
        if exercise.save
            render json: ExerciseSerializer.new(exercise).serialized_json
        end
    end

    def destroy 
        exercise = Exercise.find_by(id: params[:id])
        if exercise.destroy 
            render json: {message: "Exercise Deleted"}
        end
    end

    private

    def exercise_params
        params.require(:exercise).permit(:name, :workout_id)
    end
end
