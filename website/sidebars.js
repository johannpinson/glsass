const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Glsass',
      link: {
        type: 'generated-index',
      },
      items: ['introduction', 'exitcss', 'vertical-rhythm', 'about'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      items: ['installation', 'packages'],
    },
    {
      type: 'category',
      label: 'Settings',
      link: {
        type: 'generated-index',
      },
      items: [
        'settings/overview',
        'settings/core',
        'settings/colors',
        'settings/icons',
      ],
    },
    {
      type: 'category',
      label: 'Graphics',
      items: ['graphics/overview'],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'generated-index',
      },
      items: [
        'tools/concept',
        'tools/breakpoints',
        'tools/color',
        'tools/contrast',
        'tools/cv',
        'tools/fonts',
        'tools/iv',
        'tools/list',
        'tools/map',
        'tools/mq',
        'tools/spacing',
        'tools/string',
        'tools/unit',
        'tools/vhd',
      ],
    },
    {
      type: 'doc',
      id: 'basics/generics',
    },
    {
      type: 'doc',
      id: 'basics/elements',
    },
    {
      type: 'category',
      label: 'Objects',
      link: {
        type: 'generated-index',
      },
      items: ['basics/objects', 'basics/grid'],
    },
    {
      type: 'category',
      label: 'Components',
      link: {
        type: 'generated-index',
      },
      items: [
        'components/avatar',
        'components/accordion',
        'components/alert',
        'components/badge',
        'components/breadcrumb',
        'components/button',
        'components/callout',
        'components/card',
        'components/form',
        'components/navbar',
        'components/pagination',
        'components/progress',
        'components/tooltip',
      ],
    },
    {
      type: 'category',
      label: 'Helpers',
      link: {
        type: 'generated-index',
      },
      items: [
        'helpers/clearfix',
        'helpers/headings',
        'helpers/image',
        'helpers/links',
        'helpers/ratio',
        'helpers/vhd',
      ],
    },
    {
      type: 'category',
      label: 'Utilities',
      link: {
        type: 'generated-index',
      },
      items: [
        'utilities/api',
        'utilities/borders',
        'utilities/colors',
        'utilities/columns',
        'utilities/displays',
        'utilities/elevations',
        'utilities/flex',
        'utilities/float',
        'utilities/overflows',
        'utilities/positions',
        'utilities/sizings',
        'utilities/spacings',
        'utilities/texts',
        'utilities/print',
        'utilities/debug',
      ],
    },
  ],
}

module.exports = sidebars
