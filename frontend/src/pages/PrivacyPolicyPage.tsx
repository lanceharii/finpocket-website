import Seo from '@/components/Seo';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const policies = [
    'No data collection',
    'No account required',
    'No cloud storage',
    'All data stored locally on the user\'s device',
    'No third-party sharing',
  ];

  return (
    <>
      <Seo
        title="FinPocket – Privacy Policy"
        description="FinPocket's privacy policy: No data collection, no account required, no cloud storage. All data is stored locally on your device with no third-party sharing."
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <Shield className="mx-auto h-16 w-16 text-primary" />
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Your privacy is our top priority
              </p>
            </div>

            <div className="rounded-lg bg-muted/30 p-8">
              <h2 className="text-2xl font-semibold text-foreground">Our Commitment</h2>
              <p className="mt-4 text-muted-foreground">
                FinPocket is designed with privacy at its core. We believe your financial data is
                yours alone, and we've built our app to reflect that principle.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Privacy Principles</h2>
              <ul className="space-y-4">
                {policies.map((policy, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur"
                  >
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-lg text-foreground">{policy}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-8">
              <h2 className="text-2xl font-semibold text-foreground">What This Means</h2>
              <p className="mt-4 text-muted-foreground">
                FinPocket operates entirely on your device. We don't have servers collecting your
                data, we don't require you to create an account, and we don't track your usage.
                Your financial information never leaves your device unless you explicitly choose to
                export it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
