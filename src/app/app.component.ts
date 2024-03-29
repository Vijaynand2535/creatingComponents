import { Component } from '@angular/core';
import { Imobile } from './shared/models/mobiles';
import { Iplayer } from './shared/models/players';
import { Ihotel } from './shared/models/hotels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'creatingComponents';


  hotels : Array<string> = ["Tulsi Pure Veg Restaurant","Sadhana Pure Veg","Rajwada pure veg and lawns","Naivedyam Resto","Neha Pure veg"]

  hotArr : Array<Ihotel> = [
    {
      ownerFname : "Raj",
      ownerLname : "Patil",
      email : "Tulsipvr@gmail.com",
      contact : 8877485232,
      address : "Shiv Nagar Colony, Udgir, Maharashtra 413517"
      
    },
    {
      ownerFname : "Amit",
      ownerLname : "Chowdhari",
      email : "Sadhanapveg@gmail.com",
      contact : 7620820230,
      address : "Ram Nagar, Khadkali, Udgir, Maharashtra 413517"
    },
    {
      ownerFname : "Balasaheb",
      ownerLname : "Patode",
      email : "Rajwadaplawns@gmail.com",
      contact : 9654217852,
      address : "Shivneri, Udgir, Maharashtra 413517"
    },
    {
      ownerFname : "Rahul",
      ownerLname : "Satapure",
      email : "NaivedyamResto@gmail.com",
      contact : 9705030180,
      address : "Degloor Rd,near lal bahadur shastri vidyalay,Udgir, Maharashtra 413517"
    },
    {
      ownerFname : "Udaysingh",
      ownerLname : "Thakur",
      email : "NehaPveg@gmail.com",
      contact : 9955663322,
      address : "Ram Nagar, Khadkali, Udgir, Maharashtra 413517"
    }
  ]
  
players : Array<string> = ["Rohit Sharma","Virat Kohli","Yuraj Singh","Mahendra Singh","Andre Russell"]

  playrArr : Array<Iplayer> =[
    {
      fname : "Rohit",
      lname : "Sharma",
      age :   36  ,
      nickname : "hitman",
      village : "Nagpur"
    },
    {
      fname : "Virat",
      lname : "Kohli",
      age : 35,
      nickname : "chiku",
      village : "Uttam Nagar"
    },
    {
      fname : "Yuraj",
      lname : "Singh",
      age : 42,
      nickname : "yuhi",
      village : "Chandigarh"
    },
    {
      fname : "Mahendra",
      lname : "Singh",
      age :   42,
      nickname : "yuhi",
      village : "Ranchi,Bihar "
    },
    {
      fname : "Andre",
      lname : "Russell",
      age :   42,
      nickname : "Dre Russ",
      village : "Kingston,Jamaica."
    }
  ]

  mobiles : Array<string> = ["Apple iPhone 15 (Blue, 128 GB)","Apple iPhone 14 (Midnight, 128 GB)","Apple iPhone 14 (Blue, 128 GB)","Apple iPhone 14 (Starlight, 128 GB)","Apple iPhone 15 (Black, 128 GB)"]


mobileArr : Array<Imobile> = [
   {
    Rom : "128 GB ROM",
    Display : "15.49 cm (6.1 inch) Super Retina XDR Display",
    Camera : "48MP + 12MP | 12MP Front Camera",
    Processor : "A16 Bionic Chip, 6 Core Processor Processor",
    Price : 65999
   },
   {
    Rom : "128 GB ROM",
    Display : "15.49 cm (6.1 inch) Super Retina XDR Display",
    Camera : "12MP + 12MP | 12MP Front Camera",
    Processor : "A15 Bionic Chip, 6 Core Processor Processor",
    Price : 56999
   },
   {
    Rom : "128 GB ROM",
    Display : "15.49 cm (6.1 inch) Super Retina XDR Display",
    Camera : "12MP + 12MP | 12MP Front Camera",
    Processor : "A15 Bionic Chip, 6 Core Processor Processor",
    Price : 55999
   },
   {
    Rom : "128 GB ROM",
    Display : "15.49 cm (6.1 inch) Super Retina XDR Display",
    Camera : "12MP + 12MP | 12MP Front Camera",
    Processor : "A15 Bionic Chip, 6 Core Processor Processor",
    Price : 56999
   },
   {
    Rom : "128 GB ROM",
    Display : "15.49 cm (6.1 inch) Super Retina XDR Display",
    Camera : "48MP + 12MP | 12MP Front Camera",
    Processor : "A16 Bionic Chip, 6 Core Processor Processor",
    Price : 66999
   }
 
 
]
}
