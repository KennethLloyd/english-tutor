'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert(
        'NavigationSettings',
        [
          {
            id: '6cfb4dec-9344-413c-a46a-e0a22e0b57bc',
            logoUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322077/english-courses/1616322077666-english-tutor-logo-light.svg.svg',
            teachersLabel: 'Teachers',
            pricingLabel: 'Pricing',
            contactLabel: 'Contact',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );

      await queryInterface.bulkInsert(
        'HeroSettings',
        [
          {
            id: '2c543fb4-7a96-4d45-b7c4-7e5cc9abb213',
            backgroundImageUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322155/english-courses/1616322155018-pexels-photo-5965839%201.png.png',
            backgroundOpacity: 45,
            titleText: 'English Tutor',
            titleTextColor: '#000000',
            subtitleText:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Inhendrerit gravida rutrum quisque.',
            subtitleTextColor: '#000000',
            actionButtonText: 'LEARN MORE',
            actionButtonTextColor: '#ffffff',
            actionButtonColor: '#2bace3',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );

      await queryInterface.bulkInsert(
        'TeacherPageSettings',
        [
          {
            id: '25f6d5ee-cef8-4ff8-b299-e6d8c9c3bc49',
            backgroundColor: '#FFFFFF',
            titleLabel: 'Meet Our Teachers',
            titleLabelColor: '#000000',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );

      await queryInterface.bulkInsert(
        'Teachers',
        [
          {
            id: '4bf02289-3ce1-4d16-8560-7ba7c5443bc8',
            order: 1,
            firstName: 'Koby',
            lastName: 'Whitehead',
            status: 1,
            photoUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322210/english-courses/1616322210757-koby.png.png',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'f2ae7fd1-d53f-45f4-8cc0-e08a1c7a7b7e',
            order: 2,
            firstName: 'Leny',
            lastName: 'Greenaway',
            status: 1,
            photoUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322226/english-courses/1616322226573-lennie.png.png',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '1fa7682e-f265-44d1-8fb5-d227ee63fbbf',
            order: 3,
            firstName: 'Mateo',
            lastName: 'Vickers',
            status: 1,
            photoUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322244/english-courses/1616322244308-mateo.png.png',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '82ab6087-2a84-464a-b8ad-76570f3bad23',
            order: 4,
            firstName: 'Dolores',
            lastName: 'Morrow',
            status: 1,
            photoUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322261/english-courses/1616322261454-dolores.png.png',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '8a11c702-1f71-4bca-a692-d1d8b2706986',
            order: 5,
            firstName: 'Brandon',
            lastName: 'Joyner',
            status: 1,
            photoUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322276/english-courses/1616322276788-brandon.png.png',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '628fc9a9-e161-463e-94ff-fd5a8689f868',
            order: 6,
            firstName: 'Mariah',
            lastName: 'Benitez',
            status: 1,
            photoUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322293/english-courses/1616322293536-mariah.png.png',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );

      await queryInterface.bulkInsert(
        'PricingPageSettings',
        [
          {
            id: '3f58fc44-3538-46a1-a029-2d45b856f020',
            backgroundColor: '#f6f9fc',
            titleLabel: 'Pricing And Plans',
            titleLabelColor: '#000000',
            headerBackgroundColor: '#2bace3',
            headerTextColor: '#FFFFFF',
            detailsBackgroundColor: '#FFFFFF',
            detailsTextColor: '#525f7f',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );

      await queryInterface.bulkInsert(
        'Pricings',
        [
          {
            id: 'f0919d42-04f9-4510-a579-9169adcc6eef',
            order: 1,
            header: '1 Lesson',
            price: '$10',
            status: 1,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'cdec7f9f-f8ed-4afc-908e-f992e48e7291',
            order: 2,
            header: '5 Lessons',
            price: '$45',
            status: 1,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            order: 3,
            header: '10 Lessons',
            price: '$80',
            status: 1,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );

      await queryInterface.bulkInsert(
        'PricingFeatures',
        [
          {
            id: '0f96182d-473a-47f2-b39e-b898bf90c134',
            pricingId: 'f0919d42-04f9-4510-a579-9169adcc6eef',
            feature: '60 minute lessons',
            order: 1,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '45473399-17bb-4d98-bead-93c30952cab1',
            pricingId: 'cdec7f9f-f8ed-4afc-908e-f992e48e7291',
            feature: '60 minute lessons',
            order: 1,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '744c8b07-2e0c-412f-9880-4ac1182b30ef',
            pricingId: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            feature: '60 minute lessons',
            order: 1,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '4181e4a7-81ab-4a1e-aaed-92dd6f1fee4b',
            pricingId: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            feature: 'commodo elit at imperdiet',
            order: 2,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '8f8d3fbe-b5d1-476d-bda9-b1b04dc5fd96',
            pricingId: 'cdec7f9f-f8ed-4afc-908e-f992e48e7291',
            feature: 'commodo elit at imperdiet',
            order: 2,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'd96b4cb0-a92a-4bc4-8100-1f0e2e1313b6',
            pricingId: 'f0919d42-04f9-4510-a579-9169adcc6eef',
            feature: 'commodo elit at imperdiet',
            order: 2,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'bfb720f3-521f-468c-9484-12df32d036ee',
            pricingId: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            feature: 'pharetra vel turpis nunc',
            order: 3,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'c283face-3f31-4bec-ba0e-5d4734a9366d',
            pricingId: 'f0919d42-04f9-4510-a579-9169adcc6eef',
            feature: 'pharetra vel turpis nunc',
            order: 3,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'f0e1c14c-768d-4850-96c9-e499fa767f66',
            pricingId: 'cdec7f9f-f8ed-4afc-908e-f992e48e7291',
            feature: 'pharetra vel turpis nunc',
            order: 3,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'b5b9ef54-934e-4013-84b7-65895abf1219',
            pricingId: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            feature: 'pharetra vel turpis nunc',
            order: 4,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'c7e5832a-2925-403e-a8c1-d773708b58a4',
            pricingId: 'cdec7f9f-f8ed-4afc-908e-f992e48e7291',
            feature: 'commodo elit at imperdiet',
            order: 4,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '0444f604-a132-4123-9ea4-eb9c9c4f0d3a',
            pricingId: 'cdec7f9f-f8ed-4afc-908e-f992e48e7291',
            feature: 'commodo elit at imperdiet',
            order: 5,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'a63da824-f3f8-4f62-ae32-fe649de6b509',
            pricingId: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            feature: 'pharetra vel turpis nunc',
            order: 5,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '1e9f7975-bbd1-4798-aab3-b1f5f2f88295',
            pricingId: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            feature: 'pharetra vel turpis nunc',
            order: 6,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '6f177ad6-84b9-4130-8fa4-47e3a0a2d104',
            pricingId: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            feature: 'pharetra vel turpis nunc',
            order: 7,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '9b6c843f-260d-40ab-8c36-c0088a3068b6',
            pricingId: '50ed7a00-02f0-47b6-a0c6-02a63ee86352',
            feature: 'pharetra vel turpis nunc',
            order: 8,
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );

      await queryInterface.bulkInsert(
        'ContactPageSettings',
        [
          {
            id: 'd7530d84-e61f-4fe6-a275-f7d1776ed83c',
            backgroundColor: '#f0f0f0',
            titleLabel: 'Contact Us',
            titleLabelColor: '#000000',
            contactCardTitle: 'You can reach us through the following:',
            contactCardTitleColor: '#000000',
            contactCardBackgroundColor: '#FFFFFF',
            footerLabel: '© 2021 All Rights Reserved',
            footerBackgroundColor: '#2bace3',
            footerTextColor: '#FFFFFF',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );

      await queryInterface.bulkInsert(
        'Contacts',
        [
          {
            id: '887c6b0c-4ff8-4bbf-a3af-b3b2fb024b5e',
            order: 1,
            platformName: 'Phone',
            details: '+1-555-555-1212',
            status: 1,
            iconUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322579/english-courses/1616322579544-phone.svg.svg',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '15cc482d-d8b3-448b-9798-0da896cd4281',
            order: 2,
            platformName: 'Email',
            details: 'johndoe@gmail.com',
            status: 1,
            iconUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322598/english-courses/1616322598324-email.svg.svg',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: '2f2fb3f0-ffac-4d2a-be6d-7bdeb854f219',
            order: 3,
            platformName: 'Viber',
            details: '+1-555-777-2154',
            status: 1,
            iconUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322620/english-courses/1616322620078-viber.svg.svg',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
          {
            id: 'f9a26abf-5972-4f30-bce5-d7c3b67df438',
            order: 4,
            platformName: 'Telegram',
            details: '+1-555-847-5681',
            status: 1,
            iconUrl:
              'https://res.cloudinary.com/kennethlloyd/image/upload/v1616322638/english-courses/1616322637997-telegram.svg.svg',
            createdAt: '2021-03-21 10:21:19',
            updatedAt: '2021-03-21 10:21:19',
          },
        ],
        {},
      );
    } catch (e) {
      console.log(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('NavigationSettings', null, {});
    await queryInterface.bulkDelete('HeroSettings', null, {});
    await queryInterface.bulkDelete('TeacherPageSettings', null, {});
    await queryInterface.bulkDelete('Teachers', null, {});
    await queryInterface.bulkDelete('PricingPageSettings', null, {});
    await queryInterface.bulkDelete('Pricings', null, {});
    await queryInterface.bulkDelete('PricingFeatures', null, {});
    await queryInterface.bulkDelete('ContactPageSettings', null, {});
    await queryInterface.bulkDelete('Contacts', null, {});
  },
};
