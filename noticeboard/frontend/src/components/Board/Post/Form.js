import React, { Component, Fragment } from 'react';
import TextInput from '../../common/form/Input';
import Textarea from '../../common/form/Textarea';
import { connect } from 'react-redux';
import { addPost } from '../../../Redux/actions/posts';
class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            errors: {
                title: '',
                description: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        return this.setState({ field: value });
    };

    postIsValid() {
        let { title, description, errors } = this.state;
        let isValid = true;

        if (title.length <= 3) {
            errors.title = 'Post title must be at least 3 characters';
            isValid = false;
        } else {
            errors.title = ''
        }

        if (description.length <= 20) {
            errors.description = 'Description is too short. Provide at least 20 characters';
            isValid = false;
        } else {
            errors.description = ''
        }


        this.setState({ errors });

        return isValid;
    }

    onSave(e) {
        e.preventDefault();
        if (!this.postIsValid()) {
            return;
        }

        this.props.addPost({ title, description });
    }

    render() {
        const { title, description, errors } = this.state
        return (
            <Fragment>
                <form onSubmit={this.onSave}>
                    <TextInput name='title' label="Post Title" value={title} error={errors.title} onChange={this.handleChange} />

                    <Textarea name="description" label="Post Description" value={description} error={errors.description} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </Fragment>
        )
    }
}
const addDispatchToProps = (dispatch) => {
    return {
        addPost: bindActionCreators(addPost, dispatch)
    }
}
export default connect(addDispatchToProps)(PostForm);