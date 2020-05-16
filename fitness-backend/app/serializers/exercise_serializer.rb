class ExerciseSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :workout
end