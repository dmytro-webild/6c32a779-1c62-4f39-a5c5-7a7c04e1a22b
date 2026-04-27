"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import { CheckCircle, Mail, Search, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="PAWYARD"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      title="PAWYARD"
      description="We handle the mess. You enjoy the yard."
      testimonials={[
        {
          name: "Sarah J.",          handle: "@sarahj",          testimonial: "Finally, a yard service that just gets it. My dog loves the space, and I love the lack of poop.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/striped-zen-sand-background-health-wellbeing-concept_53876-128448.jpg"},
        {
          name: "Mike B.",          handle: "@mikeb",          testimonial: "Reliable, fast, and always friendly. The best in Melbourne.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/water-wave-texture-background-beige-design_53876-142873.jpg"},
        {
          name: "Lucy T.",          handle: "@lucyt",          testimonial: "Super professional and the sanitization is a huge plus.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lines-chocolate-crumbs_23-2147896441.jpg"},
        {
          name: "David K.",          handle: "@davidk",          testimonial: "My lawn has never looked better. Professional and thorough.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cracked-crack-wallpaper-graphic-scratch_1194-9516.jpg"},
        {
          name: "Emma R.",          handle: "@emmar",          testimonial: "Life saver for a busy pet owner. Highly recommend their services.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-border-collie-dog-havin-fun-outsde_23-2149304003.jpg"},
      ]}
      buttons={[
        {
          text: "Book a Free Inspection",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-border-collie-dog-havin-fun-outsde_23-2149304037.jpg",          alt: "User avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-pet-dogs-playing-grass_1359-219.jpg",          alt: "User avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-pretty-woman-park-running-with-boston-terrier-dog-smiling-positive-mood-trendy-summer-style-wearing-orange-dress-playing-with-pet-having-fun-colorful-active-weekend-vacation-sneakers_285396-5218.jpg",          alt: "User avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/eco-volunteer-picking-up-litter-lawn_74855-2152.jpg",          alt: "User avatar"},
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CeIWJjRBebY3FK4pn4XIQYKuGE/uploaded-1777261052540-7vbvjeis.png",          alt: "User avatar"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-natural-grungy-texture-background_23-2149110398.jpg"
      marqueeItems={[
        {
          type: "text",          text: "Melbourne Based"},
        {
          type: "text",          text: "Vet Approved"},
        {
          type: "text",          text: "Same-day Service"},
        {
          type: "text",          text: "Fully Sanitized"},
        {
          type: "text",          text: "Professional Crew"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "At PawYard, we're passionate dog lovers on a mission to keep Melbourne yards clean, safe, and enjoyable for both pets and owners. Operating within a 10km radius of the city, our energetic team has over one year of hands-on experience in professional dog waste removal, offering tailored services that suit every household."},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/young-happy-smiling-woman-orange-dress-having-fun-playing-running-with-dog-park-summer-style-cheerful-mood_285396-5203.jpg",          alt: "About PawYard"},
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "poop-patrol",          name: "Poop Patrol",          price: "$33",          features: [
            "Standard yard cleanup",            "Every week",            "Sealed waste disposal"],
          buttons: [
            {
              text: "Select",              href: "#contact"},
          ],
        },
        {
          id: "golden-scooper",          name: "Golden Scooper",          price: "$48",          features: [
            "Thorough cleanup",            "Bi-weekly cleaning",            "Sealed waste disposal"],
          buttons: [
            {
              text: "Select",              href: "#contact"},
          ],
        },
        {
          id: "top-dog",          name: "Top Dog",          price: "$97",          features: [
            "Complete yard cleanup",            "Single visit",            "Sanitized removal"],
          buttons: [
            {
              text: "Select",              href: "#contact"},
          ],
        },
      ]}
      title="Our Services"
      description="Tailored plans for your yard's needs."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Free Inspection",          description: "We visit your yard within 10km of the city.",          bentoComponent: "reveal-icon",          icon: Search,
        },
        {
          title: "Choose Plan",          description: "Select the service that works best for your dog.",          bentoComponent: "reveal-icon",          icon: CheckCircle,
        },
        {
          title: "Email Booking",          description: "Drop us a line at pawyard18@gmail.com.",          bentoComponent: "reveal-icon",          icon: Mail,
        },
        {
          title: "We Get It Done",          description: "One-time cleanups often done same-day.",          bentoComponent: "reveal-icon",          icon: Zap,
        },
      ]}
      title="Our Process"
      description="It's simple, honest work."
    />
  </div>

  <div id="hygiene" data-section="hygiene">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Sanitization",          content: "We use vet-approved disinfectants on every tool at every job site."},
        {
          id: "2",          title: "Disease Prevention",          content: "We work to prevent parvovirus and other bacteria cross-contamination."},
        {
          id: "3",          title: "Disposal",          content: "Waste is sealed airtight and put in your red bin. Takeaway is available for $2/visit."},
      ]}
      title="Hygiene & Safety"
      description="Your pet's health is our top priority."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Why Choose Us?"
      tag="Expert Care"
      metrics={[
        {
          id: "1",          value: "10km",          description: "Local Melbourne radius"},
        {
          id: "2",          value: "1yr+",          description: "Professional experience"},
        {
          id: "3",          value: "Daily",          description: "One-time cleanup availability"},
        {
          id: "4",          value: "Vet",          description: "Approved hygiene protocols"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      text="Your yard deserves to be a safe, clean space for your dogs to play. Email us at pawyard18@gmail.com or follow our mess-free journey on Instagram @pawyardmelb."
      buttons={[
        {
          text: "Email Us",          href: "mailto:pawyard18@gmail.com"},
        {
          text: "Instagram",          href: "https://instagram.com/pawyardmelb"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "PawYard",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Services",              href: "#pricing"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Email: pawyard18@gmail.com",              href: "mailto:pawyard18@gmail.com"},
            {
              label: "Instagram: @pawyardmelb",              href: "https://instagram.com/pawyardmelb"},
          ],
        },
      ]}
      bottomLeftText="© 2024 PawYard Melbourne"
      bottomRightText="Built with passion."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
