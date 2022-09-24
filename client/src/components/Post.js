import React, { useState} from 'react'

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
        <div>
            <h3>Post Reviews</h3>
            {errors?errors.map(e => <div>{e}</div>):null}
            <form onSubmit={onSubmit}>
                <label>Title </label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} />
                
                <label> Brand</label>
                <input type='text' name='brand' value={formData.brand} onChange={handleChange} />
            
                <label>Price</label>
                <input type='number' name='price' value={formData.price} onChange={handleChange} />
            
                <label>Image</label>
                <input type='text' name='image' value={formData.image} onChange={handleChange} />
            
                <label>Rating</label>
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
                <label>Recommend?</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="recommended"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="not_recommended" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                </div>            
                <label>Description</label>
                <textarea type='text' rows='20' cols='80' name='description' value={formData.description} onChange={handleChange} />
            
                <input type='submit' value='Post Review' />
            </form>
            {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
        </div>
    )
}

export default Post