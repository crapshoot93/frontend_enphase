import { Component, OnInit } from '@angular/core';
//import {ReversePipe} from './reverse';
import { AngularEditorConfig } from '@kolkov/angular-editor';
//import {HttpParams} from  "@angular/common/http";
import {HttpService} from './http.service';
import {Client,System, datess} from './client.model';
import {postClient, postClient2, postClient3, postClient4} from './post.model'
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
//import { from } from 'rxjs';
//import {DatePipe} from '@angular/common'
import { DomSanitizer } from '@angular/platform-browser';
import * as htmlDocx from 'html-docx-js/dist/html-docx';
import { ChartsModule, Label } from 'ng2-charts';
import { saveAs } from 'file-saver';
import { Chart, ChartOptions , ChartType, ChartDataSets } from 'chart.js';
import * as moment from 'moment/moment';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
//import * as XLSX from 'xlsx';
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  name = 'Angular 6';



anchoo(id:string, caso:number){
  if(caso==0){
    var myImg = document.getElementById(id) as HTMLImageElement;
          this.mx0 = myImg.width;
          this.my0 = myImg.height;
          this.mk0=this.my0/this.mx0;
          this.a0=true;}
  if(caso==1){
  var myImg = document.getElementById(id) as HTMLImageElement;
        this.mx = myImg.width;
        this.my = myImg.height;
        this.mk=this.my/this.mx;
        this.a=true;}
  if(caso==2){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx2 = myImg.width;
                this.my2 = myImg.height;
                this.mk2=this.my2/this.mx2;
                this.a2=true;}
if(caso==3){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx3 = myImg.width;
                this.my3 = myImg.height;
                this.mk3=this.my3/this.mx3;
                this.a3=true;}
if(caso==4){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx4 = myImg.width;
                this.my4 = myImg.height;
                this.mk4=this.my4/this.mx4;
                this.a4=true;}
if(caso==5){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx5 = myImg.width;
                this.my5 = myImg.height;
                this.mk5=this.my5/this.mx5;
                this.a5=true;}
if(caso==6){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx6 = myImg.width;
                this.my6 = myImg.height;
                this.mk6=this.my6/this.mx6;
                this.a6=true;}
if(caso==7){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx7 = myImg.width;
                this.my7 = myImg.height;
                this.mk7=this.my7/this.mx7;
                this.a7=true;}
if(caso==8){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx8 = myImg.width;
                this.my8 = myImg.height;
                this.mk8=this.my8/this.mx8;
                this.a8=true;}
if(caso==9){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx9 = myImg.width;
                this.my9 = myImg.height;
                this.mk9=this.my9/this.mx9;
                this.a9=true;}
if(caso==10){
          var myImg = document.getElementById(id) as HTMLImageElement;
                this.mx10 = myImg.width;
                this.my10 = myImg.height;
                this.mk10=this.my10/this.mx10;
                this.a10=true;}        
}
onSelectFile(event, caso:number) {
  if(caso==0){
    if (event.target.files && event.target.files[0]) {
      var reader: FileReader = new FileReader();
      this.a0=false;
      //this.m=event.nativeElement.offsetWidth;
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url0 = reader.result; //this.url = event.target.result;
        }
       }}
  if(caso==1){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==2){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a2=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url2 = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==3){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a3=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url3 = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==4){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a4=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url4 = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==5){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a5=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url5 = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==6){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a6=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url6 = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==7){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a7=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url7 = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==8){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a8=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url8 = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==9){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a9=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url9 = reader.result; //this.url = event.target.result;
      }
     }}
  if(caso==10){
  if (event.target.files && event.target.files[0]) {
    var reader: FileReader = new FileReader();
    this.a10=false;
    //this.m=event.nativeElement.offsetWidth;
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url10 = reader.result; //this.url = event.target.result;
      }
     }}
  
}
clients$: Client;
cliente: System;
datesss:datess;
postCliente: postClient;
postCliente2: postClient2;
postCliente3: postClient3;
postCliente4: postClient4;

constructor(private httpService: HttpService, private  sanitizer:DomSanitizer){}
ngOnInit(){
  let namedChartAnnotation = ChartAnnotation;
  namedChartAnnotation["id"]="annotation";
  Chart.pluginService.register( namedChartAnnotation);
  //this.simpleChart();
  return this.httpService.getClients()
    .subscribe(data=> this.clients$ = data, error => console.log(error));
    //this.clients$.system_name== this.clients$.system_name.sort();
}

  public barChartLabels:Label[] = ["1","2","3","4","5"];

  public barChartData: ChartDataSets[] = [{data:[1, 22, 33, 44, 55], label: 'Energía Producida', backgroundColor: [
    'rgba(44, 130, 201, 1)'
], borderColor:['rgba(44, 130, 201, 1)']}];
  public barChartType:string = 'bar';
  public barChartOptions: ChartOptions = {  
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 100,
        borderColor: 'rgb(80, 80, 80)',
        borderWidth: 4,
        label: {
          enabled: false,
          content: 'Test label'
        }
      }]
    },
    legend:{display:false,
      position:'bottom'}, scales:{
        xAxes:[{ticks:
          {autoSkip: false,
            maxRotation: 0,
            minRotation: 0}}],
        yAxes:[{
          scaleLabel:{
            display:true,
             labelString:'Energía (kWh)'
            }
      }
    ]
  }};
  
  public chartClicked(e:any):void {
    //console.log(e);
  }

 // event on pie chart slice hover
  public chartHovered(e:any):void {
  //  console.log(e);
  }



/////////////////////CANVAS///////////////////////
contadorDrawPaneles:number=0;
    drawRectable() {
      for(let array of this.postCliente4.systemArrays){
        var canvasB:any = document.getElementById(array.label+'brujula');
        if (canvasB.getContext) {
          var ctxB = canvasB.getContext('2d');
          ctxB.save(); 
      ctxB.translate (25,25);
      ctxB.rotate((180-array.azimuth)*Math.PI/180);
      ctxB.drawImage(this.brujulaIMG,-25,-25);
        
        }
      }
     for(let arrays of this.postCliente4.systemArrays){
      var canvas:any = document.getElementById(arrays.label);
      if((arrays.modules[0].panelRotation==0)||(arrays.modules[0].panelRotation==180)){
      canvas.width = (arrays.xMax)/2+50;
      canvas.height = (arrays.yMax)/2+100;
      
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
       
        for(let paneles of arrays.modules){
        ctx.save();  
        if(paneles.y!==0 && paneles.x!==0){
          
          ctx.fillStyle = paneles.moduleColor;
          ctx.fillRect(paneles.x/2,  (paneles.y/2), 50,100);
          ctx.drawImage(this.panelIMG, (paneles.x/2),  (paneles.y/2));
          ctx.fillStyle = 'rgb(70, 70, 70,0.5)';
          ctx.fillRect((paneles.x/2)+6, 35+(paneles.y/2), 36,35);
          
          ctx.fillStyle = "white";
          ctx.font = "12px Arial";
          
          ctx.fillText(String((Math.round(Number(paneles.generatedPower) * 100) / 100).toFixed(2)),(paneles.x/2)+10,(paneles.y/2)+50);
          ctx.font = "12px Arial";
          ctx.fillText('kWh',(paneles.x/2)+10,(paneles.y/2)+60);}
        
        if(paneles.y==0 && paneles.x==0){
          
          ctx.fillStyle = paneles.moduleColor;
          ctx.fillRect(paneles.x,  (paneles.y), 50,100);
          ctx.drawImage(this.panelIMG, (paneles.x),  (paneles.y));
          ctx.fillStyle = 'rgb(70, 70, 70,0.5)';
          ctx.fillRect((paneles.x)+6, 35+(paneles.y), 36,35);
          
          ctx.fillStyle = "white";
          ctx.font = "12px Arial";
         
          ctx.fillText(String((Math.round(Number(paneles.generatedPower) * 100) / 100).toFixed(2)),(paneles.x)+10,(paneles.y)+50);
          ctx.font = "12px Arial";
          ctx.fillText('kWh',(paneles.x)+10,(paneles.y)+60);}


        if((paneles.y==0 && paneles.x!==0) || (paneles.x==0 && paneles.y!==0)){
        if(paneles.y==0){
       
        ctx.fillStyle = paneles.moduleColor;
        ctx.fillRect(paneles.x/2,  (paneles.y), 50,100);
        ctx.drawImage(this.panelIMG, (paneles.x/2),  (paneles.y)); 
        ctx.fillStyle = 'rgb(70, 70, 70,0.5)';
        ctx.fillRect((paneles.x/2)+6, 35+(paneles.y), 36,35);
        
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
       
        ctx.fillText(String((Math.round(Number(paneles.generatedPower) * 100) / 100).toFixed(2)),(paneles.x/2)+10,(paneles.y)+50);
        ctx.font = "12px Arial";
        ctx.fillText('kWh',(paneles.x/2)+10,(paneles.y)+60);}

        
        if(paneles.x==0){
          
        ctx.fillStyle = paneles.moduleColor;
        ctx.fillRect(paneles.x,  (paneles.y/2), 50,100);
        ctx.drawImage(this.panelIMG, (paneles.x),  (paneles.y/2));
        ctx.fillStyle = 'rgb(70, 70, 70,0.5)';
        ctx.fillRect((paneles.x)+6, 35+(paneles.y/2), 36,35);
        
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";
      
        ctx.fillText(String((Math.round(Number(paneles.generatedPower) * 100) / 100).toFixed(2)),(paneles.x)+10,(paneles.y/2)+50);
        ctx.font = "12px Arial";
        ctx.fillText('kWh',(paneles.x)+10,(paneles.y/2)+60);}
      }

      ctx.restore();  
        
    }

      }}
     
      if((arrays.modules[0].panelRotation==270)||(arrays.modules[0].panelRotation==90)){
        canvas.width = (arrays.xMax)/2+100;
        canvas.height = (arrays.yMax)/2+50;
        
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');
         
          for(let paneles of arrays.modules){
          ctx.save();  
          if(paneles.y!==0 && paneles.x!==0){
            
            ctx.fillStyle = paneles.moduleColor;
            ctx.fillRect(paneles.x/2,  (paneles.y/2), 100,50);
            ctx.drawImage(this.panelIMGh, (paneles.x/2),  (paneles.y/2));
            ctx.fillStyle = 'rgb(70, 70, 70,0.5)';
            ctx.fillRect((paneles.x/2)+35, 6+(paneles.y/2), 35,36);
            
            ctx.fillStyle = "white";
            ctx.font = "12px Arial";
            
            ctx.fillText(String((Math.round(Number(paneles.generatedPower) * 100) / 100).toFixed(2)),(paneles.x/2)+38,(paneles.y/2)+25);
            ctx.font = "12px Arial";
            ctx.fillText('kWh',(paneles.x/2)+38,(paneles.y/2)+35);}
          
          if(paneles.y==0 && paneles.x==0){
            
            ctx.fillStyle = paneles.moduleColor;
            ctx.fillRect(paneles.x,  (paneles.y), 100,50);
            ctx.drawImage(this.panelIMGh, (paneles.x),  (paneles.y));
            ctx.fillStyle = 'rgb(70, 70, 70,0.5)';
            ctx.fillRect((paneles.x)+35, 6+(paneles.y), 35,36);
            
            ctx.fillStyle = "white";
            ctx.font = "12px Arial";
           
            ctx.fillText(String((Math.round(Number(paneles.generatedPower) * 100) / 100).toFixed(2)),(paneles.x)+38,(paneles.y)+25);
            ctx.font = "12px Arial";
            ctx.fillText('kWh',(paneles.x)+38,(paneles.y)+35);}
  
  
          if((paneles.y==0 && paneles.x!==0) || (paneles.x==0 && paneles.y!==0)){
          if(paneles.y==0){
         
          ctx.fillStyle = paneles.moduleColor;
          ctx.fillRect(paneles.x/2,  (paneles.y), 100,50);
          ctx.drawImage(this.panelIMGh, (paneles.x/2),  (paneles.y)); 
          ctx.fillStyle = 'rgb(70, 70, 70,0.5)';
          ctx.fillRect((paneles.x/2)+35, 6+(paneles.y), 35,36);
          
          ctx.fillStyle = "white";
          ctx.font = "12px Arial";
         
          ctx.fillText(String((Math.round(Number(paneles.generatedPower) * 100) / 100).toFixed(2)),(paneles.x/2)+38,(paneles.y)+25);
          ctx.font = "12px Arial";
          ctx.fillText('kWh',(paneles.x/2)+38,(paneles.y)+35);}
  
          
          if(paneles.x==0){
            
          ctx.fillStyle = paneles.moduleColor;
          ctx.fillRect(paneles.x,  (paneles.y/2), 100,50);
          ctx.drawImage(this.panelIMGh, (paneles.x),  (paneles.y/2));
          ctx.fillStyle = 'rgb(70, 70, 70,0.5)';
          ctx.fillRect((paneles.x)+35, 6+(paneles.y/2), 35,36);
          
          ctx.fillStyle = "white";
          ctx.font = "12px Arial";
        
          ctx.fillText(String((Math.round(Number(paneles.generatedPower) * 100) / 100).toFixed(2)),(paneles.x)+38,(paneles.y/2)+25);
          ctx.font = "12px Arial";
          ctx.fillText('kWh',(paneles.x)+38,(paneles.y/2)+35);}
        }
  
        ctx.restore();  
          
      }
  
        }}



    }
     this.contadorDrawPaneles=this.contadorDrawPaneles+1;
     this.controlPaneles=true;
    }
    
/////////////////////CANVAS///////////////////////






public transform(imagen){
  
  return this.sanitizer.bypassSecurityTrustResourceUrl(imagen);
}

public selected(){

  return this.httpService.postClient(this.cliente.system_id)
  .subscribe(data=> this.postCliente=data, error=>console.log(error));

}


public fechaSeleccionada(){
  this.unixtima=(new Date(this.fechainforme).getTime()/1000);
  ////////////////////////POST//////////////////////////////////////////////
  return this.httpService.postClient2(this.cliente.system_id,this.unixtima.toString())                   //
  .subscribe(data=> this.postCliente2=data, error=>console.log(error));//
  /////////////////////////////////////////////////////////////////////////

}
public MedidorBi(){
  if(this.postCliente2.clientExcelObject.fecha_Medidor_Bidireccional=="N/A"){
    this.medidor1="No se tiene la fecha de instalación.";
  }
  if(this.postCliente2.clientExcelObject.fecha_Medidor_Bidireccional!="N/A"){
    let newDate= new Date(this.postCliente2.clientExcelObject.fecha_Medidor_Bidireccional);

    this.medidor1=String(newDate.getDate())+" de "+this.monthNames[newDate.getMonth()]+" de "+String(newDate.getFullYear())+".";


  }
 }

 public imagenesapng(IDimagen, caso:number){
  var data = document.getElementById(IDimagen);
  
  if(caso==0){
    html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen0 = canvas.toDataURL('image/png')
      
    });}
  if(caso==1){
    html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen1 = canvas.toDataURL('image/png')
      
    });}
    if(caso==2){
           html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen2 = canvas.toDataURL('image/png')
      
    });}
  if(caso==3){
          html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen3 = canvas.toDataURL('image/png')
      
    });}
  if(caso==4){
            html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen4 = canvas.toDataURL('image/png')
      
    });}
  if(caso==5){
            html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen5 = canvas.toDataURL('image/png')
      
    });}
  if(caso==6){
            html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen6 = canvas.toDataURL('image/png')
      
    });}
  if(caso==7){
            html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen7 = canvas.toDataURL('image/png')
      
    });}
  if(caso==8){
            html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen8 = canvas.toDataURL('image/png')
      
    });}
  if(caso==9){
            html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen9 = canvas.toDataURL('image/png')
      
    });}
  if(caso==10){
            html2canvas(data,{
      scale:1
    }).then(canvas => {
      this.imagen10 = canvas.toDataURL('image/png')
      
    });}        
  }


public chartApng(){
  var data = document.getElementById('graficaBarras');
  html2canvas(data,{
    scale:0.6
  }).then(canvas => {
    this.graficaEnPNG = canvas.toDataURL('image/png')
  });
  
}
public pixelApng(){
  
    for(let array of this.postCliente4.systemArrays){
      var dat = document.getElementById(array.label+'1');
      html2canvas(dat,{
        scale:1
      }).then(canvas => {
        this.arrayPixel.push(canvas.toDataURL('image/png'));
      });
  
    }
    
    
    
   
  }
public brujulasApng(){
  if(this.postCliente4.systemArrays.length==2){
    for(let array of this.postCliente4.systemArrays){
      var dat = document.getElementById(array.label+'brujula');
      html2canvas(dat,{
        scale:1
      }).then(canvas => {
        this.arrayPanelesBrujula.push(canvas.toDataURL('image/png'));
      });
  
    }
    }
    
    
    if(this.postCliente4.systemArrays.length!==2){
      for(let array of this.postCliente4.systemArrays){
        var dat = document.getElementById(array.label+'brujula');
        html2canvas(dat,{
          scale:1
        }).then(canvas => {
          this.arrayPanelesBrujula.push(canvas.toDataURL('image/png'));
        });
    
      }
      this.arrayPanelesBrujula=[];
    for(let array of this.postCliente4.systemArrays){
      var dat = document.getElementById(array.label+'brujula');
      html2canvas(dat,{
        scale:1
      }).then(canvas => {
        this.arrayPanelesBrujula.push(canvas.toDataURL('image/png'));
      });
  
    }
  
  }
  }
public panelesApng(){
  if(this.controlPaneles==true&&this.contadorDrawPaneles==1){
    this.brujulasApng();
  for(let arrays of this.postCliente4.systemArrays){
  var data = document.getElementById(arrays.label);
  html2canvas(data,{
    scale:1
  }).then(canvas => {
    this.arrayPanelesPNG.push(canvas.toDataURL('image/png'));
    
      this.arrayPanelesAnguloBrujula.push(180-arrays.azimuth);
    
    this.arrayPanelesAzimuth.push(arrays.azimuth);
    this.arrayPanelesLabel.push(arrays.label);
  });

}

  }
  this.controlPaneles=false;
}

public captureScreen()
  {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight+3;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight,'','FAST')
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('NSolar.pdf'); // Generated PDF
    });
  }

//------------------------------------------------
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Ingrese el texto...',
    translate: 'no',
    uploadUrl: '', // if needed

    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  public Export2Docx(content, titulo=''){

    let htmlDocument='<!DOCTYPE html><html><head><meta charset="utf-8"><tittle></tittle>';
    htmlDocument = htmlDocument + '</head><body>' + document.getElementById(content).innerHTML + '</body></html>';
    const converted = htmlDocx.asBlob(htmlDocument,{orientation:'portrait'});
    //const converted = htmlDocx.asBlob([htmlDocument], {type: 'application vnd.openxmlformats-officedocument.wordprocessingml.document'});
    titulo = titulo?titulo+'.docx':'document.docx';
    saveAs(converted, titulo);
  }

  public Export2Doc(element, filename = ''){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });

    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    // Specify file name
    filename = filename?filename+'.doc':'document.doc';

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}
public Siguiente(){
  if(this.controlA>0&&this.controlB>0){
  this.diaEnd=new Date(this.postCliente2.endDate);
  this.mostrar=false;
  this.mostrar2=true;
  this.mostrar3=false;
  }
}
cargaratras(){
  window.location.reload()

}
apicall3(){
  if(this.jsonmicro!=""&&this.jsonmicro2!=""){
  return this.httpService.postClient3(this.jsonmicro)
  //.subscribe((data:any) => console.log(data));
  .subscribe(data=> this.postCliente3=data, error=>console.log(error));
}
}
verReporte(){
  this.brujulaIMG.src='assets/brujula1.png';
  this.panelIMGh.src="assets/panelh.png";
  this.panelIMG.src="assets/panelv.png";
  if(this.jsonmicro!=""&&this.jsonmicro2!=""){
    var mesGrafica = moment(this.fechainforme).format('MMM');
    //this.jsonmicro = JSON.stringify(this.jsonmicro);
    this.jsonmicro = this.jsonmicro.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
    this.jsonmicro2 = this.jsonmicro2.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f");
    this.promedioProduction=0;
    for (var i = 0; i < this.postCliente2.production.length; i++) {
      if((i+1)==this.postCliente2.mayorGeneration.day){
        this.barChartData[0].backgroundColor[i]= 'rgba(51, 204, 51, 1)';
      }
      if((i+1)==this.postCliente2.minorGeneration.day){
        this.barChartData[0].backgroundColor[i]= 'rgba(255, 51, 0, 1)';
      }
      if((i % 2) == 1){
      this.labelsGraficaBar[i] = mesGrafica+" "+String(i+1);}
      if((i % 2) == 0){
        this.labelsGraficaBar[i] = " ";}
      this.promedioProduction=this.promedioProduction+this.postCliente2.production[i]/1000;
      this.barChartData[0].data[i]= this.postCliente2.production[i]/1000;
      if((i+1)!=this.postCliente2.minorGeneration.day&&(i+1)!=this.postCliente2.mayorGeneration.day){
        this.barChartData[0].backgroundColor[i]= 'rgba(44, 130, 201, 1)';
      }}
      this.promedioProduction=this.promedioProduction/i;
      
    this.barChartLabels = this.labelsGraficaBar;
    //this.barChartData= this.postCliente2.production;

    this.barChartOptions = {  
      annotation: {
        annotations: [{
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y-axis-0',
          value: this.promedioProduction,
          borderColor: 'rgb(80, 80, 80)',
          borderWidth: 4,
          label: {
            enabled: false,
            content: 'Test label'
          }
        }]
      },
      legend:{display:false,
        position:'bottom'}, scales:{
          xAxes:[{ticks:
            {autoSkip: false,
              maxRotation: 0,
              minRotation: 0}}],
          yAxes:[{
            scaleLabel:{
              display:true,
               labelString:'Energía (kWh)'
              }
        }
      ]
    }};
this.mostrar=false;
this.mostrar3=true;
this.mostrar2=false;
  this.p1b1=true;
  this.p2b1=true;
  this.p3b1=true;
  this.p4b1=true;
  this.p5b1=true;
  this.p5b1im=true;
  this.p5b0im=true;
  return this.httpService.postClient4(this.jsonmicro, this.jsonmicro2, this.cliente.system_id.toString())
  //.subscribe((data:any) => console.log(data));
  .subscribe(data=> this.postCliente4=data, error=>console.log(error));

  

  
 }
}
//<button (click)="drawRectable()">Draw rectable</button>

//<canvas  attr.id="{{Canvas1}}" width="800" height="1000"></canvas>
Canvas1:string="stage";
medidor1:string="";
monthNames:string[] = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];
mx0:number;
my0:number;
mk0:number;
mx:number;
my:number;
mk:number;
mx2:number;
my2:number;
mk2:number;
mx3:number;
my3:number;
mk3:number;
mx4:number;
my4:number;
mk4:number;
mx5:number;
my5:number;
mk5:number;
mx6:number;
my6:number;
mk6:number;
mx7:number;
my7:number;
mk7:number;
mx8:number;
my8:number;
mk8:number;
mx9:number;
my9:number;
mk9:number;
mx10:number;
my10:number;
mk10:number;

m:number=50;
promedioProduction:number=0;
mostrar:boolean=true;
  labelsGraficaBar:string[]=[" ",""];
  arrayPanelesPNG:any[]=new Array();
  arrayPanelesAnguloBrujula:any[]=new Array();
  arrayPanelesBrujula:any[]=new Array();
  arrayPanelesAzimuth:any[]=new Array();
  arrayPanelesLabel:any[]=new Array();
  arrayPixel:any[]=new Array();
  graficaEnPNG:any;
  imaggenprueba:any;
  
  imagen0:any;
  imagen1:any;
  imagen2:any;
  imagen3:any;
  imagen4:any;
  imagen5:any;
  imagen6:any;
  imagen7:any;
  imagen8:any;
  imagen9:any;
  imagen10:any;
  ace0:boolean=false;
  ace:boolean=false;
  ace2:boolean=false;
  ace3:boolean=false;
  ace4:boolean=false;
  ace5:boolean=false;
  ace6:boolean=false;
  ace7:boolean=false;
  ace8:boolean=false;
  ace9:boolean=false;
  ace10:boolean=false;
  a0:boolean=false;
  a:boolean=false;
  a2:boolean=false;
  a3:boolean=false;
  a4:boolean=false;
  a5:boolean=false;
  a6:boolean=false;
  a7:boolean=false;
  a8:boolean=false;
  a9:boolean=false;
  a10:boolean=false;
  url0:any = '';
  url:any = '';
  url2:any = '';
  url3:any = '';
  url4:any = '';
  url5:any = '';
  url6:any = '';
  url7:any = '';
  url8:any = '';
  url9:any = '';
  url10:any = '';
//   XLSXurl:any= "assets/Copia de Sistemas NSOLAR.xlsx";
  
//   public excel2json(){
//     var oReq = new XMLHttpRequest();
//   oReq.open("GET", this.XLSXurl, true);
//   oReq.responseType = "arraybuffer";

//   oReq.onload = function(e) {
//     var arraybuffer = oReq.response;
  
//     /* convert data to binary string */
//     var data = new Uint8Array(arraybuffer);
//     var arr = new Array();
//     for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
//     var bstr = arr.join("");
  
//     /* Call XLSX */
//     var workbook = XLSX.read(bstr, {type:"binary"});
  
//     /* DO SOMETHING WITH workbook HERE */
//     var first_sheet_name = workbook.SheetNames[0];
//     /* Get worksheet */
//     var worksheet = workbook.Sheets[first_sheet_name];
//     console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
//     console.log(JSON.stringify(XLSX.utils.sheet_to_json(worksheet,{raw:true})));
   
   
//   }
//   //<button  class="w3-btn w3-margin-left w3-green" style="float: right;margin-right: 30px;" (click)="excel2json();CIexcel=CIexcel*-1">Actualizar Excel</button><br><br>
// //<p *ngIf="CIexcel==-1" class="w3-right-align w3-text-green">El archivo {{XLSXurl}} se ha actualizado excitosamente.</p> <br>{{jsonmicro}}

//   oReq.send();
// }
controlPaneles:boolean=false;

  mostrar2:boolean=false;
  mostrar3:boolean=false;
  mostrar_REPORTE:boolean=false;
  curDate=new Date();
  fechainforme=new Date();
  fechalimpieza=new Date();
  diaStart=new Date();
  diaEnd=new Date();
  text:string="&nbsp;";
  
  maximo:number=0;
  CIexcel:number=1;
  minimo:number=0;
  controlA:number=0;
  controlB:number=0;
  controlC:number=0;
  unixtima:number=0;
  base64hue:string="";
  jsonmicro:string="";
  jsonmicro2:string="";
  jsonxlsx:any;
  panelIMG = new Image;
  panelIMGh = new Image;
  brujulaIMG=new Image;

  p1par1:string="";
  p1par2:string="";
  p1par3:string="";
  p1par4:string="";
  p1par5:string="";
  p1par6:string="";
  p1par7:string="";
  p1par8:string="";
  p1par9:string="";
  p1par10:string="";

  p2par1:string="";
  p2par2:string="";
  p2par3:string="";
  p2par4:string="";
  p2par5:string="";
  p2par6:string="";
  p2par7:string="";
  p2par8:string="";
  p2par9:string="";
  p2par10:string="";

  p3par1:string="";
  p3par2:string="";
  p3par3:string="";
  p3par4:string="";
  p3par5:string="";
  p3par6:string="";
  p3par7:string="";
  p3par8:string="";
  p3par9:string="";
  p3par10:string="";

  p4par1:string="";
  p4par2:string="";
  p4par3:string="";
  p4par4:string="";
  p4par5:string="";
  p4par6:string="";
  p4par7:string="";
  p4par8:string="";
  p4par9:string="";
  p4par10:string="";

  p5par1:string="";
  p5par2:string="";
  p5par3:string="";
  p5par4:string="";
  p5par5:string="";
  p5par6:string="";
  p5par7:string="";
  p5par8:string="";
  p5par9:string="";
  p5par10:string="";

  p1p1:boolean=false;
  p1p1e:boolean=false;
  p1b1:boolean=false;
  p1t1:boolean=false;
  p1t1a:boolean=false;
  p1t1b:boolean=false;
  erro11:string="";

  p1p2:boolean=false;
  p1p2e:boolean=false;
  p1b2:boolean=false;
  p1t2:boolean=false;
  p1t2a:boolean=false;
  p1t2b:boolean=false;
  erro12:string="";

  p1p3:boolean=false;
  p1p3e:boolean=false;
  p1b3:boolean=false;
  p1t3:boolean=false;
  p1t3a:boolean=false;
  p1t3b:boolean=false;
  erro13:string="";

  p1p4:boolean=false;
  p1p4e:boolean=false;
  p1b4:boolean=false;
  p1t4:boolean=false;
  p1t4a:boolean=false;
  p1t4b:boolean=false;
  erro14:string="";

  p1p5:boolean=false;
  p1p5e:boolean=false;
  p1b5:boolean=false;
  p1t5:boolean=false;
  p1t5a:boolean=false;
  p1t5b:boolean=false;
  erro15:string="";

  p1p6:boolean=false;
  p1p6e:boolean=false;
  p1b6:boolean=false;
  p1t6:boolean=false;
  p1t6a:boolean=false;
  p1t6b:boolean=false;
  erro16:string="";

  p1p7:boolean=false;
  p1p7e:boolean=false;
  p1b7:boolean=false;
  p1t7:boolean=false;
  p1t7a:boolean=false;
  p1t7b:boolean=false;
  erro17:string="";

  p1p8:boolean=false;
  p1p8e:boolean=false;
  p1b8:boolean=false;
  p1t8:boolean=false;
  p1t8a:boolean=false;
  p1t8b:boolean=false;
  erro18:string="";

  p1p9:boolean=false;
  p1p9e:boolean=false;
  p1b9:boolean=false;
  p1t9:boolean=false;
  p1t9a:boolean=false;
  p1t9b:boolean=false;
  erro19:string="";

  p1p10:boolean=false;
  p1p10e:boolean=false;
  p1b10:boolean=false;
  p1t10:boolean=false;
  p1t10a:boolean=false;
  p1t10b:boolean=false;
  erro110:string="";

  p2p1:boolean=false;
  p2p1e:boolean=false;
  p2b1:boolean=false;
  p2t1:boolean=false;
  p2t1a:boolean=false;
  p2t1b:boolean=false;
  erro21:string="";

  p2p2:boolean=false;
  p2p2e:boolean=false;
  p2b2:boolean=false;
  p2t2:boolean=false;
  p2t2a:boolean=false;
  p2t2b:boolean=false;
  erro22:string="";

  p2p3:boolean=false;
  p2p3e:boolean=false;
  p2b3:boolean=false;
  p2t3:boolean=false;
  p2t3a:boolean=false;
  p2t3b:boolean=false;
  erro23:string="";

  p2p4:boolean=false;
  p2p4e:boolean=false;
  p2b4:boolean=false;
  p2t4:boolean=false;
  p2t4a:boolean=false;
  p2t4b:boolean=false;
  erro24:string="";

  p2p5:boolean=false;
  p2p5e:boolean=false;
  p2b5:boolean=false;
  p2t5:boolean=false;
  p2t5a:boolean=false;
  p2t5b:boolean=false;
  erro25:string="";

  p2p6:boolean=false;
  p2p6e:boolean=false;
  p2b6:boolean=false;
  p2t6:boolean=false;
  p2t6a:boolean=false;
  p2t6b:boolean=false;
  erro26:string="";

  p2p7:boolean=false;
  p2p7e:boolean=false;
  p2b7:boolean=false;
  p2t7:boolean=false;
  p2t7a:boolean=false;
  p2t7b:boolean=false;
  erro27:string="";

  p2p8:boolean=false;
  p2p8e:boolean=false;
  p2b8:boolean=false;
  p2t8:boolean=false;
  p2t8a:boolean=false;
  p2t8b:boolean=false;
  erro28:string="";

  p2p9:boolean=false;
  p2p9e:boolean=false;
  p2b9:boolean=false;
  p2t9:boolean=false;
  p2t9a:boolean=false;
  p2t9b:boolean=false;
  erro29:string="";

  p2p10:boolean=false;
  p2p10e:boolean=false;
  p2b10:boolean=false;
  p2t10:boolean=false;
  p2t10a:boolean=false;
  p2t10b:boolean=false;
  erro210:string="";


  p3p1:boolean=false;
  p3p1e:boolean=false;
  p3b1:boolean=false;
  p3t1:boolean=false;
  p3t1a:boolean=false;
  p3t1b:boolean=false;
  erro31:string="";

  p3p2:boolean=false;
  p3p2e:boolean=false;
  p3b2:boolean=false;
  p3t2:boolean=false;
  p3t2a:boolean=false;
  p3t2b:boolean=false;
  erro32:string="";

  p3p3:boolean=false;
  p3p3e:boolean=false;
  p3b3:boolean=false;
  p3t3:boolean=false;
  p3t3a:boolean=false;
  p3t3b:boolean=false;
  erro33:string="";

  p3p4:boolean=false;
  p3p4e:boolean=false;
  p3b4:boolean=false;
  p3t4:boolean=false;
  p3t4a:boolean=false;
  p3t4b:boolean=false;
  erro34:string="";

  p3p5:boolean=false;
  p3p5e:boolean=false;
  p3b5:boolean=false;
  p3t5:boolean=false;
  p3t5a:boolean=false;
  p3t5b:boolean=false;
  erro35:string="";

  p3p6:boolean=false;
  p3p6e:boolean=false;
  p3b6:boolean=false;
  p3t6:boolean=false;
  p3t6a:boolean=false;
  p3t6b:boolean=false;
  erro36:string="";

  p3p7:boolean=false;
  p3p7e:boolean=false;
  p3b7:boolean=false;
  p3t7:boolean=false;
  p3t7a:boolean=false;
  p3t7b:boolean=false;
  erro37:string="";

  p3p8:boolean=false;
  p3p8e:boolean=false;
  p3b8:boolean=false;
  p3t8:boolean=false;
  p3t8a:boolean=false;
  p3t8b:boolean=false;
  erro38:string="";

  p3p9:boolean=false;
  p3p9e:boolean=false;
  p3b9:boolean=false;
  p3t9:boolean=false;
  p3t9a:boolean=false;
  p3t9b:boolean=false;
  erro39:string="";

  p3p10:boolean=false;
  p3p10e:boolean=false;
  p3b10:boolean=false;
  p3t10:boolean=false;
  p3t10a:boolean=false;
  p3t10b:boolean=false;
  erro310:string="";

  p4p1:boolean=false;
  p4p1e:boolean=false;
  p4b1:boolean=false;
  p4t1:boolean=false;
  p4t1a:boolean=false;
  p4t1b:boolean=false;
  erro41:string="";

  p4p2:boolean=false;
  p4p2e:boolean=false;
  p4b2:boolean=false;
  p4t2:boolean=false;
  p4t2a:boolean=false;
  p4t2b:boolean=false;
  erro42:string="";

  p4p3:boolean=false;
  p4p3e:boolean=false;
  p4b3:boolean=false;
  p4t3:boolean=false;
  p4t3a:boolean=false;
  p4t3b:boolean=false;
  erro43:string="";

  p4p4:boolean=false;
  p4p4e:boolean=false;
  p4b4:boolean=false;
  p4t4:boolean=false;
  p4t4a:boolean=false;
  p4t4b:boolean=false;
  erro44:string="";

  p4p5:boolean=false;
  p4p5e:boolean=false;
  p4b5:boolean=false;
  p4t5:boolean=false;
  p4t5a:boolean=false;
  p4t5b:boolean=false;
  erro45:string="";

  p4p6:boolean=false;
  p4p6e:boolean=false;
  p4b6:boolean=false;
  p4t6:boolean=false;
  p4t6a:boolean=false;
  p4t6b:boolean=false;
  erro46:string="";

  p4p7:boolean=false;
  p4p7e:boolean=false;
  p4b7:boolean=false;
  p4t7:boolean=false;
  p4t7a:boolean=false;
  p4t7b:boolean=false;
  erro47:string="";

  p4p8:boolean=false;
  p4p8e:boolean=false;
  p4b8:boolean=false;
  p4t8:boolean=false;
  p4t8a:boolean=false;
  p4t8b:boolean=false;
  erro48:string="";

  p4p9:boolean=false;
  p4p9e:boolean=false;
  p4b9:boolean=false;
  p4t9:boolean=false;
  p4t9a:boolean=false;
  p4t9b:boolean=false;
  erro49:string="";

  p4p10:boolean=false;
  p4p10e:boolean=false;
  p4b10:boolean=false;
  p4t10:boolean=false;
  p4t10a:boolean=false;
  p4t10b:boolean=false;
  erro410:string="";

  p5p0:boolean=false;
  p5p0e:boolean=false;
  p5b0:boolean=false;
  p5b0c:boolean=false;
  p5b0i:boolean=false;
  p5b0im:boolean=false;
 

  p5p1:boolean=false;
  p5p1e:boolean=false;
  p5b1:boolean=false;
  p5b1c:boolean=false;
  p5b1i:boolean=false;
  p5b1im:boolean=false;
  p5t1:boolean=false;
  p5t1a:boolean=false;
  p5t1b:boolean=false;
  erro51:string="";

  p5p2:boolean=false;
  p5p2e:boolean=false;
  p5b2:boolean=false;
  p5b2c:boolean=false;
  p5b2i:boolean=false;
  p5b2im:boolean=false;
  p5t2:boolean=false;
  p5t2a:boolean=false;
  p5t2b:boolean=false;
  erro52:string="";

  p5p3:boolean=false;
  p5p3e:boolean=false;
  p5b3:boolean=false;
  p5b3c:boolean=false;
  p5b3i:boolean=false;
  p5b3im:boolean=false;
  p5t3:boolean=false;
  p5t3a:boolean=false;
  p5t3b:boolean=false;
  erro53:string="";

  p5p4:boolean=false;
  p5p4e:boolean=false;
  p5b4:boolean=false;
  p5b4c:boolean=false;
  p5b4i:boolean=false;
  p5b4im:boolean=false;
  p5t4:boolean=false;
  p5t4a:boolean=false;
  p5t4b:boolean=false;
  erro54:string="";

  p5p5:boolean=false;
  p5p5e:boolean=false;
  p5b5:boolean=false;
  p5b5c:boolean=false;
  p5b5i:boolean=false;
  p5b5im:boolean=false;
  p5t5:boolean=false;
  p5t5a:boolean=false;
  p5t5b:boolean=false;
  erro55:string="";

  p5p6:boolean=false;
  p5p6e:boolean=false;
  p5b6:boolean=false;
  p5b6c:boolean=false;
  p5b6i:boolean=false;
  p5b6im:boolean=false;
  p5t6:boolean=false;
  p5t6a:boolean=false;
  p5t6b:boolean=false;
  erro56:string="";

  p5p7:boolean=false;
  p5p7e:boolean=false;
  p5b7:boolean=false;
  p5b7c:boolean=false;
  p5b7i:boolean=false;
  p5b7im:boolean=false;
  p5t7:boolean=false;
  p5t7a:boolean=false;
  p5t7b:boolean=false;
  erro57:string="";

  p5p8:boolean=false;
  p5p8e:boolean=false;
  p5b8:boolean=false;
  p5b8c:boolean=false;
  p5b8i:boolean=false;
  p5b8im:boolean=false;
  p5t8:boolean=false;
  p5t8a:boolean=false;
  p5t8b:boolean=false;
  erro58:string="";

  p5p9:boolean=false;
  p5p9e:boolean=false;
  p5b9:boolean=false;
  p5b9c:boolean=false;
  p5b9i:boolean=false;
  p5b9im:boolean=false;
  p5t9:boolean=false;
  p5t9a:boolean=false;
  p5t9b:boolean=false;
  erro59:string="";

  p5p10:boolean=false;
  p5p10e:boolean=false;
  p5b10:boolean=false;
  p5b10c:boolean=false;
  p5b10i:boolean=false;
  p5b10im:boolean=false;
  p5t10:boolean=false;
  p5t10a:boolean=false;
  p5t10b:boolean=false;
  erro510:string="";

  C_crear(){
    this.captureScreen();
  }
  F_atrascrear(){

    this.mostrar_REPORTE=false;

  }
  F_atras(){
    //this.mostrar_REPORTE=false;
    //this.mostrar=true;
    //this.erro11="";
    //this.p1b2=false;
    this.mostrar3=false;
    this.mostrar2=true;
    //window.location.reload();
  }

  funcionMas1(){
    this.p1b1=false;
    this.p1t1a=true;
    this.p1t1b=true;
    this.p1t1=true;
  }
  funcionAceptar1(){
    if(this.erro11!="" && this.p1par2==""){
    this.p1t1=false;
    this.p1p1=true;
    this.p1par1=this.erro11;
    this.p1p1e=true;
    this.p1b2=true;
    this.p1t1b=false;
    this.p1t1a=false
    }
    if(this.erro11!="" && this.p1par2!=""){
      this.p1t1=false;
      this.p1p1=true;
      this.p1par1=this.erro11;
      this.p1p1e=true;
      this.p1t1b=false;
      this.p1t1a=false
      }
  }
  funcionCancelar1(){

    if(this.p1par1==""){
      this.p1t1=false;
      this.p1b1=true;
      this.p1t1b=false;
      this.p1t1a=false;
      }
    if(this.p1par1!=""){
      this.p1t1=false;
      this.p1p1e=true;
      this.p1t1b=false;
      this.p1t1a=false;
      }
  }

  funcionMas2(){
    this.p1b2=false;
    this.p1t2a=true;
    this.p1t2b=true;
    this.p1t2=true;
  }
  funcionAceptar2(){
    if(this.erro12!="" && this.p1par3==""){
    this.p1t2=false;
    this.p1p2=true;
    this.p1par2=this.erro12;
    this.p1p2e=true;
    this.p1b3=true;
    this.p1t2b=false;
    this.p1t2a=false
    }
    if(this.erro12!="" && this.p1par3!=""){
      this.p1t2=false;
      this.p1p2=true;
      this.p1par2=this.erro12;
      this.p1p2e=true;
      this.p1t2b=false;
      this.p1t2a=false
      }
  }
  funcionCancelar2(){

    if(this.p1par2==""){
      this.p1t2=false;
      this.p1b2=true;
      this.p1t2b=false;
      this.p1t2a=false;
      }
    if(this.p1par2!=""){
      this.p1t2=false;
      this.p1p2e=true;
      this.p1t2b=false;
      this.p1t2a=false;
      }
  }

  funcionMas3(){
    this.p1b3=false;
    this.p1t3a=true;
    this.p1t3b=true;
    this.p1t3=true;
  }
  funcionAceptar3(){
    if(this.erro13!="" && this.p1par4==""){
    this.p1t3=false;
    this.p1p3=true;
    this.p1par3=this.erro13;
    this.p1p3e=true;
    this.p1b4=true;
    this.p1t3b=false;
    this.p1t3a=false
    }
    if(this.erro13!="" && this.p1par4!=""){
      this.p1t3=false;
      this.p1p3=true;
      this.p1par3=this.erro13;
      this.p1p3e=true;
      this.p1t3b=false;
      this.p1t3a=false
      }
  }
  funcionCancelar3(){

    if(this.p1par3==""){
      this.p1t3=false;
      this.p1b3=true;
      this.p1t3b=false;
      this.p1t3a=false;
      }
    if(this.p1par3!=""){
      this.p1t3=false;
      this.p1p3e=true;
      this.p1t3b=false;
      this.p1t3a=false;
      }
  }

  funcionMas4(){
    this.p1b4=false;
    this.p1t4a=true;
    this.p1t4b=true;
    this.p1t4=true;
  }
  funcionAceptar4(){
    if(this.erro14!="" && this.p1par5==""){
    this.p1t4=false;
    this.p1p4=true;
    this.p1par4=this.erro14;
    this.p1p4e=true;
    this.p1b5=true;
    this.p1t4b=false;
    this.p1t4a=false
    }
    if(this.erro14!="" && this.p1par5!=""){
      this.p1t4=false;
      this.p1p4=true;
      this.p1par4=this.erro14;
      this.p1p4e=true;
      this.p1t4b=false;
      this.p1t4a=false
      }
  }
  funcionCancelar4(){

    if(this.p1par4==""){
      this.p1t4=false;
      this.p1b4=true;
      this.p1t4b=false;
      this.p1t4a=false;
      }
    if(this.p1par4!=""){
      this.p1t4=false;
      this.p1p4e=true;
      this.p1t4b=false;
      this.p1t4a=false;
      }
  }
  funcionMas5(){
    this.p1b5=false;
    this.p1t5a=true;
    this.p1t5b=true;
    this.p1t5=true;
  }
  funcionAceptar5(){
    if(this.erro15!="" && this.p1par6==""){
    this.p1t5=false;
    this.p1p5=true;
    this.p1par5=this.erro15;
    this.p1p5e=true;
    this.p1b6=true;
    this.p1t5b=false;
    this.p1t5a=false
    }
    if(this.erro15!="" && this.p1par6!=""){
      this.p1t5=false;
      this.p1p5=true;
      this.p1par5=this.erro15;
      this.p1p5e=true;
      this.p1t5b=false;
      this.p1t5a=false
      }
  }
  funcionCancelar5(){

    if(this.p1par5==""){
      this.p1t5=false;
      this.p1b5=true;
      this.p1t5b=false;
      this.p1t5a=false;
      }
    if(this.p1par5!=""){
      this.p1t5=false;
      this.p1p5e=true;
      this.p1t5b=false;
      this.p1t5a=false;
      }
  }

  funcionMas6(){
    this.p1b6=false;
    this.p1t6a=true;
    this.p1t6b=true;
    this.p1t6=true;
  }
  funcionAceptar6(){
    if(this.erro16!="" && this.p1par7==""){
    this.p1t6=false;
    this.p1p6=true;
    this.p1par6=this.erro16;
    this.p1p6e=true;
    this.p1b7=true;
    this.p1t6b=false;
    this.p1t6a=false
    }
    if(this.erro16!="" && this.p1par7!=""){
      this.p1t6=false;
      this.p1p6=true;
      this.p1par6=this.erro16;
      this.p1p6e=true;
      this.p1t6b=false;
      this.p1t6a=false
      }
  }
  funcionCancelar6(){

    if(this.p1par6==""){
      this.p1t6=false;
      this.p1b6=true;
      this.p1t6b=false;
      this.p1t6a=false;
      }
    if(this.p1par6!=""){
      this.p1t6=false;
      this.p1p6e=true;
      this.p1t6b=false;
      this.p1t6a=false;
      }
  }
  funcionMas7(){
    this.p1b7=false;
    this.p1t7a=true;
    this.p1t7b=true;
    this.p1t7=true;
  }
  funcionAceptar7(){
    if(this.erro17!="" && this.p1par8==""){
    this.p1t7=false;
    this.p1p7=true;
    this.p1par7=this.erro17;
    this.p1p7e=true;
    this.p1b8=true;
    this.p1t7b=false;
    this.p1t7a=false
    }
    if(this.erro17!="" && this.p1par8!=""){
      this.p1t7=false;
      this.p1p7=true;
      this.p1par7=this.erro17;
      this.p1p7e=true;
      this.p1t7b=false;
      this.p1t7a=false
      }
  }
  funcionCancelar7(){

    if(this.p1par7==""){
      this.p1t7=false;
      this.p1b7=true;
      this.p1t7b=false;
      this.p1t7a=false;
      }
    if(this.p1par7!=""){
      this.p1t7=false;
      this.p1p7e=true;
      this.p1t7b=false;
      this.p1t7a=false;
      }
  }
  funcionMas8(){
    this.p1b8=false;
    this.p1t8a=true;
    this.p1t8b=true;
    this.p1t8=true;
  }
  funcionAceptar8(){
    if(this.erro18!="" && this.p1par9==""){
    this.p1t8=false;
    this.p1p8=true;
    this.p1par8=this.erro18;
    this.p1p8e=true;
    this.p1b9=true;
    this.p1t8b=false;
    this.p1t8a=false
    }
    if(this.erro18!="" && this.p1par9!=""){
      this.p1t8=false;
      this.p1p8=true;
      this.p1par8=this.erro18;
      this.p1p8e=true;
      this.p1t8b=false;
      this.p1t8a=false
      }
  }
  funcionCancelar8(){

    if(this.p1par8==""){
      this.p1t8=false;
      this.p1b8=true;
      this.p1t8b=false;
      this.p1t8a=false;
      }
    if(this.p1par8!=""){
      this.p1t8=false;
      this.p1p8e=true;
      this.p1t8b=false;
      this.p1t8a=false;
      }
  }

  funcionMas9(){
    this.p1b9=false;
    this.p1t9a=true;
    this.p1t9b=true;
    this.p1t9=true;
  }
  funcionAceptar9(){
    if(this.erro19!="" && this.p1par10==""){
    this.p1t9=false;
    this.p1p9=true;
    this.p1par9=this.erro19;
    this.p1p9e=true;
    this.p1b10=true;
    this.p1t9b=false;
    this.p1t9a=false
    }
    if(this.erro19!="" && this.p1par10!=""){
      this.p1t9=false;
      this.p1p9=true;
      this.p1par9=this.erro19;
      this.p1p9e=true;
      this.p1t9b=false;
      this.p1t9a=false
      }
  }
  funcionCancelar9(){

    if(this.p1par9==""){
      this.p1t9=false;
      this.p1b9=true;
      this.p1t9b=false;
      this.p1t9a=false;
      }
    if(this.p1par9!=""){
      this.p1t9=false;
      this.p1p9e=true;
      this.p1t9b=false;
      this.p1t9a=false;
      }
  }

  funcionMas10(){
    this.p1b10=false;
    this.p1t10a=true;
    this.p1t10b=true;
    this.p1t10=true;
  }
  funcionAceptar10(){
    if(this.erro110!=""){
      this.p1t10=false;
      this.p1p10=true;
      this.p1par10=this.erro110;
      this.p1p10e=true;
      this.p1t10b=false;
      this.p1t10a=false
      }
  }
  funcionCancelar10(){

    if(this.p1par10==""){
      this.p1t10=false;
      this.p1b10=true;
      this.p1t10b=false;
      this.p1t10a=false;
      }
    if(this.p1par10!=""){
      this.p1t10=false;
      this.p1p10e=true;
      this.p1t10b=false;
      this.p1t10a=false;
      }
  }

  funcionMas21(){
    this.p2b1=false;
    this.p2t1a=true;
    this.p2t1b=true;
    this.p2t1=true;
  }
  funcionAceptar21(){
    if(this.erro21!="" && this.p2par2==""){
    this.p2t1=false;
    this.p2p1=true;
    this.p2par1=this.erro21;
    this.p2p1e=true;
    this.p2b2=true;
    this.p2t1b=false;
    this.p2t1a=false
    }
    if(this.erro21!="" && this.p2par2!=""){
      this.p2t1=false;
      this.p2p1=true;
      this.p2par1=this.erro21;
      this.p2p1e=true;
      this.p2t1b=false;
      this.p2t1a=false
      }
  }
  funcionCancelar21(){

    if(this.p2par1==""){
      this.p2t1=false;
      this.p2b1=true;
      this.p2t1b=false;
      this.p2t1a=false;
      }
    if(this.p2par1!=""){
      this.p2t1=false;
      this.p2p1e=true;
      this.p2t1b=false;
      this.p2t1a=false;
      }
  }

  funcionMas22(){
    this.p2b2=false;
    this.p2t2a=true;
    this.p2t2b=true;
    this.p2t2=true;
  }
  funcionAceptar22(){
    if(this.erro22!="" && this.p2par3==""){
    this.p2t2=false;
    this.p2p2=true;
    this.p2par2=this.erro22;
    this.p2p2e=true;
    this.p2b3=true;
    this.p2t2b=false;
    this.p2t2a=false
    }
    if(this.erro22!="" && this.p2par3!=""){
      this.p2t2=false;
      this.p2p2=true;
      this.p2par2=this.erro22;
      this.p2p2e=true;
      this.p2t2b=false;
      this.p2t2a=false
      }
  }
  funcionCancelar22(){

    if(this.p2par2==""){
      this.p2t2=false;
      this.p2b2=true;
      this.p2t2b=false;
      this.p2t2a=false;
      }
    if(this.p2par2!=""){
      this.p2t2=false;
      this.p2p2e=true;
      this.p2t2b=false;
      this.p2t2a=false;
      }
  }

  funcionMas23(){
    this.p2b3=false;
    this.p2t3a=true;
    this.p2t3b=true;
    this.p2t3=true;
  }
  funcionAceptar23(){
    if(this.erro23!="" && this.p2par4==""){
    this.p2t3=false;
    this.p2p3=true;
    this.p2par3=this.erro23;
    this.p2p3e=true;
    this.p2b4=true;
    this.p2t3b=false;
    this.p2t3a=false
    }
    if(this.erro23!="" && this.p2par4!=""){
      this.p2t3=false;
      this.p2p3=true;
      this.p2par3=this.erro23;
      this.p2p3e=true;
      this.p2t3b=false;
      this.p2t3a=false
      }
  }
  funcionCancelar23(){

    if(this.p2par3==""){
      this.p2t3=false;
      this.p2b3=true;
      this.p2t3b=false;
      this.p2t3a=false;
      }
    if(this.p2par3!=""){
      this.p2t3=false;
      this.p2p3e=true;
      this.p2t3b=false;
      this.p2t3a=false;
      }
  }

  funcionMas24(){
    this.p2b4=false;
    this.p2t4a=true;
    this.p2t4b=true;
    this.p2t4=true;
  }
  funcionAceptar24(){
    if(this.erro24!="" && this.p2par5==""){
    this.p2t4=false;
    this.p2p4=true;
    this.p2par4=this.erro24;
    this.p2p4e=true;
    this.p2b5=true;
    this.p2t4b=false;
    this.p2t4a=false
    }
    if(this.erro24!="" && this.p2par5!=""){
      this.p2t4=false;
      this.p2p4=true;
      this.p2par4=this.erro24;
      this.p2p4e=true;
      this.p2t4b=false;
      this.p2t4a=false
      }
  }
  funcionCancelar24(){

    if(this.p2par4==""){
      this.p2t4=false;
      this.p2b4=true;
      this.p2t4b=false;
      this.p2t4a=false;
      }
    if(this.p2par4!=""){
      this.p2t4=false;
      this.p2p4e=true;
      this.p2t4b=false;
      this.p2t4a=false;
      }
  }
  funcionMas25(){
    this.p2b5=false;
    this.p2t5a=true;
    this.p2t5b=true;
    this.p2t5=true;
  }
  funcionAceptar25(){
    if(this.erro25!="" && this.p2par6==""){
    this.p2t5=false;
    this.p2p5=true;
    this.p2par5=this.erro25;
    this.p2p5e=true;
    this.p2b6=true;
    this.p2t5b=false;
    this.p2t5a=false
    }
    if(this.erro25!="" && this.p2par6!=""){
      this.p2t5=false;
      this.p2p5=true;
      this.p2par5=this.erro25;
      this.p2p5e=true;
      this.p2t5b=false;
      this.p2t5a=false
      }
  }
  funcionCancelar25(){

    if(this.p2par5==""){
      this.p2t5=false;
      this.p2b5=true;
      this.p2t5b=false;
      this.p2t5a=false;
      }
    if(this.p2par5!=""){
      this.p2t5=false;
      this.p2p5e=true;
      this.p2t5b=false;
      this.p2t5a=false;
      }
  }

  funcionMas26(){
    this.p2b6=false;
    this.p2t6a=true;
    this.p2t6b=true;
    this.p2t6=true;
  }
  funcionAceptar26(){
    if(this.erro26!="" && this.p2par7==""){
    this.p2t6=false;
    this.p2p6=true;
    this.p2par6=this.erro26;
    this.p2p6e=true;
    this.p2b7=true;
    this.p2t6b=false;
    this.p2t6a=false
    }
    if(this.erro26!="" && this.p2par7!=""){
      this.p2t6=false;
      this.p2p6=true;
      this.p2par6=this.erro26;
      this.p2p6e=true;
      this.p2t6b=false;
      this.p2t6a=false
      }
  }
  funcionCancelar26(){

    if(this.p2par6==""){
      this.p2t6=false;
      this.p2b6=true;
      this.p2t6b=false;
      this.p2t6a=false;
      }
    if(this.p2par6!=""){
      this.p2t6=false;
      this.p2p6e=true;
      this.p2t6b=false;
      this.p2t6a=false;
      }
  }
  funcionMas27(){
    this.p2b7=false;
    this.p2t7a=true;
    this.p2t7b=true;
    this.p2t7=true;
  }
  funcionAceptar27(){
    if(this.erro27!="" && this.p2par8==""){
    this.p2t7=false;
    this.p2p7=true;
    this.p2par7=this.erro27;
    this.p2p7e=true;
    this.p2b8=true;
    this.p2t7b=false;
    this.p2t7a=false
    }
    if(this.erro27!="" && this.p2par8!=""){
      this.p2t7=false;
      this.p2p7=true;
      this.p2par7=this.erro27;
      this.p2p7e=true;
      this.p2t7b=false;
      this.p2t7a=false
      }
  }
  funcionCancelar27(){

    if(this.p2par7==""){
      this.p2t7=false;
      this.p2b7=true;
      this.p2t7b=false;
      this.p2t7a=false;
      }
    if(this.p2par7!=""){
      this.p2t7=false;
      this.p2p7e=true;
      this.p2t7b=false;
      this.p2t7a=false;
      }
  }
  funcionMas28(){
    this.p2b8=false;
    this.p2t8a=true;
    this.p2t8b=true;
    this.p2t8=true;
  }
  funcionAceptar28(){
    if(this.erro28!="" && this.p2par9==""){
    this.p2t8=false;
    this.p2p8=true;
    this.p2par8=this.erro28;
    this.p2p8e=true;
    this.p2b9=true;
    this.p2t8b=false;
    this.p2t8a=false
    }
    if(this.erro28!="" && this.p2par9!=""){
      this.p2t8=false;
      this.p2p8=true;
      this.p2par8=this.erro28;
      this.p2p8e=true;
      this.p2t8b=false;
      this.p2t8a=false
      }
  }
  funcionCancelar28(){

    if(this.p2par8==""){
      this.p2t8=false;
      this.p2b8=true;
      this.p2t8b=false;
      this.p2t8a=false;
      }
    if(this.p2par8!=""){
      this.p2t8=false;
      this.p2p8e=true;
      this.p2t8b=false;
      this.p2t8a=false;
      }
  }

  funcionMas29(){
    this.p2b9=false;
    this.p2t9a=true;
    this.p2t9b=true;
    this.p2t9=true;
  }
  funcionAceptar29(){
    if(this.erro29!="" && this.p2par10==""){
    this.p2t9=false;
    this.p2p9=true;
    this.p2par9=this.erro29;
    this.p2p9e=true;
    this.p2b10=true;
    this.p2t9b=false;
    this.p2t9a=false
    }
    if(this.erro29!="" && this.p2par10!=""){
      this.p2t9=false;
      this.p2p9=true;
      this.p2par9=this.erro29;
      this.p2p9e=true;
      this.p2t9b=false;
      this.p2t9a=false
      }
  }
  funcionCancelar29(){

    if(this.p2par9==""){
      this.p2t9=false;
      this.p2b9=true;
      this.p2t9b=false;
      this.p2t9a=false;
      }
    if(this.p2par9!=""){
      this.p2t9=false;
      this.p2p9e=true;
      this.p2t9b=false;
      this.p2t9a=false;
      }
  }
  funcionMas210(){
    this.p2b10=false;
    this.p2t10a=true;
    this.p2t10b=true;
    this.p2t10=true;
  }
  funcionAceptar210(){
    if(this.erro210!=""){
      this.p2t10=false;
      this.p2p10=true;
      this.p2par10=this.erro210;
      this.p2p10e=true;
      this.p2t10b=false;
      this.p2t10a=false
      }
  }
  funcionCancelar210(){

    if(this.p2par10==""){
      this.p2t10=false;
      this.p2b10=true;
      this.p2t10b=false;
      this.p2t10a=false;
      }
    if(this.p2par10!=""){
      this.p2t10=false;
      this.p2p10e=true;
      this.p2t10b=false;
      this.p2t10a=false;
      }
  }

  funcionMas31(){
    this.p3b1=false;
    this.p3t1a=true;
    this.p3t1b=true;
    this.p3t1=true;
  }
  funcionAceptar31(){
    if(this.erro31!="" && this.p3par2==""){
    this.p3t1=false;
    this.p3p1=true;
    this.p3par1=this.erro31;
    this.p3p1e=true;
    this.p3b2=true;
    this.p3t1b=false;
    this.p3t1a=false
    }
    if(this.erro31!="" && this.p3par2!=""){
      this.p3t1=false;
      this.p3p1=true;
      this.p3par1=this.erro31;
      this.p3p1e=true;
      this.p3t1b=false;
      this.p3t1a=false
      }
  }
  funcionCancelar31(){

    if(this.p3par1==""){
      this.p3t1=false;
      this.p3b1=true;
      this.p3t1b=false;
      this.p3t1a=false;
      }
    if(this.p3par1!=""){
      this.p3t1=false;
      this.p3p1e=true;
      this.p3t1b=false;
      this.p3t1a=false;
      }
  }

  funcionMas32(){
    this.p3b2=false;
    this.p3t2a=true;
    this.p3t2b=true;
    this.p3t2=true;
  }
  funcionAceptar32(){
    if(this.erro32!="" && this.p3par3==""){
    this.p3t2=false;
    this.p3p2=true;
    this.p3par2=this.erro32;
    this.p3p2e=true;
    this.p3b3=true;
    this.p3t2b=false;
    this.p3t2a=false
    }
    if(this.erro32!="" && this.p3par3!=""){
      this.p3t2=false;
      this.p3p2=true;
      this.p3par2=this.erro32;
      this.p3p2e=true;
      this.p3t2b=false;
      this.p3t2a=false
      }
  }
  funcionCancelar32(){

    if(this.p3par2==""){
      this.p3t2=false;
      this.p3b2=true;
      this.p3t2b=false;
      this.p3t2a=false;
      }
    if(this.p3par2!=""){
      this.p3t2=false;
      this.p3p2e=true;
      this.p3t2b=false;
      this.p3t2a=false;
      }
  }

  funcionMas33(){
    this.p3b3=false;
    this.p3t3a=true;
    this.p3t3b=true;
    this.p3t3=true;
  }
  funcionAceptar33(){
    if(this.erro33!="" && this.p3par4==""){
    this.p3t3=false;
    this.p3p3=true;
    this.p3par3=this.erro33;
    this.p3p3e=true;
    this.p3b4=true;
    this.p3t3b=false;
    this.p3t3a=false
    }
    if(this.erro33!="" && this.p3par4!=""){
      this.p3t3=false;
      this.p3p3=true;
      this.p3par3=this.erro33;
      this.p3p3e=true;
      this.p3t3b=false;
      this.p3t3a=false
      }
  }
  funcionCancelar33(){

    if(this.p3par3==""){
      this.p3t3=false;
      this.p3b3=true;
      this.p3t3b=false;
      this.p3t3a=false;
      }
    if(this.p3par3!=""){
      this.p3t3=false;
      this.p3p3e=true;
      this.p3t3b=false;
      this.p3t3a=false;
      }
  }

  funcionMas34(){
    this.p3b4=false;
    this.p3t4a=true;
    this.p3t4b=true;
    this.p3t4=true;
  }
  funcionAceptar34(){
    if(this.erro34!="" && this.p3par5==""){
    this.p3t4=false;
    this.p3p4=true;
    this.p3par4=this.erro34;
    this.p3p4e=true;
    this.p3b5=true;
    this.p3t4b=false;
    this.p3t4a=false
    }
    if(this.erro34!="" && this.p3par5!=""){
      this.p3t4=false;
      this.p3p4=true;
      this.p3par4=this.erro34;
      this.p3p4e=true;
      this.p3t4b=false;
      this.p3t4a=false
      }
  }
  funcionCancelar34(){

    if(this.p3par4==""){
      this.p3t4=false;
      this.p3b4=true;
      this.p3t4b=false;
      this.p3t4a=false;
      }
    if(this.p3par4!=""){
      this.p3t4=false;
      this.p3p4e=true;
      this.p3t4b=false;
      this.p3t4a=false;
      }
  }

  funcionMas35(){
    this.p3b5=false;
    this.p3t5a=true;
    this.p3t5b=true;
    this.p3t5=true;
  }
  funcionAceptar35(){
    if(this.erro35!="" && this.p3par6==""){
    this.p3t5=false;
    this.p3p5=true;
    this.p3par5=this.erro35;
    this.p3p5e=true;
    this.p3b6=true;
    this.p3t5b=false;
    this.p3t5a=false
    }
    if(this.erro35!="" && this.p3par6!=""){
      this.p3t5=false;
      this.p3p5=true;
      this.p3par5=this.erro35;
      this.p3p5e=true;
      this.p3t5b=false;
      this.p3t5a=false
      }
  }
  funcionCancelar35(){

    if(this.p3par5==""){
      this.p3t5=false;
      this.p3b5=true;
      this.p3t5b=false;
      this.p3t5a=false;
      }
    if(this.p3par5!=""){
      this.p3t5=false;
      this.p3p5e=true;
      this.p3t5b=false;
      this.p3t5a=false;
      }
  }

  funcionMas36(){
    this.p3b6=false;
    this.p3t6a=true;
    this.p3t6b=true;
    this.p3t6=true;
  }
  funcionAceptar36(){
    if(this.erro36!="" && this.p3par7==""){
    this.p3t6=false;
    this.p3p6=true;
    this.p3par6=this.erro36;
    this.p3p6e=true;
    this.p3b7=true;
    this.p3t6b=false;
    this.p3t6a=false
    }
    if(this.erro36!="" && this.p3par7!=""){
      this.p3t6=false;
      this.p3p6=true;
      this.p3par6=this.erro36;
      this.p3p6e=true;
      this.p3t6b=false;
      this.p3t6a=false
      }
  }
  funcionCancelar36(){

    if(this.p3par6==""){
      this.p3t6=false;
      this.p3b6=true;
      this.p3t6b=false;
      this.p3t6a=false;
      }
    if(this.p3par6!=""){
      this.p3t6=false;
      this.p3p6e=true;
      this.p3t6b=false;
      this.p3t6a=false;
      }
  }
  funcionMas37(){
    this.p3b7=false;
    this.p3t7a=true;
    this.p3t7b=true;
    this.p3t7=true;
  }
  funcionAceptar37(){
    if(this.erro37!="" && this.p3par8==""){
    this.p3t7=false;
    this.p3p7=true;
    this.p3par7=this.erro37;
    this.p3p7e=true;
    this.p3b8=true;
    this.p3t7b=false;
    this.p3t7a=false
    }
    if(this.erro37!="" && this.p3par8!=""){
      this.p3t7=false;
      this.p3p7=true;
      this.p3par7=this.erro37;
      this.p3p7e=true;
      this.p3t7b=false;
      this.p3t7a=false
      }
  }
  funcionCancelar37(){

    if(this.p3par7==""){
      this.p3t7=false;
      this.p3b7=true;
      this.p3t7b=false;
      this.p3t7a=false;
      }
    if(this.p3par7!=""){
      this.p3t7=false;
      this.p3p7e=true;
      this.p3t7b=false;
      this.p3t7a=false;
      }
  }
  funcionMas38(){
    this.p3b8=false;
    this.p3t8a=true;
    this.p3t8b=true;
    this.p3t8=true;
  }
  funcionAceptar38(){
    if(this.erro38!="" && this.p3par9==""){
    this.p3t8=false;
    this.p3p8=true;
    this.p3par8=this.erro38;
    this.p3p8e=true;
    this.p3b9=true;
    this.p3t8b=false;
    this.p3t8a=false
    }
    if(this.erro38!="" && this.p3par9!=""){
      this.p3t8=false;
      this.p3p8=true;
      this.p3par8=this.erro38;
      this.p3p8e=true;
      this.p3t8b=false;
      this.p3t8a=false
      }
  }
  funcionCancelar38(){

    if(this.p3par8==""){
      this.p3t8=false;
      this.p3b8=true;
      this.p3t8b=false;
      this.p3t8a=false;
      }
    if(this.p3par8!=""){
      this.p3t8=false;
      this.p3p8e=true;
      this.p3t8b=false;
      this.p3t8a=false;
      }
  }

  funcionMas39(){
    this.p3b9=false;
    this.p3t9a=true;
    this.p3t9b=true;
    this.p3t9=true;
  }
  funcionAceptar39(){
    if(this.erro39!="" && this.p3par10==""){
    this.p3t9=false;
    this.p3p9=true;
    this.p3par9=this.erro39;
    this.p3p9e=true;
    this.p3b10=true;
    this.p3t9b=false;
    this.p3t9a=false
    }
    if(this.erro39!="" && this.p3par10!=""){
      this.p3t9=false;
      this.p3p9=true;
      this.p3par9=this.erro39;
      this.p3p9e=true;
      this.p3t9b=false;
      this.p3t9a=false
      }
  }
  funcionCancelar39(){

    if(this.p3par9==""){
      this.p3t9=false;
      this.p3b9=true;
      this.p3t9b=false;
      this.p3t9a=false;
      }
    if(this.p3par9!=""){
      this.p3t9=false;
      this.p3p9e=true;
      this.p3t9b=false;
      this.p3t9a=false;
      }
  }

  funcionMas310(){
    this.p3b10=false;
    this.p3t10a=true;
    this.p3t10b=true;
    this.p3t10=true;
  }
  funcionAceptar310(){
    if(this.erro310!=""){
      this.p3t10=false;
      this.p3p10=true;
      this.p3par10=this.erro310;
      this.p3p10e=true;
      this.p3t10b=false;
      this.p3t10a=false
      }
  }
  funcionCancelar310(){

    if(this.p3par10==""){
      this.p3t10=false;
      this.p3b10=true;
      this.p3t10b=false;
      this.p3t10a=false;
      }
    if(this.p3par10!=""){
      this.p3t10=false;
      this.p3p10e=true;
      this.p3t10b=false;
      this.p3t10a=false;
      }
  }

  funcionMas41(){
    this.p4b1=false;
    this.p4t1a=true;
    this.p4t1b=true;
    this.p4t1=true;
  }
  funcionAceptar41(){
    if(this.erro41!="" && this.p4par2==""){
    this.p4t1=false;
    this.p4p1=true;
    this.p4par1=this.erro41;
    this.p4p1e=true;
    this.p4b2=true;
    this.p4t1b=false;
    this.p4t1a=false
    }
    if(this.erro41!="" && this.p4par2!=""){
      this.p4t1=false;
      this.p4p1=true;
      this.p4par1=this.erro41;
      this.p4p1e=true;
      this.p4t1b=false;
      this.p4t1a=false
      }
  }
  funcionCancelar41(){

    if(this.p4par1==""){
      this.p4t1=false;
      this.p4b1=true;
      this.p4t1b=false;
      this.p4t1a=false;
      }
    if(this.p4par1!=""){
      this.p4t1=false;
      this.p4p1e=true;
      this.p4t1b=false;
      this.p4t1a=false;
      }
  }

  funcionMas42(){
    this.p4b2=false;
    this.p4t2a=true;
    this.p4t2b=true;
    this.p4t2=true;
  }
  funcionAceptar42(){
    if(this.erro42!="" && this.p4par3==""){
    this.p4t2=false;
    this.p4p2=true;
    this.p4par2=this.erro42;
    this.p4p2e=true;
    this.p4b3=true;
    this.p4t2b=false;
    this.p4t2a=false
    }
    if(this.erro42!="" && this.p4par3!=""){
      this.p4t2=false;
      this.p4p2=true;
      this.p4par2=this.erro42;
      this.p4p2e=true;
      this.p4t2b=false;
      this.p4t2a=false
      }
  }
  funcionCancelar42(){

    if(this.p4par2==""){
      this.p4t2=false;
      this.p4b2=true;
      this.p4t2b=false;
      this.p4t2a=false;
      }
    if(this.p4par2!=""){
      this.p4t2=false;
      this.p4p2e=true;
      this.p4t2b=false;
      this.p4t2a=false;
      }
  }


  funcionMas43(){
    this.p4b3=false;
    this.p4t3a=true;
    this.p4t3b=true;
    this.p4t3=true;
  }
  funcionAceptar43(){
    if(this.erro43!="" && this.p4par4==""){
    this.p4t3=false;
    this.p4p3=true;
    this.p4par3=this.erro43;
    this.p4p3e=true;
    this.p4b4=true;
    this.p4t3b=false;
    this.p4t3a=false
    }
    if(this.erro43!="" && this.p4par4!=""){
      this.p4t3=false;
      this.p4p3=true;
      this.p4par3=this.erro43;
      this.p4p3e=true;
      this.p4t3b=false;
      this.p4t3a=false
      }
  }
  funcionCancelar43(){

    if(this.p4par3==""){
      this.p4t3=false;
      this.p4b3=true;
      this.p4t3b=false;
      this.p4t3a=false;
      }
    if(this.p4par3!=""){
      this.p4t3=false;
      this.p4p3e=true;
      this.p4t3b=false;
      this.p4t3a=false;
      }
  }

  funcionMas44(){
    this.p4b4=false;
    this.p4t4a=true;
    this.p4t4b=true;
    this.p4t4=true;
  }
  funcionAceptar44(){
    if(this.erro44!="" && this.p4par5==""){
    this.p4t4=false;
    this.p4p4=true;
    this.p4par4=this.erro44;
    this.p4p4e=true;
    this.p4b5=true;
    this.p4t4b=false;
    this.p4t4a=false
    }
    if(this.erro44!="" && this.p4par5!=""){
      this.p4t4=false;
      this.p4p4=true;
      this.p4par4=this.erro44;
      this.p4p4e=true;
      this.p4t4b=false;
      this.p4t4a=false
      }
  }
  funcionCancelar44(){

    if(this.p4par4==""){
      this.p4t4=false;
      this.p4b4=true;
      this.p4t4b=false;
      this.p4t4a=false;
      }
    if(this.p4par4!=""){
      this.p4t4=false;
      this.p4p4e=true;
      this.p4t4b=false;
      this.p4t4a=false;
      }
  }

 
  funcionMas45(){
    this.p4b5=false;
    this.p4t5a=true;
    this.p4t5b=true;
    this.p4t5=true;
  }
  funcionAceptar45(){
    if(this.erro45!="" && this.p4par6==""){
    this.p4t5=false;
    this.p4p5=true;
    this.p4par5=this.erro45;
    this.p4p5e=true;
    this.p4b6=true;
    this.p4t5b=false;
    this.p4t5a=false
    }
    if(this.erro45!="" && this.p4par6!=""){
      this.p4t5=false;
      this.p4p5=true;
      this.p4par5=this.erro45;
      this.p4p5e=true;
      this.p4t5b=false;
      this.p4t5a=false
      }
  }
  funcionCancelar45(){

    if(this.p4par5==""){
      this.p4t5=false;
      this.p4b5=true;
      this.p4t5b=false;
      this.p4t5a=false;
      }
    if(this.p4par5!=""){
      this.p4t5=false;
      this.p4p5e=true;
      this.p4t5b=false;
      this.p4t5a=false;
      }
  }

  funcionMas46(){
    this.p4b6=false;
    this.p4t6a=true;
    this.p4t6b=true;
    this.p4t6=true;
  }
  funcionAceptar46(){
    if(this.erro46!="" && this.p4par7==""){
    this.p4t6=false;
    this.p4p6=true;
    this.p4par6=this.erro46;
    this.p4p6e=true;
    this.p4b7=true;
    this.p4t6b=false;
    this.p4t6a=false
    }
    if(this.erro46!="" && this.p4par7!=""){
      this.p4t6=false;
      this.p4p6=true;
      this.p4par6=this.erro46;
      this.p4p6e=true;
      this.p4t6b=false;
      this.p4t6a=false
      }
  }
  funcionCancelar46(){

    if(this.p4par6==""){
      this.p4t6=false;
      this.p4b6=true;
      this.p4t6b=false;
      this.p4t6a=false;
      }
    if(this.p4par6!=""){
      this.p4t6=false;
      this.p4p6e=true;
      this.p4t6b=false;
      this.p4t6a=false;
      }
  }
  funcionMas47(){
    this.p4b7=false;
    this.p4t7a=true;
    this.p4t7b=true;
    this.p4t7=true;
  }
  funcionAceptar47(){
    if(this.erro47!="" && this.p4par8==""){
    this.p4t7=false;
    this.p4p7=true;
    this.p4par7=this.erro47;
    this.p4p7e=true;
    this.p4b8=true;
    this.p4t7b=false;
    this.p4t7a=false
    }
    if(this.erro47!="" && this.p4par8!=""){
      this.p4t7=false;
      this.p4p7=true;
      this.p4par7=this.erro47;
      this.p4p7e=true;
      this.p4t7b=false;
      this.p4t7a=false
      }
  }
  funcionCancelar47(){

    if(this.p4par7==""){
      this.p4t7=false;
      this.p4b7=true;
      this.p4t7b=false;
      this.p4t7a=false;
      }
    if(this.p4par7!=""){
      this.p4t7=false;
      this.p4p7e=true;
      this.p4t7b=false;
      this.p4t7a=false;
      }
  }
  funcionMas48(){
    this.p4b8=false;
    this.p4t8a=true;
    this.p4t8b=true;
    this.p4t8=true;
  }
  funcionAceptar48(){
    if(this.erro48!="" && this.p4par9==""){
    this.p4t8=false;
    this.p4p8=true;
    this.p4par8=this.erro48;
    this.p4p8e=true;
    this.p4b9=true;
    this.p4t8b=false;
    this.p4t8a=false
    }
    if(this.erro48!="" && this.p4par9!=""){
      this.p4t8=false;
      this.p4p8=true;
      this.p4par8=this.erro48;
      this.p4p8e=true;
      this.p4t8b=false;
      this.p4t8a=false
      }
  }
  funcionCancelar48(){

    if(this.p4par8==""){
      this.p4t8=false;
      this.p4b8=true;
      this.p4t8b=false;
      this.p4t8a=false;
      }
    if(this.p4par8!=""){
      this.p4t8=false;
      this.p4p8e=true;
      this.p4t8b=false;
      this.p4t8a=false;
      }
  }

  funcionMas49(){
    this.p4b9=false;
    this.p4t9a=true;
    this.p4t9b=true;
    this.p4t9=true;
  }
  funcionAceptar49(){
    if(this.erro49!="" && this.p4par10==""){
    this.p4t9=false;
    this.p4p9=true;
    this.p4par9=this.erro49;
    this.p4p9e=true;
    this.p4b10=true;
    this.p4t9b=false;
    this.p4t9a=false
    }
    if(this.erro49!="" && this.p4par10!=""){
      this.p4t9=false;
      this.p4p9=true;
      this.p4par9=this.erro49;
      this.p4p9e=true;
      this.p4t9b=false;
      this.p4t9a=false
      }
  }
  funcionCancelar49(){

    if(this.p4par9==""){
      this.p4t9=false;
      this.p4b9=true;
      this.p4t9b=false;
      this.p4t9a=false;
      }
    if(this.p4par9!=""){
      this.p4t9=false;
      this.p4p9e=true;
      this.p4t9b=false;
      this.p4t9a=false;
      }
  }


  funcionMas410(){
    this.p4b10=false;
    this.p4t10a=true;
    this.p4t10b=true;
    this.p4t10=true;
  }
  funcionAceptar410(){
    if(this.erro410!=""){
      this.p4t10=false;
      this.p4p10=true;
      this.p4par10=this.erro410;
      this.p4p10e=true;
      this.p4t10b=false;
      this.p4t10a=false
      }
  }
  funcionCancelar410(){

    if(this.p4par10==""){
      this.p4t10=false;
      this.p4b10=true;
      this.p4t10b=false;
      this.p4t10a=false;
      }
    if(this.p4par10!=""){
      this.p4t10=false;
      this.p4p10e=true;
      this.p4t10b=false;
      this.p4t10a=false;
      }
  }
  funcionMas51(){
    this.p5b1=false;
    this.p5t1a=true;
    this.p5t1b=true;
    this.p5t1=true;
  }
  funcionAceptar51(){
    if(this.erro51!="" && this.p5par2==""){
    this.p5t1=false;
    this.p5p1=true;
    this.p5par1=this.erro51;
    this.p5p1e=true;
    this.p5b2=true;
    if(this.p5b2i==false&&this.p5b2im==false){this.p5b2im=true;}
    this.p5t1b=false;
    this.p5t1a=false
    }
    if(this.erro51!="" && this.p5par2!=""){
      this.p5t1=false;
      this.p5p1=true;
      this.p5par1=this.erro51;
      this.p5p1e=true;
      this.p5t1b=false;
      this.p5t1a=false
      }
  }
  funcionAceptari51(){
    if(this.p5b2i==false&&this.p5b2im==false){this.p5b2im=true;this.p5b2=true;}
    
   
  }
  funcionCancelar51(){

    if(this.p5par1==""){
      this.p5t1=false;
      this.p5b1=true;
      this.p5t1b=false;
      this.p5t1a=false;
      }
    if(this.p5par1!=""){
      this.p5t1=false;
      this.p5p1e=true;
      this.p5t1b=false;
      this.p5t1a=false;
      }
  }

  funcionMas52(){
    this.p5b2=false;
    this.p5t2a=true;
    this.p5t2b=true;
    this.p5t2=true;
  }
  funcionAceptar52(){
    if(this.erro52!="" && this.p5par3==""){
    this.p5t2=false;
    this.p5p2=true;
    this.p5par2=this.erro52;
    this.p5p2e=true;
    this.p5b3=true;
    if(this.p5b3i==false&&this.p5b3im==false){this.p5b3im=true;}
    this.p5t2b=false;
    this.p5t2a=false
    }
    if(this.erro52!="" && this.p5par3!=""){
      this.p5t2=false;
      this.p5p2=true;
      this.p5par2=this.erro52;
      this.p5p2e=true;
      this.p5t2b=false;
      this.p5t2a=false
      }
  }
  funcionAceptari52(){
    if(this.p5b3i==false&&this.p5b3im==false){this.p5b3im=true;this.p5b3=true;}
   
  }
  funcionCancelar52(){

    if(this.p5par2==""){
      this.p5t2=false;
      this.p5b2=true;
      this.p5t2b=false;
      this.p5t2a=false;
      }
    if(this.p5par2!=""){
      this.p5t2=false;
      this.p5p2e=true;
      this.p5t2b=false;
      this.p5t2a=false;
      }
  }


  funcionMas53(){
    this.p5b3=false;
    this.p5t3a=true;
    this.p5t3b=true;
    this.p5t3=true;
  }
  funcionAceptar53(){
    if(this.erro53!="" && this.p5par4==""){
    this.p5t3=false;
    this.p5p3=true;
    this.p5par3=this.erro53;
    this.p5p3e=true;
    this.p5b4=true;
    if(this.p5b4i==false&&this.p5b4im==false){this.p5b4im=true;}
    this.p5t3b=false;
    this.p5t3a=false
    }
    if(this.erro53!="" && this.p5par4!=""){
      this.p5t3=false;
      this.p5p3=true;
      this.p5par3=this.erro53;
      this.p5p3e=true;
      this.p5t3b=false;
      this.p5t3a=false
      }
  }
  funcionAceptari53(){
    if(this.p5b4i==false&&this.p5b4im==false){this.p5b4im=true;this.p5b4=true;}
    

  }
  funcionCancelar53(){

    if(this.p5par3==""){
      this.p5t3=false;
      this.p5b3=true;
      this.p5t3b=false;
      this.p5t3a=false;
      }
    if(this.p5par3!=""){
      this.p5t3=false;
      this.p5p3e=true;
      this.p5t3b=false;
      this.p5t3a=false;
      }
  }

  funcionMas54(){
    this.p5b4=false;
    this.p5t4a=true;
    this.p5t4b=true;
    this.p5t4=true;
  }
  funcionAceptar54(){
    if(this.erro54!="" && this.p5par5==""){
    this.p5t4=false;
    this.p5p4=true;
    this.p5par4=this.erro54;
    this.p5p4e=true;
    this.p5b5=true;
    if(this.p5b5i==false&&this.p5b5im==false){this.p5b5im=true;}
    this.p5t4b=false;
    this.p5t4a=false
    }
    if(this.erro54!="" && this.p5par5!=""){
      this.p5t4=false;
      this.p5p4=true;
      this.p5par4=this.erro54;
      this.p5p4e=true;
      this.p5t4b=false;
      this.p5t4a=false
      }
  }
  funcionAceptari54(){
    if(this.p5b5i==false&&this.p5b5im==false){this.p5b5im=true;this.p5b5=true;}
    
    
  }
  funcionCancelar54(){

    if(this.p5par4==""){
      this.p5t4=false;
      this.p5b4=true;
      this.p5t4b=false;
      this.p5t4a=false;
      }
    if(this.p5par4!=""){
      this.p5t4=false;
      this.p5p4e=true;
      this.p5t4b=false;
      this.p5t4a=false;
      }
  }

 
  funcionMas55(){
    this.p5b5=false;
    this.p5t5a=true;
    this.p5t5b=true;
    this.p5t5=true;
  }
  funcionAceptar55(){
    if(this.erro55!="" && this.p5par6==""){
    this.p5t5=false;
    this.p5p5=true;
    this.p5par5=this.erro55;
    this.p5p5e=true;
    this.p5b6=true;
    if(this.p5b6i==false&&this.p5b6im==false){this.p5b6im=true;}
    this.p5t5b=false;
    this.p5t5a=false
    }
    if(this.erro55!="" && this.p5par6!=""){
      this.p5t5=false;
      this.p5p5=true;
      this.p5par5=this.erro55;
      this.p5p5e=true;
      this.p5t5b=false;
      this.p5t5a=false
      }
  }
  funcionAceptari55(){
    if(this.p5b6i==false&&this.p5b6im==false){this.p5b6im=true;this.p5b6=true;}
    
    
  }
  funcionCancelar55(){

    if(this.p5par5==""){
      this.p5t5=false;
      this.p5b5=true;
      this.p5t5b=false;
      this.p5t5a=false;
      }
    if(this.p5par5!=""){
      this.p5t5=false;
      this.p5p5e=true;
      this.p5t5b=false;
      this.p5t5a=false;
      }
  }

  funcionMas56(){
    this.p5b6=false;
    this.p5t6a=true;
    this.p5t6b=true;
    this.p5t6=true;
  }
  funcionAceptar56(){
    if(this.erro56!="" && this.p5par7==""){
    this.p5t6=false;
    this.p5p6=true;
    this.p5par6=this.erro56;
    this.p5p6e=true;
    this.p5b7=true;
    if(this.p5b7i==false&&this.p5b7im==false){this.p5b7im=true;}
    this.p5t6b=false;
    this.p5t6a=false
    }
    if(this.erro56!="" && this.p5par7!=""){
      this.p5t6=false;
      this.p5p6=true;
      this.p5par6=this.erro56;
      this.p5p6e=true;
      this.p5t6b=false;
      this.p5t6a=false
      }
  }
  funcionAceptari56(){
    if(this.p5b7i==false&&this.p5b7im==false){this.p5b7im=true;this.p5b7=true;}
    
  }
  funcionCancelar56(){

    if(this.p5par6==""){
      this.p5t6=false;
      this.p5b6=true;
      this.p5t6b=false;
      this.p5t6a=false;
      }
    if(this.p5par6!=""){
      this.p5t6=false;
      this.p5p6e=true;
      this.p5t6b=false;
      this.p5t6a=false;
      }
  }
  funcionMas57(){
    this.p5b7=false;
    this.p5t7a=true;
    this.p5t7b=true;
    this.p5t7=true;
  }
  funcionAceptar57(){
    if(this.erro57!="" && this.p5par8==""){
    this.p5t7=false;
    this.p5p7=true;
    this.p5par7=this.erro57;
    this.p5p7e=true;
    this.p5b8=true;
    if(this.p5b8i==false&&this.p5b8im==false){this.p5b8im=true;}
    this.p5t7b=false;
    this.p5t7a=false
    }
    if(this.erro57!="" && this.p5par8!=""){
      this.p5t7=false;
      this.p5p7=true;
      this.p5par7=this.erro57;
      this.p5p7e=true;
      this.p5t7b=false;
      this.p5t7a=false
      }
  }
  funcionAceptari57(){
    if(this.p5b8i==false&&this.p5b8im==false){this.p5b8im=true;this.p5b8=true;}
    
   
  }
  funcionCancelar57(){

    if(this.p5par7==""){
      this.p5t7=false;
      this.p5b7=true;
      this.p5t7b=false;
      this.p5t7a=false;
      }
    if(this.p5par7!=""){
      this.p5t7=false;
      this.p5p7e=true;
      this.p5t7b=false;
      this.p5t7a=false;
      }
  }
  funcionMas58(){
    this.p5b8=false;
    this.p5t8a=true;
    this.p5t8b=true;
    this.p5t8=true;
  }
  funcionAceptar58(){
    if(this.erro58!="" && this.p5par9==""){
    this.p5t8=false;
    this.p5p8=true;
    this.p5par8=this.erro58;
    this.p5p8e=true;
    this.p5b9=true;
    if(this.p5b9i==false&&this.p5b9im==false){this.p5b9im=true;}
    this.p5t8b=false;
    this.p5t8a=false
    }
    if(this.erro58!="" && this.p5par9!=""){
      this.p5t8=false;
      this.p5p8=true;
      this.p5par8=this.erro58;
      this.p5p8e=true;
      this.p5t8b=false;
      this.p5t8a=false
      }
  }
  funcionAceptari58(){
    if(this.p5b9i==false&&this.p5b9im==false){this.p5b9im=true;this.p5b9=true;}
   
  }
  funcionCancelar58(){

    if(this.p5par8==""){
      this.p5t8=false;
      this.p5b8=true;
      this.p5t8b=false;
      this.p5t8a=false;
      }
    if(this.p5par8!=""){
      this.p5t8=false;
      this.p5p8e=true;
      this.p5t8b=false;
      this.p5t8a=false;
      }
  }

  funcionMas59(){
    this.p5b9=false;
    this.p5t9a=true;
    this.p5t9b=true;
    this.p5t9=true;
  }
  funcionAceptar59(){
    if(this.erro59!="" && this.p5par10==""){
    this.p5t9=false;
    this.p5p9=true;
    this.p5par9=this.erro59;
    this.p5p9e=true;
    this.p5b10=true;
    if(this.p5b10i==false&&this.p5b10im==false){this.p5b10im=true;}
    this.p5t9b=false;
    this.p5t9a=false
    }
    if(this.erro59!="" && this.p5par10!=""){
      this.p5t9=false;
      this.p5p9=true;
      this.p5par9=this.erro59;
      this.p5p9e=true;
      this.p5t9b=false;
      this.p5t9a=false
      }
  }
  funcionAceptari59(){
    if(this.p5b10i==false&&this.p5b10im==false){this.p5b10im=true;this.p5b10=true;}
   
  }
  funcionCancelar59(){

    if(this.p5par9==""){
      this.p5t9=false;
      this.p5b9=true;
      this.p5t9b=false;
      this.p5t9a=false;
      }
    if(this.p5par9!=""){
      this.p5t9=false;
      this.p5p9e=true;
      this.p5t9b=false;
      this.p5t9a=false;
      }
  }
  funcionMas510(){
    this.p5b10=false;
    this.p5t10a=true;
    this.p5t10b=true;
    this.p5t10=true;
  }
  funcionAceptar510(){
    if(this.erro510!=""){
      this.p5t10=false;
      this.p5p10=true;
      this.p5par10=this.erro510;
      this.p5p10e=true;
      this.p5t10b=false;
      this.p5t10a=false
      }
  }
  
  funcionCancelar510(){

    if(this.p5par10==""){
      this.p5t10=false;
      this.p5b10=true;
      this.p5t10b=false;
      this.p5t10a=false;
      }
    if(this.p5par10!=""){
      this.p5t10=false;
      this.p5p10e=true;
      this.p5t10b=false;
      this.p5t10a=false;
      }
  }


base64arbolitos='data:image/jpeg;base64,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'
base64Image='data:image/png;base64,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';
base64brujula='data:image/png;base64,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';
}
