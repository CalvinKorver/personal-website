import { createClient } from 'next-sanity'

const projectId = 'mvus36sf'
const dataset = 'production'
const apiVersion = '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export const config = {
  projectId,
  dataset,
  apiVersion,
}