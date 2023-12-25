import { createClient } from 'microcms-js-sdk'

export const mcms_client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.NEXT_PUBLIC_MCMS_API_KEY as string,
})
