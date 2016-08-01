import { Models } from '../../index';
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
        let model = new Models.ReviewModel();

        model.id = this._id;
        model.author = this._author;
        model.title = this._title;
        model.body = this._body;
        model.imageUrl = this._imageUrl;

        return model;
    }

}
