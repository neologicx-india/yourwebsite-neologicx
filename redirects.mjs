export default async function customRedirects() {
  return [
    {
      source: '/sample-page',
      destination: '/',
      permanent: true,
    },
    {
      source: '/home',
      destination: '/',
      permanent: true,
    }
  ];
}
