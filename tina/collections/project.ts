import type { Collection } from "tinacms";

export const ProjectCollection: Collection = {

  name: "project",
  label: "Portfolio",
  path: "src/content/portfolio_items/",
  format: "mdx",
  ui: {
    router({ document }) {
      return `/portfolio/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "thumbImgSrc",
      label: "Thumbnail Image",
      required: true,
    },
    {
      type: "string",
      name: "thumbImgAlt",
      label: "Thumbnail Image Alt Text",
      required: true,
    },
    {
      type: "string",
      name: "client",
      label: "Client",
      required: true,
    },
    {
      type: "string",
      name: "clienturl",
      label: "Client Website",
      required: false,
    },
    {
      type: "string",
      name: "liveurl",
      label: "Live Website",
      required: false,
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui:
      {component: 'tags'},
      required: false,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: false,
    },
    {
      type: "string",
      name: "timeframe",
      label: "Timeframe",
      required: false,
    },
    {
      type: "string",
      name: "deliverable",
      label: "Deliverables",
      required: false,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [
        {name: "caseStudyImage",
          label:"Case Study Image",
          fields: [
            {
            name:"imgSrc",
            label: "Image",
            type: "image"},
            {
              name:"imgAlt",
              label: "Image Alt Text",
              type: "string"},
            {name: "imgCaption",
            label: "Image Caption",
            type: "string"
            }
          ]
        }
      ]
    },
  ],
}

