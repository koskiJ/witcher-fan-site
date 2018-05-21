import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ItemResponse {
  ip: string;
}

@Injectable()
export class VotesService {
  private votes;
  private ips;
  private hasVoted: boolean = false;
  private url: string = 'https://witcher-fan-app.herokuapp.com/votes/';
  private votesInitialized: boolean = false;
  private ipsInitialized: boolean = false;

  constructor(private http: HttpClient) { }

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

  private makeVotesRequest() {
    const url = this.url;
    const root = this;

    const xhr = this.createCORSRequest('GET', url);
    if (!xhr) {
      console.log('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      root.votes = JSON.parse(xhr.response);
      root.votesInitialized = true;
    };

    xhr.onerror = function() {
      console.log('onerror');
    };

    xhr.send();
    return false;
  }

  private makeAddRequest(nam: string) {
    const url = this.url;
    const root = this;
    let req: string = '';
    let found = false;

    function sqlString(name: string) {
      for (const v of root.votes) {
        if (name === v.name) {
          const voteAmount = v.votes + 1;
          req = 'UPDATE votes SET votes = "' + voteAmount + '" WHERE name = "' + name + '"';
          found = true;
          break;
        }

        if (!found) {
          req = 'INSERT INTO votes (name, votes) VALUES ("' + name + '", "1")';
        }
      }
    }

    const xhr = this.createCORSRequest('POST', url);
    xhr.setRequestHeader("Content-type", "text/plain");
    if (!xhr) {
      console.log('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      // console.log(xhr.responseText);
    };

    xhr.onerror = function() {
      console.log('onerror');
    };

    this.makeVotesRequest();
    sqlString(nam);
    xhr.send(req);
    this.makeVotesRequest();
    return false;
  }

  private makeIpsRequest() {
    const url: string = 'https://witcher-fan-app.herokuapp.com/ips/';
    const root = this;

    const xhr = this.createCORSRequest('GET', url);
    if (!xhr) {
      console.log('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      root.ips = JSON.parse(xhr.response);
      root.ipsInitialized = true;
    };

    xhr.onerror = function() {
      console.log('onerror');
    };

    xhr.send();
    return false;
  }

  private makeAddIpRequest(ip: string) {
    const url: string = 'https://witcher-fan-app.herokuapp.com/ips/';
    const root = this;
    const req: string = 'INSERT INTO voters (ip) VALUES ("' + ip + '")';

    const xhr = this.createCORSRequest('POST', url);
    xhr.setRequestHeader("Content-type", "text/plain");
    if (!xhr) {
      console.log('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      // console.log(xhr.responseText);
    };

    xhr.onerror = function() {
      console.log('onerror');
    };

    xhr.send(req);
    this.makeIpsRequest();
    this.hasVoted = true;
    return false;
  }

  updateVotes() {
    this.makeVotesRequest();
  }

  getVotes() {
    if (this.votesInitialized) {
      return this.votes;
    } else {
      console.log('table not initialized');
    }
  }

  addVote(name: string) {
    this.makeAddRequest(name);
  }

  canVote(): boolean {
    return this.hasVoted;
  }

  newVoter() {
    let ip: string;
    /*this.http.get<ItemResponse>('https://jsonip.com/').subscribe( jsonObject => {
      console.log(jsonObject);
      //ip = data.ip;
    }, err => {
      console.log(err);
    });*/

    this.makeIpsRequest();
    console.log(window.location.hostname);

    for (const i of this.ips) {
      if (ip === i.ip) {
        this.hasVoted = true;
      }
    }
    console.log(this.hasVoted);
  }

  addVoter() {
    let ip: string;
    this.http.get<ItemResponse>('https://jsonip.com').subscribe( data => {
      ip = data.ip;
    });

    this.makeAddIpRequest(ip);
  }

}
