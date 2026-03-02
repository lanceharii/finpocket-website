import { Card, CardContent } from '@/components/ui/card';
import Seo from '@/components/Seo';

export default function FeaturesPage() {
  const features = [
    {
      icon: '/assets/generated/icon-quick-entry.dim_256x256.png',
      title: 'Quick income and expense entry',
      description:
        'Add transactions in seconds with our intuitive interface. Simply enter the amount, select a category, and you\'re done. No complicated forms or unnecessary steps.',
    },
    {
      icon: '/assets/generated/icon-categories.dim_256x256.png',
      title: 'Custom categories',
      description:
        'Organize your finances your way. Create custom categories that match your lifestyle and spending habits. Easily track where your money goes.',
    },
    {
      icon: '/assets/generated/icon-dashboard.dim_256x256.png',
      title: 'Monthly dashboard and summaries',
      description:
        'Get a clear overview of your financial health. View monthly summaries, track trends, and understand your spending patterns at a glance.',
    },
    {
      icon: '/assets/generated/icon-local-storage.dim_256x256.png',
      title: 'Local device storage',
      description:
        'Your data stays on your device, always. No cloud sync means complete privacy and instant access to your financial information, even offline.',
    },
    {
      icon: '/assets/generated/icon-walkthrough.dim_256x256.png',
      title: 'First-time guided walkthrough',
      description:
        'Get started quickly with our friendly onboarding experience. Learn the basics and set up your first categories in minutes.',
    },
  ];

  return (
    <>
      <Seo
        title="FinPocket – Features"
        description="Discover all the features that make FinPocket the perfect privacy-focused personal finance app. Quick entry, custom categories, dashboards, and more."
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Features
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to manage your personal finances with complete privacy
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="flex flex-col items-center space-y-4 p-8 text-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="h-20 w-20 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
