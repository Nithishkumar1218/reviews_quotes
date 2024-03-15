const name = ['Susan Smith', 'Bill Anderson', 'Peter Jones', 'Anna Johnson'];
const designation = ['WEB DEVELOPER','THE BOSS', 'INTERN', 'WEB DESIGNER', ''];
const about = ['I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry' , 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.' , 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.', 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'];

function randomGenerator()
{
  return Math.floor(Math.random() * name.length);
}

function generateRandomImage(randomNumber)
{
  let randomImage = new Array();  
  
  //insert the URL of images in array  
  randomImage[0] = "./images/susanSmith.jpg";  
  randomImage[1] = "./images/billAnderson.jpg";  
  randomImage[2] = "./images/peterJones.jpg";  
  randomImage[3] = "./images/annaJohnson.jpg";   
    return document.getElementById("result").innerHTML = '<img src="'+randomImage[randomNumber]+'"class="profile" />';  
  }

document.querySelector('.js-surprise-button')
  .addEventListener('click', () => {
    const randomNumber = randomGenerator();
    generateRandomImage(randomNumber); 
    document.querySelector('.js-name')
      .innerHTML = name[randomNumber];
    document.querySelector('.js-designation')
      .innerHTML = designation[randomNumber];
    document.querySelector('.js-about')
      .innerHTML = about[randomNumber];
  });

