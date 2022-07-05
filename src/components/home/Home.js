import react from 'react';
import { Link } from 'react-router-dom';
import Carouselcomponent from'../carouselComponent/CarouselComponent';
import BoxesCarousel from '../boxesCarousel/BoxesCarousel';
import ProductBoxes from '../productBoxes/ProductBoxes';
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import MultipleItemSlider from '../multipleItemSlider/MultipleItemsSlider';
import './Home.css';
import Footer from '../footer/Footer.js'
import BackToTop from '../backToTop/BackToTop';

function Home(){

    let carouselList = [
        {
            carouselImage1: "https://m.media-amazon.com/images/I/61mNStZjnWL._SX3000_.jpg",
            carouselImage2: "https://m.media-amazon.com/images/I/71jRZ94HnRL._SX3000_.jpg",
            carouselImage3: "https://m.media-amazon.com/images/I/618B1HnAxLL._SX3000_.jpg"
        },
        {
            carouselImage1: "https://m.media-amazon.com/images/I/71TXakC7KPL._SX3000_.jpg",
            carouselImage2: "https://m.media-amazon.com/images/I/71eBXpqwYXL._SX3000_.jpg",
            carouselImage3: "https://m.media-amazon.com/images/I/71TXakC7KPL._SX3000_.jpg"
        },
        {
          carouselImage1: "https://th.bing.com/th/id/R.6f6051f6d62b3c2b17ff23c31b18c02e?rik=Y1NKwlXo9wof0A&riu=http%3a%2f%2frechargetricks.in%2fwp-content%2fuploads%2f2017%2f09%2fflipkart-big-billion-day-sale.jpg&ehk=8TvsylLnyX6la85JlJuJQbx8SjP0LpH6Zy0lewuS%2bIw%3d&risl=&pid=ImgRaw&r=0",
          carouselImage2: "https://www.earticleblog.com/wp-content/uploads/2018/10/Flipkart-Big-Billion-Day-Mobile-Offers-min.png",
          carouselImage3: "https://th.bing.com/th/id/R.99b7e977ffb08c17c48d18953f54161f?rik=4tajeTIZ4V1zcw&riu=http%3a%2f%2fweteachtechs.com%2fwp-content%2fuploads%2f2019%2f05%2fhdfc.png&ehk=eIdu3mXPTc56KIPhVLjUHJmnrdszbAHwdFMUkVMMBZE%3d&risl=&pid=ImgRaw&r=0",
          carouselImage4: "https://www.eastcoastdaily.in/wp-content/uploads/2018/10/flipkart%E2%80%99s-%E2%80%98big-billion-days-2018%E2%80%99.jpg"
      },
      {
            carouselImage1: "https://assets.ajio.com/cms/AJIO/WEB/13052022-D-unisex-offers-5instantdiscodunt.jpg",
            carouselImage2: "https://assets.ajio.com/cms/AJIO/WEB/mmobikwik-1440x128.jpg",
            carouselImage3: "https://assets.ajio.com/cms/AJIO/WEB/Paytm-Set3-1440x128.png"
      }
    ]

    let BoxesCarouselList = [
        {
            Image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg",
            Image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg",
            Image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg",
            Image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg",
            Text1: "Up to 45% off | Bedding & linen | Amazon Brands & more",
            Text2: "Up to 45% off | Bedding & linen | Amazon Brands & more",
            Text3: "Up to 45% off | Bedding & linen | Amazon Brands & more",
            Text4: "Up to 45% off | Bedding & linen | Amazon Brands & more",
        },
        {
            Image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg",
            Image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg",
            Image3: "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/kitchenbaupccc/xcm_banners_bau_pc_cc_379x304_379x304_in-en._SY304_CB643325611_.jpg",
            Image4: "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/pc_cc_1x._SY304_CB627740621_.jpg",
            Text1: "Up to 45% off | Bedding & linen | Amazon Brands & more",
            Text2: "Power tools, welding machines & more | Up to 60% off",
            Text3: "4 star+ rated kitchen products | Amazon Brands & more",
            Text4: "Up to 70% off | Casual wear series from local shops",
        }
    ]


    let productsList = [
      {
          productName: "Top picks for your home",
          productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
          productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
          productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
          productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
          textimage1: "ACs",
          textimage2: "Refirgerators",
          textimage3: "Microwaves",
          textimage4: "Washing Machines",
          linkname:'home'
      },
      {
          productName: "Voice control your entertainment",
          productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_BTF/Sheldon_1X_EchoSMP-PCQC._SY116_CB647559876_.jpg",
          productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_BTF/Crumpet-Echosmp_1x_PCQC._SY116_CB647559876_.jpg",
          productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_BTF/Sheldonplus_1X_EchoSMP-PCQC._SY116_CB647559876_.jpg",
          productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_BTF/Brownie_1X_EchoSMP-PCQC._SY116_CB647559876_.jpg",
          textimage1: "Fire TV Stick Lite",
          textimage2: "Echo dot 3rd gen",
          textimage3: "Fire TV Stick",
          textimage4: "Echo dot 4th gen",
          linkname:'technologies/html'
      },
      {
          productName: "Up to 45% off | Shop by Pet",
          productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Dog_186X116._SY116_CB644270746_.jpg",
          productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Cat_186X116._SY116_CB644270746_.jpg",
          productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/bird_186X116._SY116_CB644270746_.jpg",
          productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/fish_186X116._SY116_CB644270746_.jpg",
          textimage1: "Dog supplies",
          textimage2: "Cat supplies",
          textimage3: "Birds & small",
          textimage4: "Aquarium access...",
          linkname:'contactus'
      },
      {
          productName: "Electronics devices for home office",
          productImage1: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg",
          productImage2: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg",
          productImage3: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg",
          productImage4: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg",
          textimage1: "Smartwatches",
          textimage2: "Tablets",
          textimage3: "Laptops",
          textimage4: "Monitors",
          linkname:'technologies'
      },
  ]

    // let MultiItemsList = [
    //   {
    //     Image1: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
    //     Image2: "https://rukminim1.flixcart.com/image/150/150/jyyqc280/shoe/7/g/c/38099-1637-10-levi-s-dark-brown-original-imafj2whvw35qxjs.jpeg?q=70",
    //     Image3: "https://rukminim1.flixcart.com/image/150/150/k6mibgw0/shoe/u/v/2/4330908-41-nike-black-original-imafpferdrygemuc.jpeg?q=70",
    //     Image4: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
    //     Image5: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
    //     Image6: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
    //     Image7: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
    //     Image8: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
    //     Image9: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
    //     Text1: "Nike",
    //     Text2: "Addidas",
    //     Text3: "Nike",
    //     Text4: "Addidas",
    //     Text5: "Nike",
    //     Text6: "Addidas",
    //     Text7: "Nike",
    //     Text8: "Addidas",
    //     Text9: "Nike",
  
    //   }
    // ]

    let MultiItemsList = [
        {
          Image: "https://rukminim1.flixcart.com/image/150/150/jyyqc280/shoe/7/g/c/38099-1637-10-levi-s-dark-brown-original-imafj2whvw35qxjs.jpeg?q=70",
          
          Text: "Addidas",
          
    
        },
        {
            Image: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
            Text: "Nike",
        },
        {
            Image: "https://rukminim1.flixcart.com/image/556/667/k612pow0/slipper-flip-flop/m/5/x/a55-9-smartx-grey-original-imafggsxhjpzrk5m.jpeg?q=50",
            Text: "Nike",
        },
        {
            Image: "https://rukminim1.flixcart.com/image/556/667/kz3118w0/slipper-flip-flop/s/q/q/6-slp-black-1062-bruton-black-original-imagb6drbwbkqttg.jpeg?q=50",
            Text: "Nike",
        },
        {
            Image: "https://rukminim1.flixcart.com/image/556/667/l0sgyvk0/slipper-flip-flop/d/b/e/6-pk-ms-204-gr-pkkart-grey-original-imagchrwvyszmzzv.jpeg?q=50",
            Text: "Nike",
        },
        {
            Image: "https://rukminim1.flixcart.com/image/556/667/k612pow0/slipper-flip-flop/h/u/u/a20-10-smartx-white-original-imafgu548sjzqzfh.jpeg?q=50",
            Text: "Nike",
        },
        {
            Image: "https://rukminim1.flixcart.com/image/556/667/kn22m4w0/slipper-flip-flop/j/q/i/10-mrj1635-aadi-grey-original-imagfsw2btxzpd4h.jpeg?q=50",
            Text: "Nike",
        },
        {
            Image: "https://rukminim1.flixcart.com/image/150/150/knqd3m80/slipper-flip-flop/b/j/u/11-ci8800-301nike-nike-sequoia-white-black-original-imag2ccexqm38kdh.jpeg?q=70",
            Text: "Nike",
        }
      ]



    return(
        <div>
            <Carouselcomponent productObj={carouselList[0]}></Carouselcomponent>

            <MultipleItemSlider productObj={MultiItemsList} />
            {/* <div className="card dot" style={{width: "18rem"}} >
  <img className="card-img-top" src="https://m.media-amazon.com/images/I/618B1HnAxLL._SX3000_.jpg" alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

{/* <div className='d-flex justify-content-around'>

<div className="card p-3 " style={{width: "22rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                </div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg" className="card-img-top" alt="..." />
            </div>

            <div className="card p-3" style={{width: "22rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                </div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg" className="card-img-top" alt="..." />
            </div>

            <div className="card p-3" style={{width: "22rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                </div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg" className="card-img-top" alt="..." />
            </div>

            <div className="card p-3" style={{width: "22rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                </div>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg" className="card-img-top" alt="..." />
            </div>
</div> */}




            <BoxesCarousel productObj={BoxesCarouselList[1]}></BoxesCarousel>
            {/* <Carouselcomponent productObj={carouselList[1]}></Carouselcomponent> */}

            <img src="https://assets.ajio.com/cms/AJIO/WEB/16052022-D-unisex-heroproductbanner-banner.jpg" className="img-fluid mx-auto d-block"></img>

            <MultipleItemSlider productObj={MultiItemsList} />

            <Carouselcomponent productObj = {carouselList[3]} />

            <BoxesCarousel productObj={BoxesCarouselList[0]}></BoxesCarousel>

            <img src="https://assets.ajio.com/cms/AJIO/WEB/13052022-D-unisex-discoveronlinestores-ajiogold.jpg" className="img-fluid mx-auto d-block"></img>
            
            <div className="row m-3 carouselboxes ">
                <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
                <ProductBoxes productObj={productsList[0]}></ProductBoxes>
                </div>


                <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
                <ProductBoxes productObj={productsList[1]}></ProductBoxes>
                </div>

                <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
                <ProductBoxes productObj={productsList[2]}></ProductBoxes>
                </div>

                <div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3 mx-auto">
                <ProductBoxes productObj={productsList[3]}></ProductBoxes>
                </div>
    
            </div>




            
                




                
                
            <img src="https://assets.ajio.com/cms/AJIO/WEB/13052022-D-unisex-freedel-notiming.jpg" className="img-fluid mx-auto d-block p-3" ></img>

                
               <BackToTop />



<Footer />









           


        </div>
    );
}

export default Home