// script.js
// 100 MCQ dataset (Textile Fibre + related topics). Each question has: q, options[], answer (index)
const questions = [
  // 1-10 (unit I basics)
  {q:"1. What is a 'filament' fibre?", options:["Short staple fiber","Continuous fiber of indefinite length","Broken fiber bundle","Fiber reduced to powder"], answer:1},
  {q:"2. Which of these is a regenerated fibre?", options:["Polyester","Viscose rayon","Nylon","Acrylic"], answer:1},
  {q:"3. Degree of polymerization measures:", options:["Crystallinity only","Average length of polymer chains","Fiber color","Moisture regain"], answer:1},
  {q:"4. Staple fibre means:", options:["Continuous filament","Short fibers of limited length","Only synthetic fibers","Only natural fibers"], answer:1},
  {q:"5. Which property is most important for absorbency?", options:["Crystallinity","Hydrophilicity","Melt point","Molecular weight"], answer:1},
  {q:"6. Which is NOT a desirable fibre property?", options:["High tensile strength","Good elasticity","Excessive shrinkage","Good moisture regain"], answer:2},
  {q:"7. Orientation in polymer refers to:", options:["Color arrangement","Alignment of molecular chains","Number of cross-links","Type of dye"], answer:1},
  {q:"8. Crystallinity in fibres generally gives:", options:["Lower strength","Higher strength and stiffness","More elasticity only","No effect"], answer:1},
  {q:"9. Which characteristic describes fibre-forming polymers?", options:["Low molecular weight only","High molecular weight & ability to orient","Only aromatic compounds","Always natural"], answer:1},
  {q:"10. Which is a natural fiber?", options:["Viscose","Cotton","Nylon","Acrylic"], answer:1},

  // 11-25 (cotton & jute)
  {q:"11. Cotton fibre mainly develops from:", options:["Leaf","Seed (cotton boll)","Stem","Root"], answer:1},
  {q:"12. Microscopic cross-section of cotton is:", options:["Round solid","Hollow with lobes (kidney-shaped)","Tri-lobal","Flat ribbon-like"], answer:1},
  {q:"13. Micronaire in cotton measures:", options:["Fibre color","Fibre fineness & maturity","Moisture only","Strength"], answer:1},
  {q:"14. Jute is classified as a:", options:["Seed fiber","Bast fiber","Filament silk","Synthetic fiber"], answer:1},
  {q:"15. Retting in jute processing is used to:", options:["Dry the fiber","Separate fiber from stem by microbial action","Color the fiber","Make yarn"], answer:1},
  {q:"16. Which is NOT a typical property of jute?", options:["High tensile strength","High moisture regain","Biodegradable","High elongation like elastane"], answer:3},
  {q:"17. Cotton grading is based on:", options:["Length, strength, color & trash","Only color","Only length","Only price"], answer:0},
  {q:"18. A common test for cotton maturity is:", options:["Micronaire test","Tensile test","Viscometer test","pH test"], answer:0},
  {q:"19. Primary use of jute is:", options:["Fine apparel","Sacking, packaging and geotextiles","Medical sutures","High fashion silk"], answer:1},
  {q:"20. Cotton is mainly composed of which polymer?", options:["Protein (keratin)","Cellulose","Polyester","Polyamide"], answer:1},
  {q:"21. Which process is used to remove non-cellulosic impurities from cotton?", options:["Scouring","Mercerization","Dyeing","Sizing"], answer:0},
  {q:"22. Which bast fibre is similar to jute but generally finer?", options:["Hemp","Flax (linen)","Silk","Wool"], answer:1},
  {q:"23. Cotton fibres are basically:", options:["Protein based","Cellulosic","Synthetic","Mineral"], answer:1},
  {q:"24. Cotton maturity affects:", options:["Dye uptake, strength and processing","Only color","Only density","Only length"], answer:0},
  {q:"25. Jute fibre majorly contains:", options:["Cellulose and lignin","Protein","Polyamide","Elastomer"], answer:0},

  // 26-45 (wool & silk)
  {q:"26. Wool fibre is primarily made of which protein?", options:["Cellulose","Keratin","Collagen","Elastin"], answer:1},
  {q:"27. Which of these is a scale structure on wool fibers?", options:["Cuticle scales","Tri-lobal ribs","Hollow core","Smooth glassy surface"], answer:0},
  {q:"28. Wool is hygroscopic means:", options:["Resists water","Absorbs moisture easily","Dissolves in water","Repels moisture"], answer:1},
  {q:"29. Carbonizing in wool processing removes:", options:["Dyes","Vegetable matter (VM) using acid/heat","Proteins","Fat only"], answer:1},
  {q:"30. Silk is produced by:", options:["Sheep","Silkworm (Bombyx mori)","Goat","Plant"], answer:1},
  {q:"31. Silk fibroin is the:", options:["Outer gum","Core structural protein","Wax","Lipid"], answer:1},
  {q:"32. Degumming of silk removes:", options:["Fibroin","Sericin (gum)","Color only","Luster"], answer:1},
  {q:"33. Wool is damaged by:", options:["Acidic conditions only","Alkali and high temperature causing felting/damage","UV only","None of the above"], answer:1},
  {q:"34. Silk's main chemical composition is:", options:["Cellulose","Protein (fibroin)","Polyester","Polyethylene"], answer:1},
  {q:"35. Wool grading is based on:", options:["Fibre diameter and length","Only color","Only strength","Melting point"], answer:0},
  {q:"36. Which finish improves wool's shrink resistance?", options:["Chlorination or resin treatment (superwash)","Mercerization","Bleaching at high pH","Mordanting"], answer:0},
  {q:"37. Which test helps identify silk fiber microscopically?", options:["Triangular cross-section","Smooth long filament with sericin coating","Scale structure like wool","Hollow lumen"], answer:1},
  {q:"38. Wool has good resilience because of:", options:["High crystallinity only","Crimp & scale structure","Hydrophobicity","Low molecular weight"], answer:1},
  {q:"39. Silk is termed a filament because:", options:["Produced as continuous filament from cocoon","Staple fibers are shorter","It is synthetic","It is hollow"], answer:0},
  {q:"40. Which acid is commonly used for degumming silk?", options:["Dilute hydrochloric acid","Alkaline soap","Hot water and mild alkali (degumming commonly uses soap/alkali)","Concentrated sulfuric acid"], answer:2},
  {q:"41. Wool proteing contains disulfide bonds due to:", options:["Cysteine amino acids","High cellulose","Lipid content","No sulfur"], answer:0},
  {q:"42. Wool felting happens due to:", options:["Scale interlocking and agitation in water","Melting of fibres","Oxidation only","pH change only"], answer:0},
  {q:"43. Sericin gives silk:", options:["Strength only","Gummy coating and stiffness","Color","Hydrophobicity"], answer:1},
  {q:"44. Mulberry silk is produced by:", options:["Bombyx mori fed on mulberry leaves","Wild spiders","Goats","Plants"], answer:0},
  {q:"45. Wool's preferred dye class is often:", options:["Reactive dyes (cotton class)","Acid dyes","Disperse dyes","Vat dyes"], answer:1},

  // 46-65 (polyester & polyamide)
  {q:"46. Polyester (PET) is made by polymerization of:", options:["Vinyl chloride","Terephthalic acid + ethylene glycol","Caprolactam","Acrylic monomer"], answer:1},
  {q:"47. Melt spinning is commonly used for which fibre?", options:["Viscose rayon","Nylon-6","Polyester & polypropylene","Wool"], answer:2},
  {q:"48. Nylon-6 is produced from:", options:["Ethylene glycol","Caprolactam (ring-opening polymerization)","Terephthalic acid","Acrylonitrile"], answer:1},
  {q:"49. Glass transition temperature (Tg) is important because:", options:["Above Tg fibre melts immediately","Below Tg polymer is rubbery, above Tg becomes glassy (affects dyeing behavior)","Only affects color","Irrelevant to dyeing"], answer:1},
  {q:"50. Polyester is hydrophobic meaning:", options:["Highly absorbent","Low moisture regain","Dissolves in water","Reacts with acids"], answer:1},
  {q:"51. Polyamide fibres (nylons) generally show:", options:["High moisture regain and good dyeability with acid dyes","No moisture regain","Are natural","Cannot be dyed"], answer:0},
  {q:"52. Disperse dyes are primarily used for:", options:["Cellulosic fibers","Polyester (hydrophobic synthetics)","Wool","Jute"], answer:1},
  {q:"53. Which spinning method is used for acrylic fibre?", options:["Melt spinning","Dry spinning","Wet spinning only","Electrospinning"], answer:1},
  {q:"54. Polyester's dyeing is often done at:", options:["Cold water","High temperature (boiling/HT carriers)","Room temperature only","Using enzymes"], answer:1},
  {q:"55. Nylon-6,6 differs from Nylon-6 in:", options:["Both are identical","Monomers used (hexamethylenediamine + adipic acid vs caprolactam) and properties","Color only","Melt point only"], answer:1},
  {q:"56. Crystalline regions in polyester reduce:", options:["Strength","Permeability and dye uptake (lower)","Melting point","Elastic recovery"], answer:1},
  {q:"57. Heat-set is used with polyester to:", options:["Shrink & stabilize dimensions and improve wrinkle resistance","Color the fiber","Remove impurities","Increase moisture regain"], answer:0},
  {q:"58. Polyamide dyeing commonly uses:", options:["Reactive dyes","Acid dyes","Pigment dyes only","Direct dyes"], answer:1},
  {q:"59. Which fibre has highest melting point among these?", options:["Acrylic","Polyester (PET)","Nylon-6","Viscose"], answer:1},
  {q:"60. Draw-texturing is applied to polyester to:", options:["Lower strength","Create bulk/texture and crimp for stretch","Dye better only","Make it filmy"], answer:1},

  // 61-80 (acrylic & regenerated + manufacturing basics)
  {q:"61. Acrylic fibres are primarily polymer of:", options:["Polyethylene terephthalate","Polyacrylonitrile (PAN)","Polyamide","Cellulose acetate"], answer:1},
  {q:"62. Dry spinning involves:", options:["Evaporation of solvent from extruded filaments","Coagulation in a bath","Melting polymer extrusion","Electrostatic drawing"], answer:0},
  {q:"63. Viscose rayon raw material is primarily:", options:["Cellulose from wood pulp or cotton linters","Protein","Petroleum","Polyamide"], answer:0},
  {q:"64. Wet spinning is used for:", options:["Polyester","Viscose, acrylic, some nylons","Only natural fibers","Dyeing"], answer:1},
  {q:"65. Which fibre is most similar to cotton in feel and dyeability?", options:["Viscose rayon (regenerated cellulose)","Polyester","Nylon","Acrylic"], answer:0},
  {q:"66. Regenerated cellulose fibres are biodegradable because:", options:["They are protein-based","They are cellulose-based like natural cellulose","They are fully synthetic","They are metal based"], answer:1},
  {q:"67. Acrylic fibres are known for:", options:["Warmth, wool-like feel and good colorfastness","High moisture regain","Being protein-based","Being cellulosic"], answer:0},
  {q:"68. PAN (precursor) is used to make:", options:["Polyester","Acrylic fibres","Nylon","Silk"], answer:1},
  {q:"69. Solvent spinning vs melt spinning: which needs solvent recovery?", options:["Melt spinning","Solvent (dry/wet) spinning","Both identical","None"], answer:1},
  {q:"70. Which fibre has the highest moisture regain among these?", options:["Polyester","Cotton","Acrylic","Nylon"], answer:1},
  {q:"71. Which is a regenerated fibre produced by viscose route?", options:["Modal, Viscose Rayon","Polypropylene","Nylon","Polyester"], answer:0},
  {q:"72. Dry spinning typically uses which step to solidify filaments?", options:["Evaporation of solvent into hot air","Coagulation in water","Freezing","Chemical curing"], answer:0},
  {q:"73. Production of polyester involves condensation polymerization releasing:", options:["Water or small molecule (eg. water)","No byproduct","Only CO2","Acidic smell"], answer:0},
  {q:"74. Acrylic fibres often require which post-treatment to improve hand?", options:["Surface coatings or washes","Mercerization","Carbonizing","None"], answer:0},
  {q:"75. Regenerated fibres' properties can be modified by:", options:["Degree of polymerization & crosslinking only","Spinning conditions, drawing & chemical modifications","Only dyeing","Only bleaching"], answer:1},
  {q:"76. Which fibre is most heat sensitive for drying and processing?", options:["Polyester","Acrylic","Viscose (regenerated) and some nylons","Glass fiber"], answer:2},
  {q:"77. Bicomponent fibres are created by:", options:["Using two polymers in same filament to give combined properties","Spinning two separate yarns together","Only twisting","Only dyeing"], answer:0},
  {q:"78. Filament yarns are preferred for:", options:["Fancy textured woolens","Smooth lustrous fabrics like silk-like sheens","Disposable wipes","Packaging only"], answer:1},
  {q:"79. Orientation and drawing during spinning improve:", options:["Luster only","Tensile strength and modulus","Only colorfastness","Only dye affinity"], answer:1},
  {q:"80. Spinneret size controls:", options:["Color","Fibre denier/denier per filament and cross-section shape","Length of staple","Chemical composition"], answer:1},

  // 81-100 (testing, properties, comparisons, application)
  {q:"81. Moisture regain is defined as:", options:["Moisture in fiber as percent of wet mass","Moisture absorbed relative to dry mass (%)","Only water content in yarn","Moisture at boiling"], answer:1},
  {q:"82. Which instrument measures fibre fineness by airflow?", options:["Microscope","Micronaire (airflow)","Stelometer","pH meter"], answer:1},
  {q:"83. Fiber tensile strength is measured by:", options:["Stelometer or single fibre tensile tester","Micronaire","Baer sorter","pH meter"], answer:0},
  {q:"84. Luster in fibres is promoted by:", options:["Smooth surface and high crystallinity","Rough surface","High moisture regain only","Low molecular weight"], answer:0},
  {q:"85. Which fiber is least affected by microorganisms?", options:["Wool (protein)","Silk","Synthetic polyester (more resistant)","Cotton"], answer:2},
  {q:"86. Which property makes cotton comfortable in hot climates?", options:["Hydrophobicity","High moisture absorbency and breathability","Low density only","Colorfastness"], answer:1},
  {q:"87. Which fibre is commonly used for carpets because of durability and resilience?", options:["Acrylic only","Nylon (polyamide)","Silk","Cotton"], answer:1},
  {q:"88. Which fibre class typically gives better UV resistance inherently?", options:["Silk","Wool","Synthetic like polyester technically shows good UV resistance compared to natural cellulose","Cotton"], answer:2},
  {q:"89. Dye affinity to cellulosic fibers is highest with which dye type?", options:["Acid dyes","Reactive dyes (form covalent bond with cellulose)","Disperse dyes","Basic dyes"], answer:1},
  {q:"90. Hydrophobic fibres require which dye class for good uptake?", options:["Reactive dyes","Disperse dyes (for polyester)","Direct dyes","Acid dyes"], answer:1},
  {q:"91. A high degree of polymerization usually means:", options:["Lower mechanical strength","Higher molecular weight & often improved strength","More smell","Lower melting point"], answer:1},
  {q:"92. Staple length influences yarn quality by affecting:", options:["Evenness, strength and spinnability","Only color","Only shrinkage","Only luster"], answer:0},
  {q:"93. Which fibre cross-section gives silk its natural sheen?", options:["Triangular silk cross-section","Round hollow","Multi-lobal polyester","Irregular jute"], answer:0},
  {q:"94. Polymer crystallinity tends to increase:", options:["Dye uptake always","Tensile strength and modulus","Moisture regain","pH"], answer:1},
  {q:"95. Which fibre is commonly used as a substitute for wool in low-cost warm garments?", options:["Acrylic","Silk","Jute","Viscose"], answer:0},
  {q:"96. Which process converts cellulose xanthate to regenerated cellulose in viscose?", options:["Acid coagulation (sulfuric acid bath) to regenerate viscose","High-temp melting","UV treatment","Enzymatic digestion"], answer:0},
  {q:"97. Which fibre will float in water (density < 1)?", options:["Most natural cellulosic (cotton)","Polypropylene (some types have density <1)","Silk","Viscose"], answer:1},
  {q:"98. Which is a common test to identify synthetic polyester visually?", options:["Burn test (melts, smells like sweet chemical)","Solubility in hot water","Reaction with alkaline enzymes","Acid carbonization"], answer:0},
  {q:"99. Which fiber has good resilience and spring-back because of crimp?", options:["Wool (crimped)","Silk (smooth)","Viscose (flat)","Polyester (if textured)"], answer:0},
  {q:"100. A fibre with high orientation and crystallinity will likely show:", options:["High extensibility","High tensile strength and low elongation","Poor dimensional stability","High water absorption"], answer:1}
];

// render quiz
const quizEl = document.getElementById('quiz');
const userAnswers = new Array(questions.length).fill(null);

function makeQuestionCard(qObj, idx){
  const card = document.createElement('section');
  card.className = 'card';
  const meta = document.createElement('div');
  meta.className = 'qmeta';
  meta.innerHTML = `<div class="qnum">Q${idx+1}</div><div class="qtxt">${qObj.q}</div>`;
  card.appendChild(meta);

  const opts = document.createElement('div');
  opts.className = 'options';
  qObj.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.setAttribute('data-q', idx);
    btn.setAttribute('data-opt', i);
    btn.addEventListener('click', onOptionClick);
    opts.appendChild(btn);
  });

  card.appendChild(opts);
  return card;
}

function onOptionClick(e){
  const btn = e.currentTarget;
  const qIndex = Number(btn.getAttribute('data-q'));
  const optIndex = Number(btn.getAttribute('data-opt'));

  // if already answered, ignore
  if(userAnswers[qIndex] !== null) return;

  const correct = questions[qIndex].answer;
  const optionButtons = btn.parentElement.querySelectorAll('.option-btn');

  // lock all options for this question
  optionButtons.forEach(b=>{
    b.classList.add('locked');
    b.disabled = true;
  });

  if(optIndex === correct){
    btn.classList.add('correct');
    userAnswers[qIndex] = 1;
  } else {
    btn.classList.add('wrong');
    // highlight correct
    const correctBtn = btn.parentElement.querySelector(`.option-btn[data-opt="${correct}"]`);
    if(correctBtn) correctBtn.classList.add('correct');
    userAnswers[qIndex] = 0;
  }
}

function renderAll(){
  const fragment = document.createDocumentFragment();
  questions.forEach((q,i)=>{
    fragment.appendChild(makeQuestionCard(q,i));
  });
  quizEl.appendChild(fragment);
}

document.getElementById('finalSubmit').addEventListener('click', ()=>{
  // Check all answered?
  const answeredCount = userAnswers.filter(x=>x!==null).length;
  if(answeredCount < questions.length){
    if(!confirm(`You have answered ${answeredCount} out of ${questions.length}. Submit anyway?`)) return;
  }
  const score = userAnswers.reduce((s,v)=> s + (v===1?1:0), 0);
  const percent = ((score / questions.length) * 100).toFixed(1);
  const resultEl = document.getElementById('result');
  resultEl.innerHTML = `Score: ${score} / ${questions.length} — ${percent}%`;
  // visually show score summary highlight: show green border for good, else amber/red
  if(percent >= 80) resultEl.style.color = 'lightgreen';
  else if(percent >= 50) resultEl.style.color = 'khaki';
  else resultEl.style.color = '#f87171';
  // scroll to result
  resultEl.scrollIntoView({behavior:'smooth', block:'center'});
});

document.getElementById('scrollTop').addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

renderAll();
