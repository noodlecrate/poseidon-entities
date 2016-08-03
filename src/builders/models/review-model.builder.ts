import { Models, DTOs } from '../../index';
import { UserModelBuilder } from './_namespace';

export class ReviewModelBuilder {

    private _id: number;
    private _author: Models.UserModel;
    private _title: string;
    private _body: string;
    private _imageUrl: string;

    constructor () {
        this._id = 1;
        this._author = new UserModelBuilder().build();
        this._title = 'This is a review.';
        this._body = 'Lorem ipsum dolor sit amet.';
        this._imageUrl = undefined;
    }

    public withId(id: number): ReviewModelBuilder {
        this._id = id;
        return this;
    }

    public withAuthor(author: Models.UserModel): ReviewModelBuilder {
        this._author = author;
        return this;
    }

    public withTitle(title: string): ReviewModelBuilder {
        this._title = title;
        return this;
    }

    public withBody(body: string): ReviewModelBuilder {
        this._body = body;
        return this;
    }

    public withImageUrl(imageUrl: string): ReviewModelBuilder {
        this._imageUrl = imageUrl;
        return this;
    }

    public build(): Models.ReviewModel {
        let dto: DTOs.ReviewCreateDto = {
            authorId: this._author.id,
            title: this._title,
            body: this._body,
            imageUrl: this._imageUrl
        };

        let model = this._author.createReview(dto);
        model.id = this._id;
        return model;
    }

}
