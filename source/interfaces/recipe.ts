import {Document} from 'mongoose';

export default interface IRecipe extends Document {
    title: string;
    author: string;
    extraInformation: string;
}