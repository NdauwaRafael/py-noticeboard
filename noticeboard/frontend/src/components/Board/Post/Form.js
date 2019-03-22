import React, { Component, Fragment } from 'react';
import TextInput from '../../common/form/Input';
import Textarea from '../../common/form/Textarea';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            decscription: '',
            errors: {
                title: '',
                decscription: ''
            }
        }
    }
    render() {
        const { title, decscription } = this.state
        return (
            <Fragment>
                <form>
                    <TextInput name='title' label="Post Title" value={title} error={errors.title} onChange={this.handleInputChange()} />

                    <Textarea name="description" label="Post Description" value={decscription} error={errors.decscription} onChange={this.handleInputChange()} />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </Fragment>
        )
    }
}

export default PostForm;