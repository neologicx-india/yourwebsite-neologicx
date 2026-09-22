export const metadata = {
  title: 'Terms & Conditions | Neologicx',
  description: 'Terms and conditions for using Neologicx services.',
};

export default function TermsAndConditions() {
  const sections = [
    { id: 'project-scope', title: 'Project Scope' },
    { id: 'google-maps', title: 'Google Maps Integration' },
    { id: 'support', title: 'Support & Communication' },
    { id: 'website-design', title: 'Website Design' },
    { id: 'third-party', title: 'Third-Party Services' },
    { id: 'domain-hosting', title: 'Domain & Hosting' },
    { id: 'logo-design', title: 'Logo Design' },
    { id: 'content-writing', title: 'Content Writing' },
    { id: 'client-responsibilities', title: 'Client Responsibilities' }
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-12 text-center md:text-left md:ml-[25%]">Terms & Conditions</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <aside className="w-full md:w-1/4 sticky top-28 hidden md:block">
          <div className="bg-[#f8fafc] rounded-2xl p-6 border border-border/50 shadow-sm">
            <h3 className="font-bold text-lg mb-6 text-brand-dark uppercase tracking-wider text-sm">Table of Contents</h3>
            <ul className="space-y-3.5 text-sm font-medium text-foreground/70">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:text-primary transition-colors block">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full md:w-3/4 prose prose-lg max-w-3xl text-foreground/80 font-sans space-y-6">
          <p className="text-xl">
            Welcome to <strong>NEOLOGICX</strong>. By purchasing any of our website packages, you agree to the following Terms & Conditions.
          </p>

          <h2 id="project-scope" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Project Scope</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The project will include only the features and services mentioned in the selected package.</li>
            <li>Any additional features, pages, or custom functionality requested outside the package will be quoted and billed separately.</li>
          </ul>

          <h2 id="google-maps" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Google Maps Integration</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Maps integration only (location link to be provided by the client).</li>
          </ul>

          <h2 id="support" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Support & Communication</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Free support is available only for the duration mentioned in your selected package.</li>
            <li>Support is provided only via Email and Phone.</li>
            <li>Our standard response time is within 24 business hours.</li>
            <li>Support does not include new feature development, redesign, or major modifications.</li>
          </ul>

          <h2 id="website-design" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Website Design</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The website design is created only once during the development process.</li>
            <li>Design revisions, redesigns, or layout changes requested after the design is approved or the website is delivered will be treated as additional work and charged separately.</li>
          </ul>

          <h2 id="third-party" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Third-Party Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Third-party services, plugins, APIs, software subscriptions, premium themes, premium plugins, or external tools are not included in any package unless specifically mentioned.</li>
            <li>Any licensing or subscription charges must be paid by the client.</li>
          </ul>

          <h2 id="domain-hosting" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Domain & Hosting</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Domain registration and web hosting are not included in any package.</li>
            <li>Domain and hosting charges are separate and must be purchased by the client or billed separately if managed by us.</li>
          </ul>

          <h2 id="logo-design" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Logo Design</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Logo design is not included in any website package.</li>
            <li>Logo design can be purchased as an additional service.</li>
          </ul>

          <h2 id="content-writing" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Content Writing</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Content writing is not included in any package.</li>
            <li>The client must provide all website content (text, images, videos, PDFs, etc.) unless content writing is purchased separately.</li>
          </ul>

          <h2 id="client-responsibilities" className="text-2xl font-serif font-bold text-brand-dark mt-12 mb-4 scroll-mt-28">Client Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Website content</li>
            <li>Images and media files</li>
            <li>Company logo</li>
            <li>Domain and hosting credentials (if applicable)</li>
            <li>Google Maps link</li>
            <li>Payment gateway details</li>
            <li>Any other required project information, which has not been mentioned in the above points.</li>
          </ul>

          <p className="mt-12 text-sm text-foreground/60 border-t border-border/50 pt-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
