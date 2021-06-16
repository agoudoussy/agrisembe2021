import data from'./data.js';
const productScreen ={
    render: () => {
        const {products}=data;
        return ' 
            <div class="col-12 col-sm-6 col-lg-3">
                ${products.map(
                    (products) =>'
                    <div class="card border-success mb-3">
                    <div class="card-body">
                        <div class="embed-responsive embed-responsive-21by9">
                        <img alt="Card image cap" class="card-img-top embed-responsive-item"
                            src="${products.image}" />
                        </div>
                        <hr>
                        <h3>${products.name}</h3>
                        <p>${products.price}</p>
                        <p>${products.name}</p>
                        <button type="button" class="btn btn-primary"><i
                            class="fas fa-shopping-cart ml-1"></i>Commander</button>
                    </div>
                    '
                )}
           
            </div>
        </div>
        ' 
         
    }
}