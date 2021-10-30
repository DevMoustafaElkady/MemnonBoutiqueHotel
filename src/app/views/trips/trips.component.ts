import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  trips:any = [
    {
      tripImgUrl: '../../../assets/Trips/habu-temple.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Medinet Habu',
      tripDescription: 'Habu Temple built by Ramesses 111 c1190BC.  A wonderful temple with peaceful energy lying at the foot of the Theban Hills on the edge of the desert.',
      tripTime: '10 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/deir-al-medina.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Deir El Medina',
      tripDescription: 'The workers’ tombs and village. A fascinating village complex and some of the most stunning smaller tombs in the area.',
      tripTime: '15 - 20 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/the-ramesseum.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'The Ramesseum',
      tripDescription: 'grand  mortuary temple of Ramesses 11, including the fallen statue which inspired Shelley’s poem Ozymandias.',
      tripTime: '10 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/hatshepsut.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Hatshepsut Temple',
      tripDescription: 'one of the most famous temples in the world built for Queen Hapshepsut c 1470BC and partly dedicated to the goddess Hathor. An outstanding example of ancient architecture',
      tripTime: '20 - 25 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/seti-1-temple-gurna.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Seti 1 Temple',
      tripDescription: 'This is a charming little gem of a temple, being small and peaceful and seldom visited. It is located near to Howard Carter’s house. ',
      tripTime: '30 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/carter-house.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Howard Carter’s House ',
      tripDescription: 'the home of the man who discovered Tutankhamun’s tomb in the Valley of the Kings. This atmospheric house is a real time capsule and feels as if Howard Carter has only just left. It is close to Seti 1 Temple and on the way to the Valley of the Kings.',
      tripTime: '30 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/valley-of-the-kings.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Valley of the Kings',
      tripDescription: 'Many awe-inspiring tombs of the great Pharaohs. One ticket allows you to visit 3 tombs.',
      tripTime: '45 -50 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/valley-of-the-queens.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Valley of the Queens',
      tripDescription: 'here are the tombs of the great queens, including the spectacular Tomb of Queen Nefertari, the beloved wife of Ramesses 11',
      tripTime: '15 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/horse-camel-donkey-rides.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Horse, Camel and Donkey Riding Excursions',
      tripDescription: 'We can arrange for you to take a delightful trip from 1 – 5 hours around the local area on horseback or by donkey or camel. You will be able to see the countryside and farms at your leisure, or visit the tombs and temples. A sunset ride in the desert is highly recommended. All the animals are well behaved and well looked after. You can depart from the hotel and hard hats will be provided.',
      tripTime: '15 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/balloons.jpeg',
      tripLocation: 'West bank of Luxor',
      tripName: 'Balloon Trip',
      tripDescription: 'How about experiencing the world famous monuments of Luxor from the air at sunrise?',
      tripTime: '15 mins'
    },
    {
      tripImgUrl: '../../../assets/Trips/luxor-temple.jpeg',
      tripLocation: 'East Bank of Luxor',
      tripName: 'Luxor Temple ',
      tripDescription: 'Started by Amenhotep 111 c1400BC  and completed by Tutankhamun and Ramesses11 c1300BC, this magnificent temple sits on the banks of the Nile in the centre of Luxor.',
    },
    {
      tripImgUrl: '../../../assets/Trips/karnak-temple.jpeg',
      tripLocation: 'East Bank of Luxor',
      tripName: 'Karnak Temple ',
      tripDescription: 'A vast temple complex dating from c2000BC – 30BC, with many pylons, obelisks and temples. The largest part is dedicated to the worship of the god Amun. The Hypostyle Hall is spectacular and is currently being restored to show the original colours.',
    },
    {
      tripImgUrl: '../../../assets/Trips/museum.jpeg',
      tripLocation: 'East Bank of Luxor',
      tripName: 'Luxor Museum',
      tripDescription: 'A top class , beautifully laid out museum with exquisite artifacts.',
    },
    {
      tripImgUrl: '../../../assets/Trips/souq.jpeg',
      tripLocation: 'East Bank of Luxor',
      tripName: 'The Souq ',
      tripDescription: 'search for bargains and souvenirs and experience bartering in the bustling souq.',
    },
    {
      tripImgUrl: '../../../assets/Trips/abydos.jpeg',
      tripLocation: 'East Bank of Luxor',
      tripName: 'Day Trip to Abydos and Dendera',
      tripDescription: 'Private transport will take you to the magical Temple of Seti 1 at Abydos. This temple has some of the best preserved indoor images. Next to the temple is the mysterious Osirion with enormous stone megaliths.',
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
