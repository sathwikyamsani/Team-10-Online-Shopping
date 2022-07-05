import react from 'react';
import ProductItemCard from '../../productItemCard/ProductItemCard.js';
import { useState } from 'react';
import './Mens.css';
import Footer from '../../footer/Footer.js';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Mens(){

    const { register , handleSubmit , formState:{errors} , reset} = useForm();

    let ProductList12355=[
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm<h1>dshfsjhfj</h1>jhdsjfh",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
        {
            ProductImage: "https://rukminim1.flixcart.com/image/580/696/kxrvi4w0/t-shirt/l/u/x/l-t325-pgwh-eyebogler-original-imaga5g8zzvzcgaf.jpeg?q=50",
            ProductText: "Mens Shirt(Casual Wear)",
            ProductCost: 1000,
            Description: "qwertyuiopasdfghjklzxcvbnm",
        },
    ]


    let [ProductList,setProduct] = useState([
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211008/3rd8/615fcef0f997ddce890b76f9/-473Wx593H-469021136-yellow-MODEL.jpg",
            ProductImage3:"https://assets.ajio.com/medias/sys_master/root/20220223/uvgn/6215ee34aeb26921afb1805c/-473Wx593H-469076635-darknavy-MODEL.jpg",
            ProductImage4:"https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5f0a0a567cdb8c721b7b3a11/-473Wx593H-460327129-navy-MODEL.jpg",
            originalcost:500,
            discountcost:400,
            key:"shirt",
            model:"us polo4tg4t",
            color:"red",
            catergory:"men",
            id:"78945",
            quantity:0,
            company:"US polo"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            ProductImage3:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage4:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"pant",
            model:"us polo43tgt43",
            color:"red",
            catergory:"men",
            id:"12345",
            quantity:2,
            company:"Allen Solly"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:1900,
            key:"shirt",
            model:"us polo4tg434",
            color:"red",
            catergory:"men",
            id:"4578966",
            company:"Allen Solly"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:300,
            key:"pant",
            model:"us polo34tgrgg",
            color:"red",
            catergory:"men",
            id:"456921",
            company:"US polo"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:2400,
            key:"shirt",
            model:"us polo4trgre",
            color:"red",
            catergory:"men",
            id:"4566",
            company:"Allen Solly"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:400,
            key:"shirt",
            model:"us polofdg45",
            color:"red",
            catergory:"men",
            id:"1264",
            company:"Flying Machine"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20220125/pFoZ/61eefb3af997dd6623380da5/-473Wx593H-460960653-blue-MODEL.jpg",
            originalcost:500,
            discountcost:500,
            key:"pant",
            model:"us polo/lk/lk",
            color:"red",
            catergory:"men",
            id:"1254",
            company:"US polo"

        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:1400,
            key:"shirt",
            model:"us polo4tt43",
            color:"red",
            catergory:"men",
            id:"1260",
            company:"US polo"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:1700,
            key:"shirt",
            model:"us polo4g544gr",
            color:"red",
            catergory:"men",
            id:"7956",
            company:"US polo"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:1400,
            key:"pant",
            model:"us polo54grhgd",
            color:"red",
            catergory:"men",
            id:"0136",
            company: "Indian Terran"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:600,
            key:"T-shirts",
            model:"us polodfgdfg",
            color:"red",
            catergory:"men",
            id:"7956",
            company:"US polo"
        },
        {
            ProductImage1:"https://assets.ajio.com/medias/sys_master/root/20211207/Qwg7/61af8386aeb2690110fca04a/-473Wx593H-462845451-black-MODEL.jpg",
            ProductImage2:"https://assets.ajio.com/medias/sys_master/root/20211207/EOWL/61af8386aeb2690110fc9fc8/-473Wx593H-462845451-black-MODEL6.jpg",
            originalcost:500,
            discountcost:2400,
            key:"pant",
            model:"us polo233",
            color:"red",
            catergory:"men",
            id:"52302",
            company:"Allen Solly"
        }

    ]);
    
let [name,setName]=useState("all")

let [product,setPro] = useState(ProductList)

let [shirtFilter,setShirtFilter] = useState(["US polo","Allen Solly","Flying Machine","Indian Terran","Net Play"]);

let [pantFilter,setPantFilter] = useState(["US polo","Allen Solly","Flying Machine","Indian Terran","Net Play"]);

const filterproducts=(text)=>{
    reset()
    setFiltersSelected(0);
    if(text==="all"){
        setPro(ProductList)
    }
    else{
        const temp = ProductList.filter((product)=>product.key==text);
        setPro(temp);
    }
    setName(text)
}

let [filtersSelected,setFiltersSelected] = useState(0)

let [productsFiltered,setProductsFiltered] = useState([])

const update = () =>{
    
    setProductsFiltered([])
}

const onFormSubmit = (filterData) => {
    update()
    let temp =[]
    setProductsFiltered(temp)
    console.log(productsFiltered)
    setFiltersSelected(filterData.appliedFilter.length)
    let object = []
    for (let key in filterData.appliedFilter){
            let temp = filterData.appliedFilter[key]
            
            if(temp==="500"){
                const filtered1 = product.filter((user) => user.discountcost<=500);
                object = object.concat(filtered1)
            }
            else if(temp==="500-1000"){
                const filtered2 = product.filter((user) => user.discountcost>500 && user.discountcost<=1000);
                object = object.concat(filtered2)
            }
            else if(temp==="1000-1500"){
                const filtered3 = product.filter((user) => user.discountcost>1000 && user.discountcost<=1500);
                object = object.concat(filtered3)
            }
            else if(temp==="1500-2000"){
                const filtered4 = product.filter((user) => user.discountcost>1500 && user.discountcost<=2000);
                object = object.concat(filtered4)
            }
            else if(temp==="2000-2500"){
                const filtered5 = product.filter((user) => user.discountcost>2000 && user.discountcost<=2500);
                object = object.concat(filtered5)
            }
            else{
                const filtered6 = product.filter((user) => temp===user.company);
                object = object.concat(filtered6)
            }
    }
    setProductsFiltered(object)
}


const clearData = ()=> {
    setFiltersSelected(0);
    reset()
}




    return (
        <div>

            {/* <div className='row text-center'>
                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Mens</a>
                </div>

                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Womens</a>
                </div>

                <div className='col'>
                    <a href='/mens' className='btn btn-primary'>Kids</a>
                </div>

            </div> */}



{/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
<div className='col-xl-3'>
<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
</div>




 


<div className="offcanvas offcanvas-start offcanvas-expand-sm" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div> */}



<div className='row pb-5'>
<div className='col-lg-2 bg-light'>

<nav className="vertical-nav navbar-expand-lg  navbar-light bg-light">
  <div className="container-fluid ">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <a className="navbar-brand" href="#">Navbar</a>
    </button>
    <p href='#' className='text-md-end'>Category</p>
    
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav flex-column">

    

        <li className="nav-item">
          <a className="nav-link" aria-current="page" onClick={()=>filterproducts('all')}>All</a>
        </li>
        <li className="nav-item">
          <btn className="nav-link" onClick={()=>filterproducts('shirt')}>Shirts</btn>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>filterproducts('pant')}>Pants</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>filterproducts('T-shirts')}>T-shirts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>filterproducts('Shoes')}>shoes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">sandals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">slippers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Perfumes</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>


          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>



<div className='col-md-10'>

    <div className='row text-center'>
                <div className='col'>
                    <Link to='/mens' className='btn btn-primary'>Mens</Link>
                </div>

                <div className='col'>
                    <Link to='/fashion/womens' className='btn btn-primary'>Womens</Link>
                </div>

                <div className='col'>
                    <Link to='/fashion/kids' className='btn btn-primary'>Kids</Link>
                </div>

            </div>

    


    <button className="btn btn-danger text-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Filters</button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Fliters</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  

  

  <form onSubmit={handleSubmit(onFormSubmit)} >

  <div className=''>
      <button className='btn btn-primary me-5 ms-5' type="submit">
            Apply Filters
      </button>
      <span className='btn btn-primary' onClick={() => clearData()}>
          Reset
      </span>
  </div>

  <div className="offcanvas-body">

  <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Prices</h5>
    

  <div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="500" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault">
    Below Rs.500
  </label>
</div>

<div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="500-1000" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault" >
  Rs.500 - 1000
  </label>
</div>

<div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="1000-1500" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault" >
    Rs.1000 - 1500
  </label>
</div>

<div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="1500-2000" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault" >
    Rs.1500 - 2000
  </label>
</div>

<div class="form-check ms-5">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault" value="2000-2500" {...register("appliedFilter")} />
  <label class="form-check-label" for="flexCheckDefault" >
    Rs.2000 - 2500
  </label>
</div>

{ (name==="all" || name==="shirt") &&(
                <div >
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Shirt Brands</h5>
                        {shirtFilter.map(FilterName=><div>
                            <div class="form-check ms-5">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault" value={FilterName} {...register("appliedFilter")} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {FilterName}
                                </label>
                                </div>
                        </div>)}
                </div>
            )}

{ (name==="all" || name==="pant") &&(
                <div >
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Pant Brands</h5>
                        {pantFilter.map(FilterName=><div>
                            <div class="form-check ms-5">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault" value={FilterName} {...register("appliedFilter")} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {FilterName}
                                </label>
                                </div>
                        </div>)}
                </div>
            )}









  </div>
  </form>


</div>

                { (filtersSelected!=0 && productsFiltered.length >= 1) &&(<div>

                <h1 className='text-center'>{name} (filters)</h1>
                <div className='row g-3'>
                    {productsFiltered.map(pro=>(<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-6"><ProductItemCard productObj={pro} /></div>))}
                </div>
                </div>
                )}

                { (filtersSelected!=0 && productsFiltered.length < 1) &&(<div>

                <h1 className='text-center'>No Items To for The filters applied by you</h1>
                </div>
                
                )}


       
            { (filtersSelected==0 && product.length >= 1) &&(<div>

                    <h1 className='text-center'>{name}</h1>
                <div className='row g-3'>
                        {product.map(pro=>(<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-6"><ProductItemCard productObj={pro} /></div>))}
                </div>
                </div>
            )}
      

            {(filtersSelected==0 && product.length<1) &&(
                <div>
                    <h1 className='text-center'>{name}</h1>

                    <h1>Sorry, We don't ahve any {name}</h1>
                    <div className="row  carouselboxes">

                


<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-6">
    <ProductItemCard productObj={ProductList[0]} />
</div>

<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-3">
    <ProductItemCard productObj={ProductList[1]} />
</div>

<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-3">
    <ProductItemCard productObj={ProductList[2]} />
</div>

<div className="col-sm-6 col-xl-3 col-md-6 col-lg-4 col-xs-3">
    <ProductItemCard productObj={ProductList[3]} />
</div>

</div>

<div className="row m-3 carouselboxes">
<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[4]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[5]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[6]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[7]} />
</div>

</div>


<div className="row m-3 carouselboxes">
<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[8]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[9]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[10]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[11]} />
</div>

</div>

<div className="row m-3 carouselboxes">
<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[8]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[9]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[10]} />
</div>

<div className="col-sm-3">
    <ProductItemCard productObj={ProductList[11]} />
</div>

</div>
                </div>
            )}

            



            
        </div>

        </div>
        <Footer />
       
        </div>
    )
};

export default Mens