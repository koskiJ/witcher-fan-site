import { Injectable } from '@angular/core';

@Injectable()
export class VotesService {
  private votes;
  private url: string = 'https://witcher-fan-app.herokuapp.com/votes/';
  private votesInitialized: boolean = false;

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
      root.votes = JSON.parse(xhr.response);
      root.votesInitialized = true;
    };

    xhr.onerror = function() {
      console.log('onerror');
    };

    xhr.send();
    return false;
  }

  updateVotes() {
    this.makePersonnelRequest();
  }

  getVotes() {
    if (this.votesInitialized) {
      return this.votes;
    } else {
      console.log('table not initialized');
    }
  }

}
