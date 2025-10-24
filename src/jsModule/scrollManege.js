export class ScrollManager {
  constructor() {
    this.scrollTop = 0;
  }

  stop() {
    this.scrollTop = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${this.scrollTop}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
  }

  resume() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    window.scrollTo(0, this.scrollTop);
  }
  
}


