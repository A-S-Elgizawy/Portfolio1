import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import Lenis from '@studio-freight/lenis';
import { filter } from 'rxjs/internal/operators/filter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit , AfterViewInit{
    title = 'testapp';
 
  currentActiveLink: string = '';

  constructor(private router: Router , private renderer:Renderer2) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      const currentUrl = event.urlAfterRedirects;
      this.setActiveLinkFromUrl(currentUrl);
    });
  }

  setActiveLinkFromUrl(url: string) {
    const path = url.split('/')[1] || 'home'; // افتراضي لو لم يوجد مسار
    this.currentActiveLink = path;
  }

  

  ngOnInit(): void {
    // this.window()
    // this.menu()
        this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    })

setTimeout(() => {
  window.scrollTo(0, 0);
}, 0);
  }
  
  ngAfterViewInit(): void {
       gsap.registerPlugin(ScrollTrigger);
       gsap.to('.A',{ rotationX: 0 , duration: 1 , ease:'power1.out'});
       const tl = gsap.timeline();
      tl.timeScale(2);
      tl.to('.section .wrapper',{ translateY: -300 ,duration:1},9)
      tl.to('.sectionanimation',{ height: 0 ,duration:1},9)
       tl.to('.flair',{ opacity: 1 ,scale:1, duration:0.4} , 1);
       tl.to('.flair',{ translateY: -150, duration:0.5} , 2);
       tl.to('.flip-inner',{ translateY: 0, duration:0} , 2);
       tl.to('.flip-inner',{ rotationY: 180 , duration:0} , 3);
      //  tl.to('.flip-inner',{ rotationX: 360 , duration:0} , 5);
      //  tl.to('.flip-inner',{ rotationX: 0 , duration:0} , 9);
       tl.to('.g',{ translateY: 0 , duration:0.3 } , 4);
       tl.to('.content-img-word',{ translateX: 0 , duration:0.3 } , 5);
       tl.to('.img-word img',{ display: 'block' } , 3);
       tl.to('.img-word img',{ top: 180 ,  duration:0.4 } , 6);
       tl.to('.img-word span',{ top: 15 ,  duration:0.4 } , 7);
       tl.to('.contentletter',{ bottom: -3 ,  duration:0.3 } , 3);
       tl.to('.contentletter',{ bottom: 100 ,  duration:0.3 } , 5);
       tl.to('.contentletter',{ top: 0 , duration:1 } , 6);
       tl.to('.wletter',{ scale: 1  , opacity: 1 ,rotateY: 360,  duration:0.8 } , 4);
       tl.to('.wletter',{  opacity: 1 ,rotateY: 0,  duration: 0.8 } , 8);
       tl.to('.yletter',{  opacity: 1 ,rotate: 0,  duration: 0.8 } , 7);
  // =====================
  }

  list(){
      this.menuActive = false
      this.navActive = false
      setTimeout(()=>{
      this.headerActive = false
      this.headerWhite = false
      },550)           
  }



  HeaderSticky:boolean = false
  lastScrollY:number = 0
@HostListener('window:scroll',[])
  onScroll(){
    if(window.scrollY > 10){
      this.HeaderSticky = true
    }else{
      this.HeaderSticky = false
    }
      const currentScrollY = window.scrollY

    if(window.innerWidth < 415 && window.scrollY > 1800 ){
    if(currentScrollY > this.lastScrollY){
      this.renderer.addClass(this.header.nativeElement, 'top')
    }else{
      this.renderer.removeClass(this.header.nativeElement, 'top')
    }
    }else{
      if(window.scrollY > 850){
      if(currentScrollY > this.lastScrollY){
      this.renderer.addClass(this.header.nativeElement, 'top')
      }else{
      this.renderer.removeClass(this.header.nativeElement, 'top')
      }
      }
    }
    this.lastScrollY = currentScrollY
  }



  menuActive = false;
  headerActive = false;
  headerWhite = false;
  imgTranslateTop = false;
  navActive = false
  
  toggleMenu(){
    this.menuActive = !this.menuActive
    this.headerActive = true
    this.headerWhite = true
    if(this.menuActive == true){
      setTimeout(()=>{
      this.navActive = true
      },550)
    }else{
      this.navActive = false
      setTimeout(()=>{
        this.headerActive = false
        this.headerWhite = false
      },550)
    }   
  }

 @ViewChild('header') header!:ElementRef
  @HostListener('document:click',['$event'])
  onClick(event:Event){
    if(!this.header.nativeElement.contains(event?.target)){
      this.menuActive = false
      this.navActive = false
      setTimeout(()=>{
        this.headerActive = false
        this.headerWhite =false
      },550)
    }
  }

















  // const textElement = document.querySelector(".animatedText");
// const text = textElement?.textContent ?? "";
// if(textElement){
//   textElement.textContent = "";
// }

// [...text].forEach(char => {
//   const span = document.createElement("span");
//   span.textContent = char
//   textElement?.appendChild(span);
// });

// const spans = textElement?.querySelectorAll("span");

// if (spans && spans.length > 0) {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".H",     
//       start: "top top",                   
//       end: "+=1800",                   
//       scrub: true,                     
//       pin: false,                       
//       anticipatePin: 1,              
//     }
//   });
  
//   tl.to(spans, {
//     color: "red",                     
//     stagger: 0.5,                    
//     ease: "none"                
//   });
  
// }


  menu(){ 
    const menu = document.querySelector(".menu")
    const HeaderContent = document.querySelector(".header-content")
    const nav = document.querySelector("nav")
    const imgCon = document.querySelector(".img-con")

    menu?.addEventListener("click",()=>{
          HeaderContent?.classList.add("background-white")
          menu.classList.toggle("active")
          HeaderContent?.classList.add("active")
          if(menu?.classList.contains("active")){
          setTimeout(()=>{
            nav?.classList.add("active")
          },550)
          }else{
          nav?.classList.remove("active")
          setTimeout(()=>{
            HeaderContent?.classList.remove("active")
            HeaderContent?.classList.remove("background-white")
          },550)
          }



          if(window.scrollY > 10 ){
            imgCon?.classList.add("translateTop")
          } 
          if(!(menu?.classList.contains("active"))){
            setTimeout(()=>{
            imgCon?.classList.remove("translateTop")
          },550)
          }
      })


      const body = document.querySelector("body")
      const top = document.querySelector("top")
      const bottom = document.querySelector("bottom")
      body?.addEventListener("click",(event)=>{
         if (!HeaderContent?.contains(event.target as HTMLElement)) {   
           menu?.classList.remove("active")
           nav?.classList.remove("active")
           setTimeout(()=>{
             HeaderContent?.classList.remove("active")
             HeaderContent?.classList.remove("background-white")
           },550)
         }
      })
  }
  window(){
    const header = document.querySelector("header")

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if(window.scrollY > 10){
    header?.classList.add("sticky")
  }else{
    header?.classList.remove("sticky")
  }
  

  if(window.innerWidth < 415){
       if(window.scrollY > 1800){
  if (currentScrollY > lastScrollY) {
    // التمرير لأسفل
    header?.classList.add("top")
  } else {
    // التمرير لأعلى
    header?.classList.remove("top")
  }
  }
  }else{
      if(window.scrollY > 850){
  if (currentScrollY > lastScrollY) {
    // التمرير لأسفل
    header?.classList.add("top")
  } else {
    // التمرير لأعلى
    header?.classList.remove("top")
  }
  }
  }
  lastScrollY = currentScrollY;
});
  }
}
