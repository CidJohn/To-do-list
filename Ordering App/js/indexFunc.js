
export default function cardItems(){
    let cardList = [
        {title: "Sample 1", pgraph: "sample 1"},
        {title: "Sample 2", pgraph: "sample 2"},
        {title: "Sample 3", pgraph: "sample 3"},
        { title: "Sample 4", pgraph: "sample 4" }
        ]
        
    let cardHtml = "";
    cardList.forEach((item,index) =>{
        cardHtml += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card">
                    <img src="../../assets/images.jpg" class="card-img-top h-75" alt="...">
                    <div class="card-body">
                        <div class="menu-item">
                            <h3>${item.title}</h3>
                            <p>${item.pgraph}</p>
                            <button class="add-to-cart btn btn-primary" data-price="${item.price}">button</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    return cardHtml;
}

export function btnContact() {
       return "ContactUsSection";
        
         
}