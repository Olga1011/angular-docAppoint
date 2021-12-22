import { Doctor } from './doctor.model';

export class DoctorService {
  doctors: Doctor[] = [
    new Doctor(
      'Zigmund',
      'Freid',
      'https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=',
      'Cardiologist',
      '068811182',
      'A good specialist from Galaxia Medical center. He has a background of 20 years in cardiology'
    ),

    new Doctor(
      'Donald',
      'Mayce',
      'https://st.depositphotos.com/1771835/1477/i/950/depositphotos_14779771-stock-photo-portrait-of-confident-young-doctor.jpg',
      'Practotioner',
      '066784320',
      'A super man in his job'
    ),
  ];

  getDoctors() {
    return this.doctors.slice();
  }
}
