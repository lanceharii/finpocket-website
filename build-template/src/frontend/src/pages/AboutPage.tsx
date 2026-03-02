import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="FinPocket – About"
        description="Learn about FinPocket's mission to provide a simple, secure, and private way to manage personal finances without complexity or tracking."
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                About FinPocket
              </h1>
            </div>

            <div className="prose prose-lg mx-auto dark:prose-invert">
              <p className="text-lg leading-relaxed text-muted-foreground">
                FinPocket was built to provide a simple, secure, and private way to manage
                personal finances. The mission is to give users full control of their financial
                data without complexity or tracking.
              </p>

              <div className="mt-12 space-y-6">
                <div className="rounded-lg bg-muted/30 p-6">
                  <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
                  <p className="mt-3 text-muted-foreground">
                    We believe that managing your money should be simple, private, and accessible
                    to everyone. FinPocket empowers you to take control of your finances without
                    sacrificing your privacy or dealing with unnecessary complexity.
                  </p>
                </div>

                <div className="rounded-lg bg-muted/30 p-6">
                  <h2 className="text-2xl font-semibold text-foreground">Our Values</h2>
                  <ul className="mt-3 space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong className="text-foreground">Privacy First:</strong> Your financial
                        data belongs to you and stays on your device.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong className="text-foreground">Simplicity:</strong> No complicated
                        features or overwhelming interfaces.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong className="text-foreground">Transparency:</strong> No hidden
                        tracking, no ads, no data collection.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        <strong className="text-foreground">Accessibility:</strong> Works offline
                        and available to everyone.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
