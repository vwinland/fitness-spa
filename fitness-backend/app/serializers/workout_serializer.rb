class WorkoutSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :exercises
end