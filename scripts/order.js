

let form = document.querySelector('form')
let formObject = form.addEventListener('submit', e => {
    e.preventDefault();

    

    let firstName=document.querySelector('#firstName').value;
    let lastName=document.querySelector('#lastName').value;
    let emailAddress=document.querySelector('#emailAddress').value;
    let phoneNumber=document.querySelector('#phoneNumber').value;
    let addressOne=document.querySelector('#addressOne').value;
    let addressTwo=document.querySelector('#addressTwo').value;
    let city=document.querySelector('#city').value;
    let province=document.querySelector('#province').value;
    let postalCode=document.querySelector('#postalCode').value;
    let itemOne=document.querySelector('#itemOne').value;
    let itemTwo=document.querySelector('#itemTwo').value;
    let itemThree=document.querySelector('#itemThree').value;
    let itemFour=document.querySelector('#itemFour').value; 
     

    const orderInfo = { 
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        addressOne,
        addressTwo,
        city,
        province,
        postalCode,
        itemOne,
        itemTwo,
        itemThree,
        itemFour
    }

    console.log(orderInfo)

}
)
    
