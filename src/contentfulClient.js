import { createClient } from 'contentful';

const client = createClient({
  space: "o20dvi7psbjh",
  accessToken: "UA9e84FSWNXclTXmaNodvaFIdjcNL0fT6OTIapabz1M"
});

export const fetchEntries = async (contentType) => {
    try {
      const entries = await client.getEntries({ content_type: "blogHub", select: "fields"   });
      console.log(entries); // Log fetched entries
      const sanitizeEntries = entries?.items.map((item) => {
        console.log(item)
        const image = item?.fields.image.fields;
        return {
            ...item,
            image,
        }
      })
    return sanitizeEntries;
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };
  
