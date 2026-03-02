import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Seo from '@/components/Seo';

export default function FaqPage() {
  const faqs = [
    {
      question: 'Do I need an account?',
      answer: 'No.',
    },
    {
      question: 'Does it work offline?',
      answer: 'Yes.',
    },
    {
      question: 'Is my data safe?',
      answer: 'Yes, stored locally.',
    },
    {
      question: 'Is the app free?',
      answer: 'Yes, basic features are free.',
    },
    {
      question: 'Are there ads?',
      answer: 'No.',
    },
  ];

  return (
    <>
      <Seo
        title="FinPocket – FAQ"
        description="Frequently asked questions about FinPocket. Learn about accounts, offline functionality, data safety, pricing, and ads."
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Quick answers to common questions about FinPocket
              </p>
            </div>

            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-lg border border-border/50 bg-card/50 px-6 backdrop-blur"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 rounded-lg bg-muted/30 p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground">Still have questions?</h2>
              <p className="mt-3 text-muted-foreground">
                Feel free to reach out to us at{' '}
                <a
                  href="mailto:contact@finpocket.app"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  contact@finpocket.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
