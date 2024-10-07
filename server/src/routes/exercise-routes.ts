import express from 'express';
import * as ExercisesController from '../controllers/exercise-controller';

const router = express.Router();

router.get("/dates/:date", ExercisesController.getExercisesByDate);

router.get("/sorted/date", ExercisesController.sortExercisesByDate);

router.get("", ExercisesController.getExercises);

export default router;