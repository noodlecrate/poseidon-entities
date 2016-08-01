import { Models } from '../../index';

export class NoodleModelBuilder {

    private _id: number;
    private _name: string;

    constructor () {
        this._id = 1;
        this._name = 'Brand';
    }

    public withId(id: number): NoodleModelBuilder {
        this._id = id;
        return this;
    }

    public withName(name: string): NoodleModelBuilder {
        this._name = name;
        return this;
    }

    public build(): Models.NoodleModel {
        let model = new Models.NoodleModel();

        model.id = this._id;
        model.name = this._name;

        return model;
    }

}
