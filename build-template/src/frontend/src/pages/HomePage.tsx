import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Wifi, Zap, Ban, Lock, Database, BarChart3, BookOpen } from 'lucide-react';
import Seo from '@/components/Seo';

export default function HomePage() {
  const whyFeatures = [
    {
      icon: Shield,
      title: '100% Private',
      description: 'No login, no cloud',
    },
    {
      icon: Wifi,
      title: 'Works Offline',
      description: 'Always accessible',
    },
    {
      icon: Zap,
      title: 'Fast and Simple',
      description: 'Intuitive interface',
    },
    {
      icon: Ban,
      title: 'No Ads, No Tracking',
      description: 'Completely ad-free',
    },
  ];

  const coreFeatures = [
    'Quick income and expense entry',
    'Custom categories',
    'Monthly dashboard and summaries',
    'Local device storage',
    'First-time guided walkthrough',
  ];

  const futureFeatures = [
    'Budget planning',
    'Backup and restore',
    'Export reports',
    'App lock / PIN protection',
  ];

  return (
    <>
      <Seo
        title="FinPocket – Your Money. Your Device. Your Privacy."
        description="Track your income and expenses easily with a fast, offline, and secure personal finance app. No login, no cloud storage, and no data sharing."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  FinPocket – Your Money. Your Device. Your Privacy.
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  Track your income and expenses easily with a fast, offline, and secure personal
                  finance app.
                </p>
              </div>
              <div>
                <Button size="lg" disabled className="cursor-not-allowed">
                  Download (Coming Soon)
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/assets/generated/finpocket-mockup.dim_1200x900.png"
                alt="FinPocket App Mockup"
                className="h-auto w-full max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why FinPocket */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why FinPocket
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built with your privacy and convenience in mind
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyFeatures.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Core Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to manage your finances
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 rounded-lg bg-background p-6 shadow-sm"
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <p className="text-base text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Install the app</h3>
              <p className="mt-2 text-muted-foreground">
                Download FinPocket from your app store
              </p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                Add your income and expenses
              </h3>
              <p className="mt-2 text-muted-foreground">
                Track your transactions with ease
              </p>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                View insights and manage your money
              </h3>
              <p className="mt-2 text-muted-foreground">
                Get a clear picture of your finances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Highlight */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Lock className="mx-auto h-16 w-16 text-primary" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your financial data never leaves your device.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Complete privacy and security, guaranteed.
          </p>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Future Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Coming soon to make FinPocket even better
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {futureFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <p className="text-base text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Download FinPocket – Coming Soon
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Be the first to know when FinPocket launches
          </p>
          <div className="mt-8">
            <Button size="lg" disabled className="cursor-not-allowed">
              Download (Coming Soon)
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
