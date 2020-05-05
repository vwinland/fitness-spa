class WorkoutsController < ApplicationController

    def index 
        render :json => Workout.all, :include => :exercise
    end
end
