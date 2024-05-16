import React from 'react'
import ReactDOM from 'react-dom/client'
let Logo=()=>{
    return(
        <img src="data:image/png;base64,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" alt="food logo">

        </img>
    )
}
let HeaderLinks=()=>
    {
        return(
            <div className='HeadeLinkContainer'>  
                <ul className='headerlinks'>
                <li>
                    Home
                </li>
                <li>
                    about
                </li>
                <li>
                    contact us
                </li>
                <li>
                    cart
                </li>
                <li>
                    others
                </li>
            </ul>
            </div>
            
        )
    }
let Header=()=>{
    return (<div className='header'>
        <Logo/>
        <HeaderLinks/>
    </div>)
}
let stylecard={backgroundColor:"#f0f0f0"}
let cardInfoRest=[
    {
        "info": {
            "id": "596634",
            "name": "Food Engineers",
            "cloudinaryImageId": "f7qfuwixlvs0qthwxrpx",
            "locality": "Ameenapet",
            "areaName": "Powerpet",
            "costForTwo": "₹280 for two",
            "cuisines": [
                "Biryani",
                "Chinese"
            ],
            "avgRating": 4.2,
            "parentId": "356762",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-16 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/food-engineers-ameenapet-powerpet-eluru-596634",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "413516",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "Kgn Shariff Arcade",
            "areaName": "Powerpet",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "2456",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-16 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-kgn-shariff-arcade-powerpet-eluru-413516",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "450337",
            "name": "Paradise Biryani",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/39a65ace-1068-4823-86bf-887991751e2a_450337.JPG",
            "locality": "Main Bazar Road",
            "areaName": "Powerpet",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "North Indian",
                "Hyderabadi"
            ],
            "avgRating": 4.1,
            "parentId": "700",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-17 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/paradise-biryani-main-bazar-road-powerpet-eluru-450337",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "435671",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
            "locality": "RR Pet",
            "areaName": "Powerpet",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 70,
                "lastMileTravel": 3.7,
                "serviceability": "SERVICEABLE",
                "slaString": "70-75 mins",
                "lastMileTravelString": "3.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-16 23:40:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-rr-pet-powerpet-eluru-435671",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "699502",
            "name": "Dumont Creamery",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/48757d9c-8b5b-4079-916f-6f49060bd7ea_699502.jpg",
            "locality": "Narasimharao Peta",
            "areaName": "Powerpet",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Bakery",
                "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "235011",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 61,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "60-65 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-16 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dumont-creamery-narasimharao-peta-powerpet-eluru-699502",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "381581",
            "name": "Madina Alpha Dum Biryani Point",
            "cloudinaryImageId": "igt3pma56k1rreac8fxv",
            "locality": "Ajuman Functional Hall",
            "areaName": "Powerpet",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "249851",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-17 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                    "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
                },
                "freedelMessage": "FREE DELIVERY",
                "badgeType": "BADGE_TYPE_ONE_LITE"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/madina-alpha-dum-biryani-point-ajuman-functional-hall-powerpet-eluru-381581",
            "type": "WEBLINK"
        }
    }
]






let RestCard=({rest})=>{
    
    let {name,cloudinaryImageId,avgRating,cuisines}=rest?.info;
    let {deliveryTime}=rest.info.sla;
    
    console.log(rest)
    


    return(<div className='rest-card' style={stylecard}>
        <img className="restimage"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+cloudinaryImageId} alt="food image" className='restimage'></img>
        <h3 className='restname'>{name}</h3>
        <h4 className='restitem'> {cuisines.join(", ")}</h4>
        <h4 className='resttime'> {deliveryTime} minites </h4>
        <h5 className='reststar'>{avgRating} star</h5>
    </div>)
}
let Body=()=>{
    return(
        <div>
            <div className='search'>
                search
            </div>
            <div className='card-container'>
                {cardInfoRest.map(cardInfo=>{
                    return(
                        <RestCard key={cardInfo.info.id} rest={cardInfo}/>
                    )
                })}
                
                
                
                
                
                
                
            </div>
            
        </div>
    )
}
let NamasteFood=()=>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

    let root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(<NamasteFood/>);