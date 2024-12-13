import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
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
  
