const countriesEl = document.querySelector('.countries')
const regionList = document.querySelector('.region-label');
const dropDownEl = document.querySelector('.dropdown')
const dropEl = document.querySelector('.drop')
const toggle = document.querySelector('.toggle')
const moon = document.querySelector('.moon')
const search = document.querySelector('.search')
const regions = document.querySelectorAll('.region')
const regionName = document.getElementsByClassName('regionName')
const countryName = document.getElementsByClassName('countryName')
const toggleText = document.querySelector('.toggle-text')
const body = document.querySelector('.body')
 


const getCountry= async ()=>{
  try{
    const url = await fetch(`https://restcountries.com/v2/all`)
    const res =  await url.json()
    res.forEach((response) => {showCountry(response)})
  }catch(error){
   console.log(error.message);
  }

  
}
getCountry()

const showCountry= data=>{
  const country = document.createElement('div');
  country.classList.add('country');
  country.innerHTML = `
     <div class="country-img">
                  <img src="${data.flag}" alt=""> 
             </div>
             <div class="country-info">
                    <h5 class="countryName">${data.name}</h5>
                    <p><strong>Population: </strong>${data.population}</p>
                    <p class="regionName"><strong>Region: </strong>${data.region}</p>
                    <p><strong>capital: </strong>${data.capital}</p>
       </div>
  `
  countriesEl.appendChild(country)
  country.addEventListener('click', ()=>{
    showCountryDetail(data)
    
  })
}

dropDownEl.addEventListener('click', function(){
  dropEl.classList.toggle('showDropDown');
})


regions.forEach(element=>{
  element.addEventListener('click', ()=>{
   
    Array.from(regionName).forEach(elem=>{
     
      if (elem.innerText.includes(element.innerText)){
        elem.parentElement.parentElement.style.display = 'grid'
        
      }else {
        elem.parentElement.parentElement.style.display = 'none'
      }
    })
  })
})

search.addEventListener('input', ()=>{
  console.log(search.value);
  Array.from(countryName).forEach((elem) => {
      if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
        elem.parentElement.parentElement.style.display = 'grid'
      } else { 
        
        elem.parentElement.parentElement.style.display ='none'   
      }
  })
})

toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');

  moon.classList.toggle('fa-solid')
  showModal.classList.toggle('dark');
  dropEl.classList.toggle('dark')
})



const countryModal = document.querySelector(
    '.modal-container'
)
const showModal = document.querySelector(
    '.countryAboutModal'
)
function showCountryDetail(data) {
 
  showModal.classList.toggle('showModal');
  body.style.position = 'fixed'
  
  countryModal.innerHTML = `
   
       <div class="modal">
          <div class="leftModal">
              
              <img class="countryFlag" src="${data.flag}" alt="">
          </div>
       
       <div class="rightModal">
           <h1 class="name">${data.name}</h1>
           <div class="modalInfo">
           <div class="innerLeft inner">
                <p><strong>Native Name: </strong>${data.nativeName}</p>
                <p class="regionName"><strong>Population:</strong>${data.population}</p>
                <p><strong>Region: </strong>${data.region}</p>
                <p><strong>sub-Region: </strong>${data.subregion}</p>
                <p><strong>Capital: </strong>${data.capital}</p>
           </div>
           <div class="innerright">
                
                <p class="regionName"><strong>Top Level Domain: </strong>${data.topLevelDomain[0]}</p>
                <p><strong>Currencies: </strong>${data.currencies.map(cur=>cur.name)}</p>
                <p><strong>Language: </strong>${data.languages.map(lang=>lang.name).join(', ')}</p>
           </div>
           </div>
       </div>
       </div>
  `
}

const back = document.querySelector('.back')
back.addEventListener('click', function () {
    showModal.classList.toggle('showModal');
    body.style.position = 'static'
})

if(showModal.classList.contains('showModal')){
  console.log('Hello');
}

console.log(showModal);
