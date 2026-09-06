import MainContent from '@/components/MainContent'
import FiliereGate from '@/components/onboarding/FiliereGate'

export default function Home() {
  return (
    <main>
      {/* Google's callback cannot know whether this reader has picked a
          filière — that answer is in localStorage. So the funnel is entered
          from here, on the client, rather than from the sign-in redirect. */}
      <FiliereGate />
      <MainContent />
    </main>
  )
}
