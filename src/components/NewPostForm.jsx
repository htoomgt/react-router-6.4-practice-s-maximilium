import React from 'react'
import classes from './NewPostForm.module.css';

const NewPostForm = ({onCancel, onSubmit, submitting}) => {
    

  return (
    <form className={classes.form} onSubmit={onSubmit} >
        <fieldset>
            <label htmlFor="title"> Title</label>
            <input id="title" type="text" name="title" required minLength={5} />
        </fieldset>

        <fieldset>
            <label htmlFor="text" > Text</label>
            <textarea
                id="text"
                name="post-text"
                required
                minLength={10}
                rows={5}
            ></textarea>
        </fieldset>

        <button type="button"  onClick={onCancel} disabled={submitting}> Cancel</button> &nbsp;
        <button disabled={submitting}>
            {submitting ? 'Submitting...' : 'Create Post' }
        </button>

    </form> 
  )
}

export default NewPostForm