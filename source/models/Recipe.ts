import IRecipe from '../interfaces/recipe';
import mongoose, {Schema} from 'mongoose';

const RecipeSchema: Schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    extraInformation: {type: String}
},
{
    timestamps: true
})

RecipeSchema.post<IRecipe>('save', function() {
    this.extraInformation = "This is some extra info we want to put onto this entry after the save!"
})
export default mongoose.model<IRecipe>('Book', RecipeSchema);

