import React,{useState} from 'react'

const CommentBox = () => {

    const [content, setContent] = useState('')


    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(content);
        setContent('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea value={content} onChange={e=>setContent(e.target.value)}/>
            <div className="submit">
                <button type="submit">
                    submit
                </button>
            </div>
        </form>
    )
}

export default CommentBox