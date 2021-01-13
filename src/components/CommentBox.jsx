import React,{useState} from 'react';
import { useDispatch } from 'react-redux'
import * as actions from 'redux/actions';


const CommentBox = () => {

    const [content, setContent] = useState('');

    const dispatch = useDispatch()


    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(content);
        dispatch(actions.saveComment(content));
        setContent('');
    }

    const handleChange =(e)=>{
        setContent(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea value={content} onChange={handleChange}/>
            <div className="submit">
                <button type="submit">
                    submit
                </button>
            </div>
        </form>
    )
}

export default CommentBox