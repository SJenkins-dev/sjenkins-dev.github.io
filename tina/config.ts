import { defineConfig } from "tinacms";
import { BlogCollection } from "./collections/blog";
import { ProjectCollection } from "./collections/project";
import { GlobalConfigCollection } from "./collections/global-config";
import { PageCollection } from "./collections/page";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      BlogCollection,
      PageCollection,
      ProjectCollection,
      GlobalConfigCollection,
    ],
  },
});
