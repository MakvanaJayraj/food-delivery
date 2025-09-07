import mongoose from "mongoose";

export const connrctDB = async () => {
    await mongoose.connect('mongodb+srv://jayrajmakvana:9316701873@cluster0.cqoyyqr.mongodb.net/food-del').then(() => console.log("DB Connected"));
}
