import { Injectable } from '@angular/core';

@Injectable()
export class CharactersService {
  private characters: Object[];
  private url: string = 'http://localhost:8080/characters/';
  private charsInitialized: boolean = false;

  constructor() { }

  private createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();
    if ('withCredentials' in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, false);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }

  private makePersonnelRequest() {
    const url = this.url;
    const root = this;

    const xhr = this.createCORSRequest('GET', url);
    if (!xhr) {
      console.log('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      console.log('onload');
      root.characters = JSON.parse(xhr.response);
      root.charsInitialized = true;
    };

    xhr.onerror = function() {
      console.log('onerror');
    };

    xhr.send();
    return false;
  }

  updateChars() {
    this.makePersonnelRequest();
  }

  getChars() {
    if (this.charsInitialized) {
      return this.characters;
    } else {
      console.log('table not initialized');
    }
  }

}
