import { useState } from 'react'
import './styles/myComments.css'

function MyComments({ user, myComments }) {
    const [commentData, setCommentData] = useState({
        body:'',
        user_id: user.id,
        review_id: ''
    })
    const [startEditing, setStartEditting] = useState(false)
    console.log(commentData)
    
    function handleEdit(e){
        const review_id = e.target.dataset.id
        if(review_id){
            const id = parseInt(e.target.dataset.id)
            setCommentData({ ...commentData, 'review_id': id })
        }
        setStartEditting(!startEditing)
    }

    function handleSubmit(e){
        e.preventDefault()
        const { name, value } = e.target
        setCommentData({ ...commentData, [name]: value })
        fetch(`/comments/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(commentData),
        })
        .then((r)=> r.json())
        .then((d) => console.log(d))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setCommentData({ ...commentData, [name]: value })
    }

    function handleCancel(){
        setCommentData({
            body:'',
            user_id: user.id,
            review_id: ''
        })
        setStartEditting(!startEditing)
    }

    return(
        <div>
            <h2>My Comments</h2>
            <div className="comments-wrapper">
                {myComments.map((comment) => (
                    <div className="card text-bg-light mb-3 comment-card" key={comment.id}>
                        <div className="card-header">{comment.review.title}</div>
                        {
                            startEditing ? <form id="comment-form" onSubmit={handleSubmit}>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Edit comment..." value={commentData.body} name="body" onChange={handleChange}></textarea>
                        </form>
                            : <div className="card-body">{comment.body}</div>
                        
                        }
                        <div className="card-footer bg-transparent">
                            {
                                startEditing ? 
                                <button type="button" name="submit" className="btn btn-primary btn-sm" onClick={handleSubmit}>Submit</button> 
                                : <button type="button" name="edit" className="btn btn-primary btn-sm" onClick={handleEdit} data-id={comment.review.id}>Edit</button> 
                            }

                            { 
                                startEditing ?
                                <button type="button" className="btn btn-secondary btn-sm" onClick={handleCancel}>Cancel</button>
                                :
                                <button type="button" className="btn btn-secondary btn-sm">Delete Comment</button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyComments