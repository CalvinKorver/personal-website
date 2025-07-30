import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { table } from '@sanity/table'
import { schemaTypes } from './sanity-studio/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Calvin Korver Portfolio',
  projectId: 'mvus36sf',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), table()],
  schema: {
    types: schemaTypes,
  },
})