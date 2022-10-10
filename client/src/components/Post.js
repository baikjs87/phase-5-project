import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import './styles/post.css'

function Post({ addReview, user }) {
    const [formData, setFormData] = useState({
        title:'',
        brand_id:'',
        category_id:'',
        price:'',
        rating:'',
        recommend:'',
        description:'',
        user_id: user.id,
        brand:'',
        category:''
      })
    const [errors, setErrors] = useState([])
    // const [newCategory, setNewCategory] = useState([])
    const history = useHistory();
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleChangeBrand = (e) => {
        const brand = e.target.value.toUpperCase()
        setFormData({ ...formData, 'brand': brand })
    }

    const handleChangeCategory = (e) => {
        const category = e.target.value.toUpperCase()
        setFormData({ ...formData, 'category': category })
    }

    console.log('formData: ', formData)
    
    function onSubmit(e){
        e.preventDefault()

        fetch('/reviews',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json().then((newReview) => {
                    fetch('/brands',{
                        method:'POST',
                        headers: {'Content-Type': 'application/json'},
                        body:JSON.stringify({'brand': formData.brand}) 
                    })
                    .then(r => {
                        if(r.ok){
                            r.json().then((newBrand) => {
                                setFormData({ ...formData, 'brand_id': newBrand.id })
                                fetch('/categories',{
                                    method:'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body:JSON.stringify({'category': formData.category})
                                })
                                .then(r => {
                                    r.json().then((newCategory) => {
                                        const newData = { ...formData, 'category_id': newCategory.id, 'brand_id': newBrand.id }
                                        setFormData({ ...formData, 'category_id': newCategory.id, 'brand_id': newBrand.id })
                                        addReview(newData)
                                        history.push('/')
                                    })
                                })
                            })
                        } else {
                            r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
                        }
                    })
                })
            } else {
                r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }

    return(
        <div className="post_wrapper">
            <h3 className="pagename">Post Reviews</h3>
            {errors?errors.map(e => <div style={{color:'red'}}>{e}</div>):null}
            <form onSubmit={onSubmit}>
                <label className="form-label">Title </label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} className="form-control" />

                <div className="brand-category">
                    <div className="col-sm-5 label">
                        <label className="form-label"> Brand</label>
                        <input type='text' name='brand' onChange={handleChangeBrand} className="form-control" />
                    </div>

                    <div className="col-sm-5 label category">
                        <label className="form-label"> Category</label>
                        <input type='text' name='category' onChange={handleChangeCategory} className="form-control" />
                    </div>
                </div>
            
                <div className="col-sm-4 label price-block">
                    <label className="form-label">Price</label>
                    <input type='number' name='price' value={formData.price} onChange={handleChange} className="form-control" />
                </div>

                <label></label>
                <div className="mb-3">
                    <label for="formFileMultiple" className="form-label">Product Images</label>
                    <input className="form-control form-control-sm" type="file" id="formFileMultiple" multiple />
                </div>
            
                <label className="label ">Rating</label>
                <div>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" id="inlineRadio1" value="1" onChange={handleChange} />
                        <label className="form-check-label" for="inlineRadio1">1</label>
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" id="inlineRadio2" value="2" onChange={handleChange} />
                        <label className="form-check-label" for="inlineRadio2">2</label>
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" id="inlineRadio3" value="3" onChange={handleChange} />
                        <label className="form-check-label" for="inlineRadio3">3</label>
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" id="inlineRadio4" value="4" onChange={handleChange} />
                        <label className="form-check-label" for="inlineRadio4">4</label>
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="rating" id="inlineRadio5" value="5" onChange={handleChange} />
                        <label className="form-check-label" for="inlineRadio5">5</label>
                    </span>            
                </div>

                <label className="label ">Recommend?</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="recommend" id="flexRadioDefault1" value="yes" onChange={handleChange} />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="recommend" id="flexRadioDefault2" value="no" onChange={handleChange} />
                    <label className="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                </div>         

                <label className="label ">Description</label>
                <textarea type='text' rows='0' cols='80' name='description' value={formData.description} onChange={handleChange} className="form-control" />
            
                <input type='submit' value='Post Review' className="submit_button" />
            </form>
            {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
        </div>
    )
}

export default Post