const HostelContent = {
  'BH-1': {
    name: 'Boys Hostel 1',
    description: 'BH-1 is known for its spacious rooms and excellent facilities.',
    image: '/images/bh1.jpg',
    carouselImages: [
      '/images/bh1_1.jpg',
      '/images/bh1_2.jpg',
      '/images/bh1_3.jpg',
      '/images/bh1_4.jpg',
    ],
    wardenMessage: 'Welcome to Boys Hostel 1! I am excited to have you here.',
    wardenName: 'Dr. Shailendra Bajpai',
    wardenImage: '/images/warden_bh1.jpg',
    mess: 'The mess at BH-1 offers a balanced diet.',
    messImage: '/images/mess_bh1.jpg',
    facilities: [
      {
        type: 'Gym',
        title: 'State-of-the-Art Gym',
        description: 'Our gym is equipped with the latest machines and equipment.',
        quote: 'A healthy body for a healthy mind.',
        image: '/images/gym.jpg',
      },
      {
        type: 'Library',
        title: 'Library',
        description: 'The library offers a peaceful place for study and research.',
        quote: 'Knowledge is power.',
        image: '/images/library.jpg',
      },
      {
        type: 'Wi-Fi',
        title: '24/7 Wi-Fi',
        description: 'Enjoy uninterrupted high-speed internet throughout the hostel.',
        quote: 'Stay connected, stay ahead.',
        image: '/images/wifi.jpg',
      },
    ],
    contact: 'Contact details for BH-1',
    staff: [
      { id: 1, name: 'Mr. Hari Kumar', position: 'Clerk', contact: '7837797418', email: 'mhba@nitj.ac.in' },
      { id: 2, name: 'Mr. Joga Singh', position: 'Attendant', contact: '7087946940', email: '-' },
      { id: 3, name: 'Mr. Tasen Kumar', position: 'Attendant', contact: '8437857489', email: '-' },
      { id: 4, name: 'Mr. Satnam Yadav', position: 'Attendant', contact: '7973257236', email: '-' },
      { id: 5, name: 'Mr. Keshav Kumar', position: 'Attendant', contact: '9988903662', email: '-' },
    ],
    gallery: [
      { imgSrc: '/images/bh1_gallery1.jpg', alt: 'Event 1' },
      { imgSrc: '/images/bh1_gallery2.jpg', alt: 'Event 2' },
    ],
  },
  'BH-2': {
    name: 'Boys Hostel 2',
    description: 'BH-2 is located near the library and has a modern gym.',
    image: '/images/bh2.jpg',
    carouselImages: [
      '/images/bh2_1.jpg',
      '/images/bh2_2.jpg',
      '/images/bh2_3.jpg',
      '/images/bh2_4.jpg',
    ],
    wardenMessage: 'Welcome to Boys Hostel 2! We hope you have a great stay.',
    wardenName: 'Dr. Gyan Prakash',
    wardenImage: '/images/warden_bh2.jpg',
    mess: 'The mess at BH-2 offers freshly prepared meals.',
    messImage: '/images/mess_bh2.jpg',
    facilities: [
      {
        type: 'Gym',
        title: 'Fully Equipped Gym',
        description: 'A gym with all the essential equipment for your fitness goals.',
        quote: 'Fitness is the key to success.',
        image: '/images/gym_bh2.jpg',
      },
      {
        type: 'Library',
        title: 'Library',
        description: 'A quiet environment for all your academic needs.',
        quote: 'Read, learn, grow.',
        image: '/images/library_bh2.jpg',
      },
      {
        type: 'Wi-Fi',
        title: '24/7 Wi-Fi',
        description: 'Stay connected with high-speed Wi-Fi across the hostel.',
        quote: 'Connectivity at its best.',
        image: '/images/wifi_bh2.jpg',
      },
      {
        type: 'Cafeteria',
        title: 'Cafeteria',
        description: 'A spacious and comfortable cafeteria with a variety of food options.',
        quote: 'Eat well, live well.',
        image: '/images/cafeteria_bh2.jpg',
      },
    ],
    contact: 'Contact details for BH-2',
    staff: [
      { id: 1, name: 'Mr. Ravi Singh', position: 'Clerk', contact: '7891234567', email: 'bh2@nitj.ac.in' },
      { id: 2, name: 'Mr. Nitin Yadav', position: 'Attendant', contact: '7384920312', email: '-' },
      { id: 3, name: 'Mr. Alok Verma', position: 'Attendant', contact: '8347291032', email: '-' },
      { id: 4, name: 'Mr. Sandeep Kumar', position: 'Attendant', contact: '9988457721', email: '-' },
    ],
    gallery: [
      { imgSrc: '/images/bh2_gallery1.jpg', alt: 'Event 1' },
      { imgSrc: '/images/bh2_gallery2.jpg', alt: 'Event 2' },
    ],
  },
  // Add more hostels with carouselImages...

  'BH-3': {
    name: 'Boys Hostel 3',
    description: 'BH-3 provides a vibrant community and excellent living spaces for students.',
    image: '/images/bh3.jpg',
    carouselImages: [
      '/images/bh3_1.jpg',
      '/images/bh3_2.jpg',
      '/images/bh3_3.jpg',
      '/images/bh3_4.jpg',
    ],
    wardenMessage: 'Welcome to all the students, keep pushing forward, even when the path seems tough. Hard work, resilience, and dedication will lead you to your goals. We\'re here to support you every step of the way.',
    wardenName: 'Dr. [Insert Warden Name]', // Replace with the actual name if available
    wardenImage: '/images/warden_bh3.jpg',
    mess: 'The mess at BH-3 has a seating capacity of 65 and provides delicious and hygienic meals.',
    messImage: '/images/mess_bh3.jpg',
    facilities: [
      {
        type: 'Rooms',
        title: 'Spacious Rooms',
        description: 'BH-3 features 150 rooms accommodating a total of 205 students across three floors.',
        quote: 'A welcoming space to call home.',
        image: '/images/rooms_bh3.jpg'
      },
      {
        type: 'Community',
        title: 'Strong Community',
        description: 'BH-3 fosters an inclusive and vibrant environment for students.',
        quote: 'Together, we grow and succeed.',
        image: '/images/community_bh3.jpg'
      },
    ],
    contact: 'Contact details for BH-3',
    staff: [
      { id: 1, name: 'Mr. [Staff Name]', position: 'Clerk', contact: '[Contact]', email: '[Email]' }, // Replace with actual details
    ],
    gallery: [
      { imgSrc: '/images/bh3_gallery1.jpg', alt: 'Hostel Event 1' },
      { imgSrc: '/images/bh3_gallery2.jpg', alt: 'Hostel Event 2' },
    ],
  },
  'BH-6': {
    name: 'Boys Hostel 6',
    description: 'BH-6 is known for its spacious infrastructure and warm community atmosphere.',
    image: '/images/bh6.jpg',
    carouselImages: [
      '/images/bh6_1.jpg',
      '/images/bh6_2.jpg',
      '/images/bh6_3.jpg',
      '/images/bh6_4.jpg',
      '/images/bh6_5.jpg',
      '/images/bh6_6.jpg',
    ],
    wardenMessage: 'Welcome to all the students, keep pushing forward, even when the path seems tough. Hard work, resilience, and dedication will lead you to your goals. We\'re here to support you every step of the way.',
    wardenName: 'Dr. [Insert Warden Name]', // Replace with actual name if available
    wardenImage: '/images/warden_bh6.jpg',
    mess: 'The mess at BH-6 has a seating capacity of 90 and provides freshly prepared meals.',
    messImage: '/images/mess_bh6.jpg',
    facilities: [
      {
        type: 'Guest House',
        title: 'Guest House Facilities',
        description: 'BH-6 features 1 guest house with an AC option.',
        quote: 'A comfortable stay for visitors.',
        image: '/images/guesthouse_bh6.jpg'
      },
      {
        type: 'Rooms',
        title: 'Spacious Rooms',
        description: 'BH-6 houses 150 rooms accommodating 225 students, spread across three floors.',
        quote: 'A room for every need.',
        image: '/images/rooms_bh6.jpg'
      },
    ],
    contact: 'Contact details for BH-6',
    staff: [
      { id: 1, name: 'Mr. [Staff Name]', position: 'Clerk', contact: '[Contact]', email: '[Email]' }, // Replace with actual details
    ],
    gallery: [
      { imgSrc: '/images/bh6_gallery1.jpg', alt: 'Event 1' },
      { imgSrc: '/images/bh6_gallery2.jpg', alt: 'Event 2' },
    ],
  },
  'GH-1': {
    name: 'Girls Hostel No. 1',
    description: 'GH-1 provides comfortable accommodation with a variety of room types catering to students’ needs.',
    image: '/images/gh1.jpg',
    carouselImages: [
      '/images/gh1_1.jpg',
      '/images/gh1_2.jpg',
      '/images/gh1_3.jpg',
      '/images/gh1_4.jpg',
    ],
    wardenMessage: 'Welcome to GH-1! Our hostel ensures a safe and supportive environment for all residents, fostering growth and friendship.',
    wardenName: 'Dr. [Insert Warden Name]', // Replace with the actual name
    wardenImage: '/images/warden_gh1.jpg',
    mess: 'GH-1 provides hygienic and nutritious meals in a comfortable dining space.',
    messImage: '/images/mess_gh1.jpg',
    facilities: [
      {
        type: 'Rooms',
        title: 'Variety of Rooms',
        description: 'GH-1 features 46 double-seater rooms, 17 three-seater rooms, and 3 pentagon-style rooms, accommodating a total of 110 students.',
        quote: 'Comfort and convenience for every student.',
        image: '/images/rooms_gh1.jpg',
      },
      {
        type: 'Guest Room',
        title: 'Guest Room',
        description: 'GH-1 has a dedicated guest room for visiting family and guests.',
        quote: 'Welcoming your loved ones.',
        image: '/images/guest_room.jpg',
      },
      {
        type: 'Staff Room',
        title: 'Staff Room',
        description: 'A well-equipped staff room to support administrative needs.',
        quote: 'A space for smooth operations.',
        image: '/images/staff_room.jpg',
      },
      {
        type: 'Office',
        title: 'Administrative Office',
        description: 'GH-1 includes two offices for warden and administrative functions.',
        quote: 'Ensuring seamless hostel management.',
        image: '/images/office.jpg',
      },
    ],
    contact: 'Contact details for GH-1',
    staff: [
      { id: 1, name: 'Ms. [Staff Name]', position: 'Clerk', contact: '[Contact]', email: '[Email]' }, // Replace with actual details
    ],
    gallery: [
      { imgSrc: '/images/gh1_gallery1.jpg', alt: 'Hostel Life 1' },
      { imgSrc: '/images/gh1_gallery2.jpg', alt: 'Hostel Life 2' },
    ],
  },
  'GH-2': {
    name: 'Girls Hostel No. 2',
    description: 'GH-2 is a modern hostel offering a variety of room types and excellent facilities for students.',
    image: '/images/gh2.jpg',
    carouselImages: [
      '/images/gh2_1.jpg',
      '/images/gh2_2.jpg',
      '/images/gh2_3.jpg',
      '/images/gh2_4.jpg',
    ],
    wardenMessage: 'Welcome to GH-2! Our focus is on providing a safe and nurturing environment for all residents to excel.',
    wardenName: 'Dr. [Insert Warden Name]', // Replace with actual name
    wardenImage: '/images/warden_gh2.jpg',
    mess: 'The mess at GH-2 offers hygienic and freshly prepared meals with a seating capacity of 100 students.',
    messImage: '/images/mess_gh2.jpg',
    facilities: [
      {
        type: 'Rooms',
        title: 'Spacious Rooms',
        description: 'GH-2 features 72 double-seater rooms, 25 three-seater rooms, and 5 pentagon-style rooms, accommodating a total of 158 students.',
        quote: 'A comfortable stay for every student.',
        image: '/images/rooms_gh2.jpg',
      },
      {
        type: 'Guest Room',
        title: 'Guest Room',
        description: 'A dedicated guest room is available for visiting family and friends.',
        quote: 'A warm welcome for your loved ones.',
        image: '/images/guest_room_gh2.jpg',
      },
      {
        type: 'Staff Room',
        title: 'Staff Room',
        description: 'GH-2 includes a staff room to facilitate smooth hostel management.',
        quote: 'A space for operational excellence.',
        image: '/images/staff_room_gh2.jpg',
      },
      {
        type: 'Office',
        title: 'Administrative Offices',
        description: 'Two offices are available for warden and administrative staff.',
        quote: 'Ensuring efficient management.',
        image: '/images/office_gh2.jpg',
      },
    ],
    contact: 'Contact details for GH-2',
    staff: [
      { id: 1, name: 'Ms. [Staff Name]', position: 'Clerk', contact: '[Contact]', email: '[Email]' }, // Replace with actual details
    ],
    gallery: [
      { imgSrc: '/images/gh2_gallery1.jpg', alt: 'Hostel Life 1' },
      { imgSrc: '/images/gh2_gallery2.jpg', alt: 'Hostel Life 2' },
    ],
  },
  'MGH-Phase-II': {
    name: 'MGH Phase-II (A & B Block)',
    description: `MGH Phase-II provides modern accommodations and facilities for students. It features two blocks, A and B, with a combined capacity of 755 students and a mess that can accommodate 280 students at a time.`,
    image: '/images/mgh_phase_ii.jpg',
    carouselImages: [
      '/images/mgh_1.jpg',
      '/images/mgh_2.jpg',
      '/images/mgh_3.jpg',
      '/images/mgh_4.jpg',
    ],
    wardenMessage: `Welcome to all the students to MGH Phase-II. Our hostel is more than just a place to stay; it is a home away from home, where we strive to provide a nurturing environment that fosters growth, learning, and camaraderie. Stay curious, stay creative, and do not hesitate to reach out if you have any concerns.`,
    wardenName: 'Dr. [Insert Warden Name]', // Replace with actual name
    wardenImage: '/images/warden_mgh.jpg',
    mess: `MGH Phase-II features a spacious mess that can seat 280 students at a time, serving freshly prepared, hygienic meals.`,
    messImage: '/images/mess_mgh.jpg',
    facilities: [
      {
        type: 'Rooms',
        title: 'Modern Rooms',
        description: `A Block has 209 rooms, accommodating 381 students, while B Block has 208 rooms for 374 students.`,
        quote: 'Comfortable living spaces for productive study and relaxation.',
        image: '/images/rooms_mgh.jpg',
      },
      {
        type: 'Guest House',
        title: 'Guest Rooms',
        description: `MGH Phase-II offers 3 air-conditioned guest rooms for visiting families.`,
        quote: 'A warm welcome for guests.',
        image: '/images/guest_rooms_mgh.jpg',
      },
      {
        type: 'Mess',
        title: 'Spacious Mess',
        description: `A combined mess for A & B blocks with a seating capacity of 280 students, ensuring nutritious and hygienic meals.`,
        quote: 'Healthy meals for a healthy mind.',
        image: '/images/mess_mgh.jpg',
      },
    ],
    blocks: {
      A: {
        totalRooms: 209,
        totalStudents: 381,
        floorDetails: [
          { floor: '1st Floor', rooms: 19, students: 29 },
          { floor: '2nd Floor', rooms: 19, students: 33 },
          { floor: '3rd Floor', rooms: 19, students: 36 },
          { floor: '4th Floor', rooms: 19, students: 36 },
          { floor: '5th Floor', rooms: 19, students: 36 },
          { floor: '6th Floor', rooms: 19, students: 38 },
          { floor: '7th Floor', rooms: 19, students: 38 },
          { floor: '8th Floor', rooms: 19, students: 36 },
          { floor: '9th Floor', rooms: 19, students: 29 },
          { floor: '10th Floor', rooms: 19, students: 37 },
          { floor: '11th Floor', rooms: 19, students: 33 },
        ],
      },
      B: {
        totalRooms: 208,
        totalStudents: 374,
        floorDetails: [
          { floor: '1st Floor', rooms: 18, students: 31 },
          { floor: '2nd Floor', rooms: 19, students: 34 },
          { floor: '3rd Floor', rooms: 19, students: 36 },
          { floor: '4th Floor', rooms: 19, students: 36 },
          { floor: '5th Floor', rooms: 19, students: 38 },
          { floor: '6th Floor', rooms: 19, students: 38 },
          { floor: '7th Floor', rooms: 19, students: 34 },
          { floor: '8th Floor', rooms: 19, students: 28 },
          { floor: '9th Floor', rooms: 19, students: 28 },
          { floor: '10th Floor', rooms: 19, students: 38 },
          { floor: '11th Floor', rooms: 19, students: 33 },
        ],
      },
    },
    contact: 'Contact details for MGH Phase-II',
    staff: [
      { id: 1, name: 'Mr. [Staff Name]', position: 'Clerk', contact: '[Contact]', email: '[Email]' }, // Replace with actual details
    ],
    gallery: [
      { imgSrc: '/images/mgh_gallery1.jpg', alt: 'Hostel Event 1' },
      { imgSrc: '/images/mgh_gallery2.jpg', alt: 'Hostel Event 2' },
      { imgSrc: '/images/mgh_gallery3.jpg', alt: 'Hostel Event 3' },
    ],
  },
  'MBH-B-Block': {
    name: 'MBH B Block',
    description: `MBH B Block offers modern facilities with spacious accommodations for students. It houses a total of 594 students across 309 rooms.`,
    image: '/images/mbh_b_block.jpg',
    carouselImages: [
      '/images/mbh_b1.jpg',
      '/images/mbh_b2.jpg',
      '/images/mbh_b3.jpg',
      '/images/mbh_b4.jpg',
    ],
    wardenMessage: `Welcome to all the students! Keep pushing forward, even when the path seems tough. Hard work, resilience, and dedication will lead you to your goals. We're here to support you every step of the way.`,
    wardenName: 'Dr. [Insert Warden Name]', // Replace with actual name
    wardenImage: '/images/warden_mbh_b.jpg',
    mess: `MBH B Block provides nutritious meals to its residents in a well-equipped mess.`,
    messImage: '/images/mess_mbh_b.jpg',
    facilities: [
      {
        type: 'Rooms',
        title: 'Comfortable Accommodations',
        description: `MBH B Block features 309 rooms and accommodates 594 students. The rooms are spacious and provide a comfortable living environment.`,
        quote: 'Designed for comfort and convenience.',
        image: '/images/rooms_mbh_b.jpg',
      },
      {
        type: 'Guest House',
        title: 'Guest Room',
        description: `The hostel has one air-conditioned guest room for visiting family members.`,
        quote: 'A welcoming space for visitors.',
        image: '/images/guest_room_mbh_b.jpg',
      },
    ],
    blocks: {
      B: {
        totalRooms: 309,
        totalStudents: 594,
        floorDetails: [
          { floor: 'Ground Floor', rooms: 33, students: 54 },
          { floor: '1st Floor', rooms: 46, students: 92 },
          { floor: '2nd Floor', rooms: 46, students: 92 },
          { floor: '3rd Floor', rooms: 46, students: 92 },
          { floor: '4th Floor', rooms: 46, students: 90 },
          { floor: '5th Floor', rooms: 46, students: 92 },
          { floor: '6th Floor', rooms: 46, students: 82 },
        ],
      },
    },
    contact: 'Contact details for MBH B Block',
    staff: [
      { id: 1, name: 'Mr. [Staff Name]', position: 'Clerk', contact: '[Contact]', email: '[Email]' }, // Replace with actual details
    ],
    gallery: [
      { imgSrc: '/images/mbh_gallery1.jpg', alt: 'Hostel Life 1' },
      { imgSrc: '/images/mbh_gallery2.jpg', alt: 'Hostel Life 2' },
      { imgSrc: '/images/mbh_gallery3.jpg', alt: 'Hostel Event 1' },
    ],
  },
  BH4: {
    name: 'BH4',
    description: `BH4 provides a welcoming and comfortable environment for its residents, fostering a community of learning and growth.`,
    image: '/images/bh4.jpg',
    carouselImages: [
      '/images/bh4_1.jpg',
      '/images/bh4_2.jpg',
      '/images/bh4_3.jpg',
      '/images/bh4_4.jpg',
    ],
    wardenMessage: `Welcome to all the students! Keep pushing forward, even when the path seems tough. Hard work, resilience, and dedication will lead you to your goals. We're here to support you every step of the way.`,
    wardenName: 'Dr. [Insert Warden Name]', // Replace with actual name
    wardenImage: '/images/warden_bh4.jpg',
    mess: `BH4's mess has a seating capacity for 90 students, offering a clean and organized dining experience.`,
    messImage: '/images/mess_bh4.jpg',
    facilities: [
      {
        type: 'Rooms',
        title: 'Comfortable Accommodations',
        description: `BH4 accommodates 218 students across 150 rooms. The hostel provides a conducive environment for academic and personal growth.`,
        quote: 'Your second home for a productive student life.',
        image: '/images/rooms_bh4.jpg',
      },
      {
        type: 'Guest House',
        title: 'No Guest House',
        description: `BH4 does not have any guest houses.`,
        quote: 'Focused on student accommodations.',
        image: '/images/no_guest_house.jpg',
      },
    ],
    blocks: {
      BH4: {
        totalRooms: 150,
        totalStudents: 218,
        floorDetails: [
          { floor: 'Ground Floor', rooms: 52, students: 91 },
          { floor: '1st Floor', rooms: 52, students: 81 },
          { floor: '2nd Floor', rooms: 48, students: 46 },
        ],
      },
    },
    contact: 'Contact details for BH4',
    staff: [
      { id: 1, name: 'Mr. [Staff Name]', position: 'Clerk', contact: '[Contact]', email: '[Email]' }, // Replace with actual details
    ],
    gallery: [
      { imgSrc: '/images/bh4_gallery1.jpg', alt: 'Hostel Life 1' },
      { imgSrc: '/images/bh4_gallery2.jpg', alt: 'Hostel Life 2' },
      { imgSrc: '/images/bh4_gallery3.jpg', alt: 'Hostel Event 1' },
    ],
  },
};

export default HostelContent;
