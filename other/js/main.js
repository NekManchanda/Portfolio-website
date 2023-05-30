

const navMenu = document.getElementById('nav-menu')
const Togglenavbar = document.getElementById('toggle-navbar')
const Closenavbar = document.getElementById('close-navbar')

if (Togglenavbar) {
    Togglenavbar.addEventListener('click', () => {
        navMenu.classList.add('open-navbar')
    }
    )
}
if (Closenavbar) {
    Closenavbar.addEventListener('click', () => {
        navMenu.classList.remove('open-navbar')
    }
    )
}


const navLink = document.querySelectorAll('.navitemlink')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('open-navbar')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




const blurheader = ()=>{
    const head = document.getElementById('header')
    if(this.scrollY >=20)
    header.classList.add('blurheader')
    else    
    header.classList.remove('blurheader')
}
window.addEventListener('scroll',blurheader)




// (function () {
const items = document.querySelectorAll(".achievementlist");
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function slideIn() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("slide-in");
      } else {
        items[i].classList.remove("slide-in");
      }
    }
}
window.addEventListener("load", slideIn);
window.addEventListener("scroll", slideIn);
window.addEventListener("resize", slideIn);
   

// const Totop = () => {
//   const Totop = document.getElementById('top')
//   this.scrollY>=350? Totop.classList.add('show-scrollbar') : Totop.classList.remove('show-scrollbar')
// }
// window.addEventListener('scroll',Totop)


const sections = document.querySelectorAll('section[id]')    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.navmenu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);


const scriptURL = 'https://script.google.com/macros/s/AKfycbx-lsm2Nvcj-5op5UxAEcCBwKVVIB4DK842JecieVvQLNoh8xD62kLEuUFjIIp7oLmwsg/exec'
const form = document.forms['to-sheets']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response), alert ("Form Submitted Successfully"))
        .catch(error => console.error('Error!', error.message))
})


function postComment() {
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  var currentTime = new Date().toLocaleString();
  document.getElementById("timeinput").value = currentTime;
  const commentSection = document.getElementById("comment-section");

  var newComment = document.createElement("div");
  newComment.className = "comment";


  var initials = document.createElement("p");
  initials.className = "val entered";
  initials.appendChild(document.createTextNode("Data Entered "));



  var para = document.createElement("p");
  var nameNode = document.createElement("span");
  nameNode.className = "name";
  nameNode.appendChild(document.createTextNode(name + ": "));
  para.appendChild(nameNode);
  para.appendChild(document.createTextNode(comment));

  var timestamp = document.createElement("p");
  timestamp.className = "timestamp";
  timestamp.appendChild(document.createTextNode("Posted at " + currentTime));
  newComment.appendChild(initials);
  newComment.appendChild(para);
  newComment.appendChild(timestamp);

  commentSection.appendChild(newComment);

  function messageDelete() {
    commentSection.removeChild(newComment);
  }

  setTimeout(messageDelete,2000);
  // commentSection.classList.remove('newComment');
  // document.getElementById("name").value = "";
  // document.getElementById("comment").value = "";
}

const scriptURL2 = 'https://script.google.com/macros/s/AKfycbwTP5E4lF7NvqU565ov4xLhvgEcqUpnZ4BhFzfjLha7G_-m0xGyoObVbMGNUeaZdJUf/exec'
const form2 = document.forms['discform']

form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form2) })
})