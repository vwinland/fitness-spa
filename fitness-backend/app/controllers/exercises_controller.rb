class ExercisesController < ApplicationController

    def index 
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end

    def show 
        exercise = Exercise.find_by(id: params[:id])
        render json: ExerciseSerializer.new(exercise).serialized_json
    end
end
