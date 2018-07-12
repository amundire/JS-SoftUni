export default {
    defaultState: {
        title: '',
        author: '',
        content: '',
        genre: '',
    },
    validate: data => {
        const {title, content} = data;

        if (!title) {
            return "Title is required";
        }
        if (!content) {
            return "Content is required.";
        }
    }
};