import { IModel, ReviewModel } from './_namespace';
import { ReviewCreateDto } from '../dtos/_namespace';

export class UserModel implements IModel {

    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public profileImage: string;

    public createReview(dto: ReviewCreateDto): ReviewModel {
        return new ReviewModel(this, dto);
    }

}
