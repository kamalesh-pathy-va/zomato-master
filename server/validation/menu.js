import joi from "joi";

export const ValidateMenuListId = (MenuListId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });
    return Schema.validateAsync(MenuListId);
};

export const ValidateImageId = (ImageId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });
    return Schema.validateAsync(ImageId);
};