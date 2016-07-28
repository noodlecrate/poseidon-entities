declare module 'poseidon-entities' {
    export class ReviewDto {
        public id: number;
        public author: UserDto;
        public title: string;
        public body: string;
        public imageUrl: string;
    }

    export class UserDto {
        public id: number;
        public username: string;
        public firstName: string;
        public lastName: string;
        public profileImage: string;
    }

    export class NoodleDto {
        public id: number;
        public name: string;
    }

    export class BrandDto {
        public id: number;
        public name: string;
    }

    export interface IModel {

    }

    export class ReviewModel implements IModel {
        public id: number;
        public author: UserModel;
        public title: string;
        public body: string;
        public imageUrl: string;
    }

    export class UserModel implements IModel {
        public id: number;
        public username: string;
        public password: string;
        public firstName: string;
        public lastName: string;
        public profileImage: string;
    }

    export class NoodleModel implements IModel {
        public id: number;
        public name: string;
    }

    export class BrandModel implements IModel {
        public id: number;
        public name: string;
    }

}
