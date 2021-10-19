import joi from "joi";

export const ValidateReviewData = (reviewData) => {
    const Schema = joi.object({
        _id: joi.string().required(),
        rating: joi.number().min(1).required(),
        reviewText: joi.string().required(),
        isRestaurantReview: joi.bool()
    });
    return Schema.validateAsync(reviewData);
};

export const ValidateReviewId = (revId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });
    return Schema.validateAsync(revId);
};