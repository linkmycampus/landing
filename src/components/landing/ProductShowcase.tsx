import { Link } from 'react-router-dom';
import CampusFeedFlow from './CampusFeedFlow';
import PhoneStack from './PhoneStack';

export default function ProductShowcase() {
  return (
    <section id="about" className="border-t border-border bg-white py-20 md:py-28">
      <div className="marketing-container">
        <CampusFeedFlow />

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex justify-center lg:order-1">
            <PhoneStack featured="reels" />
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <div>
              <h3 className="text-2xl font-extrabold text-ink">Campus reels</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                From faculty events to hostel hangouts, campus reels capture student life in
                vertical video. Like, comment, and share what is trending at your university,
                or post your own clips for classmates to discover.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-ink">Student marketplace</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Need a hostel space, textbook, laptop, or thrifted fit? The LinkMyCampus
                marketplace connects you with verified students buying and selling on your
                campus. No sketchy DMs, just real listings from people at your university.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <PhoneStack featured="marketplace" />
          </div>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-ink">Built for your university</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                LinkMyCampus is not another generic social app. Verify your student status,
                set up your profile, and unlock a campus-only space for feeds, groups, reels,
                marketplace deals, and anonymous posts made for university life.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <span className="font-bold text-brand">1.</span>
                Join the waitlist and get notified when your campus goes live
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand">2.</span>
                Verify you&apos;re a real student at your university
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand">3.</span>
                Explore feed, groups, marketplace, reels, and anonymous posting
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <PhoneStack featured="onboarding" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/waitlist"
            className="inline-flex rounded-full bg-cta px-8 py-3.5 text-sm font-semibold text-white hover:bg-cta-hover"
          >
            Get early access
          </Link>
        </div>
      </div>
    </section>
  );
}
