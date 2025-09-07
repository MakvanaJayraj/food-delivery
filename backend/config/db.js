import mongoose from "mongoose";

export const connrctDB = async () => {
    await mongoose.connect('Enter Yuor database Url').then(() => console.log("DB Connected"));
}
