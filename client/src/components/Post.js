import React, { useState} from 'react'
import './styles/post.css'

function Post({ addReview }) {
    const [formData, setFormData] = useState({
        title:'',
        brand:'',
        category:'',
        price:'',
        image:'',
        rating:'',
        recommend:'',
        description:''
      })
      const [errors, setErrors] = useState([])
    console.log(formData)

      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      function onSubmit(e){
        e.preventDefault()
        
        fetch('/post',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        })
        .then(r => {
          if(r.ok){
            r.json().then((newReview) => console.log(newReview))
          } else {
            //Display errors
            // r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }

    return(
        <div className="post_wrapper">
            <h3 className="pagename">Post Reviews</h3>
            {errors?errors.map(e => <div>{e}</div>):null}
            <form onSubmit={onSubmit}>
                <label className="form-label">Title </label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} className="form-control" />

                <div className="brand-category">
                    <div className="col-sm-5 label">
                        <label className="form-label"> Brand</label>
                        <input type='text' name='brand' value={formData.brand} onChange={handleChange} className="form-control" />
                    </div>

                    <div className="col-sm-5 label category">
                        <label className="form-label"> Category</label>
                        <input type='text' name='category' value={formData.category} onChange={handleChange} className="form-control" />
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
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                        <label className="form-check-label" for="inlineRadio1">1</label>
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                        <label className="form-check-label" for="inlineRadio2">2</label>
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                        <label className="form-check-label" for="inlineRadio3">3</label>
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
                        <label className="form-check-label" for="inlineRadio4">4</label>
                    </span>
                    <span className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" />
                        <label className="form-check-label" for="inlineRadio5">5</label>
                    </span>            
                </div>

                <label className="label ">Recommend?</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="true" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="false" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                </div>         

                <label className="label ">Description</label>
                <textarea type='text' rows='20' cols='80' name='description' value={formData.description} onChange={handleChange} className="form-control" />
            
                <input type='submit' value='Post Review' className="submit_button" />
            </form>
            {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
        </div>
    )
}

export default Post