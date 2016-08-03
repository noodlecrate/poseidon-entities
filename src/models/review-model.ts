import { IModel, UserModel } from './_namespace';
import { ReviewCreateDto } from '../dtos/_namespace';

export class ReviewModel implements IModel {

    public id: number;
    public author: UserModel;
    public title: string;
    public body: string;
    public imageUrl: string;

    public constructor (author: UserModel, dto: ReviewCreateDto) {
        this.id = undefined;
        this.author = author;
        this.title = dto.title;
        this.body = dto.body;
        this.imageUrl = dto.imageUrl;
    }

    public update (dto: ReviewCreateDto): void {
        if (dto.authorId !== this.author.id) {
            throw Error('Cannot change review author.');
        }

        this.title = dto.title;
        this.body = dto.body;
        this.imageUrl = dto.imageUrl;
    }

}
