const menuItem = document.querySelectorAll('.nav-item');
const items = document.querySelectorAll('.item');
const board= document.querySelector('.item-board');


/////////////////////////////////////////////////////////////////////////
// MENU PART
menuItem.forEach(item => item.addEventListener('mouseover', function () {
    item.classList.add('border-run');
}))
menuItem.forEach(item => item.addEventListener('mouseout', function () {
    item.classList.remove('border-run');
}))

/////////////////////////////////////////////////////////////////////////
// PROJECTS PART

// document.querySelector('.project-cards1').addEventListener('mouseover', function () {
//         document.querySelector('.project-content1').style.opacity = 1;
//         document.querySelector('.project-content1').style.transition = '0.5s';
//         document.querySelector('.project-cards1').classList.add('project-cards-hover1');
// })

// document.querySelector('.project-cards1').addEventListener('mouseout', function () {
//         document.querySelector('.project-content1').style.transition = '0s';
//         document.querySelector('.project-content1').style.opacity = 0;
//         document.querySelector('.project-cards1').classList.remove('project-cards-hover1');
// })

// document.querySelector('.project-cards2').addEventListener('mouseover', function () {
//         document.querySelector('.project-content2').style.opacity = 1;
//         document.querySelector('.project-content2').style.transition = '0.5s';
//         document.querySelector('.project-cards2').classList.add('project-cards-hover2');
// })

// document.querySelector('.project-cards2').addEventListener('mouseout', function () {
//         document.querySelector('.project-content2').style.transition = '0s';
//         document.querySelector('.project-content2').style.opacity = 0;
//         document.querySelector('.project-cards2').classList.remove('project-cards-hover2');
// })

// document.querySelector('.project-cards3').addEventListener('mouseover', function () {
//         document.querySelector('.project-content3').style.opacity = 1;
//         document.querySelector('.project-content3').style.transition = '0.5s';
//         document.querySelector('.project-cards3').classList.add('project-cards-hover3');
// })

// document.querySelector('.project-cards3').addEventListener('mouseout', function () {
//         document.querySelector('.project-content3').style.transition = '0s';
//         document.querySelector('.project-content3').style.opacity = 0;
//         document.querySelector('.project-cards3').classList.remove('project-cards-hover3');
// })



document.querySelector('.menu-burger').addEventListener('click', function () {
  document.querySelector('.menu').classList.add('hidden');
  document.querySelector('.section-header-content-part1').classList.add('hidden')
  document.querySelector('.section-header-content-part2').classList.add('hidden')
  document.querySelector('.content-header').classList.add('hidden');
  document.querySelector('.menu-bar').classList.remove('hidden');
})


  document.querySelectorAll('.nav-item-burger').forEach(item => item.addEventListener('click', function () {
    document.querySelector('.menu').classList.remove('hidden');
    document.querySelector('.content-header').classList.remove('hidden');
    document.querySelector('.section-header-content-part1').classList.remove('hidden')
    document.querySelector('.section-header-content-part2').classList.remove('hidden')
    document.querySelector('.menu-bar').classList.add('hidden');
    if (window.innerWidth <= 600) {
      document.querySelector('.section-header-content-part2').classList.add('hidden')
    }
  }));

  if (window.innerWidth <= 450) {
    document.querySelector('.sign-in-form').removeChild(document.querySelector('.register-img'))
  }










const allLinks = document.querySelectorAll("a:link");


allLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const href = link.getAttribute("href");
      
          // Scroll back to top
          if (href === "#")
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
      
          // Scroll to other links
          if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
          }
      
          // Close mobile naviagtion
          if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
        });
      });


      document.querySelector('.menu-burger').addEventListener('mouseover', function() {
        document.querySelectorAll('.menu-line').forEach(line => line.style.backgroundColor = '#707070')
    })

    document.querySelector('.menu-burger').addEventListener('mouseout', function() {
        document.querySelectorAll('.menu-line').forEach(line => line.style.backgroundColor = '#cbcbcb')
    })


    // document.querySelector('.menu-burger').addEventListener('click', function () {
    //   document.querySelector('.menu').classList.add('hidden');
    //   document.querySelector('.content-header').classList.add('hidden');
    //   document.querySelector('.menu-bar').classList.remove('hidden');
    // })

    // window.addEventListener('click', function () {
    //   if (document.querySelector('.menu-bar').classList.contains("hidden") === true) {
    //     document.querySelector('.menu').classList.remove('hidden');
    //     document.querySelector('.content-header').classList.remove('hidden');
    //     document.querySelector('.menu-bar').classList.add('hidden');
    //   }
    //   console.log(document.querySelector('.menu-bar').className);
    // })

if (window.innerWidth <= 600) {
  document.querySelector('.section-header-content-part2').classList.add('hidden')
}