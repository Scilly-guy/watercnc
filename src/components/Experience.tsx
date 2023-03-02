interface iExperience{
    id:number;
    img:string;
    rating:number;
    ratingCount:number;
    location:string;
    title:string;
    currency:string;
    price:number;
    unit:string;
    openSpots:number;
}

function Experience({key, data}:{key:number,data:iExperience}){
    let currencySymbol='$'
    if(data.currency!='USD'){
        if(data.currency=='GBP'){
            currencySymbol='£'
        }
    }
    let badgeText
    if(data.openSpots===0){
        badgeText="SOLD OUT"
    } else if(data.location==="Online"){
        badgeText="ONLINE"
    }
    return (
        <article className="experience">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={data.img} />
            <p><span className="star">&#9733;</span> 
            <span className="rating">{data.rating}</span> 
            <span className="rating-Count">({data.ratingCount})</span> 
            <span className="location">{data.location}</span></p>
            <p className="experience-title">{data.title}</p>
            <p className="price-line">
                <span className="price">From {currencySymbol}{data.price}</span> 
                / {data.unit}</p>
        </article>
    )
}

export default Experience