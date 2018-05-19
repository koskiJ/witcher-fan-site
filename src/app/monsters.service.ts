import { Injectable } from '@angular/core';
import { Monster } from './monster.interface';

@Injectable()
export class MonstersService {
  private monsters: Monster[];
  private url: string = 'https://witcher-fan-app.herokuapp.com/mons/';
  private monsInitialized: boolean = false;

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
      root.monsters = JSON.parse(xhr.response);
      root.monsInitialized = true;
    };

    xhr.onerror = function() {
      console.log('onerror');
    };

    xhr.send();
    return false;
  }

  updateMonsters() {
    this.makePersonnelRequest();
  }

  getMonsters() {
    if (this.monsInitialized) {
      return this.monsters;
    } else {
      console.log('table not initialized');
    }
  }

  getMonster(name: string): Monster {
    if (this.monsInitialized) {
      let mon: Monster;

      for (const m of this.monsters) {
        if (name === m.name) {
          mon = m;
          break;
        }
      }

      return mon;
    } else {
      console.log('table not initialized');
    }
  }

}
