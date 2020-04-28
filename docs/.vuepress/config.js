module.exports = {
    title: 'Orange Money',
    description: 'Document information for registrations',
    themeConfig: {
      logo: '/assets/images/Orange_logo.svg.png',
      nav: [
        { text: 'Home', link: '/'},
        { text: 'Guide', link: '/guide/'},
      ],
      sidebar: {
        '/guide/' : [
          '',
          'store',
          'views',
          'components'
        ]
      }
    }
  }