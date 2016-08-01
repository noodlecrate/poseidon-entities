import { Models } from '../../index';

export class BrandModelBuilder {

    private _id: number;
    private _name: string;

    constructor () {
        this._id = 1;
        this._name = 'Brand';
    }

    public withId(id: number): BrandModelBuilder {
        this._id = id;
        return this;
    }

    public withName(name: string): BrandModelBuilder {
        this._name = name;
        return this;
    }

    public build(): Models.BrandModel {
        let model = new Models.BrandModel();

        model.id = this._id;
        model.name = this._name;

        return model;
    }

}
