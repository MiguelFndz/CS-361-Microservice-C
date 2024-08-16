import { RequestHandler } from "express";
import ExerciseModel from '../models/exercise-model'
import createHttpError from "http-errors";
import mongoose, { isValidObjectId } from 'mongoose';

export const getExercisesByDate: RequestHandler = async (req, res, next) => {
    const date = req.params.date;
    console.log(date);
    try {
        const exercises = await ExerciseModel.find({ date }).exec();
        res.status(200).json(exercises);
    } catch (error) {
        next(error);
    }
}

export const sortExercisesByDate: RequestHandler = async (req, res, next) => {
    console.log("Sorting exercises by date...");
    
    try {
        const exercises = await ExerciseModel.find().sort({ date: 1 }).exec();
        console.log("Sorted exercises:", exercises); // Debug log
        res.status(200).json(exercises);
    } catch (error) {
        console.error("Error fetching exercises:", error); // Debug log
        next(error);
    }
}

export const getExercises: RequestHandler =  async (req, res, next) => {
    try {
        const exercises = await ExerciseModel.find().exec();
        res.status(200).json(exercises);
    } catch (error) {
        next(error);
    }
}