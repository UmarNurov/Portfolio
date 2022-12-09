import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "gwgv483t",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skqVj6mhSiXvoPbQ2wzMOvbRgt4pVRRAnGJfW6LtLp5F95BtJUh3FKnSOigwWzzSyYBq8D9cCeMkkB92LFwNOfwYaYhUqzLMzG7jCgbXz0t0fksF2h0YcxpLuVFFzyisJ3dkTOyjsG0bGItlLoOeZKdJebJ7efsDdbG2flz5E1WUjInqIMtX",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
