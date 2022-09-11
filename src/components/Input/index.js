

export const Input = ({ label, placeholder, type , value , onChange }) => {
    return (
        <div class="card-body">
        <label class="form-label">{label}</label>
        <input 
        type={type}
         class="form-control" 
         placeholder={placeholder} 
         value = {value}
        onChange = {onChange}         
        />
        </div>
    );
    }
export const Select = ({ label, title , data , value , handleChange}) => {
    return (
        
        <>
            <label class="form-label">{label}</label>
            <select class="form-select mb-3" value={value} onChange = {handleChange}>
                <option selected="">{ title }</option>
              {  data.map((item,key ) => (
                   <option key={key}>{item.nom}</option>
                ))
                }
            </select>
        </>
              
        
       
    );
    }    
 export const Button = ({ label , type , onClick }) => {
    return (
        <button type={type} class="btn btn-primary" onClick={onClick}>{label}</button>
    );
    }

export const SimpleInput = ({ label, placeholder, type , value , onChange }) => {
    return (
       
      <>
          <label class="form-label">{label}</label>
        <input 
        type={type}
         class="form-control" 
         placeholder={placeholder} 
         value = {value}
        onChange = {onChange}         
        />
      </>
        
    );
    }    