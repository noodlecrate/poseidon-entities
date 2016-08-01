import { Models } from '../../index';

export class UserModelBuilder {

    private _id: number;
    private _username: string;
    private _password: string;
    private _firstName: string;
    private _lastName: string;
    private _profileImage: string;

    constructor () {
        this._id = 1;
        this._username = 'joe.bloggs.123';
        this._password = 'some-password';
        this._firstName = 'Joe';
        this._lastName = 'Bloggs';
        this._profileImage = undefined;
    }

    public withId(id: number): UserModelBuilder {
        this._id = id;
        return this;
    }

    public withUsername(username: string): UserModelBuilder {
        this._username = username;
        return this;
    }

    public withPassword(password: string): UserModelBuilder {
        this._password = password;
        return this;
    }

    public withFirstName(firstName: string): UserModelBuilder {
        this._firstName = firstName;
        return this;
    }

    public withLastName(lastName: string): UserModelBuilder {
        this._lastName = lastName;
        return this;
    }

    public withProfileImage(profileImage: string): UserModelBuilder {
        this._profileImage = profileImage;
        return this;
    }

    public build(): Models.UserModel {
        let model = new Models.UserModel();

        model.id = this._id;
        model.username = this._username;
        model.password = this._password;
        model.firstName = this._firstName;
        model.lastName = this._lastName;
        model.profileImage = this._profileImage;

        return model;
    }

}
