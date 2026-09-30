const properties = [
  {
    type:"Apartment", location:"Pune",
    area:"1200 sq.ft", price:"₹85 Lakh",
    img:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
  },
  {
    type:"Villa", location:"Mumbai",
    area:"2400 sq.ft", price:"₹2.4 Cr",
    img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    type:"House", location:"Bangalore",
    area:"1800 sq.ft", price:"₹1.2 Cr",
    img:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
  }
];

function display(list){
  document.getElementById("propertyList").innerHTML = list.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.type}">
      <div>
        <h3>${p.type} - ${p.location}</h3>
        <p>📐 ${p.area}</p>
        <p>🛏 3 Beds &nbsp; 🚿 2 Baths</p>
        <p class="price">${p.price}</p>
        <button onclick="alert('Enquiry sent for ${p.location} property')">
          Enquire
        </button>
      </div>
    </article>
  `).join("");
}

function filterProperties(){
  let text=document.getElementById("search").value.toLowerCase();
  let type=document.getElementById("type").value;

  display(properties.filter(p =>
    (type==="all" || p.type===type) &&
    (p.location.toLowerCase().includes(text) ||
     p.type.toLowerCase().includes(text))
  ));
}

function showType(type){
  display(type==="all" ? properties : properties.filter(p=>p.type===type));
}

function sendEnquiry(e){
  e.preventDefault();
  document.getElementById("message").textContent =
    "Thank you! We will contact you shortly.";
  e.target.reset();
}

display(properties);
