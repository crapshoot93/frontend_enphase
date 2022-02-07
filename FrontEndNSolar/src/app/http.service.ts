import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Client, datess} from './client.model'
import {postClient,postClient2,postClient3,postClient4} from './post.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'http://192.168.0.49:8083/nsolar/api/consultClientList';
  apipost1Url = 'http://192.168.0.49:8083/nsolar/api/consultClientSummary';
  apipost2Url = 'http://192.168.0.49:8083/nsolar/api/consultEnergyLifeTime';
  apipost3Url = 'http://192.168.0.49:8083/nsolar/api/getInverterData';
  apipost4Url = 'http://192.168.0.49ng:8083/nsolar/api/getModuoleData';
  apiUrlprueba = 'https://enlighten.enphaseenergy.com/systems/747672/inverter_data_x/energy.json?start_date=2018-10-01&end_date=2018-10-15&key=3dadc7e2e68dbc4086c5505a65547fc3&user_id=4e446b774d4467790a';
  //apiUrlprueba = 'https://api.enphaseenergy.com/api/v2/systems/1265055/energy_lifetime?start_date=2019-05-01&end_date=2019-05-25&production=all&key=3dadc7e2e68dbc4086c5505a65547fc3&user_id=4e446b774d4467790a';
  constructor(private _http: HttpClient) { }

  getClients(){

    return this._http.get<Client>(this.apiUrl);


  }
  getClients2(){

    return this._http.get(this.apiUrlprueba)
    .subscribe((data:any) => console.log(data));


  }
  postClient(id:number){

      return this._http.post<postClient>(this.apipost1Url,
      {
        "clientId": id
      });
      //.subscribe((data:any) => console.log(data));
      //Esto es para probar en consola si recibe el post

    }
    postClient2(id:number, dateunix:string){

        return this._http.post<postClient2>(this.apipost2Url,
        {



              "clientId": id,
              "date": dateunix


        });
        //.subscribe((data:any) => console.log(data));
        //Esto es para probar en consola si recibe el post


      }
      postClient3(json:string){

        return this._http.post<postClient3>(this.apipost3Url,
        {
          "inverterData": json
        });
        //.subscribe((data:any) => console.log(data));
        //Esto es para probar en consola si recibe el post


      }

      postClient4(json:string, json2:string, jsonId:string){

        return this._http.post<postClient4>(this.apipost4Url,
        {
          "clientId": jsonId,
          "moduleData": json2,
          "moduleProduction": json
        });}

}

