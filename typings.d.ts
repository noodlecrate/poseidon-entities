export namespace DTOs {
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
}

export namespace Models {
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

export namespace Builders {

    export namespace Models {

        export class BrandModelBuilder {

            public withId(id: number): BrandModelBuilder;
            public withName(name: string): BrandModelBuilder;
            public build(): EntityModels.BrandModel;

        }

        export class NoodleModelBuilder {

            public withId(id: number): NoodleModelBuilder;
            public withName(name: string): NoodleModelBuilder;
            public build(): EntityModels.NoodleModel;

        }

        export class UserModelBuilder {

            public withId(id: number): UserModelBuilder;
            public withUsername(username: string): UserModelBuilder;
            public withPassword(password: string): UserModelBuilder;
            public withFirstName(firstName: string): UserModelBuilder;
            public withLastName(lastName: string): UserModelBuilder;
            public withProfileImage(profileImage: string): UserModelBuilder;
            public build(): EntityModels.UserModel;

        }

        export class ReviewModelBuilder {

            public withId(id: number): ReviewModelBuilder;
            public withAuthor(author: EntityModels.UserModel): ReviewModelBuilder;
            public withTitle(title: string): ReviewModelBuilder;
            public withBody(body: string): ReviewModelBuilder;
            public withImageUrl(imageUrl: string): ReviewModelBuilder;
            public build(): EntityModels.ReviewModel

        }

    }

}
