import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ProofOfConcept from './components/ProofOfConcept';
import CompetitiveAdvantages from './components/CompetitiveAdvantages';
import MarketOpportunity from './components/MarketOpportunity';
import TeamVision from './components/TeamVision';
import InvestmentOpportunity from './components/InvestmentOpportunity';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <ProofOfConcept />
      <CompetitiveAdvantages />
      <MarketOpportunity />
      <TeamVision />
      <InvestmentOpportunity />
      <FAQ />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;