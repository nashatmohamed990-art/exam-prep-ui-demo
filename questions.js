const QUESTIONS = [
  {
    id: 1,
    exam: "USMLE-style demo",
    system: "Pulmonary",
    stem: "A 19-year-old man falls onto the corner of a table and has left chest pain and shortness of breath. Blood pressure is 88/54 mm Hg, pulse 124/min, and respirations 30/min. The trachea is midline. Breath sounds are decreased at the left base, which is dull to percussion. Which diagnosis best fits?",
    choices: ["Blunt aortic injury", "Cardiac tamponade", "Hemothorax", "Tension pneumothorax", "Pulmonary contusion only"],
    answer: 2,
    why: "Dullness plus reduced breath sounds after chest trauma points to blood in the pleural space. Hypotension and tachycardia fit hypovolemic shock. Tension pneumothorax usually pushes the trachea away and is hyper-resonant, not dull."
  },
  {
    id: 2,
    exam: "USMLE-style demo",
    system: "Biochemistry",
    stem: "A new drug stops bacterial protein synthesis only when the ribosome reaches UAA. Which molecule is the most likely direct target?",
    choices: ["Aminoacyl-tRNA synthetase", "Elongation factor Tu", "Release factor", "RNA polymerase sigma subunit", "DNA gyrase"],
    answer: 2,
    why: "UAA is a stop codon. Release factors, not tRNA, recognize stop codons and free the finished peptide. This demo item is original and not from any commercial bank."
  },
  {
    id: 3,
    exam: "NCLEX-style demo",
    system: "Prioritization",
    stem: "Four clients call at the same time. Whom should the nurse assess first?",
    choices: [
      "A client waiting for a scheduled antibiotic that is 20 minutes late",
      "A client with asthma whose peak flow just fell and who is speaking in single words",
      "A client asking for help choosing tomorrow's menu",
      "A client with a healing wound who wants the dressing explained again"
    ],
    answer: 1,
    why: "Airway and breathing come first. Single-word speech and a falling peak flow signal acute respiratory compromise. The other needs are important but not immediately life-threatening."
  },
  {
    id: 4,
    exam: "NCLEX-style demo",
    system: "Pharmacology",
    stem: "A client starts furosemide. Which finding should the nurse report before the next dose?",
    choices: ["Urine output of 800 mL over 4 hours", "Potassium of 2.9 mEq/L", "Mild thirst", "Request to use the bathroom more often"],
    answer: 1,
    why: "Loop diuretics waste potassium. A level of 2.9 is low enough to risk arrhythmia, so the next dose should be held and the prescriber called."
  },
  {
    id: 5,
    exam: "MCAT-style demo",
    system: "Biology",
    stem: "A membrane protein moves sodium out of the cell only while ATP is hydrolyzed. Which description is most accurate?",
    choices: ["Simple diffusion", "Facilitated diffusion through a channel", "Primary active transport", "Osmosis", "Secondary active transport that uses no ATP nearby"],
    answer: 2,
    why: "Direct use of ATP to pump an ion against its gradient is primary active transport. Channels and facilitated diffusion do not hydrolyze ATP."
  },
  {
    id: 6,
    exam: "SAT-style demo",
    system: "Reading",
    stem: "In the sentence 'The committee's decision, although unpopular, rested on evidence rather than rumor,' the word 'rested' most nearly means",
    choices: ["slept", "was based", "paused", "leaned physically", "refused"],
    answer: 1,
    why: "Here 'rested on' means the decision was supported by evidence. The other senses of rest do not fit the sentence."
  },
  {
    id: 7,
    exam: "CPA-style demo",
    system: "Accounting",
    stem: "A company receives cash before it delivers the service. Before delivery, the cash is recorded as",
    choices: ["Revenue", "Unearned revenue", "Accounts receivable", "Retained earnings", "Cost of goods sold"],
    answer: 1,
    why: "Cash collected in advance is a liability until the performance obligation is satisfied. It is not revenue yet."
  },
  {
    id: 8,
    exam: "CFA-style demo",
    system: "Ethics",
    stem: "An analyst shares a client's planned trade with a friend before the order is public. This is best described as",
    choices: ["Mosaic theory", "Soft-dollar research", "Front-running a client", "Fair dealing", "Proper diligence"],
    answer: 2,
    why: "Using knowledge of a client's order for someone else's benefit before execution harms the client and is a form of front-running, not mosaic theory."
  }
];

function readBank() {
  return QUESTIONS;
}
