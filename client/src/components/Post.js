import React, { useState} from 'react'
import './styles/post.css'

function Post({addProduction}) {
    const [formData, setFormData] = useState({
        title:'',
        brand:'',
        price:'',
        image:'',
        rating:'',
        recommend:'',
        description:''
      })
      const [errors, setErrors] = useState([])
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    
      function onSubmit(e){
        e.preventDefault()
        
        fetch('/post',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...formData, ongoing:true})
        })
        .then(res => {
          if(res.ok){
            res.json().then(addProduction)
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }

    return(
        <div class="post_wrapper">
            <h3 class="pagename">Post Reviews</h3>
            {errors?errors.map(e => <div>{e}</div>):null}
            <form onSubmit={onSubmit}>
                <label class="form-label">Title </label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} class="form-control" />

                <div class="brand-price">
                    <div class="col-sm-4 label">
                        <label class="form-label"> Brand</label>
                        <input type='text' name='brand' value={formData.brand} onChange={handleChange} class="form-control" />
                    </div>
                
                    <div class="col-sm-4 label price-block">
                        <label class="form-label">Price</label>
                        <input type='number' name='price' value={formData.price} onChange={handleChange} class="form-control" />
                    </div>
                </div>

                <label></label>
                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Product Images</label>
                    <input class="form-control form-control-sm" type="file" id="formFileMultiple" multiple />
                </div>
            
                <label class="label ">Rating</label>
                <div>
                    <span class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                        <label class="form-check-label" for="inlineRadio1">1</label>
                    </span>
                    <span class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                        <label class="form-check-label" for="inlineRadio2">2</label>
                    </span>
                    <span class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                        <label class="form-check-label" for="inlineRadio3">3</label>
                    </span>
                    <span class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
                        <label class="form-check-label" for="inlineRadio4">4</label>
                    </span>
                    <span class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" />
                        <label class="form-check-label" for="inlineRadio5">5</label>
                    </span>            
                </div>

                <label class="label ">Recommend?</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                </div>         

                <label class="label ">Description</label>
                <textarea type='text' rows='20' cols='80' name='description' value={formData.description} onChange={handleChange} class="form-control" />
            
                <input type='submit' value='Post Review' class="submit_button" />
            </form>
            {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
        </div>
    )
}

export default Post