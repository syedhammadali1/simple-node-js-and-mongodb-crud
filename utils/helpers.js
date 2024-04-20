function formatValidationErrors(err) {
    const errors = [];
    for (let field in err.errors) {
        const error = err.errors[field];
        errors.push({ field: error.path, message: error.message });
    }
    return errors;
}



module.exports = {
    formatValidationErrors
};