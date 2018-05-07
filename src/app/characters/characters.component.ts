import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  slideIndex: number = 1;
  characters = [{'name': 'geralt', 'description': 'Main character'},
        {'name': 'yennefer', 'description': 'Sorceress'}];

  constructor() { }

  ngOnInit() {
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {this.slideIndex = 1; }
    if (n < 1) {this.slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].setAttribute('style', 'display:none');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].setAttribute('style', 'display:block');
    dots[this.slideIndex - 1].className += ' active';
  }

}
