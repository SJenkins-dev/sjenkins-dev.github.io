import type { Collection } from "tinacms";
import { defaultSeoPageProps, seoPageProps } from "@pcode-at/tinacms-seo";

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "src/content/page",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: "seoTitle",
      type: "string",
      required: true
    },
    { name: 'blocks',
      label: "Blocks",
      type:'object',
      list: true,
      templates: [
        {
        name: 'heroBlock',
        label: 'Hero Block',
        fields: [{
          name: 'message',
          type: 'rich-text',
          },
          {
          name: 'links',
          label: "Links",
          type: 'object',
          list: true,
          fields: [
            {type: 'string', name: 'link', label: 'Link Location'},
            {type: 'string', name: 'label', label: 'Link Text'},
            {type: 'string', name: 'style', label: 'Link Style', options: ['simple', 'button']},
          ],
          }],
        },
        {
          name: 'textBlock',
          label: 'Text Block',
          fields: [{
            name: 'content',
            type: 'rich-text',
            }]
        },
        {
          name: 'skillsBlock',
          label: 'Skills Block',
          fields: [{
            name: 'intro',
            type: 'rich-text',
            label: 'Intro'
            },
            {
              name: 'skillcards',
              label: "Skills",
              type: 'object',
              list: true,
              fields: [
                {type: 'string', name: 'name', label: 'Skill Name'},
                {type: 'string', name: 'description', label: 'Skill Description'},
                {type: 'string', name: 'tags', label: 'Software', list: true, ui: {component: 'tags'}, required: false},
              ],
              }
          ]
        },
      ],
    },
    {
      name: "body",
      type: "rich-text",
      isBody: true,
      required: true
    },
    seoPageProps,
  ]
}
